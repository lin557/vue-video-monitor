module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "007b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0ca9");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("da979be6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0334":
/***/ (function(module, exports) {

module.exports = require("video.js");

/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("59ed");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aCallable(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var hasOwn = __webpack_require__("1a2d");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "07fa":
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__("50c4");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "0b42":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("e8b5");
var isConstructor = __webpack_require__("68ee");
var isObject = __webpack_require__("861d");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "0ca9":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*! @name videojs-contextmenu-pt @version 5.4.1 @license Apache-2.0 */.vjs-contextmenu-ui-menu{position:absolute}.vjs-contextmenu-ui-menu .vjs-menu-content{background-color:#2b333f;background-color:rgba(43,51,63,.7);border-radius:.3em;padding:.25em}.vjs-contextmenu-ui-menu .vjs-menu-item{border-radius:.3em;cursor:pointer;margin:0 0 1px;padding:.5em 1em;font-size:1em;line-height:1.2;text-transform:none}.vjs-contextmenu-ui-menu .vjs-menu-item:active,.vjs-contextmenu-ui-menu .vjs-menu-item:hover{background-color:rgba(0,0,0,.5);text-shadow:0 0 1em #fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0d51":
/***/ (function(module, exports) {

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "107c":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "1148":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__("5926");
var toString = __webpack_require__("577e");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "1276":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var isRegExp = __webpack_require__("44e7");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var speciesConstructor = __webpack_require__("4840");
var advanceStringIndex = __webpack_require__("8aa5");
var toLength = __webpack_require__("50c4");
var toString = __webpack_require__("577e");
var getMethod = __webpack_require__("dc4a");
var callRegExpExec = __webpack_require__("14c3");
var regexpExec = __webpack_require__("9263");
var stickyHelpers = __webpack_require__("9f7f");
var fails = __webpack_require__("d039");

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? splitter.call(separator, O, limit)
        : internalSplit.call(toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? S.slice(q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isCallable = __webpack_require__("1626");
var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = exec.call(R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return regexpExec.call(R, S);
  throw TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var DOMTokenListPrototype = __webpack_require__("785a");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "1626":
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument === 'function';
};


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "1a2d":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("7b0b");

var hasOwnProperty = {}.hasOwnProperty;

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "37d8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_video_monitor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d75f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_video_monitor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_video_monitor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");

module.exports = function (argument) {
  if (typeof argument === 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),

/***/ "408a":
/***/ (function(module, exports) {

var valueOf = 1.0.valueOf;

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  return valueOf.call(value);
};


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "4573":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*! @name videojs-fetch-flv @version 1.0.10 @license MIT */.video-js.vjs-fetch-flv{display:block}.video-js.vjs-fetch-flv .vjs-fetch-flv-ctx{position:absolute;opacity:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:50px;display:flex;justify-content:space-between;align-items:center;padding:5px;margin:5px}.video-js.vjs-fetch-flv .vjs-fetch-flv-ctx span:first-child{font-family:Tahoma,Arial,Helvetica,sans-serif;font-size:12px;text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0}.video-js.vjs-fetch-flv .vjs-fetch-flv-ctx span:last-child{text-shadow:#fff 1px 0 0,#fff 0 1px 0,#fff -1px 0 0,#fff 0 -1px 0}.video-js.vjs-fetch-flv .vjs-fetch-flv-ctx-hide{visibility:hidden;opacity:0}.video-js.vjs-fetch-flv .vjs-fetch-flv-control,.video-js.vjs-fetch-flv .vjs-fetch-flv-icon{font-family:VideoJs}.video-js.vjs-fetch-flv .vjs-fetch-flv-icon:before{content:\"\\f111\";font-size:14px;color:red}.video-js.vjs-fetch-flv .vjs-fetch-flv-control:before{display:block;content:\"\\f111\";font-size:1.5em}.video-js.vjs-fetch-flv .vjs-fetch-flv-fetching:before{color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "480f":
/***/ (function(module, exports) {

module.exports = require("flv.js");

/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aConstructor = __webpack_require__("5087");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ "485a":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = fn.call(input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4bcc":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b0c0f");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("600f9d43", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "5087":
/***/ (function(module, exports, __webpack_require__) {

var isConstructor = __webpack_require__("68ee");
var tryToString = __webpack_require__("0d51");

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.18.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "577e":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var toString = __webpack_require__("577e");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5926":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ "59ed":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var tryToString = __webpack_require__("0d51");

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5e77":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var hasOwn = __webpack_require__("1a2d");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "6358":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4573");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("22af05ce", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");
var toString = __webpack_require__("577e");
var requireObjectCoercible = __webpack_require__("1d80");

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__("0b42");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "68ee":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var classof = __webpack_require__("f5df");
var getBuiltIn = __webpack_require__("d066");
var inspectSource = __webpack_require__("8925");

var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = constructorRegExp.exec;
var INCORRECT_TO_STRING = !constructorRegExp.exec(function () { /* empty */ });

var isConstructorModern = function (argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(Object, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function (argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
    // we can't check .prototype since constructors produced by .bind haven't it
  } return INCORRECT_TO_STRING || !!exec.call(constructorRegExp, inspectSource(argument));
};

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var hasOwn = __webpack_require__("1a2d");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");
var hasOwn = __webpack_require__("1a2d");
var createNonEnumerableProperty = __webpack_require__("9112");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("5e77").CONFIGURABLE;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "785a":
/***/ (function(module, exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__("cc12");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "81d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__("7b0b");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = lengthOfArrayLike(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "861d":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "9063":
/***/ (function(module, exports) {

module.exports = require("videojs-fetch-flv");

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var toString = __webpack_require__("577e");
var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");
var shared = __webpack_require__("5692");
var create = __webpack_require__("7c73");
var getInternalState = __webpack_require__("69f3").get;
var UNSUPPORTED_DOT_ALL = __webpack_require__("fce3");
var UNSUPPORTED_NCG = __webpack_require__("107c");

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  // eslint-disable-next-line max-statements -- TODO
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = patchedExec.call(raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = str.slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str.charAt(re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9767":
/***/ (function(module, exports) {

module.exports = require("videojs-flvjs-es6");

/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPropertyKey = __webpack_require__("a04b");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

exports.UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "9ff9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("fd6f");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("4b313bc4", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "a04b":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("c04e");
var isSymbol = __webpack_require__("d9b5");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : String(key);
};


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var hasOwn = __webpack_require__("1a2d");
var inheritIfRequired = __webpack_require__("7156");
var isSymbol = __webpack_require__("d9b5");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var thisNumberValue = __webpack_require__("408a");
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue === 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw TypeError('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
    var dummy = this;
    // check on 1..constructor(foo) case
    return dummy instanceof NumberWrapper && fails(function () { thisNumberValue(dummy); })
      ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn(NativeNumber, key = keys[j]) && !hasOwn(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var FUNCTION_NAME_EXISTS = __webpack_require__("5e77").EXISTS;
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b0c0f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.video-js .vjs-modal-dialog,.vjs-button>.vjs-icon-placeholder:before,.vjs-modal-dialog .vjs-modal-dialog-content{position:absolute;top:0;left:0;width:100%;height:100%}.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.vjs-button>.vjs-icon-placeholder:before{text-align:center}@font-face{font-family:VideoJS;src:url(data:application/font-woff;charset=utf-8;base64,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) format(\"woff\");font-weight:400;font-style:normal}.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.video-js .vjs-play-control .vjs-icon-placeholder,.vjs-icon-play{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.video-js .vjs-play-control .vjs-icon-placeholder:before,.vjs-icon-play:before{content:\"\\f101\"}.vjs-icon-play-circle{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-play-circle:before{content:\"\\f102\"}.video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder,.vjs-icon-pause{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder:before,.vjs-icon-pause:before{content:\"\\f103\"}.video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder,.vjs-icon-volume-mute{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder:before,.vjs-icon-volume-mute:before{content:\"\\f104\"}.video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder,.vjs-icon-volume-low{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder:before,.vjs-icon-volume-low:before{content:\"\\f105\"}.video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder,.vjs-icon-volume-mid{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder:before,.vjs-icon-volume-mid:before{content:\"\\f106\"}.video-js .vjs-mute-control .vjs-icon-placeholder,.vjs-icon-volume-high{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-mute-control .vjs-icon-placeholder:before,.vjs-icon-volume-high:before{content:\"\\f107\"}.video-js .vjs-fullscreen-control .vjs-icon-placeholder,.vjs-icon-fullscreen-enter{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-fullscreen-control .vjs-icon-placeholder:before,.vjs-icon-fullscreen-enter:before{content:\"\\f108\"}.video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder,.vjs-icon-fullscreen-exit{font-family:VideoJS;font-weight:400;font-style:normal}.video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder:before,.vjs-icon-fullscreen-exit:before{content:\"\\f109\"}.vjs-icon-square{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-square:before{content:\"\\f10a\"}.vjs-icon-spinner{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-spinner:before{content:\"\\f10b\"}.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js .vjs-subs-caps-button .vjs-icon-placeholder,.video-js .vjs-subtitles-button .vjs-icon-placeholder,.vjs-icon-subtitles{font-family:VideoJS;font-weight:400;font-style:normal}.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js .vjs-subtitles-button .vjs-icon-placeholder:before,.vjs-icon-subtitles:before{content:\"\\f10c\"}.video-js .vjs-captions-button .vjs-icon-placeholder,.video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder,.vjs-icon-captions{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-captions-button .vjs-icon-placeholder:before,.video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder:before,.vjs-icon-captions:before{content:\"\\f10d\"}.video-js .vjs-chapters-button .vjs-icon-placeholder,.vjs-icon-chapters{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-chapters-button .vjs-icon-placeholder:before,.vjs-icon-chapters:before{content:\"\\f10e\"}.vjs-icon-share{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-share:before{content:\"\\f10f\"}.vjs-icon-cog{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-cog:before{content:\"\\f110\"}.video-js .vjs-play-progress,.video-js .vjs-volume-level,.vjs-icon-circle,.vjs-seek-to-live-control .vjs-icon-placeholder{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-play-progress:before,.video-js .vjs-volume-level:before,.vjs-icon-circle:before,.vjs-seek-to-live-control .vjs-icon-placeholder:before{content:\"\\f111\"}.vjs-icon-circle-outline{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-circle-outline:before{content:\"\\f112\"}.vjs-icon-circle-inner-circle{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-circle-inner-circle:before{content:\"\\f113\"}.vjs-icon-hd{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-hd:before{content:\"\\f114\"}.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder,.vjs-icon-cancel{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before,.vjs-icon-cancel:before{content:\"\\f115\"}.video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder,.vjs-icon-replay{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder:before,.vjs-icon-replay:before{content:\"\\f116\"}.vjs-icon-facebook{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-facebook:before{content:\"\\f117\"}.vjs-icon-gplus{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-gplus:before{content:\"\\f118\"}.vjs-icon-linkedin{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-linkedin:before{content:\"\\f119\"}.vjs-icon-twitter{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-twitter:before{content:\"\\f11a\"}.vjs-icon-tumblr{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-tumblr:before{content:\"\\f11b\"}.vjs-icon-pinterest{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-pinterest:before{content:\"\\f11c\"}.video-js .vjs-descriptions-button .vjs-icon-placeholder,.vjs-icon-audio-description{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-descriptions-button .vjs-icon-placeholder:before,.vjs-icon-audio-description:before{content:\"\\f11d\"}.video-js .vjs-audio-button .vjs-icon-placeholder,.vjs-icon-audio{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-audio-button .vjs-icon-placeholder:before,.vjs-icon-audio:before{content:\"\\f11e\"}.vjs-icon-next-item{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-next-item:before{content:\"\\f11f\"}.vjs-icon-previous-item{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-previous-item:before{content:\"\\f120\"}.video-js .vjs-picture-in-picture-control .vjs-icon-placeholder,.vjs-icon-picture-in-picture-enter{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-picture-in-picture-control .vjs-icon-placeholder:before,.vjs-icon-picture-in-picture-enter:before{content:\"\\f121\"}.video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder,.vjs-icon-picture-in-picture-exit{font-family:VideoJS;font-weight:400;font-style:normal}.video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder:before,.vjs-icon-picture-in-picture-exit:before{content:\"\\f122\"}.video-js{display:block;vertical-align:top;box-sizing:border-box;color:#fff;background-color:#000;position:relative;padding:0;font-size:10px;line-height:1;font-weight:400;font-style:normal;font-family:Arial,Helvetica,sans-serif;word-break:normal}.video-js:-moz-full-screen{position:absolute}.video-js:-webkit-full-screen{width:100%!important;height:100%!important}.video-js[tabindex=\"-1\"]{outline:0}.video-js *,.video-js :after,.video-js :before{box-sizing:inherit}.video-js ul{font-family:inherit;font-size:inherit;line-height:inherit;list-style-position:outside;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.video-js.vjs-1-1,.video-js.vjs-4-3,.video-js.vjs-9-16,.video-js.vjs-16-9,.video-js.vjs-fluid{width:100%;max-width:100%;height:0}.video-js.vjs-16-9{padding-top:56.25%}.video-js.vjs-4-3{padding-top:75%}.video-js.vjs-9-16{padding-top:177.7777777778%}.video-js.vjs-1-1{padding-top:100%}.video-js.vjs-fill,.video-js .vjs-tech{width:100%;height:100%}.video-js .vjs-tech{position:absolute;top:0;left:0}body.vjs-full-window{padding:0;margin:0;height:100%}.vjs-full-window .video-js.vjs-fullscreen{position:fixed;overflow:hidden;z-index:1000;left:0;top:0;bottom:0;right:0}.video-js.vjs-fullscreen:not(.vjs-ios-native-fs){width:100%!important;height:100%!important;padding-top:0!important}.video-js.vjs-fullscreen.vjs-user-inactive{cursor:none}.vjs-hidden{display:none!important}.vjs-disabled{opacity:.5;cursor:default}.video-js .vjs-offscreen{height:1px;left:-9999px;position:absolute;top:0;width:1px}.vjs-lock-showing{display:block!important;opacity:1!important;visibility:visible!important}.vjs-no-js{padding:20px;color:#fff;background-color:#000;font-size:18px;font-family:Arial,Helvetica,sans-serif;text-align:center;width:300px;height:150px;margin:0 auto}.vjs-no-js a,.vjs-no-js a:visited{color:#66a8cc}.video-js .vjs-big-play-button{font-size:3em;line-height:1.5em;height:1.63332em;width:3em;display:block;position:absolute;top:10px;left:10px;padding:0;cursor:pointer;opacity:1;border:.06666em solid #fff;background-color:#2b333f;background-color:rgba(43,51,63,.7);border-radius:.3em;transition:all .4s}.vjs-big-play-centered .vjs-big-play-button{top:50%;left:50%;margin-top:-.81666em;margin-left:-1.5em}.video-js .vjs-big-play-button:focus,.video-js:hover .vjs-big-play-button{border-color:#fff;background-color:#73859f;background-color:rgba(115,133,159,.5);transition:all 0s}.vjs-controls-disabled .vjs-big-play-button,.vjs-error .vjs-big-play-button,.vjs-has-started .vjs-big-play-button,.vjs-using-native-controls .vjs-big-play-button{display:none}.vjs-has-started.vjs-paused.vjs-show-big-play-button-on-pause .vjs-big-play-button{display:block}.video-js button{background:0 0;border:none;color:inherit;display:inline-block;font-size:inherit;line-height:inherit;text-transform:none;text-decoration:none;transition:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.vjs-control .vjs-button{width:100%;height:100%}.video-js .vjs-control.vjs-close-button{cursor:pointer;height:3em;position:absolute;right:0;top:.5em;z-index:2}.video-js .vjs-modal-dialog{background:rgba(0,0,0,.8);background:linear-gradient(180deg,rgba(0,0,0,.8),hsla(0,0%,100%,0));overflow:auto}.video-js .vjs-modal-dialog>*{box-sizing:border-box}.vjs-modal-dialog .vjs-modal-dialog-content{font-size:1.2em;line-height:1.5;padding:20px 24px;z-index:1}.vjs-menu-button{cursor:pointer}.vjs-menu-button.vjs-disabled{cursor:default}.vjs-workinghover .vjs-menu-button.vjs-disabled:hover .vjs-menu{display:none}.vjs-menu .vjs-menu-content{display:block;padding:0;margin:0;font-family:Arial,Helvetica,sans-serif;overflow:auto}.vjs-menu .vjs-menu-content>*{box-sizing:border-box}.vjs-scrubbing .vjs-control.vjs-menu-button:hover .vjs-menu{display:none}.vjs-menu li{list-style:none;margin:0;padding:.2em 0;line-height:1.4em;font-size:1.2em;text-align:center;text-transform:lowercase}.js-focus-visible .vjs-menu li.vjs-menu-item:hover,.vjs-menu li.vjs-menu-item:focus,.vjs-menu li.vjs-menu-item:hover{background-color:#73859f;background-color:rgba(115,133,159,.5)}.js-focus-visible .vjs-menu li.vjs-selected:hover,.vjs-menu li.vjs-selected,.vjs-menu li.vjs-selected:focus,.vjs-menu li.vjs-selected:hover{background-color:#fff;color:#2b333f}.js-focus-visible .vjs-menu :not(.vjs-selected):focus:not(.focus-visible),.video-js .vjs-menu :not(.vjs-selected):focus:not(:focus-visible){background:0 0}.vjs-menu li.vjs-menu-title{text-align:center;text-transform:uppercase;font-size:1em;line-height:2em;padding:0;margin:0 0 .3em 0;font-weight:700;cursor:default}.vjs-menu-button-popup .vjs-menu{display:none;position:absolute;bottom:0;width:10em;left:-3em;height:0;margin-bottom:1.5em;border-top-color:rgba(43,51,63,.7)}.vjs-menu-button-popup .vjs-menu .vjs-menu-content{background-color:#2b333f;background-color:rgba(43,51,63,.7);position:absolute;width:100%;bottom:1.5em;max-height:15em}.vjs-layout-tiny .vjs-menu-button-popup .vjs-menu .vjs-menu-content,.vjs-layout-x-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content{max-height:5em}.vjs-layout-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content{max-height:10em}.vjs-layout-medium .vjs-menu-button-popup .vjs-menu .vjs-menu-content{max-height:14em}.vjs-layout-huge .vjs-menu-button-popup .vjs-menu .vjs-menu-content,.vjs-layout-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content,.vjs-layout-x-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content{max-height:25em}.vjs-menu-button-popup .vjs-menu.vjs-lock-showing,.vjs-workinghover .vjs-menu-button-popup.vjs-hover .vjs-menu{display:block}.video-js .vjs-menu-button-inline{transition:all .4s;overflow:hidden}.video-js .vjs-menu-button-inline:before{width:2.222222222em}.video-js .vjs-menu-button-inline.vjs-slider-active,.video-js .vjs-menu-button-inline:focus,.video-js .vjs-menu-button-inline:hover,.video-js.vjs-no-flex .vjs-menu-button-inline{width:12em}.vjs-menu-button-inline .vjs-menu{opacity:0;height:100%;width:auto;position:absolute;left:4em;top:0;padding:0;margin:0;transition:all .4s}.vjs-menu-button-inline.vjs-slider-active .vjs-menu,.vjs-menu-button-inline:focus .vjs-menu,.vjs-menu-button-inline:hover .vjs-menu{display:block;opacity:1}.vjs-no-flex .vjs-menu-button-inline .vjs-menu{display:block;opacity:1;position:relative;width:auto}.vjs-no-flex .vjs-menu-button-inline.vjs-slider-active .vjs-menu,.vjs-no-flex .vjs-menu-button-inline:focus .vjs-menu,.vjs-no-flex .vjs-menu-button-inline:hover .vjs-menu{width:auto}.vjs-menu-button-inline .vjs-menu-content{width:auto;height:100%;margin:0;overflow:hidden}.video-js .vjs-control-bar{display:none;width:100%;position:absolute;bottom:0;left:0;right:0;height:3em;background-color:#2b333f;background-color:rgba(43,51,63,.7)}.vjs-has-started .vjs-control-bar{display:flex;visibility:visible;opacity:1;transition:visibility .1s,opacity .1s}.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{visibility:visible;opacity:0;pointer-events:none;transition:visibility 1s,opacity 1s}.vjs-controls-disabled .vjs-control-bar,.vjs-error .vjs-control-bar,.vjs-using-native-controls .vjs-control-bar{display:none!important}.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{opacity:1;visibility:visible}.vjs-has-started.vjs-no-flex .vjs-control-bar{display:table}.video-js .vjs-control{position:relative;text-align:center;margin:0;padding:0;height:100%;width:4em;flex:none}.vjs-button>.vjs-icon-placeholder:before{font-size:1.8em;line-height:1.67}.vjs-button>.vjs-icon-placeholder{display:block}.video-js .vjs-control:focus,.video-js .vjs-control:focus:before,.video-js .vjs-control:hover:before{text-shadow:0 0 1em #fff}.video-js .vjs-control-text{border:0;clip:rect(0 0 0 0);height:1px;overflow:hidden;padding:0;position:absolute;width:1px}.vjs-no-flex .vjs-control{display:table-cell;vertical-align:middle}.video-js .vjs-custom-control-spacer{display:none}.video-js .vjs-progress-control{cursor:pointer;flex:auto;display:flex;align-items:center;min-width:4em;touch-action:none}.video-js .vjs-progress-control.disabled{cursor:default}.vjs-live .vjs-progress-control{display:none}.vjs-liveui .vjs-progress-control{display:flex;align-items:center}.vjs-no-flex .vjs-progress-control{width:auto}.video-js .vjs-progress-holder{flex:auto;transition:all .2s;height:.3em}.video-js .vjs-progress-control .vjs-progress-holder{margin:0 10px}.video-js .vjs-progress-control:hover .vjs-progress-holder{font-size:1.6666666667em}.video-js .vjs-progress-control:hover .vjs-progress-holder.disabled{font-size:1em}.video-js .vjs-progress-holder .vjs-load-progress,.video-js .vjs-progress-holder .vjs-load-progress div,.video-js .vjs-progress-holder .vjs-play-progress{position:absolute;display:block;height:100%;margin:0;padding:0;width:0}.video-js .vjs-play-progress{background-color:#fff}.video-js .vjs-play-progress:before{font-size:.9em;position:absolute;right:-.5em;top:-.3333333333em;z-index:1}.video-js .vjs-load-progress{background:rgba(115,133,159,.5)}.video-js .vjs-load-progress div{background:rgba(115,133,159,.75)}.video-js .vjs-time-tooltip{background-color:#fff;background-color:hsla(0,0%,100%,.8);border-radius:.3em;color:#000;float:right;font-family:Arial,Helvetica,sans-serif;font-size:1em;padding:6px 8px 8px 8px;pointer-events:none;position:absolute;top:-3.4em;visibility:hidden;z-index:1}.video-js .vjs-progress-holder:focus .vjs-time-tooltip{display:none}.video-js .vjs-progress-control:hover .vjs-progress-holder:focus .vjs-time-tooltip,.video-js .vjs-progress-control:hover .vjs-time-tooltip{display:block;font-size:.6em;visibility:visible}.video-js .vjs-progress-control.disabled:hover .vjs-time-tooltip{font-size:1em}.video-js .vjs-progress-control .vjs-mouse-display{display:none;position:absolute;width:1px;height:100%;background-color:#000;z-index:1}.vjs-no-flex .vjs-progress-control .vjs-mouse-display{z-index:0}.video-js .vjs-progress-control:hover .vjs-mouse-display{display:block}.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display{visibility:hidden;opacity:0;transition:visibility 1s,opacity 1s}.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display{display:none}.vjs-mouse-display .vjs-time-tooltip{color:#fff;background-color:#000;background-color:rgba(0,0,0,.8)}.video-js .vjs-slider{position:relative;cursor:pointer;padding:0;margin:0 .45em 0 .45em;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#73859f;background-color:rgba(115,133,159,.5)}.video-js .vjs-slider.disabled{cursor:default}.video-js .vjs-slider:focus{text-shadow:0 0 1em #fff;box-shadow:0 0 1em #fff}.video-js .vjs-mute-control{cursor:pointer;flex:none}.video-js .vjs-volume-control{cursor:pointer;margin-right:1em;display:flex}.video-js .vjs-volume-control.vjs-volume-horizontal{width:5em}.video-js .vjs-volume-panel .vjs-volume-control{visibility:visible;opacity:0;width:1px;height:1px;margin-left:-1px}.video-js .vjs-volume-panel{transition:width 1s}.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control~.vjs-volume-control,.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active,.video-js .vjs-volume-panel .vjs-volume-control:active,.video-js .vjs-volume-panel:active .vjs-volume-control,.video-js .vjs-volume-panel:focus .vjs-volume-control{visibility:visible;opacity:1;position:relative;transition:visibility .1s,opacity .1s,height .1s,width .1s,left 0s,top 0s}.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control~.vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-horizontal,.video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-horizontal,.video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-horizontal{width:5em;height:3em;margin-right:0}.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control~.vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical,.video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical,.video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical{left:-3.5em;transition:left 0s}.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover,.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,.video-js .vjs-volume-panel.vjs-volume-panel-horizontal:active{width:10em;transition:width .1s}.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-mute-toggle-only{width:4em}.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical{height:8em;width:3em;left:-3000em;transition:visibility 1s,opacity 1s,height 1s 1s,width 1s 1s,left 1s 1s,top 1s 1s}.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal{transition:visibility 1s,opacity 1s,height 1s 1s,width 1s,left 1s 1s,top 1s 1s}.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal{width:5em;height:3em;visibility:visible;opacity:1;position:relative;transition:none}.video-js.vjs-no-flex .vjs-volume-control.vjs-volume-vertical,.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical{position:absolute;bottom:3em;left:.5em}.video-js .vjs-volume-panel{display:flex}.video-js .vjs-volume-bar{margin:1.35em .45em}.vjs-volume-bar.vjs-slider-horizontal{width:5em;height:.3em}.vjs-volume-bar.vjs-slider-vertical{width:.3em;height:5em;margin:1.35em auto}.video-js .vjs-volume-level{position:absolute;bottom:0;left:0;background-color:#fff}.video-js .vjs-volume-level:before{position:absolute;font-size:.9em;z-index:1}.vjs-slider-vertical .vjs-volume-level{width:.3em}.vjs-slider-vertical .vjs-volume-level:before{top:-.5em;left:-.3em;z-index:1}.vjs-slider-horizontal .vjs-volume-level{height:.3em}.vjs-slider-horizontal .vjs-volume-level:before{top:-.3em;right:-.5em}.video-js .vjs-volume-panel.vjs-volume-panel-vertical{width:4em}.vjs-volume-bar.vjs-slider-vertical .vjs-volume-level{height:100%}.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level{width:100%}.video-js .vjs-volume-vertical{width:3em;height:8em;bottom:8em;background-color:#2b333f;background-color:rgba(43,51,63,.7)}.video-js .vjs-volume-horizontal .vjs-menu{left:-2em}.video-js .vjs-volume-tooltip{background-color:#fff;background-color:hsla(0,0%,100%,.8);border-radius:.3em;color:#000;float:right;font-family:Arial,Helvetica,sans-serif;font-size:1em;padding:6px 8px 8px 8px;pointer-events:none;position:absolute;top:-3.4em;visibility:hidden;z-index:1}.video-js .vjs-volume-control:hover .vjs-progress-holder:focus .vjs-volume-tooltip,.video-js .vjs-volume-control:hover .vjs-volume-tooltip{display:block;font-size:1em;visibility:visible}.video-js .vjs-volume-vertical:hover .vjs-progress-holder:focus .vjs-volume-tooltip,.video-js .vjs-volume-vertical:hover .vjs-volume-tooltip{left:1em;top:-12px}.video-js .vjs-volume-control.disabled:hover .vjs-volume-tooltip{font-size:1em}.video-js .vjs-volume-control .vjs-mouse-display{display:none;position:absolute;width:100%;height:1px;background-color:#000;z-index:1}.video-js .vjs-volume-horizontal .vjs-mouse-display{width:1px;height:100%}.vjs-no-flex .vjs-volume-control .vjs-mouse-display{z-index:0}.video-js .vjs-volume-control:hover .vjs-mouse-display{display:block}.video-js.vjs-user-inactive .vjs-volume-control .vjs-mouse-display{visibility:hidden;opacity:0;transition:visibility 1s,opacity 1s}.video-js.vjs-user-inactive.vjs-no-flex .vjs-volume-control .vjs-mouse-display{display:none}.vjs-mouse-display .vjs-volume-tooltip{color:#fff;background-color:#000;background-color:rgba(0,0,0,.8)}.vjs-poster{display:inline-block;vertical-align:middle;background-repeat:no-repeat;background-position:50% 50%;background-size:contain;background-color:#000;cursor:pointer;margin:0;padding:0;position:absolute;top:0;right:0;bottom:0;left:0;height:100%}.vjs-has-started .vjs-poster{display:none}.vjs-audio.vjs-has-started .vjs-poster{display:block}.vjs-using-native-controls .vjs-poster{display:none}.video-js .vjs-live-control{display:flex;align-items:flex-start;flex:auto;font-size:1em;line-height:3em}.vjs-no-flex .vjs-live-control{display:table-cell;width:auto;text-align:left}.video-js.vjs-liveui .vjs-live-control,.video-js:not(.vjs-live) .vjs-live-control{display:none}.video-js .vjs-seek-to-live-control{align-items:center;cursor:pointer;flex:none;display:inline-flex;height:100%;padding-left:.5em;padding-right:.5em;font-size:1em;line-height:3em;width:auto;min-width:4em}.vjs-no-flex .vjs-seek-to-live-control{display:table-cell;width:auto;text-align:left}.video-js.vjs-live:not(.vjs-liveui) .vjs-seek-to-live-control,.video-js:not(.vjs-live) .vjs-seek-to-live-control{display:none}.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge{cursor:auto}.vjs-seek-to-live-control .vjs-icon-placeholder{margin-right:.5em;color:#888}.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge .vjs-icon-placeholder{color:red}.video-js .vjs-time-control{flex:none;font-size:1em;line-height:3em;min-width:2em;width:auto;padding-left:1em;padding-right:1em}.video-js .vjs-current-time,.video-js .vjs-duration,.vjs-live .vjs-time-control,.vjs-no-flex .vjs-current-time,.vjs-no-flex .vjs-duration{display:none}.vjs-time-divider{display:none;line-height:3em}.vjs-live .vjs-time-divider{display:none}.video-js .vjs-play-control{cursor:pointer}.video-js .vjs-play-control .vjs-icon-placeholder{flex:none}.vjs-text-track-display{position:absolute;bottom:3em;left:0;right:0;top:0;pointer-events:none}.video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display{bottom:1em}.video-js .vjs-text-track{font-size:1.4em;text-align:center;margin-bottom:.1em}.vjs-subtitles{color:#fff}.vjs-captions{color:#fc6}.vjs-tt-cue{display:block}video::-webkit-media-text-track-display{transform:translateY(-3em)}.video-js.vjs-user-inactive.vjs-playing video::-webkit-media-text-track-display{transform:translateY(-1.5em)}.video-js .vjs-fullscreen-control,.video-js .vjs-picture-in-picture-control{cursor:pointer;flex:none}.vjs-playback-rate .vjs-playback-rate-value,.vjs-playback-rate>.vjs-menu-button{position:absolute;top:0;left:0;width:100%;height:100%}.vjs-playback-rate .vjs-playback-rate-value{pointer-events:none;font-size:1.5em;line-height:2;text-align:center}.vjs-playback-rate .vjs-menu{width:4em;left:0}.vjs-error .vjs-error-display .vjs-modal-dialog-content{font-size:1.4em;text-align:center}.vjs-error .vjs-error-display:before{color:#fff;content:\"X\";font-family:Arial,Helvetica,sans-serif;font-size:4em;left:0;line-height:1;margin-top:-.5em;position:absolute;text-shadow:.05em .05em .1em #000;text-align:center;top:50%;vertical-align:middle;width:100%}.vjs-loading-spinner{display:none;position:absolute;top:50%;left:50%;margin:-25px 0 0 -25px;opacity:.85;text-align:left;border:6px solid rgba(43,51,63,.7);box-sizing:border-box;background-clip:padding-box;width:50px;height:50px;border-radius:25px;visibility:hidden}.vjs-seeking .vjs-loading-spinner,.vjs-waiting .vjs-loading-spinner{display:block;-webkit-animation:vjs-spinner-show 0s linear .3s forwards;animation:vjs-spinner-show 0s linear .3s forwards}.vjs-loading-spinner:after,.vjs-loading-spinner:before{content:\"\";position:absolute;margin:-6px;box-sizing:inherit;width:inherit;height:inherit;border-radius:inherit;opacity:1;border:inherit;border-color:transparent;border-top-color:#fff}.vjs-seeking .vjs-loading-spinner:after,.vjs-seeking .vjs-loading-spinner:before,.vjs-waiting .vjs-loading-spinner:after,.vjs-waiting .vjs-loading-spinner:before{-webkit-animation:vjs-spinner-spin 1.1s cubic-bezier(.6,.2,0,.8) infinite,vjs-spinner-fade 1.1s linear infinite;animation:vjs-spinner-spin 1.1s cubic-bezier(.6,.2,0,.8) infinite,vjs-spinner-fade 1.1s linear infinite}.vjs-seeking .vjs-loading-spinner:before,.vjs-waiting .vjs-loading-spinner:before{border-top-color:#fff}.vjs-seeking .vjs-loading-spinner:after,.vjs-waiting .vjs-loading-spinner:after{border-top-color:#fff;-webkit-animation-delay:.44s;animation-delay:.44s}@keyframes vjs-spinner-show{to{visibility:visible}}@-webkit-keyframes vjs-spinner-show{to{visibility:visible}}@keyframes vjs-spinner-spin{to{transform:rotate(1turn)}}@-webkit-keyframes vjs-spinner-spin{to{-webkit-transform:rotate(1turn)}}@keyframes vjs-spinner-fade{0%{border-top-color:#73859f}20%{border-top-color:#73859f}35%{border-top-color:#fff}60%{border-top-color:#73859f}to{border-top-color:#73859f}}@-webkit-keyframes vjs-spinner-fade{0%{border-top-color:#73859f}20%{border-top-color:#73859f}35%{border-top-color:#fff}60%{border-top-color:#73859f}to{border-top-color:#73859f}}.vjs-chapters-button .vjs-menu ul{width:24em}.video-js .vjs-subs-caps-button+.vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder{vertical-align:middle;display:inline-block;margin-bottom:-.1em}.video-js .vjs-subs-caps-button+.vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before{font-family:VideoJS;content:\"\";font-size:1.5em;line-height:inherit}.video-js .vjs-audio-button+.vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder{vertical-align:middle;display:inline-block;margin-bottom:-.1em}.video-js .vjs-audio-button+.vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before{font-family:VideoJS;content:\" \";font-size:1.5em;line-height:inherit}.video-js.vjs-layout-small .vjs-audio-button,.video-js.vjs-layout-small .vjs-captions-button,.video-js.vjs-layout-small .vjs-chapters-button,.video-js.vjs-layout-small .vjs-current-time,.video-js.vjs-layout-small .vjs-descriptions-button,.video-js.vjs-layout-small .vjs-duration,.video-js.vjs-layout-small .vjs-playback-rate,.video-js.vjs-layout-small .vjs-remaining-time,.video-js.vjs-layout-small .vjs-subtitles-button,.video-js.vjs-layout-small .vjs-time-divider,.video-js.vjs-layout-small .vjs-volume-control,.video-js.vjs-layout-tiny .vjs-audio-button,.video-js.vjs-layout-tiny .vjs-captions-button,.video-js.vjs-layout-tiny .vjs-chapters-button,.video-js.vjs-layout-tiny .vjs-current-time,.video-js.vjs-layout-tiny .vjs-descriptions-button,.video-js.vjs-layout-tiny .vjs-duration,.video-js.vjs-layout-tiny .vjs-playback-rate,.video-js.vjs-layout-tiny .vjs-remaining-time,.video-js.vjs-layout-tiny .vjs-subtitles-button,.video-js.vjs-layout-tiny .vjs-time-divider,.video-js.vjs-layout-tiny .vjs-volume-control,.video-js.vjs-layout-x-small .vjs-audio-button,.video-js.vjs-layout-x-small .vjs-captions-button,.video-js.vjs-layout-x-small .vjs-chapters-button,.video-js.vjs-layout-x-small .vjs-current-time,.video-js.vjs-layout-x-small .vjs-descriptions-button,.video-js.vjs-layout-x-small .vjs-duration,.video-js.vjs-layout-x-small .vjs-playback-rate,.video-js.vjs-layout-x-small .vjs-remaining-time,.video-js.vjs-layout-x-small .vjs-subtitles-button,.video-js.vjs-layout-x-small .vjs-time-divider,.video-js.vjs-layout-x-small .vjs-volume-control{display:none!important}.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:active,.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover,.video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,.video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:active,.video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:hover,.video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,.video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:active,.video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover{width:auto}.video-js.vjs-layout-tiny .vjs-subs-caps-button,.video-js.vjs-layout-x-small:not(.vjs-live) .vjs-subs-caps-button,.video-js.vjs-layout-x-small:not(.vjs-liveui) .vjs-subs-caps-button{display:none}.video-js.vjs-layout-tiny .vjs-custom-control-spacer,.video-js.vjs-layout-x-small.vjs-liveui .vjs-custom-control-spacer{flex:auto;display:block}.video-js.vjs-layout-tiny.vjs-no-flex .vjs-custom-control-spacer,.video-js.vjs-layout-x-small.vjs-liveui.vjs-no-flex .vjs-custom-control-spacer{width:auto}.video-js.vjs-layout-tiny .vjs-progress-control,.video-js.vjs-layout-x-small.vjs-liveui .vjs-progress-control{display:none}.vjs-modal-dialog.vjs-text-track-settings{background-color:#2b333f;background-color:rgba(43,51,63,.75);color:#fff;height:70%}.vjs-text-track-settings .vjs-modal-dialog-content{display:table}.vjs-text-track-settings .vjs-track-settings-colors,.vjs-text-track-settings .vjs-track-settings-controls,.vjs-text-track-settings .vjs-track-settings-font{display:table-cell}.vjs-text-track-settings .vjs-track-settings-controls{text-align:right;vertical-align:bottom}@supports (display:grid){.vjs-text-track-settings .vjs-modal-dialog-content{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr;padding:20px 24px 0 24px}.vjs-track-settings-controls .vjs-default-button{margin-bottom:20px}.vjs-text-track-settings .vjs-track-settings-controls{grid-column:1/-1}.vjs-layout-small .vjs-text-track-settings .vjs-modal-dialog-content,.vjs-layout-tiny .vjs-text-track-settings .vjs-modal-dialog-content,.vjs-layout-x-small .vjs-text-track-settings .vjs-modal-dialog-content{grid-template-columns:1fr}}.vjs-track-setting>select{margin-right:1em;margin-bottom:.5em}.vjs-text-track-settings fieldset{margin:5px;padding:3px;border:none}.vjs-text-track-settings fieldset span{display:inline-block}.vjs-text-track-settings fieldset span>select{max-width:7.3em}.vjs-text-track-settings legend{color:#fff;margin:0 0 5px 0}.vjs-text-track-settings .vjs-label{position:absolute;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);display:block;margin:0 0 5px 0;padding:0;border:0;height:1px;width:1px;overflow:hidden}.vjs-track-settings-controls button:active,.vjs-track-settings-controls button:focus{outline-style:solid;outline-width:medium;background-image:linear-gradient(0deg,#fff 88%,#73859f)}.vjs-track-settings-controls button:hover{color:rgba(43,51,63,.75)}.vjs-track-settings-controls button{background-color:#fff;background-image:linear-gradient(-180deg,#fff 88%,#73859f);color:#2b333f;cursor:pointer;border-radius:2px}.vjs-track-settings-controls .vjs-default-button{margin-right:1em}@media print{.video-js>:not(.vjs-tech):not(.vjs-poster){visibility:hidden}}.vjs-resize-manager{position:absolute;top:0;left:0;width:100%;height:100%;border:none;z-index:-1000}.js-focus-visible .video-js :focus:not(.focus-visible),.video-js :focus:not(:focus-visible){outline:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var hasOwn = __webpack_require__("1a2d");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b680":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toIntegerOrInfinity = __webpack_require__("5926");
var thisNumberValue = __webpack_require__("408a");
var repeat = __webpack_require__("1148");
var fails = __webpack_require__("d039");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = (c % n) * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = String(data[index]);
      s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toIntegerOrInfinity(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var getMethod = __webpack_require__("dc4a");
var ordinaryToPrimitive = __webpack_require__("485a");
var wellKnownSymbol = __webpack_require__("b622");

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("1a2d");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cb29":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fill = __webpack_require__("81d5");
var addToUnscopables = __webpack_require__("44d2");

// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d75f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("eee3");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("f61fd310", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d9b5":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var getBuiltIn = __webpack_require__("d066");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && Object(it) instanceof $Symbol;
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dc4a":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("59ed");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e6d3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_video_player_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9ff9");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_video_player_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_video_player_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("1a2d");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "eee3":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vvm-monitor{width:100%;height:100%;position:relative}.vvm-monitor .vvm-control{width:100%;height:56px;background:#202020;border-top:1px solid #373d3d;box-sizing:border-box;overflow:hidden}.vvm-monitor .vvm-control ul{list-style-type:none;margin:0;padding:0}.vvm-monitor .vvm-control li{float:left;padding:11px 10px}.vvm-monitor .vvm-control li a{display:inline-block;vertical-align:middle;width:32px;height:32px;background-image:url(data:image/png;base64,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);filter:grayscale(1) brightness(1.5)}.vvm-monitor .vvm-control li:hover{background-color:#111}.vvm-monitor .vvm-control li:hover a{filter:brightness(1.5)}.vvm-monitor .vvm-control .vvm-separator{padding:15px 5px}.vvm-monitor .vvm-control .vvm-separator span{display:block;width:2px;height:24px;background:#373d3d}.vvm-monitor .vvm-control .vvm-separator:hover{background-color:#202020}.vvm-monitor .vvm-control .vvm-icon-s1{background-position:0 0}.vvm-monitor .vvm-control .vvm-icon-s4{background-position:-32px 0}.vvm-monitor .vvm-control .vvm-icon-s6{background-position:-64px 0}.vvm-monitor .vvm-control .vvm-icon-s8{background-position:-96px 0}.vvm-monitor .vvm-control .vvm-icon-s9{background-position:-128px 0}.vvm-monitor .vvm-control .vvm-icon-s10{background-position:-160px 0}.vvm-monitor .vvm-control .vvm-icon-s16{background-position:-192px 0}.vvm-monitor .vvm-control .vvm-icon-s25{background-position:0 -32px}.vvm-monitor .vvm-control .vvm-icon-s36{background-position:-32px -32px}.vvm-monitor .vvm-control .vvm-icon-s64{background-position:-64px -32px}.vvm-monitor .vvm-control .vvm-icon-mute{background-position:0 -64px}.vvm-monitor .vvm-control .vvm-icon-stop{background-position:-32px -64px}.vvm-monitor .vvm-control .vvm-icon-clear{background-position:-64px -64px}.vvm-monitor .vvm-control .vvm-icon-fill{background-position:-96px -64px}.vvm-monitor.vvm-control-top .vvm-view{top:56px}.vvm-monitor.vvm-control-top .vvm-control{border-top:none;border-bottom:1px solid #373d3d;position:absolute;top:0}.vvm-monitor.vvm-control-hide .vvm-view{top:0;height:100%}.vvm-monitor.vvm-control-hide .vvm-control{display:none}.vvm-monitor .vvm-view{height:calc(100% - 56px);overflow:hidden;position:relative}.vvm-monitor .vvm-view .vvp-player{float:left;font-size:12px;background:#000}.vvm-monitor .vvm-view.vvm-fill .vvp-player .video-js .vjs-tech{-o-object-fit:fill;object-fit:fill}.vvm-monitor .vvm-view .vvm-border{position:absolute;background-color:#373d3d;z-index:5;pointer-events:none}.vvm-monitor .vvm-view .vvm-h{height:1px;width:100%}.vvm-monitor .vvm-view .vvm-v{width:1px;height:100%}.vvm-monitor .vvm-view.vvm-max .vvp-player{height:100%!important;width:100%!important}.vvm-monitor .vvm-view.vvm-max .vvm-border,.vvm-monitor .vvm-view.vvm-max .vvm-m1,.vvm-monitor .vvm-view.vvm-max .vvm-m4,.vvm-monitor .vvm-view.vvm-max .vvm-m6,.vvm-monitor .vvm-view.vvm-max .vvm-m8,.vvm-monitor .vvm-view.vvm-max .vvm-m9,.vvm-monitor .vvm-view.vvm-max .vvm-m10,.vvm-monitor .vvm-view.vvm-max .vvm-m16,.vvm-monitor .vvm-view.vvm-max .vvm-m25,.vvm-monitor .vvm-view.vvm-max .vvm-m36,.vvm-monitor .vvm-view.vvm-max .vvm-m64,.vvm-monitor .vvm-view.vvm-max .vvp-player .vvp-focus-show{display:none}.vvm-monitor .vvm-view.vvm-max .vvp-max{display:block}.vvm-monitor .vvm-view.vvm-1s .vvp-player{height:100%;width:100%}.vvm-monitor .vvm-view.vvm-1s .vvm-border,.vvm-monitor .vvm-view.vvm-1s .vvm-m4,.vvm-monitor .vvm-view.vvm-1s .vvm-m6,.vvm-monitor .vvm-view.vvm-1s .vvm-m8,.vvm-monitor .vvm-view.vvm-1s .vvm-m9,.vvm-monitor .vvm-view.vvm-1s .vvm-m10,.vvm-monitor .vvm-view.vvm-1s .vvm-m16,.vvm-monitor .vvm-view.vvm-1s .vvm-m25,.vvm-monitor .vvm-view.vvm-1s .vvm-m36,.vvm-monitor .vvm-view.vvm-1s .vvm-m64,.vvm-monitor .vvm-view.vvm-1s .vvp-player .vvp-focus-show{display:none}.vvm-monitor .vvm-view.vvm-4s .vvp-player{height:50%;width:50%}.vvm-monitor .vvm-view.vvm-4s .vvm-h2,.vvm-monitor .vvm-view.vvm-4s .vvm-h3,.vvm-monitor .vvm-view.vvm-4s .vvm-h4,.vvm-monitor .vvm-view.vvm-4s .vvm-h5,.vvm-monitor .vvm-view.vvm-4s .vvm-h6,.vvm-monitor .vvm-view.vvm-4s .vvm-h7,.vvm-monitor .vvm-view.vvm-4s .vvm-m6,.vvm-monitor .vvm-view.vvm-4s .vvm-m8,.vvm-monitor .vvm-view.vvm-4s .vvm-m9,.vvm-monitor .vvm-view.vvm-4s .vvm-m10,.vvm-monitor .vvm-view.vvm-4s .vvm-m16,.vvm-monitor .vvm-view.vvm-4s .vvm-m25,.vvm-monitor .vvm-view.vvm-4s .vvm-m36,.vvm-monitor .vvm-view.vvm-4s .vvm-m64,.vvm-monitor .vvm-view.vvm-4s .vvm-v2,.vvm-monitor .vvm-view.vvm-4s .vvm-v3,.vvm-monitor .vvm-view.vvm-4s .vvm-v4,.vvm-monitor .vvm-view.vvm-4s .vvm-v5,.vvm-monitor .vvm-view.vvm-4s .vvm-v6,.vvm-monitor .vvm-view.vvm-4s .vvm-v7{display:none}.vvm-monitor .vvm-view.vvm-4s .vvm-h1{top:50%}.vvm-monitor .vvm-view.vvm-4s .vvm-v1{left:50%}.vvm-monitor .vvm-view.vvm-6s .vvp-player{height:33.33%;width:33.33%}.vvm-monitor .vvm-view.vvm-6s .vvp-player .vvp-shade:before{font-size:68px;line-height:68px;top:calc(50% - 34px);left:calc(50% - 34px)}.vvm-monitor .vvm-view.vvm-6s .vvm-s0{height:66.65%;width:66.66%}.vvm-monitor .vvm-view.vvm-6s .vvm-h3,.vvm-monitor .vvm-view.vvm-6s .vvm-h4,.vvm-monitor .vvm-view.vvm-6s .vvm-h5,.vvm-monitor .vvm-view.vvm-6s .vvm-h6,.vvm-monitor .vvm-view.vvm-6s .vvm-h7,.vvm-monitor .vvm-view.vvm-6s .vvm-m8,.vvm-monitor .vvm-view.vvm-6s .vvm-m9,.vvm-monitor .vvm-view.vvm-6s .vvm-m10,.vvm-monitor .vvm-view.vvm-6s .vvm-m16,.vvm-monitor .vvm-view.vvm-6s .vvm-m25,.vvm-monitor .vvm-view.vvm-6s .vvm-m36,.vvm-monitor .vvm-view.vvm-6s .vvm-m64,.vvm-monitor .vvm-view.vvm-6s .vvm-v3,.vvm-monitor .vvm-view.vvm-6s .vvm-v4,.vvm-monitor .vvm-view.vvm-6s .vvm-v5,.vvm-monitor .vvm-view.vvm-6s .vvm-v6,.vvm-monitor .vvm-view.vvm-6s .vvm-v7{display:none}.vvm-monitor .vvm-view.vvm-6s .vvm-h1{top:33.33333%;left:66.66666%}.vvm-monitor .vvm-view.vvm-6s .vvm-h2{top:66.66666%}.vvm-monitor .vvm-view.vvm-6s .vvm-v1{left:33.33333%;top:66.66666%}.vvm-monitor .vvm-view.vvm-6s .vvm-v2{left:66.66666%}.vvm-monitor .vvm-view.vvm-8s .vvp-player{height:25%;width:25%}.vvm-monitor .vvm-view.vvm-8s .vvp-player .vvp-shade:before{font-size:58px;line-height:58px;top:calc(50% - 29px);left:calc(50% - 29px)}.vvm-monitor .vvm-view.vvm-8s .vvm-s0{height:75%;width:75%}.vvm-monitor .vvm-view.vvm-8s .vvm-h4,.vvm-monitor .vvm-view.vvm-8s .vvm-h5,.vvm-monitor .vvm-view.vvm-8s .vvm-h6,.vvm-monitor .vvm-view.vvm-8s .vvm-h7,.vvm-monitor .vvm-view.vvm-8s .vvm-m9,.vvm-monitor .vvm-view.vvm-8s .vvm-m10,.vvm-monitor .vvm-view.vvm-8s .vvm-m16,.vvm-monitor .vvm-view.vvm-8s .vvm-m25,.vvm-monitor .vvm-view.vvm-8s .vvm-m36,.vvm-monitor .vvm-view.vvm-8s .vvm-m64,.vvm-monitor .vvm-view.vvm-8s .vvm-v4,.vvm-monitor .vvm-view.vvm-8s .vvm-v5,.vvm-monitor .vvm-view.vvm-8s .vvm-v6,.vvm-monitor .vvm-view.vvm-8s .vvm-v7{display:none}.vvm-monitor .vvm-view.vvm-8s .vvm-h1{top:25%;left:75%}.vvm-monitor .vvm-view.vvm-8s .vvm-h2{top:50%;left:75%}.vvm-monitor .vvm-view.vvm-8s .vvm-h3{top:75%}.vvm-monitor .vvm-view.vvm-8s .vvm-v1{left:25%;top:75%}.vvm-monitor .vvm-view.vvm-8s .vvm-v2{left:50%;top:75%}.vvm-monitor .vvm-view.vvm-8s .vvm-v3{left:75%}.vvm-monitor .vvm-view.vvm-9s .vvp-player{height:33.33%;width:33.33%}.vvm-monitor .vvm-view.vvm-9s .vvp-player .vvp-shade:before{font-size:68px;line-height:68px;top:calc(50% - 34px);left:calc(50% - 34px)}.vvm-monitor .vvm-view.vvm-9s .vvm-h3,.vvm-monitor .vvm-view.vvm-9s .vvm-h4,.vvm-monitor .vvm-view.vvm-9s .vvm-h5,.vvm-monitor .vvm-view.vvm-9s .vvm-h6,.vvm-monitor .vvm-view.vvm-9s .vvm-h7,.vvm-monitor .vvm-view.vvm-9s .vvm-m10,.vvm-monitor .vvm-view.vvm-9s .vvm-m16,.vvm-monitor .vvm-view.vvm-9s .vvm-m25,.vvm-monitor .vvm-view.vvm-9s .vvm-m36,.vvm-monitor .vvm-view.vvm-9s .vvm-m64,.vvm-monitor .vvm-view.vvm-9s .vvm-v3,.vvm-monitor .vvm-view.vvm-9s .vvm-v4,.vvm-monitor .vvm-view.vvm-9s .vvm-v5,.vvm-monitor .vvm-view.vvm-9s .vvm-v6,.vvm-monitor .vvm-view.vvm-9s .vvm-v7{display:none}.vvm-monitor .vvm-view.vvm-9s .vvm-h1{top:33.33333%}.vvm-monitor .vvm-view.vvm-9s .vvm-h2{top:66.66666%}.vvm-monitor .vvm-view.vvm-9s .vvm-v1{left:33.33333%}.vvm-monitor .vvm-view.vvm-9s .vvm-v2{left:66.66666%}.vvm-monitor .vvm-view.vvm-10s .vvp-player{height:25%;width:25%}.vvm-monitor .vvm-view.vvm-10s .vvp-player .vvp-shade:before{font-size:58px;line-height:58px;top:calc(50% - 29px);left:calc(50% - 29px)}.vvm-monitor .vvm-view.vvm-10s .vvm-s0,.vvm-monitor .vvm-view.vvm-10s .vvm-s1{height:50%;width:50%}.vvm-monitor .vvm-view.vvm-10s .vvm-h3,.vvm-monitor .vvm-view.vvm-10s .vvm-h4,.vvm-monitor .vvm-view.vvm-10s .vvm-h5,.vvm-monitor .vvm-view.vvm-10s .vvm-h6,.vvm-monitor .vvm-view.vvm-10s .vvm-h7,.vvm-monitor .vvm-view.vvm-10s .vvm-m16,.vvm-monitor .vvm-view.vvm-10s .vvm-m25,.vvm-monitor .vvm-view.vvm-10s .vvm-m36,.vvm-monitor .vvm-view.vvm-10s .vvm-m64,.vvm-monitor .vvm-view.vvm-10s .vvm-v4,.vvm-monitor .vvm-view.vvm-10s .vvm-v5,.vvm-monitor .vvm-view.vvm-10s .vvm-v6,.vvm-monitor .vvm-view.vvm-10s .vvm-v7{display:none}.vvm-monitor .vvm-view.vvm-10s .vvm-h1{top:50%}.vvm-monitor .vvm-view.vvm-10s .vvm-h2{top:75%}.vvm-monitor .vvm-view.vvm-10s .vvm-v1{left:25%;top:50%}.vvm-monitor .vvm-view.vvm-10s .vvm-v2{left:50%}.vvm-monitor .vvm-view.vvm-10s .vvm-v3{left:75%;top:50%}.vvm-monitor .vvm-view.vvm-16s .vvp-player{height:25%;width:25%}.vvm-monitor .vvm-view.vvm-16s .vvp-player .vvp-shade:before{font-size:58px;line-height:58px;top:calc(50% - 29px);left:calc(50% - 29px)}.vvm-monitor .vvm-view.vvm-16s .vvm-h4,.vvm-monitor .vvm-view.vvm-16s .vvm-h5,.vvm-monitor .vvm-view.vvm-16s .vvm-h6,.vvm-monitor .vvm-view.vvm-16s .vvm-h7,.vvm-monitor .vvm-view.vvm-16s .vvm-m25,.vvm-monitor .vvm-view.vvm-16s .vvm-m36,.vvm-monitor .vvm-view.vvm-16s .vvm-m64,.vvm-monitor .vvm-view.vvm-16s .vvm-v4,.vvm-monitor .vvm-view.vvm-16s .vvm-v5,.vvm-monitor .vvm-view.vvm-16s .vvm-v6,.vvm-monitor .vvm-view.vvm-16s .vvm-v7{display:none}.vvm-monitor .vvm-view.vvm-16s .vvm-h1{top:25%}.vvm-monitor .vvm-view.vvm-16s .vvm-h2{top:50%}.vvm-monitor .vvm-view.vvm-16s .vvm-h3{top:75%}.vvm-monitor .vvm-view.vvm-16s .vvm-v1{left:25%}.vvm-monitor .vvm-view.vvm-16s .vvm-v2{left:50%}.vvm-monitor .vvm-view.vvm-16s .vvm-v3{left:75%}.vvm-monitor .vvm-view.vvm-25s .vvp-player{height:20%;width:20%}.vvm-monitor .vvm-view.vvm-25s .vvp-player .vvp-shade:before{font-size:50px;line-height:50px;top:calc(50% - 25px);left:calc(50% - 25px)}.vvm-monitor .vvm-view.vvm-25s .vvm-h5,.vvm-monitor .vvm-view.vvm-25s .vvm-h6,.vvm-monitor .vvm-view.vvm-25s .vvm-h7,.vvm-monitor .vvm-view.vvm-25s .vvm-m36,.vvm-monitor .vvm-view.vvm-25s .vvm-m64,.vvm-monitor .vvm-view.vvm-25s .vvm-v5,.vvm-monitor .vvm-view.vvm-25s .vvm-v6,.vvm-monitor .vvm-view.vvm-25s .vvm-v7{display:none}.vvm-monitor .vvm-view.vvm-25s .vvm-h1{top:20%}.vvm-monitor .vvm-view.vvm-25s .vvm-h2{top:40%}.vvm-monitor .vvm-view.vvm-25s .vvm-h3{top:60%}.vvm-monitor .vvm-view.vvm-25s .vvm-h4{top:80%}.vvm-monitor .vvm-view.vvm-25s .vvm-v1{left:20%}.vvm-monitor .vvm-view.vvm-25s .vvm-v2{left:40%}.vvm-monitor .vvm-view.vvm-25s .vvm-v3{left:60%}.vvm-monitor .vvm-view.vvm-25s .vvm-v4{left:80%}.vvm-monitor .vvm-view.vvm-36s .vvp-player{height:16.66666%;width:16.66666%}.vvm-monitor .vvm-view.vvm-36s .vvp-player .vvp-shade:before{font-size:46px;line-height:46px;top:calc(50% - 23px);left:calc(50% - 23px)}.vvm-monitor .vvm-view.vvm-36s .vvm-h6,.vvm-monitor .vvm-view.vvm-36s .vvm-h7,.vvm-monitor .vvm-view.vvm-36s .vvm-m64,.vvm-monitor .vvm-view.vvm-36s .vvm-v6,.vvm-monitor .vvm-view.vvm-36s .vvm-v7{display:none}.vvm-monitor .vvm-view.vvm-36s .vvm-h1{top:16.66666%}.vvm-monitor .vvm-view.vvm-36s .vvm-h2{top:33.33333%}.vvm-monitor .vvm-view.vvm-36s .vvm-h3{top:49.99999%}.vvm-monitor .vvm-view.vvm-36s .vvm-h4{top:66.66666%}.vvm-monitor .vvm-view.vvm-36s .vvm-h5{top:83.33333%}.vvm-monitor .vvm-view.vvm-36s .vvm-v1{left:16.66666%}.vvm-monitor .vvm-view.vvm-36s .vvm-v2{left:33.33333%}.vvm-monitor .vvm-view.vvm-36s .vvm-v3{left:49.99999%}.vvm-monitor .vvm-view.vvm-36s .vvm-v4{left:66.66666%}.vvm-monitor .vvm-view.vvm-36s .vvm-v5{left:83.33333%}.vvm-monitor .vvm-view.vvm-64s .vvp-player{height:12.5%;width:12.5%}.vvm-monitor .vvm-view.vvm-64s .vvp-player .vvp-shade:before{font-size:40px;line-height:40px;top:calc(50% - 20px);left:calc(50% - 20px)}.vvm-monitor .vvm-view.vvm-64s .vvp-player .vvp-footer .vvp-control-speed{display:none}.vvm-monitor .vvm-view.vvm-64s .vvm-h1{top:12.5%}.vvm-monitor .vvm-view.vvm-64s .vvm-h2{top:25%}.vvm-monitor .vvm-view.vvm-64s .vvm-h3{top:37.5%}.vvm-monitor .vvm-view.vvm-64s .vvm-h4{top:50%}.vvm-monitor .vvm-view.vvm-64s .vvm-h5{top:62.5%}.vvm-monitor .vvm-view.vvm-64s .vvm-h6{top:75%}.vvm-monitor .vvm-view.vvm-64s .vvm-h7{top:87.5%}.vvm-monitor .vvm-view.vvm-64s .vvm-v1{left:12.5%}.vvm-monitor .vvm-view.vvm-64s .vvm-v2{left:25%}.vvm-monitor .vvm-view.vvm-64s .vvm-v3{left:37.5%}.vvm-monitor .vvm-view.vvm-64s .vvm-v4{left:50%}.vvm-monitor .vvm-view.vvm-64s .vvm-v5{left:62.5%}.vvm-monitor .vvm-view.vvm-64s .vvm-v6{left:75%}.vvm-monitor .vvm-view.vvm-64s .vvm-v7{left:87.5%}.vvm-monitor.vvm-theme-blue .vvp-player .vvp-focus{border-color:#1d2088}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var isCallable = __webpack_require__("1626");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fa83":
/***/ (function(module, exports) {

module.exports = require("videojs-contextmenu-pt");

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15f987e0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-video-monitor.vue?vue&type=template&id=4b954602&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vvm-monitor",class:_vm.controlCls},[_c('div',{ref:"view",staticClass:"vvm-view",class:_vm.viewCls},[_vm._l((_vm.videos),function(item,index){return _c('vue-video-player',{key:item.id,ref:item.id,refInFor:true,class:item.cls,attrs:{"connect":item.connect,"options":item.options,"index":index,"lockControlBar":item.lockControlBar,"tag":item.id},on:{"click":_vm.playerClick,"dblclick":_vm.playerDbClick,"vvperror":_vm.playerError}})}),_c('div',{staticClass:"vvm-border vvm-h vvm-h1"}),_c('div',{staticClass:"vvm-border vvm-h vvm-h2"}),_c('div',{staticClass:"vvm-border vvm-h vvm-h3"}),_c('div',{staticClass:"vvm-border vvm-h vvm-h4"}),_c('div',{staticClass:"vvm-border vvm-h vvm-h5"}),_c('div',{staticClass:"vvm-border vvm-h vvm-h6"}),_c('div',{staticClass:"vvm-border vvm-h vvm-h7"}),_c('div',{staticClass:"vvm-border vvm-v vvm-v1"}),_c('div',{staticClass:"vvm-border vvm-v vvm-v2"}),_c('div',{staticClass:"vvm-border vvm-v vvm-v3"}),_c('div',{staticClass:"vvm-border vvm-v vvm-v4"}),_c('div',{staticClass:"vvm-border vvm-v vvm-v5"}),_c('div',{staticClass:"vvm-border vvm-v vvm-v6"}),_c('div',{staticClass:"vvm-border vvm-v vvm-v7"})],2),_c('div',{staticClass:"vvm-control"},[_c('ul',[(_vm.btnView1)?_c('li',[_c('a',{staticClass:"vvm-icon-s1",on:{"click":function($event){return _vm.splitView(1)}}})]):_vm._e(),(_vm.btnView4)?_c('li',[_c('a',{staticClass:"vvm-icon-s4",on:{"click":function($event){return _vm.splitView(4)}}})]):_vm._e(),(_vm.btnView6)?_c('li',[_c('a',{staticClass:"vvm-icon-s6",on:{"click":function($event){return _vm.splitView(6)}}})]):_vm._e(),(_vm.btnView8)?_c('li',[_c('a',{staticClass:"vvm-icon-s8",on:{"click":function($event){return _vm.splitView(8)}}})]):_vm._e(),(_vm.btnView9)?_c('li',[_c('a',{staticClass:"vvm-icon-s9",on:{"click":function($event){return _vm.splitView(9)}}})]):_vm._e(),(_vm.btnView10)?_c('li',[_c('a',{staticClass:"vvm-icon-s10",on:{"click":function($event){return _vm.splitView(10)}}})]):_vm._e(),(_vm.btnView16)?_c('li',[_c('a',{staticClass:"vvm-icon-s16",on:{"click":function($event){return _vm.splitView(16)}}})]):_vm._e(),(_vm.btnView25)?_c('li',[_c('a',{staticClass:"vvm-icon-s25",on:{"click":function($event){return _vm.splitView(25)}}})]):_vm._e(),(_vm.btnView36)?_c('li',[_c('a',{staticClass:"vvm-icon-s36",on:{"click":function($event){return _vm.splitView(36)}}})]):_vm._e(),(_vm.btnView64)?_c('li',[_c('a',{staticClass:"vvm-icon-s64",on:{"click":function($event){return _vm.splitView(64)}}})]):_vm._e(),(_vm.btnViewMute | _vm.btnViewStop | _vm.btnViewClear)?_c('li',{staticClass:"vvm-separator"},[_c('span')]):_vm._e(),(_vm.btnViewMute)?_c('li',[_c('a',{staticClass:"vvm-icon-mute",on:{"click":_vm.mute}})]):_vm._e(),(_vm.btnViewStop)?_c('li',[_c('a',{staticClass:"vvm-icon-stop",on:{"click":_vm.stop}})]):_vm._e(),(_vm.btnViewClear)?_c('li',[_c('a',{staticClass:"vvm-icon-clear",on:{"click":_vm.clear}})]):_vm._e(),(_vm.btnViewFill)?_c('li',{staticClass:"vvm-separator"},[_c('span')]):_vm._e(),(_vm.btnViewFill)?_c('li',[_c('a',{staticClass:"vvm-icon-fill",on:{"click":_vm.togglefill}})]):_vm._e()])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/vue-video-monitor.vue?vue&type=template&id=4b954602&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"15f987e0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-video-player.vue?vue&type=template&id=f85f3464&
var vue_video_playervue_type_template_id_f85f3464_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"vvplayer",staticClass:"vvp-player",class:_vm.fillCls,on:{"click":_vm.handleClick,"dblclick":_vm.handleDblClick}},[_c('div',{staticClass:"vvp-shade",class:_vm.loadingCls},[_c('div',{staticClass:"vjs-loading-spinner"},[_c('span',{staticClass:"vvp-speed"},[_vm._v(_vm._s(_vm.kb))])]),_c('div',{staticClass:"vvp-occupy"},[_vm._v(_vm._s(_vm.infoText))]),_c('div',{staticClass:"vvp-error-ctx"},[_c('div',{staticClass:"vvp-error-button"},[_c('span',{on:{"click":function($event){return _vm.close()}}})]),_c('div',{staticClass:"vvp-error-text",domProps:{"innerHTML":_vm._s(_vm.error)}})])]),_c('div',{staticClass:"vvp-focus",class:_vm.focusCls}),_c('div',{staticClass:"vvp-footer"},[_c('button',{staticClass:"vvp-control vvp-button vvp-control-mute",class:_vm.mutedCls,attrs:{"type":"button","title":"Pause","aria-disabled":"false"},on:{"click":function($event){return _vm.toggleMuted()}}},[_c('span',{staticClass:"vvp-icon-placeholder",attrs:{"aria-hidden":"true"}})]),_c('div',{staticClass:"vvp-control vvp-control-text vvp-control-info"},[_vm._v(" "+_vm._s(_vm.infoText)+" ")]),_c('div',{staticClass:"vvp-control vvp-control-text vvp-control-speed"},[_vm._v(" "+_vm._s(_vm.kbps)+" ")]),_c('button',{staticClass:"vvp-control vvp-button vvp-control-record",class:_vm.recordCls,attrs:{"type":"button","title":"record","aria-disabled":"false"},on:{"click":function($event){return _vm.toggleRecord()}}},[_c('span',{staticClass:"vvp-icon-placeholder",attrs:{"aria-hidden":"true"}})]),_c('button',{staticClass:"vvp-control vvp-button vvp-control-fullscreen",attrs:{"type":"button","title":"Fullscreen","aria-disabled":"false"},on:{"click":function($event){return _vm.fullscreen()}}},[_c('span',{staticClass:"vvp-icon-placeholder",attrs:{"aria-hidden":"true"}})]),_c('button',{staticClass:"vvp-control vvp-button vvp-control-close",attrs:{"type":"button","title":"Close","aria-disabled":"false"},on:{"click":function($event){return _vm.close()}}},[_c('span',{staticClass:"vvp-icon-placeholder",attrs:{"aria-hidden":"true"}})])])])}
var vue_video_playervue_type_template_id_f85f3464_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue-video-player.vue?vue&type=template&id=f85f3464&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.fill.js
var es_array_fill = __webpack_require__("cb29");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__("b680");

// EXTERNAL MODULE: external "video.js"
var external_video_js_ = __webpack_require__("0334");
var external_video_js_default = /*#__PURE__*/__webpack_require__.n(external_video_js_);

// EXTERNAL MODULE: ./node_modules/video.js/dist/video-js.min.css
var video_js_min = __webpack_require__("4bcc");

// EXTERNAL MODULE: external "videojs-flvjs-es6"
var external_videojs_flvjs_es6_ = __webpack_require__("9767");

// EXTERNAL MODULE: external "videojs-fetch-flv"
var external_videojs_fetch_flv_ = __webpack_require__("9063");

// EXTERNAL MODULE: ./node_modules/videojs-fetch-flv/dist/videojs-fetch-flv.css
var videojs_fetch_flv = __webpack_require__("6358");

// EXTERNAL MODULE: external "videojs-contextmenu-pt"
var external_videojs_contextmenu_pt_ = __webpack_require__("fa83");

// EXTERNAL MODULE: ./node_modules/videojs-contextmenu-pt/dist/videojs-contextmenu-pt.css
var videojs_contextmenu_pt = __webpack_require__("007b");

// EXTERNAL MODULE: external "flv.js"
var external_flv_js_ = __webpack_require__("480f");
var external_flv_js_default = /*#__PURE__*/__webpack_require__.n(external_flv_js_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-video-player.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








external_flv_js_default.a.LoggingControl.enableDebug = false;
external_flv_js_default.a.LoggingControl.enableVerbose = false;
external_flv_js_default.a.LoggingControl.enableWarn = false;
external_flv_js_default.a.LoggingControl.enableError = false; // console.log(flvjs.Events.STATISTICS_INFO)
// const FLVJS_EVENTS_STATISTICS_INFO = 'statistics_info'
// const FLVJS_EVENTS_ERROR = 'error'
// 超过5个process 都没有收到音频流 自动重载播放器

var ERR_MAX_AUDIO_COUNT = 6;
var defaults = {
  autoplay: true,
  // fill: true,
  // responsive: true,
  controlBar: {
    pictureInPictureToggle: false,
    closeButton: true,
    subsCapsButton: false
  },
  // @see https://github.com/bilibili/flv.js/blob/master/docs/api.md
  flvjs: {
    mediaDataSource: {
      isLive: true,
      cors: true,
      withCredentials: false,
      hasAudio: true
    },
    config: {
      // 启用IO存储缓冲区。如果您需要实时流播放的实时（最小延迟），则设置为false
      enableStashBuffer: false,
      // 禁用音视频同步
      fixAudioTimestampGap: false
    }
  }
};
var playerOptions = {
  src: '',
  isLive: true,
  record: {
    enabled: false,
    isLive: true
  },
  // 上下文菜单
  content: null,
  data: {
    // 唯一值
    unique: null,
    // 用户数据
    user: null
  },
  hasAudio: true,
  text: ''
};
/* harmony default export */ var vue_video_playervue_type_script_lang_js_ = ({
  name: 'VueVideoPlayer',
  props: {
    // 自动追帧
    autoRate: {
      type: Object,
      default: function _default() {
        return {
          enabled: true,
          max: 9.0,
          min: 3.0
        };
      }
    },
    // 当出错时自动重连
    connect: {
      type: Object,
      default: function _default() {
        return {
          auto: false,
          interval: 15
        };
      }
    },
    lockControlBar: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    index: {
      type: Number,
      default: null
    },
    tag: {
      type: String,
      default: null
    },
    fill: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      id: null,
      player: null,
      // 0=空闲 1=占用中 2=请求中 3=播放中/缓冲中 4=错误
      status: 0,
      focused: false,
      error: '',
      // 当http-flv头有音视频 但http-flv没有音频流时 自动重置播放器
      autoAudio: true,
      progress: 0,
      lastOptions: null,
      filename: null,
      muted: true,
      suffix: null,
      // 加载flv时用于显示加载网速
      speed: null,
      // 创建时间(或占用时间)
      order: 0,
      // 播放速率
      rate: 1.0,
      lastDecodedFrame: 0,
      lastDecodedCount: 0,
      fetching: false
    };
  },
  computed: {
    loadingCls: function loadingCls() {
      switch (this.status) {
        case 0:
          return '';

        case 1:
        case 2:
          return 'vjs-waiting';

        case 4:
          return 'vvp-error';

        default:
          return 'vvp-hide';
      }
    },
    fillCls: function fillCls() {
      var cls = '';

      if (this.lockControlBar) {
        if (this.status > 0) {
          // 开始播放或占用时才显示控制栏
          cls = 'vvp-footer-show';
        }
      }

      if (this.fill) {
        return cls + ' vvp-fill';
      } else {
        return cls;
      }
    },
    focusCls: function focusCls() {
      if (this.focused) {
        return 'vvp-focus-show';
      } else {
        return '';
      }
    },
    kbps: function kbps() {
      if (this.speed == null) {
        return '';
      } else {
        return this.speed + ' kb/s';
      }
    },
    kb: function kb() {
      if (this.speed == null) {
        return '';
      } else {
        return this.speed + 'kb';
      }
    },
    infoText: function infoText() {
      if (this.lastOptions && this.lastOptions.text) {
        return this.lastOptions.text;
      } else {
        return '';
      }
    },
    mutedCls: function mutedCls() {
      if (this.muted) {
        return 'vvp-vol-0';
      } else {
        return 'vvp-vol-3';
      }
    },
    recordCls: function recordCls() {
      var cls = '';

      if (this.lastOptions && this.lastOptions.record && this.lastOptions.record.enabled) {
        if (this.fetching) {
          cls = 'vvp-fetching';
        }
      } else {
        cls = 'vvp-hide';
      }

      return cls;
    }
  },
  methods: {
    close: function close() {
      if (this.player) {
        // this.player.reset()
        // 如果在录像中 需要停止录像功能
        if (this.fetching) {
          this.player.fetchObj.stop(false);
        }

        this.order = 0;
      }

      this.status = 0;
      this.destoryPlayer();
      this.autoAudio = true;
      this.error = '';
      this.speed = null;
      this.filename = null;
      this.progress = 0;
      this.lastOptions = null;
      this.rate = 1.0;
      this.muted = true;
      this.lastDecodedCount = 0;
      this.lastDecodedFrame = 0;
      this.fetching = false;
    },
    createHeader: function createHeader(player) {
      var video = player.el(); // Create div element

      var div = document.createElement('div');
      div.classList.add('vjs-header');
      var infoEl = document.createElement('div'); // infoEl.classList.add('vjs-h-info')
      // infoEl.innerText = ''

      div.appendChild(infoEl);
      var speedEl = document.createElement('div');
      speedEl.classList.add('vjs-h-speed');
      div.appendChild(speedEl);
      player.header = {
        el: {
          div: div,
          info: infoEl,
          speed: speedEl
        }
      };
      video.appendChild(div);
    },
    createPlayer: function createPlayer() {
      var _this = this;

      var el = document.createElement('video');
      el.id = this.id;
      el.className = 'video-js vjs-big-play-centered';
      el.setAttribute('preload', null);
      el.innerHTML = '<p class="vjs-no-js">Please consider upgrading to a web browser that supports HTML5 video</p>';
      this.$refs.vvplayer.appendChild(el);
      var options = external_video_js_default.a.mergeOptions(defaults, this.options);
      this.player = external_video_js_default()(this.id, options);

      if (options.controlBar.closeButton) {
        this.player.controlBar.closeButton.on('close', function () {
          _this.close();
        });
      } // 创建顶部显示条


      this.createHeader(this.player);

      if (this.lockControlBar) {
        this.player.controlBar.hide();
      } // 正常加载流程 flv
      // ready -> loadstart -> loadedmetadata -> loadeddata -> playing
      // rtmp连接成功 但没图像
      // ready -> loadstart
      // rtmp mp4 连接不成功
      // ready -> error
      // hls连接不成功
      // ready -> loadstart -> error


      this.player.on('ready', function () {
        var flvPlayer = _this.player.tech({
          IWillNotUseThisInPlugins: true
        }).flvPlayer;

        if (flvPlayer) {
          flvPlayer.on(external_flv_js_default.a.Events.ERROR, function (errType, errDetails, e) {
            _this.status = 4;
            _this.error = _this.getError('(flv) ' + e.msg);

            switch (errType) {
              case external_flv_js_default.a.ErrorTypes.NETWORK_ERROR:
                // 存在多种情况 以下是常见几种
                // ERR_FAILED 504 连接到srs 超过1分钟一直没有等到流时提示  Exception
                // ERR_CONNECTION_REFUSED 访问到一个不存在的IP地址时 Exception
                // ERR_CONNECTION_TIMED_OUT IP地址存在 端口不存在时 Exception
                // ERR_INCOMPLETE_CHUNKED_ENCODING 服务器停止推流 UnrecoverableEarlyEof
                _this.$emit('vvperror', _this, errType, errDetails, e);

                break;

              case external_flv_js_default.a.ErrorTypes.MEDIA_ERROR:
                break;

              case external_flv_js_default.a.ErrorTypes.OTHER_ERROR:
                break;
            }
          });
          flvPlayer.on(external_flv_js_default.a.Events.STATISTICS_INFO, function (info) {
            _this.speed = info.speed.toFixed(0);

            _this.updateSpeed();

            if (_this.lastDecodedFrame === 0) {
              _this.lastDecodedFrame = info.decodedFrames;
              return;
            }

            if (_this.lastDecodedFrame !== info.decodedFrames) {
              _this.lastDecodedFrame = info.decodedFrames;
              _this.lastDecodedCount = 0;
            } else {
              _this.lastDecodedCount++; // 30 约等于18秒 画面卡死时重连

              if (_this.lastDecodedCount >= 30) {
                _this.lastDecodedCount = 0;
                _this.lastDecodedFrame = 0;

                if (_this.connect && _this.connect.auto) {
                  _this.player.setTimeout(function () {
                    window.console.warn(_this.lastOptions.src + ' decoded error. reconnect. ');

                    _this.play(_this.lastOptions);
                  }, 300);
                }
              }
            }
          });
        }

        if (!_this.player.fetchObj) {
          _this.player.fetchObj = _this.player.fetchFlv({
            isLive: true
          });
        }
      });
      this.player.on('loadeddata', function () {
        _this.status = 3;
      });
      this.player.on('durationchange', function () {
        if (!_this.player.controlBar.liveDisplay.hasClass('vjs-hidden')) {
          // 实时关掉 播放暂停按钮
          _this.player.controlBar.playToggle.hide();

          _this.player.controlBar.liveDisplay.addClass('vvp-live');
        } else {
          _this.player.controlBar.liveDisplay.removeClass('vvp-live');
        }
      });
      this.player.on('pause', function () {
        // 不允许隐藏时暂停
        _this.player.play();
      }); // this.player.on('playing', () => {
      //   // console.log('playing')
      //   // 一直执行
      // })

      this.player.on('fetchStart', function () {
        _this.fetching = true;
      });
      this.player.on('fetchStop', function () {
        _this.fetching = false;
      });
      this.player.on('progress', function () {
        // console.log('progress')
        if (_this.autoAudio && _this.lastOptions.hasAudio) {
          // 如果 m3u8 关闭这个功能
          if (_this.filename) {
            if (_this.suffix === 'm3u8') {
              _this.autoAudio = false;
            }
          }

          _this.progress++;

          if (_this.progress >= ERR_MAX_AUDIO_COUNT) {
            window.console.warn(_this.lastOptions.src + ' has no audio data, video will auto reset to play.'); // 关掉音频 自动重载

            _this.lastOptions.hasAudio = false;

            _this.play(_this.lastOptions);
          }
        }
      });
      this.player.on('canplay', function () {
        // console.log('canplay')
        _this.autoAudio = false;
      });
      this.player.on('timeupdate', function () {
        if (_this.autoRate.enabled && _this.lastOptions.isLive) {
          // 当前播放时间
          var cur = _this.player.currentTime(); // 缓冲区尾部时间


          var end = _this.player.bufferedEnd();

          if (end - cur > _this.autoRate.max) {
            _this.playbackRate(1.5);
          }

          if (end - cur < _this.autoRate.min) {
            _this.playbackRate(1.0);
          }
        }
      });
      this.player.on('fullscreenchange', function () {
        if (_this.player.isFullscreen()) {
          _this.player.controlBar.show();

          _this.player.header.el.div.setAttribute('style', 'display: flex');
        } else {
          if (_this.lockControlBar) {
            _this.player.controlBar.hide();

            _this.player.header.el.div.removeAttribute('style');
          }
        }
      });
      this.player.on('volumechange', function () {
        _this.muted = _this.player.muted();
      }); // this.player.on('loadeddata', () => {
      //   console.log('loadeddata')
      // })
      // this.player.on('loadedmetadata', () => {
      //   console.log('loadedmetadata')
      // })
      // 开启音频 loadedmetadata progress > 5 canplay = false playing=false 重连
      // this.player.on('useractive', () => {
      //   console.log('useractive')
      // })
      // this.player.on('userinactive', () => {
      //   console.log('userinactive')
      // })

      this.player.on('error', function (e) {
        // 播放mp4/m3u8时可以捕获 flv不行
        _this.status = 4;

        if (_this.player.error) {
          switch (_this.player.error().code) {
            case 0:
              _this.error = _this.getError('MEDIA_ERR_CUSTOM');
              break;

            case 1:
              _this.error = _this.getError('MEDIA_ERR_ABORTED');
              break;

            case 2:
              _this.error = _this.getError('MEDIA_ERR_NETWORK');
              break;

            case 3:
              _this.error = _this.getError('MEDIA_ERR_DECODE'); // 重连接 这里用定时器 防止跟上面的flv.error冲突

              if (_this.connect && _this.connect.auto) {
                _this.player.setTimeout(function () {
                  window.console.warn(_this.lastOptions.src + ' will reset and reconnect. ' + _this.player.error().message);

                  _this.play(_this.lastOptions);
                }, 1280);
              }

              break;

            case 4:
              _this.error = _this.getError('network failed or format no supported');
              break;

            case 5:
              _this.error = _this.getError('MEDIA_ERR_ENCRYPTED');
              break;

            default:
              _this.error = _this.getError('unknow error');
          }
        } else {
          _this.error = _this.getError(e.type);
        }
      }); // this.player.on('abort', () => {
      //   console.log('abort')
      // })
      // })
    },
    destoryPlayer: function destoryPlayer() {
      if (this.player) {
        this.player.dispose();
        this.player = null;
      }
    },
    fullscreen: function fullscreen() {
      if (this.player) {
        if (!this.player.isFullscreen()) {
          this.player.requestFullscreen();
        }
      }
    },
    getError: function getError(error) {
      return '<p>' + this.lastOptions.text + '</p><p>' + error + '</p>';
    },
    getMediaType: function getMediaType(url) {
      if (url === null) {
        return 'video/x-flv';
      }

      var sTmp = url.toLowerCase();

      if (sTmp.indexOf('rtmp') == 0) {
        return 'rtmp/mp4';
      } else if (sTmp.indexOf('.flv') > 0) {
        return 'video/x-flv';
      } else if (sTmp.indexOf('.m3u8') > 0) {
        return 'application/x-mpegURL';
      } else if (sTmp.indexOf('.mp4') > 0) {
        return 'video/mp4';
      } else {
        // 什么都没有，默认flv
        return 'video/x-flv';
      }
    },
    getOptions: function getOptions() {
      return this.lastOptions;
    },
    handleClick: function handleClick() {
      this.$emit('click', this);
    },
    handleDblClick: function handleDblClick() {
      this.$emit('dblclick', this);
    },
    mute: function mute() {
      this.player.volume(0);
    },

    /**
     * 占用
     * @param order {int} 创建顺序
     * @param text {string} 占用文本
     */
    occupy: function occupy(order, unique, text) {
      if (this.status === 4) {
        this.close();
      }

      if (this.status === 0) {
        this.order = order;
        this.status = 1;
        this.lastOptions = {
          data: {
            unique: unique
          },
          text: text
        };
      }
    },
    play: function play(option) {
      this.close();
      this.createPlayer();
      var options = external_video_js_default.a.mergeOptions(playerOptions, option);

      if (this.order === 0) {
        this.order = options.order;
      }

      if (!options.hasAudio) {
        this.player.controlBar.volumePanel.hide();

        if (this.player.options().flvjs) {
          this.player.options().flvjs.mediaDataSource.hasAudio = false;
        }
      }

      this.status = 2;
      var type = this.getMediaType(options.src);

      if (options.content) {
        this.player.contextmenuUI({
          content: options.content
        });
      }

      if (options.record && options.record.enabled) {
        if (type === 'rtmp/mp4' || type === 'application/x-mpegURL') {
          // rtmp/m3u8不支持下载
          options.record.enabled = false;
        }
      }

      if (this.player.fetchObj) {
        if (options.record.enabled) {
          this.player.fetchObj.show();
          this.player.fetchObj.updateIsLive(options.record.isLive);
        } else {
          this.player.fetchObj.hide();
        }
      }

      this.filename = this.url2Filename(options.src);
      this.suffix = this.filename.split('.').pop().toLowerCase();

      if (options.data.unique == null) {
        options.data.unique = this.filename;
      }

      var text = this.filename;

      if (options.text && options.text !== '') {
        text = options.text;
      } else {
        options.text = text;
      }

      this.updateInfo(text);
      this.player.src([{
        type: type,
        src: options.src
      }]);
      this.player.autoplay();
      this.lastOptions = options;
    },

    /**
     * 获取或设置当前播放速率
     * @param rateopt {number} 速率值 1.0 表正常播放 0.5表半速
     */
    playbackRate: function playbackRate(rateopt) {
      if (rateopt === null) {
        return this.rate;
      }

      if (this.player) {
        if (this.rate !== rateopt) {
          this.rate = rateopt;
          this.player.playbackRate(this.rate);
          window.console.warn(this.lastOptions.src + ' playback rate change to ' + this.rate);
        }
      }
    },
    randomString: function randomString(len) {
      len = len || 32;
      var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
      var maxPos = $chars.length;
      var pwd = '';

      for (var i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }

      return pwd;
    },
    updateInfo: function updateInfo(text) {
      if (this.player.header) {
        this.player.header.el.info.innerText = text;
      }
    },
    updateSpeed: function updateSpeed() {
      if (this.player.header) {
        this.player.header.el.speed.innerText = this.kbps;
      }
    },
    url2Filename: function url2Filename(url) {
      if (url) {
        var vlist = url.split('?');
        return vlist[0].split('\\').pop().split('/').pop();
      } else {
        return null;
      }
    },
    toggleRecord: function toggleRecord() {
      if (this.player) {
        // 如果在录像中 需要停止录像功能
        if (this.fetching) {
          this.player.fetchObj.stop(true);
        } else {
          this.player.fetchObj.start();
        }
      }
    },
    toggleMuted: function toggleMuted() {
      if (this.player) {
        if (this.player.muted()) {
          this.player.muted(false);
        } else {
          this.player.muted(true);
        }
      }
    }
  },
  mounted: function mounted() {},
  watch: {},
  created: function created() {
    this.id = 'vvp-' + this.randomString(16);
  },
  beforeDestroy: function beforeDestroy() {
    this.destoryPlayer();
  }
});
// CONCATENATED MODULE: ./src/vue-video-player.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_vue_video_playervue_type_script_lang_js_ = (vue_video_playervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue-video-player.vue?vue&type=style&index=0&lang=scss&
var vue_video_playervue_type_style_index_0_lang_scss_ = __webpack_require__("e6d3");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/vue-video-player.vue






/* normalize component */

var component = normalizeComponent(
  src_vue_video_playervue_type_script_lang_js_,
  vue_video_playervue_type_template_id_f85f3464_render,
  vue_video_playervue_type_template_id_f85f3464_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_video_player = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-video-monitor.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var VUE_PLAYER_PREFIX = 'vvplayer';
/* harmony default export */ var vue_video_monitorvue_type_script_lang_js_ = ({
  name: 'VueVideoMonitor',
  components: {
    VueVideoPlayer: vue_video_player
  },
  props: {
    closeAfterViewChange: {
      type: Boolean,
      default: true
    },
    control: {
      type: Object,
      default: function _default() {
        return {
          enabled: true,
          position: 'bottom',
          button: ['1', '4', '6', '8', '9', '10', '16', 'fill', 'mute', 'stop', 'clear']
        };
      }
    },
    count: {
      type: Number,
      default: function _default() {
        return 4;
      }
    },
    // 是否允许使用同一个地址打开多个窗口 默认false
    duplicate: {
      type: Boolean,
      default: false
    },
    focused: {
      type: Boolean,
      default: true
    },

    /**
     * 常驻工具栏
     */
    lockControlBar: {
      type: Boolean,
      default: false
    },
    // 循环创建 不管其他窗口是否打开 关掉最先打开的窗口 并播放新的视频
    loopCreate: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      videos: [],
      viewCount: 4,
      viewList: [1, 4, 6, 8, 9, 10, 16, 25, 36, 64],
      // 最大化的视图
      viewMax: null,
      selected: {
        id: -1,
        player: null
      },
      filled: true,
      createOrder: 0
    };
  },
  computed: {
    btnView1: function btnView1() {
      return this.calcBtnView('1');
    },
    btnView4: function btnView4() {
      return this.calcBtnView('4');
    },
    btnView6: function btnView6() {
      return this.calcBtnView('6');
    },
    btnView8: function btnView8() {
      return this.calcBtnView('8');
    },
    btnView9: function btnView9() {
      return this.calcBtnView('9');
    },
    btnView10: function btnView10() {
      return this.calcBtnView('10');
    },
    btnView16: function btnView16() {
      return this.calcBtnView('16');
    },
    btnView25: function btnView25() {
      return this.calcBtnView('25');
    },
    btnView36: function btnView36() {
      return this.calcBtnView('36');
    },
    btnView64: function btnView64() {
      return this.calcBtnView('64');
    },
    btnViewFill: function btnViewFill() {
      return this.calcBtnView('fill');
    },
    btnViewMute: function btnViewMute() {
      return this.calcBtnView('mute');
    },
    btnViewStop: function btnViewStop() {
      return this.calcBtnView('stop');
    },
    btnViewClear: function btnViewClear() {
      return this.calcBtnView('clear');
    },
    controlCls: function controlCls() {
      if (this.control.enabled) {
        if (this.control.position === 'top') {
          return 'vvm-control-top';
        } else {
          return '';
        }
      } else {
        return 'vvm-control-hide';
      }
    },
    viewCls: function viewCls() {
      var cls = 'vvm-' + this.viewCount + 's';

      if (this.filled) {
        cls = cls + ' vvm-fill';
      }

      if (this.viewMax) {
        cls = cls + ' vvm-max';
      }

      return cls;
    }
  },
  methods: {
    /**
     * 申请一个播放窗口
     */
    apply: function apply(param) {
      var player = null;

      if (param.viewIndex !== null) {
        // 优先占用指定窗口
        player = this.getPlayerById(VUE_PLAYER_PREFIX + param.viewIndex);

        if (player) {
          // 存在时关闭旧的
          player.close();
          player.occupy(this.newOrder(), param.unique, param.text);
          this.setFocus(player);
          return player.index;
        }
      }

      if (this.duplicate) {
        // 允许重复 判断有没有空的窗口
        player = this.getIdleView();
      } else {
        // 不允许重复 判断窗口是否正在播放中
        player = this.getPlaying(param.unique);

        if (player) {
          // 正在播放中 设置焦点
          this.setFocus(player);
          return -1;
        } else {
          // 没有在播放 获取一个空闲窗口
          player = this.getIdleView();
        }
      }

      if (player) {
        // 有可用窗口 占用
        player.occupy(this.newOrder(), param.unique, param.text);
        this.setFocus(player);
        return player.index;
      } // 窗口都被用了 关掉最先创建的窗口


      if (this.loopCreate) {
        // 允许关旧的创建新的
        player = this.getEarlyView();

        if (player) {
          // 存在时关闭旧的
          player.close();
          player.occupy(this.newOrder(), param.unique, param.text);
          this.setFocus(player);
          return player.index;
        }

        return -1;
      } else {
        return -1;
      }
    },
    calcBtnView: function calcBtnView(value) {
      if (this.control.button.indexOf(value) === -1) {
        return false;
      } else {
        return true;
      }
    },
    calcCls: function calcCls(index) {
      switch (index) {
        case 0:
          return 'vvm-m1 vvm-s0';

        case 1:
          return 'vvm-m4 vvm-s1';

        case 2:
        case 3:
          return 'vvm-m4';

        case 4:
        case 5:
          return 'vvm-m6';

        case 6:
        case 7:
          return 'vvm-m8';

        case 8:
          return 'vvm-m9';

        case 9:
          return 'vvm-m10';

        default:
          if (index >= 36) {
            return 'vvm-m64';
          }

          if (index >= 25) {
            return 'vvm-m36';
          }

          if (index >= 16) {
            return 'vvm-m25';
          }

          if (index >= 10) {
            return 'vvm-m16';
          }

      }
    },
    clearMaxClass: function clearMaxClass() {
      var _this = this;

      this.videos.forEach(function (value) {
        var player = _this.getPlayerById(value.id);

        player.$el.classList.remove('vvp-max');
      });
    },

    /**
     * 关闭所有视频
     */
    clear: function clear() {
      var _this2 = this;

      this.videos.forEach(function (value) {
        var player = _this2.getPlayerById(value.id);

        player.close();
      });

      if (this.viewMax) {
        this.viewMax = null;
      }
    },
    createView: function createView() {
      for (var i = 0; i < this.viewCount; i++) {
        var id = VUE_PLAYER_PREFIX + i;

        if (!this.isViewExist(id)) {
          this.videos.push({
            id: id,
            cls: this.calcCls(i),
            connect: {
              // 开启出错时自动重连
              auto: true,
              interval: 15
            },
            lockControlBar: this.lockControlBar,
            options: {
              controls: true,
              muted: true,
              loop: false
            }
          });
        }
      }
    },
    fill: function fill(bFill) {
      this.filled = bFill;
    },

    /**
     * 只支持 1 4 6 8 9 10 16 25 36 64 分屏
     */
    fixViewCount: function fixViewCount(uCount) {
      if (this.viewList.indexOf(uCount) === -1) {
        return 4;
      } else {
        return uCount;
      }
    },

    /**
     * 获取最早创建的窗口
     */
    getEarlyView: function getEarlyView() {
      var lastPlayer = null;
      var testOrder = this.createOrder + 100;

      for (var i = 0; i < this.viewCount; i++) {
        var player = this.getPlayerById(this.videos[i].id); // 被占用 或 播放中 或 报错的窗口

        if (player.status > 0) {
          if (player.order <= testOrder) {
            lastPlayer = player;
            testOrder = player.order;
          }
        }
      }

      return lastPlayer;
    },

    /**
     * 获取空闲视图
     */
    getIdleView: function getIdleView() {
      // 没有在播放
      for (var i = 0; i < this.viewCount; i++) {
        var player = this.getPlayerById(this.videos[i].id); // 空的窗口 或 报错的窗口

        if (player.status === 0 || player.status === 4) {
          return player;
        }
      }

      return null;
    },

    /**
     * 通过id获取vue播放器对象
     */
    getPlayerById: function getPlayerById(id) {
      var ref = this.$refs[id];

      if (ref) {
        return ref[0];
      }

      return null;
    },

    /**
     * 通过播放信息判断是否正在播放
     */
    getPlaying: function getPlaying(unique) {
      if (unique == null) {
        return null;
      }

      for (var i = 0; i < this.viewCount; i++) {
        var player = this.getPlayerById(this.videos[i].id); // 报错的窗口 或 正在播放中的窗口

        if (player.status > 0 && player.status < 4) {
          if (unique === player.getOptions().data.unique) {
            return player;
          }
        }
      }

      return null;
    },

    /**
     * 返回选中的窗口播放器
     */
    getSelected: function getSelected() {
      return this.getPlayerById(VUE_PLAYER_PREFIX + this.selected.id);
    },
    getUserData: function getUserData(unique) {
      var player = this.getPlaying(unique);

      if (player) {
        var opt = player.getOptions();

        if (opt && opt.data.user) {
          return opt.data.user;
        }
      }

      return null;
    },
    getViewCount: function getViewCount() {
      return this.viewCount;
    },

    /**
     * 判断视图窗口是否存在
     */
    isViewExist: function isViewExist(id) {
      var ret = false;
      this.videos.forEach(function (value) {
        if (value.id === id) {
          ret = true;
          return;
        }
      });
      return ret;
    },
    mute: function mute() {
      var _this3 = this;

      this.videos.forEach(function (value) {
        var player = _this3.getPlayerById(value.id);

        player.mute();
      });
    },
    newOrder: function newOrder() {
      this.createOrder++;
      return this.createOrder;
    },
    play: function play(options) {
      var unique = this.url2Filename(options.src);

      if (options.data && options.data.unique) {
        unique = options.data.unique;
      } // 判断是否正在播放中


      var player = this.getPlaying(unique);

      if (player && player.status > 1 && !this.duplicate) {
        // 播放中 并不允许重复
        return;
      }

      if (Object.prototype.hasOwnProperty.call(options, 'viewIndex') && options.viewIndex >= 0 && options.viewIndex < this.viewCount) {
        // 指定播放位置
        player = this.getPlayerById(VUE_PLAYER_PREFIX + options.viewIndex);
      } else {
        // 获取空闲
        player = this.getIdleView();
      }

      if (player) {
        options.order = this.newOrder();
        player.play(options);
      }
    },
    playerClick: function playerClick(player) {
      this.setFocus(player);
    },
    playerDbClick: function playerDbClick(player) {
      if (this.viewCount === 1) {
        return;
      }

      if (this.viewMax === player) {
        this.viewMax = null;
      } else {
        this.viewMax = player;
      }
    },
    playerError: function playerError(player, errType, errDetails, e) {
      this.$emit('error', player, errType, errDetails, e);
    },
    setFocus: function setFocus(player) {
      var lastFocus = this.getPlayerById(VUE_PLAYER_PREFIX + this.selected.id);

      if (lastFocus) {
        lastFocus.focused = false;
      }

      this.selected.id = player.index;
      this.selected.player = player;

      if (this.focused) {
        player.focused = true;
      }
    },

    /**
     * 分割屏幕
     */
    splitView: function splitView(uCount) {
      if (this.viewMax) {
        this.viewMax = null;
      }

      this.viewCount = this.fixViewCount(uCount); // 如果窗口不存在 创建

      this.createView(); // 视图数变化时

      if (this.closeAfterViewChange) {
        for (var i = this.viewCount; i < this.videos.length; i++) {
          var player = this.getPlayerById(this.videos[i].id);

          if (player) {
            player.close();
          }
        }
      }
    },

    /**
     * 关闭选中的视频窗口
     */
    stop: function stop() {
      var selectPlayer = this.getPlayerById(VUE_PLAYER_PREFIX + this.selected.id);

      if (selectPlayer) {
        selectPlayer.close();

        if (this.viewMax) {
          this.viewMax = null;
        }
      }
    },
    togglefill: function togglefill() {
      this.filled = !this.filled;
    },
    url2Filename: function url2Filename(url) {
      if (url) {
        var vlist = url.split('?');
        return vlist[0].split('\\').pop().split('/').pop();
      } else {
        return null;
      }
    }
  },
  created: function created() {
    this.viewCount = this.fixViewCount(this.count);
    this.createView();
  },
  watch: {
    count: function count(value) {
      this.viewCount = this.fixViewCount(value);
      this.createView();
    },
    viewCount: function viewCount(value) {
      if (value === 1) {
        this.viewMax = null;
      }
    },
    viewMax: function viewMax(value) {
      if (value) {
        value.$el.classList.add('vvp-max');
      } else {
        this.clearMaxClass();
      }
    }
  },
  mounted: function mounted() {}
});
// CONCATENATED MODULE: ./src/vue-video-monitor.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_vue_video_monitorvue_type_script_lang_js_ = (vue_video_monitorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue-video-monitor.vue?vue&type=style&index=0&lang=scss&
var vue_video_monitorvue_type_style_index_0_lang_scss_ = __webpack_require__("37d8");

// CONCATENATED MODULE: ./src/vue-video-monitor.vue






/* normalize component */

var vue_video_monitor_component = normalizeComponent(
  src_vue_video_monitorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_video_monitor = (vue_video_monitor_component.exports);
// CONCATENATED MODULE: ./src/index.js

 // 注册组件

vue_video_monitor.install = function (Vue) {
  return Vue.component(vue_video_monitor.name, vue_video_monitor);
};

/* harmony default export */ var src_0 = (vue_video_monitor);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fce3":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ "fd6f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vvp-player{width:352px;height:288px;position:relative}.vvp-player .vvp-shade{position:absolute;width:100%;height:100%;z-index:3;background-color:#000;font-family:VideoJs}.vvp-player .vvp-shade:before{display:block;content:\"\";font-size:72px;line-height:72px;color:grey;opacity:.8;top:calc(50% - 36px);left:calc(50% - 36px);position:absolute}.vvp-player .vvp-shade.vjs-waiting:before{content:\"\"}.vvp-player .vvp-shade.vjs-waiting .vjs-loading-spinner{margin:-27px 0 0 -27px;width:54px;height:54px;border-radius:27px}.vvp-player .vvp-shade.vjs-waiting .vvp-occupy{display:block}.vvp-player .vvp-shade .vvp-speed{position:absolute;color:#aaa;text-align:center;width:42px;top:15px;font-family:Avenir,Helvetica,Arial,sans-serif;font-size:10px}.vvp-player .vvp-shade .vvp-occupy{display:none;position:absolute;width:100%;top:calc(50% + 33px);color:#aaa;text-align:center}.vvp-player .vvp-shade .vvp-error-ctx{display:none}.vvp-player .vvp-shade.vvp-error{display:table}.vvp-player .vvp-shade.vvp-error:before{content:\"\"}.vvp-player .vvp-shade.vvp-error .vvp-error-ctx{display:table-cell;vertical-align:middle;font-family:VideoJs;text-align:center;opacity:.8}.vvp-player .vvp-shade.vvp-error .vvp-error-ctx:before{display:block;content:\"\";font-size:48px;color:grey}.vvp-player .vvp-shade.vvp-error .vvp-error-ctx .vvp-error-text{font-size:12px;color:#aaa;position:absolute;top:calc(50% + 25px);width:100%}.vvp-player .vvp-shade.vvp-error .vvp-error-ctx .vvp-error-text p{margin:3px 0}.vvp-player .vvp-shade.vvp-error .vvp-error-ctx .vvp-error-button{position:absolute;top:calc(50% - 24px);width:100%}.vvp-player .vvp-shade.vvp-error .vvp-error-ctx .vvp-error-button span{cursor:pointer;display:block;height:48px;width:48px;margin:0 auto}.vvp-player .vvp-footer{position:absolute;bottom:0;height:30px;width:100%;background:rgba(30,30,30,.72);display:none}.vvp-player .vvp-footer .vvp-control{position:relative;text-align:center;margin:0;padding:0;height:100%;flex:none;color:#aaa}.vvp-player .vvp-footer .vvp-button{background:0 0;border:none;cursor:pointer;display:inline-block;text-transform:none;text-decoration:none;transition:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:36px;font-size:18px;line-height:30px}.vvp-player .vvp-footer .vvp-button:hover{text-shadow:0 0 1em #fff;color:#ccc}.vvp-player .vvp-footer .vvp-button:active{text-shadow:0 0 1em #fff;color:#fff}.vvp-player .vvp-footer .vvp-control-text{line-height:30px}.vvp-player .vvp-footer .vvp-control-speed{width:55px}.vvp-player .vvp-footer .vvp-control-info{width:auto;flex-grow:1;text-align:left;margin:0 5px}.vvp-player .vvp-footer .vvp-icon-placeholder{font-family:VideoJS;font-weight:400;font-style:normal}.vvp-player .vvp-footer .vvp-control-mute .vvp-icon-placeholder:before,.vvp-player .vvp-footer .vvp-vol-0 .vvp-icon-placeholder:before{content:\"\"}.vvp-player .vvp-footer .vvp-vol-3 .vvp-icon-placeholder:before{content:\"\"}.vvp-player .vvp-footer .vvp-control-fullscreen .vvp-icon-placeholder:before{content:\"\";font-size:22px;line-height:30px}.vvp-player .vvp-footer .vvp-control-record .vvp-icon-placeholder:before{content:\"\"}.vvp-player .vvp-footer .vvp-fetching .vvp-icon-placeholder:before{color:red}.vvp-player .vvp-footer .vvp-control-close .vvp-icon-placeholder:before{content:\"\"}.vvp-player .vvp-footer .vvp-control-snap .vvp-icon-placeholder:before{content:\"\"}.vvp-player .vvp-focus{position:absolute;width:100%;height:100%;border:1px solid green;box-sizing:border-box;z-index:6;display:none;pointer-events:none}.vvp-player .vvp-focus-show{display:block}.vvp-player .video-js{width:100%;height:100%}.vvp-player .video-js.vjs-playing .vjs-tech{pointer-events:none}.vvp-player .video-js .vjs-close-button{position:relative;height:100%;top:3px;font-size:.85em}.vvp-player .video-js .vvp-live .vjs-live-display{padding-left:6px}.vvp-player .vjs-header{position:absolute;top:0;display:none;flex-flow:row nowrap;justify-content:space-between;width:100%;height:3em;background-color:rgba(43,51,63,.7);pointer-events:none}.vvp-player .vjs-header>div{display:inline-block;line-height:3em;padding:0 10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vvp-player .vjs-header .vjs-h-speed{min-width:75px;text-align:right}.vvp-player .vjs-has-started .vjs-header{display:flex;visibility:visible;opacity:1;transition:visibility .1s,opacity .1s}.vvp-player .vjs-has-started .vjs-fetch-flv-ctx{top:25px!important}.vvp-player .vjs-has-started.vjs-user-inactive.vjs-playing .vjs-header{visibility:visible;opacity:0;pointer-events:none;transition:visibility 1s,opacity 1s}.vvp-player .vjs-has-started.vjs-user-inactive.vjs-playing .vjs-fetch-flv-ctx{top:0!important;transition:top 1.1s}.vvp-player .vvp-hide{display:none!important}.vvp-player.vvp-fill .video-js .vjs-tech{-o-object-fit:fill;object-fit:fill}.vvp-player.vvp-footer-show .vvp-shade{height:calc(100% - 30px)}.vvp-player.vvp-footer-show .vvp-footer{display:flex}.vvp-player.vvp-footer-show .video-js{height:calc(100% - 30px)}.vvp-player.vvp-footer-show .video-js .vjs-header{display:none}.vvp-player.vvp-footer-show .vjs-has-started .vjs-fetch-flv-ctx{top:0!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });