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

declare(strict_types=1);

namespace app\common\service\generator\core;


/**
 * vue-edit生成器
 * Class VueEditGenerator
 * @package app\common\service\generator\core
 */
class VueEditGenerator extends BaseGenerator implements GenerateInterface
{

    /**
     * @notes 替换变量
     * @return mixed|void
     * @author 段誉
     * @date 2022/6/22 18:19
     */
    public function replaceVariables()
    {
        // 需要替换的变量
        $needReplace = [
            '{FORM_VIEW}',
            '{UPPER_CAMEL_NAME}',
            '{DICT_DATA}',
            '{DICT_DATA_API}',
            '{FORM_DATA}',
            '{FORM_VALIDATE}',
            '{TABLE_COMMENT}',
            '{PK}',
        ];

        // 等待替换的内容
        $waitReplace = [
            $this->getFormViewContent(),
            $this->getUpperCamelName(),
            $this->getDictDataContent(),
            $this->getDictDataApiContent(),
            $this->getFormDataContent(),
            $this->getFormValidateContent(),
            $this->tableData['table_comment'],
            $this->getPkContent()
        ];
        $templatePath = $this->getTemplatePath('vue_edit');

        // 替换内容
        $content = $this->replaceFileData($needReplace, $waitReplace, $templatePath);

        $this->setContent($content);
    }


    /**
     * @notes 获取表单内容
     * @return string
     * @author 段誉
     * @date 2022/6/23 11:57
     */
    public function getFormViewContent()
    {
        $content = '';
        foreach ($this->tableColumn as $column) {
            if (!$column['is_insert'] || !$column['is_update'] || $column['is_pk']) {
                continue;
            }

            $needReplace = [
                '{COLUMN_COMMENT}',
                '{COLUMN_NAME}',
                '{DICT_TYPE}',
            ];
            $waitReplace = [
                $column['column_comment'],
                $column['column_name'],
                $column['dict_type'],
            ];
            $templatePath = $this->getTemplatePath('form_item/' . $column['view_type']);
            if (!file_exists($templatePath)) {
                continue;
            }
            $content .= $this->replaceFileData($needReplace, $waitReplace, $templatePath) . PHP_EOL;
        }

        if (!empty($content)) {
            $content = substr($content, 0, -1);
        }

        $content = $this->setBlankSpace($content, '                ');
        return $content;
    }


    /**
     * @notes 获取字典数据内容
     * @return string
     * @author 段誉
     * @date 2022/6/23 11:58
     */
    public function getDictDataContent()
    {
        $content = '';
        $isExist = [];
        foreach ($this->tableColumn as $column) {
            if (empty($column['dict_type']) || $column['is_pk']) {
                continue;
            }
            if (in_array($column['dict_type'], $isExist)) {
                continue;
            }
            $content .= $column['dict_type'] . ':' . "[]," . PHP_EOL;
            $isExist[] = $column['dict_type'];
        }
        if (!empty($content)) {
            $content = substr($content, 0, -1);
        }
        return $this->setBlankSpace($content, '    ');
    }


    /**
     * @notes 获取字典数据api内容
     * @return false|string
     * @author 段誉
     * @date 2022/6/23 11:58
     */
    public function getDictDataApiContent()
    {
        $content = '';
        $isExist = [];
        foreach ($this->tableColumn as $column) {
            if (empty($column['dict_type']) || $column['is_pk']) {
                continue;
            }
            if (in_array($column['dict_type'], $isExist)) {
                continue;
            }
            $needReplace = [
                '{UPPER_CAMEL_NAME}',
                '{DICT_TYPE}',
            ];
            $waitReplace = [
                $this->getUpperCamelName(),
                $column['dict_type'],
            ];
            $templatePath = $this->getTemplatePath('other_item/dictDataApi');
            if (!file_exists($templatePath)) {
                continue;
            }
            $content .= $this->replaceFileData($needReplace, $waitReplace, $templatePath) . ',' . PHP_EOL;

            $isExist[] = $column['dict_type'];
        }
        $content = substr($content, 0, -2);
        return $content;
    }


    /**
     * @notes 获取表单默认字段内容
     * @return string
     * @author 段誉
     * @date 2022/6/23 15:15
     */
    public function getFormDataContent()
    {
        $content = '';
        $isExist = [];
        foreach ($this->tableColumn as $column) {
            if (!$column['is_insert'] || !$column['is_update'] || $column['is_pk']) {
                continue;
            }
            if (in_array($column['column_name'], $isExist)) {
                continue;
            }
            $content .= $column['column_name'] . ':' . "''," . PHP_EOL;
            $isExist[] = $column['column_name'];
        }
        if (!empty($content)) {
            $content = substr($content, 0, -1);
        }
        return $this->setBlankSpace($content, '    ');
    }


    /**
     * @notes 表单验证内容
     * @return false|string
     * @author 段誉
     * @date 2022/6/23 15:16
     */
    public function getFormValidateContent()
    {
        $content = '';
        $isExist = [];
        $specDictType = ['input', 'textarea', 'editor'];

        foreach ($this->tableColumn as $column) {
            if (!$column['is_insert'] || !$column['is_update'] || $column['is_pk']) {
                continue;
            }
            if (in_array($column['column_name'], $isExist)) {
                continue;
            }

            $validateMsg = in_array($column['view_type'], $specDictType) ? '请输入' : '请选择';
            $validateMsg .= $column['column_comment'];

            $needReplace = [
                '{COLUMN_NAME}',
                '{VALIDATE_MSG}',
            ];
            $waitReplace = [
                $column['column_name'],
                $validateMsg,
            ];
            $templatePath = $this->getTemplatePath('other_item/formValidate');
            if (!file_exists($templatePath)) {
                continue;
            }

            $content .= $this->replaceFileData($needReplace, $waitReplace, $templatePath) . PHP_EOL;

            $isExist[] = $column['column_name'];
        }
        $content = substr($content, 0, -1);
        return $content;
    }


    /**
     * @notes 获取文件生成到模块的文件夹路径
     * @return mixed|void
     * @author 段誉
     * @date 2022/6/22 18:19
     */
    public function getModuleGenerateDir()
    {
        $moduleName = str_replace('api', '', $this->moduleName);
        $dir = dirname(app()->getRootPath()) . '/admin/src/views/' . $moduleName . '/';
        $this->checkDir($dir);
        return $dir;
    }


    /**
     * @notes 获取文件生成到runtime的文件夹路径
     * @return string
     * @author 段誉
     * @date 2022/6/22 18:20
     */
    public function getRuntimeGenerateDir()
    {
        $moduleName = str_replace('api', '', $this->moduleName);
        $dir = $this->generatorDir . 'vue/src/views/' . $moduleName . '/';
        $this->checkDir($dir);
        return $dir;
    }


    /**
     * @notes 生成的文件名
     * @return string
     * @author 段誉
     * @date 2022/6/22 18:20
     */
    public function getGenerateName()
    {
        return 'edit.vue';
    }


    /**
     * @notes 文件信息
     * @return array
     * @author 段誉
     * @date 2022/6/23 15:57
     */
    public function fileInfo(): array
    {
        return [
            'name' => $this->getGenerateName(),
            'type' => 'vue',
            'content' => $this->content
        ];
    }


}