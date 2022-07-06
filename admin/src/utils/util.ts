/**
 * 工具方法
 * 请谨慎操作，影响全局
 */
import { isObject } from '@vue/shared'


/**
 * @author Jason
 * @description 添加单位
 * @param {String | Number} value 值 100
 * @param {String} unit 单位 px em rem
 */
export const addUnit = (value: string | number, unit = 'px') => {
    return !Object.is(Number(value), NaN) ? `${value}${unit}` : value
}

/**
 * @author Jason
 * @description 添加单位
 * @param {unknown} value 
 * @return {Boolean} 
 */
export const isEmpty = (value: unknown) => {
    return value !== null && value !== '' && typeof (value) !== 'undefined'
}


/**
 * 深拷贝
 * @param {any} target 需要深拷贝的对象
 * @returns {Object}
 */
export function deepClone(target: any) {
    if (typeof target !== 'object' || target === null) {
        return target
    }

    const cloneResult: any = Array.isArray(target) ? [] : {}

    for (const key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
            const value = target[key]

            if (typeof value === 'object' && value !== null) {
                cloneResult[key] = deepClone(value)
            } else {
                cloneResult[key] = value
            }
        }
    }

    return cloneResult
}

/**
 * 过滤对象属性
 * @param { Object } target
 * @param { Array } filters
 * @return { Object } 过滤后的对象
 */
export function filterObject(target: any, filters: any[]) {
    const _target = deepClone(target)
    filters.map(key => delete _target[key])
    return _target
}

/**
 * 节流
 * @param { Function } func
 * @param { Number } time
 * @param context
 * @return { Function }
 */
export function throttle(func: () => any, time = 1000, context?: any): any {
    let previous = new Date(0).getTime()
    return function (...args: []) {
        const now = new Date().getTime()
        if (now - previous > time) {
            previous = now
            return func.apply(context, args)
        }
    }
}

/**
 * Query语法格式化为对象
 * @param { String } str
 * @return { Object }
 */
export function queryToObject(str: string) {
    const params: any = {}
    for (const item of str.split('&')) {
        params[item.split('=')[0]] = item.split('=')[1]
    }
    return params
}


/**
 * @description对象格式化为Query语法
 * @param { Object } params
 * @return {string} Query语法
 */
export function objectToQuery(params: Record<string, any>): string {
    let query = ''
    for (const props of Object.keys(params)) {
        const value = params[props];
        var part = encodeURIComponent(props) + '='
        if (isEmpty(value)) {
            if (isObject(value)) {
                for (const key of Object.keys(value)) {
                    if (isEmpty(value[key])) {
                        let params = props + '[' + key + ']'
                        var subPart = encodeURIComponent(params) + '='
                        query += subPart + encodeURIComponent(value[key]) + '&'
                    }
                }
            } else {
                query += part + encodeURIComponent(value) + '&'
            }
        }
    }
    return query.slice(0, -1)
}


/**
 * @description 获取不重复的id
 * @param length { Number } id的长度
 * @return { String } id
 */
export const getNonDuplicateID = (length = 8) => {
    let idStr = Date.now().toString(36)
    idStr += Math.random().toString(36).substr(3, length)
    return idStr
}

/**
 * @description 时间格式化
 * @param dateTime { number } 时间戳
 * @param fmt { string } 时间格式
 * @return { string }
 */
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
export const timeFormat = (dateTime: number, fmt = 'yyyy-mm-dd') => {
    // 如果为null,则格式化当前时间
    if (!dateTime) {
        dateTime = Number(new Date())
    }
    // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
    if (dateTime.toString().length == 10) {
        dateTime *= 1000
    }
    const date = new Date(dateTime)
    let ret
    const opt: any = {
        'y+': date.getFullYear().toString(), // 年
        'm+': (date.getMonth() + 1).toString(), // 月
        'd+': date.getDate().toString(), // 日
        'h+': date.getHours().toString(), // 时
        'M+': date.getMinutes().toString(), // 分
        's+': date.getSeconds().toString() // 秒
    }
    for (const k in opt) {
        ret = new RegExp('(' + k + ')').exec(fmt)
        if (ret) {
            fmt = fmt.replace(
                ret[1],
                ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0')
            )
        }
    }
    return fmt
}

/**
 * @description 树状数组扁平化
 * @param { Array } tree        树状结构数组
 * @param { Array } arr         扁平化后的数组
 * @param { String } childrenKey 子节点键名
 * @return { Array }            扁平化后的数组
 */
export function flatten(tree = [], arr = [], childrenKey = 'children') {
    tree.forEach((item) => {
        const children = item[childrenKey]
        arr.push(item)
        if (children) flatten(children, arr, childrenKey)
    })
    return arr
}

/**
 * @description 复制到剪切板
 * @param value { String } 复制内容
 * @return { Promise } resolve | reject
 */
export const copyClipboard = (value: string) => {
    const elInput = document.createElement('input')

    elInput.setAttribute('value', value)
    document.body.appendChild(elInput)
    elInput.select()

    try {
        if (document.execCommand('copy')) {
            return Promise.resolve()
        }
        throw new Error()
    } catch (err) {
        return Promise.reject(err)
    } finally {
        document.body.removeChild(elInput)
    }
}


/**
 * @description 获取正确的路经
 * @param {String} path  数据
 */
export function getNormalPath(path: string) {
    if (path.length === 0 || !path || path == 'undefined') {
        return path
    }
    let newPath = path.replace('//', '/')
    const length = newPath.length
    if (newPath[length - 1] === '/') {
        return newPath.slice(0, length - 1)
    }
    return newPath
}

/**
 * @description 树转数组，队列实现广度优先遍历
 * @param {Array} data  数据
 * @param {Object} props `{ children: 'children' }`
 */

export const treeToArray = (data: any[], props = { children: 'children' }) => {
    data = JSON.parse(JSON.stringify(data))
    const { children } = props
    const newData = []
    const queue: any[] = []
    data.forEach((child: any) => queue.push(child))
    while (queue.length) {
        const item: any = queue.shift()
        if (item[children]) {
            item[children].forEach((child: any) => queue.push(child))
            delete item[children]
        }
        newData.push(item)
    }
    return newData
}
