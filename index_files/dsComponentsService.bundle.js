(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["dsComponentsService"] = factory(require("lodash"));
	else
		root["dsComponentsService"] = factory(root["_"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		35: 0,
/******/ 		37: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"66":"wixui.dsComponentDefinitions"}[chunkId]||chunkId) + ".chunk.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "https://static.parastorage.com/services/wix-ui-santa/1.456.0/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	__webpack_require__.p = typeof window !== 'undefined' && window.__STATICS_BASE_URL__ || __webpack_require__.p;
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1348);
/******/ })
/************************************************************************/
/******/ ({

/***/ 108:
/*!********************************************!*\
  !*** ./components-service/base-service.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ../overrides */ 63),
    getOverrides = _require.getOverrides;

function BaseService(_compsToPackages) {
  var compsToPackages = _compsToPackages;

  var overrides = getOverrides();

  function setWebpackPublicPath(baseUrl) {
    __webpack_require__.p = baseUrl + '/'; // eslint-disable-line
  }

  function loadComponent(componentType) {
    if (overrides[componentType]) {
      componentType = overrides[componentType].newComponentViewerType;
    }
    if (!exists(componentType)) {
      return Promise.reject(new Error('no such component ' + componentType));
    }
    return compsToPackages[componentType]().catch(function (e) {
      //fix for ie11, doesn't load components
      console.error('coudn\'t load ' + componentType, e);
      return [{
        default: {
          componentType: componentType,
          component: function component() {
            return null;
          },
          santaComponent: function santaComponent() {
            return null;
          },
          skin: {}
        }
      }];
    });
  }

  function exists(componentType, runningExperiments) {
    return !!compsToPackages[componentType] || overrides[componentType] && runningExperiments && runningExperiments[overrides[componentType].viewerExperimentKey] === 'new';
  }

  function loadAll(baseUrl) {
    setWebpackPublicPath(baseUrl);
    return Promise.all(Object.keys(compsToPackages).map(loadComponent));
  }

  function load(componentType, baseUrl) {
    setWebpackPublicPath(baseUrl);
    return loadComponent(componentType);
  }

  return {
    exists: exists,
    loadAll: loadAll,
    load: load
  };
}

module.exports = BaseService;

/***/ }),

/***/ 1348:
/*!**********************************!*\
  !*** ./components-service/ds.js ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _baseService = __webpack_require__(/*! ./base-service */ 108);

var _baseService2 = _interopRequireDefault(_baseService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compsToPackages = {
  'wixui.RichTextBox': function wixuiRichTextBox() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../legacy/components/RichTextBox/ds */ 119, 7))]);
  },
  'wixui.ToggleSwitch': function wixuiToggleSwitch() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../legacy/components/ToggleSwitch/ds */ 120, 7))]);
  },
  'wixui.Slider': function wixuiSlider() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../components/Slider/ds */ 73, 7))]);
  },
  'wixui.SearchBox': function wixuiSearchBox() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../components/SearchBox/ds */ 121, 7))]);
  },
  'wixui.Captcha': function wixuiCaptcha() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../components/Captcha/ds */ 130, 7))]);
  },
  'wixui.Pagination': function wixuiPagination() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../components/Pagination/ds */ 248, 7))]);
  },
  'wixui.AddressInput': function wixuiAddressInput() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../components/AddressInput/ds */ 124, 7))]);
  },
  'wixui.StylableLine': function wixuiStylableLine() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../components/StylableLine/ds */ 249, 7))]);
  },
  'wixui.Tags': function wixuiTags() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../components/Tags/ds */ 127, 7))]);
  },
  'wixui.RatingsInput': function wixuiRatingsInput() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../components/RatingsInput/ds */ 125, 7))]);
  },
  'wixui.TimePicker': function wixuiTimePicker() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../components/TimePicker/ds */ 123, 7))]);
  },
  'wixui.RatingsDisplay': function wixuiRatingsDisplay() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../components/RatingsDisplay/ds */ 126, 7))]);
  },
  'wixui.VideoPlayer': function wixuiVideoPlayer() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../components/VideoPlayer/ds */ 128, 7))]);
  },
  'wixui.baseui.ToggleSwitch': function wixuiBaseuiToggleSwitch() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../baseUI/components/BaseUIToggleSwitch/ds */ 1044, 7))]);
  },
  'wixui.LineShareButton': function wixuiLineShareButton() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../components/LineShareButton/ds */ 129, 7))]);
  },
  'wixui.MusicPlayer': function wixuiMusicPlayer() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../components/MusicPlayer/ds */ 131, 7))]);
  },
  'wixui.StylableButton': function wixuiStylableButton() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../components/StylableButton/ds */ 132, 7))]);
  },
  'wixui.ProgressBar': function wixuiProgressBar() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../components/ProgressBar/ds */ 133, 7))]);
  },
  'wixui.BarChart': function wixuiBarChart() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../components/BarChart/ds */ 122, 7))]);
  },
  'wixui.CustomElementComponent': function wixuiCustomElementComponent() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../components/CustomElement/ds */ 134, 7))]);
  },
  'wixui.SignatureInput': function wixuiSignatureInput() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../components/SignatureInput/ds */ 135, 7))]);
  },
  'wixui.FileUploaderNew': function wixuiFileUploaderNew() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../components/FileUploaderNew/ds */ 136, 7))]);
  },
  'wixui.Dropdown': function wixuiDropdown() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../components/Dropdown/ds */ 250, 7))]);
  },

  'wixui.SelectionTagsList': function wixuiSelectionTagsList() {
    return Promise.all([__webpack_require__.e(/*! import() | wixui.dsComponentDefinitions */ 66).then(__webpack_require__.t.bind(null, /*! ../components/SelectionTagsList/ds */ 137, 7))]);
  }
};

module.exports = new _baseService2.default(compsToPackages);

/***/ }),

/***/ 2:
/*!*************************************************************************************!*\
  !*** external {"amd":"lodash","commonjs":"lodash","commonjs2":"lodash","root":"_"} ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 25:
/*!**************************************************!*\
  !*** ./components/Dropdown/componentOverride.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  overrideViewerType: 'wysiwyg.viewer.components.inputs.ComboBoxInput',
  overrideDisplayName: 'ComboBoxInput',
  overrideComponentSkin: 'ComboBoxInputSkin',
  //
  viewerExperimentKey: 'useNewWUSDropdown',
  editorExperimentKey: 'specs.wus.useNewDropdown',
  //
  newComponentViewerType: 'wixui.Dropdown',
  newDisplayName: 'Dropdown',
  newComponentSkin: 'ComboBoxInputSkinNew'
};

/***/ }),

/***/ 63:
/*!**********************!*\
  !*** ./overrides.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createOverrideMap = function createOverrideMap(requireFn) {
  return requireFn.keys().map(requireFn).reduce(function (overridesMap, compOverrideMetadata) {
    overridesMap[compOverrideMetadata.overrideViewerType] = compOverrideMetadata;
    return overridesMap;
  }, {});
};
var componentOverrides = createOverrideMap(__webpack_require__(64));

function getOverrides() {
  return componentOverrides;
}

module.exports = {
  getOverrides: getOverrides
};

/***/ }),

/***/ 64:
/*!************************************************!*\
  !*** ./components sync componentOverride\.js$ ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Dropdown/componentOverride.js": 25
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 64;

/***/ })

/******/ });
});
//# sourceMappingURL=dsComponentsService.bundle.js.map