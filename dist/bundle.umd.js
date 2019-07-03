(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.SumFloat = {}));
}(this, function (exports) { 'use strict';

  function DecimalPart(num1) {
    var num2 = void 0;
    if (typeof num1 === 'string') {
      num2 = parseFloat(num1);
    } else if (typeof num1 === 'number') {
      num2 = num1;
    } else {
      throw Error('param must can cast to number: ' + num1);
    }
    if (isNaN(num2)) {
      throw Error('param must can cast to number: ' + num1);
    }
    var part2 = (num2 + '').split('.')[1];
    return part2 ? part2.length : 0;
  }

  function SumFloat(aa1, bb1) {
    var len1 = DecimalPart(aa1);
    var len2 = DecimalPart(bb1);
    var len3 = Math.max(len1, len2);
    if (len3) {
      var cc1 = Math.pow(10, len3);
      return (aa1 * cc1 + bb1 * cc1) / cc1;
    } else {
      return aa1 - 0 + (bb1 - 0);
    }
  }

  exports.DecimalPart = DecimalPart;
  exports.SumFloat = SumFloat;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
