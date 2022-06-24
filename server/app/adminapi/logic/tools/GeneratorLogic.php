<?php
// +----------------------------------------------------------------------
// | likeadmin快速开发前后端分离管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/likeshop_gitee/likeadmin
// | github下载：https://github.com/likeshop-github/likeadmin
// | 访问官网：https://www.likeadmin.cn
// | likeadmin团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeadminTeam
// +----------------------------------------------------------------------

namespace app\adminapi\logic\tools;

use app\common\enum\GeneratorEnum;
use app\common\logic\BaseLogic;
use app\common\model\tools\GenerateColumn;
use app\common\model\tools\GenerateTable;
use app\common\service\generator\GenerateService;
use think\facade\Db;


/**
 * 生成器逻辑
 * Class GeneratorLogic
 * @package app\adminapi\logic\tools
 */
class GeneratorLogic extends BaseLogic
{

    /**
     * @notes 表详情
     * @param $params
     * @return array
     * @author 段誉
     * @date 2022/6/20 10:45
     */
    public static function getTableDetail($params): array
    {
        return GenerateTable::with('table_column')
            ->findOrEmpty((int)$params['id'])
            ->toArray();
    }


    /**
     * @notes 选择数据表
     * @param $params
     * @param $adminId
     * @return bool
     * @author 段誉
     * @date 2022/6/20 10:44
     */
    public static function selectTable($params, $adminId)
    {
        Db::startTrans();
        try {
            foreach ($params['table'] as $item) {
                // 添加主表基础信息
                $generateTable = self::initTable($item, $adminId);
                // 获取数据表字段信息
                $column = self::getTableColumn($item['name']);
                // 添加表字段信息
                self::initTableColumn($column, $generateTable['id']);
            }
            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            self::$error = $e->getMessage();
            return false;
        }
    }


    /**
     * @notes 编辑表信息
     * @param $params
     * @return bool
     * @author 段誉
     * @date 2022/6/20 10:44
     */
    public static function editTable($params)
    {
        Db::startTrans();
        try {
            // 更新主表-数据表信息
            GenerateTable::update([
                'id' => $params['id'],
                'table_name' => $params['table_name'],
                'table_comment' => $params['table_comment'],
                'template_type' => $params['template_type'],
                'author' => $params['author'] ?? '',
                'remark' => $params['remark'] ?? '',
                'generate_type' => $params['generate_type'],
                'module_name' => $params['module_name'],
                'class_dir' => $params['class_dir'] ?? '',
                'class_comment' => $params['class_comment'] ?? '',
            ]);

            // 更新从表-数据表字段信息
            foreach ($params['table_column'] as $item) {
                GenerateColumn::update([
                    'id' => $item['id'],
                    'column_comment' => $item['column_comment'] ?? '',
                    'is_null' => $item['is_null'] ?? 0,
                    'is_insert' => $item['is_insert'] ?? 0,
                    'is_update' => $item['is_update'] ?? 0,
                    'is_lists' => $item['is_lists'] ?? 0,
                    'is_query' => $item['is_query'] ?? 0,
                    'query_type' => $item['query_type'],
                    'view_type' => $item['view_type'],
                    'dict_type' => $item['dict_type'] ?? '',
                ]);
            }
            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            self::$error = $e->getMessage();
            return false;
        }
    }


    /**
     * @notes 删除表相关信息
     * @param $params
     * @return bool
     * @author 段誉
     * @date 2022/6/16 9:30
     */
    public static function deleteTable($params)
    {
        Db::startTrans();
        try {
            GenerateTable::whereIn('id', $params['id'])->delete();
            GenerateColumn::whereIn('table_id', $params['id'])->delete();
            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            self::$error = $e->getMessage();
            return false;
        }
    }


    /**
     * @notes 同步表字段
     * @param $params
     * @return bool
     * @author 段誉
     * @date 2022/6/23 16:28
     */
    public static function syncColumn($params)
    {
        Db::startTrans();
        try {
            // table 信息
            $table = GenerateTable::findOrEmpty($params['id']);
            // 删除旧字段
            GenerateColumn::whereIn('table_id', $table['id'])->delete();
            // 获取当前数据表字段信息
            $column = self::getTableColumn($table['table_name']);
            // 创建新字段数据
            self::initTableColumn($column, $table['id']);

            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            self::$error = $e->getMessage();
            return false;
        }
    }


    /**
     * @notes 生成代码
     * @param $params
     * @return false|int[]
     * @author 段誉
     * @date 2022/6/24 9:43
     */
    public static function generate($params)
    {
        try {
            // 获取数据表信息
            $tables = GenerateTable::with(['table_column'])
                ->whereIn('id', $params['id'])
                ->select()->toArray();

            $generator = app()->make(GenerateService::class);
            $generator->delGenerateDirContent();
            $flag = array_unique(array_column($tables, 'table_name'));
            $flag = implode(',', $flag);
            $generator->setGenerateFlag(md5($flag . time()), false);

            // 循环生成
            foreach ($tables as $table) {
                $generator->generate($table);
            }

            $zipFile = '';
            // 生成压缩包
            if ($generator->getGenerateFlag()) {
                $generator->zipFile();
                $generator->delGenerateFlag();
                $zipFile = $generator->getZipTempName();
            }
            return ['file' => $zipFile];
        } catch (\Exception $e) {
            self::$error = $e->getMessage();
            return false;
        }
    }


    /**
     * @notes 预览
     * @param $params
     * @return false
     * @author 段誉
     * @date 2022/6/23 16:27
     */
    public static function preview($params)
    {
        try {
            // 获取数据表信息
            $table = GenerateTable::with(['table_column'])
                ->whereIn('id', $params['id'])
                ->findOrEmpty()->toArray();

            $generateService = app()->make(GenerateService::class);
            return $generateService->preview($table);

        } catch (\Exception $e) {
            self::$error = $e->getMessage();
            return false;
        }
    }


    /**
     * @notes 获取表字段信息
     * @param $tableName
     * @return array
     * @author 段誉
     * @date 2022/6/23 16:28
     */
    public static function getTableColumn($tableName)
    {
        $tablePrefix = config('database.connections.mysql.prefix');
        $tableName = str_replace($tablePrefix, '', $tableName);
        return Db::name($tableName)->getFields();
    }


    /**
     * @notes 初始化代码生成数据表信息
     * @param $tableData
     * @param $adminId
     * @return GenerateTable|\think\Model
     * @author 段誉
     * @date 2022/6/23 16:28
     */
    public static function initTable($tableData, $adminId)
    {
        return GenerateTable::create([
            'table_name' => $tableData['name'],
            'table_comment' => $tableData['comment'],
            'template_type' => GeneratorEnum::TEMPLATE_TYPE_SINGLE,
            'generate_type' => GeneratorEnum::GENERATE_TYPE_ZIP,
            'module_name' => 'adminapi',
            'admin_id' => $adminId
        ]);
    }


    /**
     * @notes 初始化代码生成字段信息
     * @param $column
     * @param $tableId
     * @throws \Exception
     * @author 段誉
     * @date 2022/6/23 16:28
     */
    public static function initTableColumn($column, $tableId)
    {
        $defaultColumn = ['id', 'create_time', 'update_time', 'delete_time'];

        $insertColumn = [];
        foreach ($column as $value) {
            $columnData = [
                'table_id' => $tableId,
                'column_name' => $value['name'],
                'column_comment' => $value['comment'],
                'column_type' => getDbFieldType($value['type']),
                'is_null' => $value['notnull'] ? 0 : 1,
                'is_pk' => $value['primary'] ? 1 : 0,
            ];
            if (!in_array($value['name'], $defaultColumn)) {
                $columnData['is_insert'] = 1;
                $columnData['is_update'] = 1;
                $columnData['is_lists'] = 1;
                $columnData['is_query'] = 1;
            }
            $insertColumn[] = $columnData;
        }
        (new GenerateColumn())->saveAll($insertColumn);
    }


    /**
     * @notes 下载文件
     * @param $fileName
     * @return false|string
     * @author 段誉
     * @date 2022/6/24 9:51
     */
    public static function download(string $fileName)
    {
        $path = root_path() . 'runtime/generate/' . $fileName;
        return file_exists($path) ? $path : false;
    }


}