"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraySplit = void 0;
function arraySplit(array, group) {
    if (group === void 0) { group = 1; }
    if (!(typeof array === 'object' && array instanceof Array)) {
        throw new TypeError('arraySplit: parameter 0 musts to be an array');
    }
    var newArray = [];
    group = !isNaN(group) && group >= 1 ? group : 1;
    for (var i = 0; i < array.length; i += group) {
        if (typeof undefined === typeof array[i]) {
            continue;
        }
        var currentArray = [];
        for (var n = i; n < group + i; n++) {
            if (typeof undefined !== typeof array[n]) {
                currentArray.push(array[n]);
            }
        }
        newArray.push(currentArray);
    }
    return newArray;
}
exports.arraySplit = arraySplit;
//# sourceMappingURL=index.js.map