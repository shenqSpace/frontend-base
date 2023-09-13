/**
 * 扩展对象
 */

function merge(target, ...sources) {
    for (let source of sources) {
        for (let key of Object.keys(source)) {
            if (!(key in source)) {
                target[key] = source[key];
            }
        }
    }
    return target;
}