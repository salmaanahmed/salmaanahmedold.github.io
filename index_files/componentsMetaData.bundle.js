(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["componentsMetaData"] = factory(require("lodash"));
	else
		root["componentsMetaData"] = factory(root["_"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "https://static.parastorage.com/services/wix-ui-santa/1.456.0/";
/******/
/******/
/******/ 	__webpack_require__.p = typeof window !== 'undefined' && window.__STATICS_BASE_URL__ || __webpack_require__.p;
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1152);
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/*!************************************************!*\
  !*** ./components/Captcha/propertiesSchema.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  CaptchaProperties: {
    type: 'object',
    allOf: [{
      properties: {
        theme: {
          type: 'string',
          enum: ['light', 'dark'],
          default: 'light',
          description: 'When set changes the theme of the captcha (dark or light)'
        },
        size: {
          type: 'string',
          enum: ['normal', 'compact'],
          default: 'normal',
          description: 'When set changes the size of the captcha (normal or compact)'
        }
      }
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 101:
/*!****************************************************!*\
  !*** ./components/MusicPlayer/propertiesSchema.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  MusicPlayerProperties: {
    type: 'object',
    allOf: [{
      properties: {
        layout: {
          type: 'string',
          enum: ['classic', 'icon'],
          default: 'classic'
        },
        source: {
          type: 'string',
          enum: ['uploads', 'url', 'wixMusic'],
          default: 'uploads'
        },
        showCover: {
          type: 'boolean',
          default: true
        },
        showArtistName: {
          type: 'boolean',
          default: true
        },
        showTrackName: {
          type: 'boolean',
          default: true
        },
        showProgressBar: {
          type: 'boolean',
          default: true
        },
        showTimeStamp: {
          type: 'boolean',
          default: true
        },
        autoplay: {
          type: 'boolean',
          default: false,
          description: 'Autoplay audio'
        },
        loop: {
          type: 'boolean',
          default: false,
          description: 'Play audio on loop'
        },
        showPlaylist: {
          type: 'boolean',
          default: true,
          description: 'Show Tracklist'
        },
        playlistTracksInfo: {
          type: 'string',
          enum: ['trackName', 'trackNameAndArtistName'],
          default: 'trackName',
          description: 'Show track name or track name w/ artist name'
        },
        playlistTracksAction: {
          type: 'string',
          enum: ['onActive', 'onAll'],
          default: 'onActive',
          description: 'Show track actions on active track or all tracks'
        },
        playlistTrackSpacing: {
          type: 'number',
          minimum: 0,
          maximum: 30,
          description: 'How much vertical space must be between each track in playlist',
          default: 0
        },
        iconId: {
          type: 'string',
          default: 'icon0',
          description: 'Design IconLayout id'
        },
        consentToShareAlbum: {
          type: 'boolean',
          default: false,
          description: 'Agreement to share album'
        },
        consentToShareTracks: {
          type: 'boolean',
          default: false,
          description: 'Agreement to share tracks'
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 102:
/*!****************************************************!*\
  !*** ./components/ProgressBar/propertiesSchema.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  ProgressBarProperties: {
    type: 'object',
    allOf: [{
      properties: {
        direction: {
          type: 'string',
          enum: ['rtl', 'ltr'],
          default: 'ltr'
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 103:
/*!*******************************************************!*\
  !*** ./components/SignatureInput/propertiesSchema.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  SignatureInputProperties: {
    type: 'object',
    allOf: [{
      properties: {
        direction: {
          type: 'string',
          enum: ['rtl', 'ltr']
        },
        required: {
          type: 'boolean'
        },
        titlePaddingStart: {
          type: 'number',
          minimum: 0,
          maximum: 100
        },
        titleMarginBottom: {
          type: 'number',
          minimum: 0,
          maximum: 100
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 104:
/*!********************************************************!*\
  !*** ./components/FileUploaderNew/propertiesSchema.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// REPLACE-ME: Here you can state properties to be saved in DB (and passed to the component/panels through props)
// Properties usually relate to the component’s static layout and CSS such as directions and spacing
// Replace example property `direction` with your own properties
// See https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md
// After dataSchema and propertiesSchema shapes are finalized, a ticket to Editor backend team should be created
// in the jira to save those about in the DB. Example: https://jira.wixpress.com/browse/HTMLSRVR-3142
var propertiesSchema = {
  FileUploaderNewProperties: {
    type: 'object',
    allOf: [{
      properties: {
        buttonAlignment: {
          type: 'string',
          enum: ['rtl', 'ltr'],
          default: 'ltr',
          description: 'alignment of the label to the button'
        },
        filesAlignment: {
          type: 'string',
          enum: ['left', 'center', 'right'],
          default: 'left',
          description: 'alignment of the file name to the component'
        },
        showPlaceholder: {
          type: 'boolean',
          default: true,
          description: 'should show placeholder'
        },
        filesType: {
          type: 'string',
          enum: ['Image', 'Document', 'Video', 'Audio'],
          default: 'Image',
          description: 'the file type allowed for upload by the component'
        },
        filesSizeLimit: {
          type: 'number',
          default: 15,
          minimum: 1,
          maximum: 15,
          description: 'the maximum file size allowed to upload by the component'
        }
      }
    }, {
      $ref: 'InputProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 105:
/*!**********************************************************!*\
  !*** ./components/SelectionTagsList/propertiesSchema.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// REPLACE-ME: Here you can state properties to be saved in DB (and passed to the component/panels through props)
// Properties usually relate to the component’s static layout and CSS such as directions and spacing
// Replace example property `direction` with your own properties
// See https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md
// After dataSchema and propertiesSchema shapes are finalized, a ticket to Editor backend team should be created
// in the jira to save those about in the DB. Example: https://jira.wixpress.com/browse/HTMLSRVR-3142
var propertiesSchema = {
  SelectionTagsListProperties: {
    type: 'object',
    allOf: [{
      properties: {
        direction: {
          type: 'string',
          enum: ['rtl', 'ltr'],
          default: 'ltr'
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 1152:
/*!*******************************!*\
  !*** ./componentsMetaData.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _richTextBox$componen;

var _ds = __webpack_require__(/*! ./legacy/components/RichTextBox/ds */ 119);

var _ds2 = _interopRequireDefault(_ds);

var _ds3 = __webpack_require__(/*! ./legacy/components/ToggleSwitch/ds */ 120);

var _ds4 = _interopRequireDefault(_ds3);

var _ds5 = __webpack_require__(/*! ./components/Slider/ds */ 73);

var _ds6 = _interopRequireDefault(_ds5);

var _ds7 = __webpack_require__(/*! ./components/SearchBox/ds */ 121);

var _ds8 = _interopRequireDefault(_ds7);

var _ds9 = __webpack_require__(/*! ./components/BarChart/ds */ 122);

var _ds10 = _interopRequireDefault(_ds9);

var _ds11 = __webpack_require__(/*! ./components/TimePicker/ds */ 123);

var _ds12 = _interopRequireDefault(_ds11);

var _ds13 = __webpack_require__(/*! ./components/RatingsInput/ds */ 125);

var _ds14 = _interopRequireDefault(_ds13);

var _ds15 = __webpack_require__(/*! ./components/RatingsDisplay/ds */ 126);

var _ds16 = _interopRequireDefault(_ds15);

var _ds17 = __webpack_require__(/*! ./components/Tags/ds */ 127);

var _ds18 = _interopRequireDefault(_ds17);

var _ds19 = __webpack_require__(/*! ./components/VideoPlayer/ds */ 128);

var _ds20 = _interopRequireDefault(_ds19);

var _ds21 = __webpack_require__(/*! ./components/AddressInput/ds */ 124);

var _ds22 = _interopRequireDefault(_ds21);

var _ds23 = __webpack_require__(/*! ./components/LineShareButton/ds */ 129);

var _ds24 = _interopRequireDefault(_ds23);

var _ds25 = __webpack_require__(/*! ./components/Captcha/ds */ 130);

var _ds26 = _interopRequireDefault(_ds25);

var _ds27 = __webpack_require__(/*! ./components/MusicPlayer/ds */ 131);

var _ds28 = _interopRequireDefault(_ds27);

var _ds29 = __webpack_require__(/*! ./components/StylableButton/ds */ 132);

var _ds30 = _interopRequireDefault(_ds29);

var _ds31 = __webpack_require__(/*! ./components/StylableLine/ds */ 249);

var _ds32 = _interopRequireDefault(_ds31);

var _ds33 = __webpack_require__(/*! ./components/ProgressBar/ds */ 133);

var _ds34 = _interopRequireDefault(_ds33);

var _ds35 = __webpack_require__(/*! ./components/Dropdown/ds */ 250);

var _ds36 = _interopRequireDefault(_ds35);

var _ds37 = __webpack_require__(/*! ./components/CustomElement/ds */ 134);

var _ds38 = _interopRequireDefault(_ds37);

var _ds39 = __webpack_require__(/*! ./components/SignatureInput/ds */ 135);

var _ds40 = _interopRequireDefault(_ds39);

var _ds41 = __webpack_require__(/*! ./components/FileUploaderNew/ds */ 136);

var _ds42 = _interopRequireDefault(_ds41);

var _ds43 = __webpack_require__(/*! ./components/SelectionTagsList/ds */ 137);

var _ds44 = _interopRequireDefault(_ds43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (_richTextBox$componen = {}, _defineProperty(_richTextBox$componen, _ds2.default.componentType, _ds2.default.metaData), _defineProperty(_richTextBox$componen, _ds4.default.componentType, _ds4.default.metaData), _defineProperty(_richTextBox$componen, _ds6.default.componentType, _ds6.default.metaData), _defineProperty(_richTextBox$componen, _ds8.default.componentType, _ds8.default.metaData), _defineProperty(_richTextBox$componen, _ds12.default.componentType, _ds12.default.metaData), _defineProperty(_richTextBox$componen, _ds14.default.componentType, _ds14.default.metaData), _defineProperty(_richTextBox$componen, _ds16.default.componentType, _ds16.default.metaData), _defineProperty(_richTextBox$componen, _ds20.default.componentType, _ds20.default.metaData), _defineProperty(_richTextBox$componen, _ds22.default.componentType, _ds22.default.metaData), _defineProperty(_richTextBox$componen, _ds24.default.componentType, _ds24.default.metaData), _defineProperty(_richTextBox$componen, _ds26.default.componentType, _ds26.default.metaData), _defineProperty(_richTextBox$componen, _ds18.default.componentType, _ds18.default.metaData), _defineProperty(_richTextBox$componen, _ds28.default.componentType, _ds28.default.metaData), _defineProperty(_richTextBox$componen, _ds30.default.componentType, _ds30.default.metaData), _defineProperty(_richTextBox$componen, _ds32.default.componentType, _ds32.default.metaData), _defineProperty(_richTextBox$componen, _ds34.default.componentType, _ds34.default.metaData), _defineProperty(_richTextBox$componen, _ds36.default.componentType, _ds36.default.metaData), _defineProperty(_richTextBox$componen, _ds10.default.componentType, _ds10.default.metaData), _defineProperty(_richTextBox$componen, _ds38.default.componentType, _ds38.default.metaData), _defineProperty(_richTextBox$componen, _ds40.default.componentType, _ds40.default.metaData), _defineProperty(_richTextBox$componen, _ds42.default.componentType, _ds42.default.metaData), _defineProperty(_richTextBox$componen, _ds44.default.componentType, _ds44.default.metaData), _richTextBox$componen);

/***/ }),

/***/ 119:
/*!***************************************************!*\
  !*** ./legacy/components/RichTextBox/ds/index.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 172);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 85);

var _propertiesSchema2 = _interopRequireDefault(_propertiesSchema);

var _dataSchema = __webpack_require__(/*! ../dataSchema */ 173);

var _dataSchema2 = _interopRequireDefault(_dataSchema);

var _metaData = __webpack_require__(/*! ../metaData */ 174);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentType = 'wixui.RichTextBox';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: _dataSchema2.default,
  propertiesSchema: _propertiesSchema2.default
};

/***/ }),

/***/ 120:
/*!****************************************************!*\
  !*** ./legacy/components/ToggleSwitch/ds/index.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 175);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ../metaData */ 176);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 86);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 177);

var componentType = 'wixui.ToggleSwitch';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 121:
/*!******************************************!*\
  !*** ./components/SearchBox/ds/index.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 178);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _hooks = __webpack_require__(/*! ../hooks */ 179);

var _hooks2 = _interopRequireDefault(_hooks);

var _metaData = __webpack_require__(/*! ../metaData */ 180);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 91);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 181);


var componentType = 'wixui.SearchBox';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  hooks: _hooks2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 122:
/*!*****************************************!*\
  !*** ./components/BarChart/ds/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 182);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _hooks = __webpack_require__(/*! ../hooks */ 183);

var _hooks2 = _interopRequireDefault(_hooks);

var _metaData = __webpack_require__(/*! ../metaData */ 184);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 92);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 185);

var componentType = 'wixui.BarChart';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  hooks: _hooks2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 123:
/*!*******************************************!*\
  !*** ./components/TimePicker/ds/index.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 187);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ../metaData */ 188);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataSchema = __webpack_require__(/*! ../dataSchema */ 189);

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 93);
var componentType = 'wixui.TimePicker';

module.exports = {
  componentDefinition: _componentDefinition2.default,
  componentType: componentType,
  dataSchema: dataSchema,
  metaData: _metaData2.default,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 124:
/*!*********************************************!*\
  !*** ./components/AddressInput/ds/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 190);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataSchema = __webpack_require__(/*! ../dataSchema */ 191);
var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 94);
var componentType = 'wixui.AddressInput';
var metaData = __webpack_require__(/*! ../metaData */ 192);

module.exports = {
  componentDefinition: _componentDefinition2.default,
  componentType: componentType,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema,
  metaData: metaData
};

/***/ }),

/***/ 125:
/*!*********************************************!*\
  !*** ./components/RatingsInput/ds/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 193);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ../metaData */ 194);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 95);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 195);

var componentType = 'wixui.RatingsInput';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 126:
/*!***********************************************!*\
  !*** ./components/RatingsDisplay/ds/index.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 196);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ../metaData */ 197);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 96);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 198);

var componentType = 'wixui.RatingsDisplay';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 127:
/*!*************************************!*\
  !*** ./components/Tags/ds/index.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ./componentDefinition */ 199);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ./metaData */ 200);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ./propertiesSchema */ 97);
var dataSchema = __webpack_require__(/*! ./dataSchema */ 201);

var componentType = 'wixui.Tags';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 128:
/*!********************************************!*\
  !*** ./components/VideoPlayer/ds/index.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 202);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ../metaData */ 203);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 98);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 204);

var componentType = 'wixui.VideoPlayer';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 129:
/*!************************************************!*\
  !*** ./components/LineShareButton/ds/index.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentType = __webpack_require__(/*! ./componentType */ 84);

var _componentType2 = _interopRequireDefault(_componentType);

var _componentDefinition = __webpack_require__(/*! ./componentDefinition */ 205);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ./metaData */ 206);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ./propertiesSchema */ 99);

module.exports = {
  componentType: _componentType2.default,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 130:
/*!****************************************!*\
  !*** ./components/Captcha/ds/index.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 207);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ../metaData */ 208);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 100);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 209);

var componentType = 'wixui.Captcha';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 131:
/*!********************************************!*\
  !*** ./components/MusicPlayer/ds/index.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 210);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataSchema = __webpack_require__(/*! ../dataSchema */ 211);
var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 101);
var componentType = 'wixui.MusicPlayer';
var metaData = __webpack_require__(/*! ../metaData */ 212);

module.exports = {
  componentDefinition: _componentDefinition2.default,
  componentType: componentType,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema,
  metaData: metaData
};

/***/ }),

/***/ 132:
/*!***********************************************!*\
  !*** ./components/StylableButton/ds/index.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ./componentDefinition */ 213);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ./metaData */ 214);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataSchema = __webpack_require__(/*! ../dataSchema */ 215);


module.exports = {
  componentType: 'wixui.StylableButton',
  componentDefinition: _componentDefinition2.default,
  dataSchema: dataSchema,
  metaData: _metaData2.default
};

/***/ }),

/***/ 133:
/*!********************************************!*\
  !*** ./components/ProgressBar/ds/index.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 216);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ../metaData */ 217);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 102);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 218);

var componentType = 'wixui.ProgressBar';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 134:
/*!**********************************************!*\
  !*** ./components/CustomElement/ds/index.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ./componentDefinition */ 219);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _constants = __webpack_require__(/*! ../constants */ 35);

var _metaData = __webpack_require__(/*! ./metaData */ 220);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataSchema = __webpack_require__(/*! ../dataSchema */ 221);

module.exports = {
  componentType: _constants.COMP_TYPE,
  componentDefinition: _componentDefinition2.default,
  dataSchema: dataSchema,
  metaData: _metaData2.default
};

/***/ }),

/***/ 135:
/*!***********************************************!*\
  !*** ./components/SignatureInput/ds/index.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 222);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 103);

var _propertiesSchema2 = _interopRequireDefault(_propertiesSchema);

var _dataSchema = __webpack_require__(/*! ../dataSchema */ 223);

var _dataSchema2 = _interopRequireDefault(_dataSchema);

var _metaData = __webpack_require__(/*! ../metaData */ 224);

var _metaData2 = _interopRequireDefault(_metaData);

var _constants = __webpack_require__(/*! ../constants */ 24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  componentType: _constants.ComponentMetaData.componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: _dataSchema2.default,
  propertiesSchema: _propertiesSchema2.default
};

/***/ }),

/***/ 136:
/*!************************************************!*\
  !*** ./components/FileUploaderNew/ds/index.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 225);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 104);

var _propertiesSchema2 = _interopRequireDefault(_propertiesSchema);

var _dataSchema = __webpack_require__(/*! ../dataSchema */ 226);

var _dataSchema2 = _interopRequireDefault(_dataSchema);

var _metaData = __webpack_require__(/*! ../metaData */ 227);

var _metaData2 = _interopRequireDefault(_metaData);

var _constants = __webpack_require__(/*! ../constants */ 33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  componentType: _constants.ComponentMetaData.componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: _dataSchema2.default,
  propertiesSchema: _propertiesSchema2.default
};

/***/ }),

/***/ 137:
/*!**************************************************!*\
  !*** ./components/SelectionTagsList/ds/index.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 228);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 105);

var _propertiesSchema2 = _interopRequireDefault(_propertiesSchema);

var _dataSchema = __webpack_require__(/*! ../dataSchema */ 229);

var _dataSchema2 = _interopRequireDefault(_dataSchema);

var _metaData = __webpack_require__(/*! ../metaData */ 230);

var _metaData2 = _interopRequireDefault(_metaData);

var _constants = __webpack_require__(/*! ../constants */ 34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  componentType: _constants.ComponentMetaData.componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: _dataSchema2.default,
  propertiesSchema: _propertiesSchema2.default
};

/***/ }),

/***/ 172:
/*!**************************************************************!*\
  !*** ./legacy/components/RichTextBox/componentDefinition.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.RichTextBox': {
    skins: ['wixui.skins.RichTextBox'],
    dataTypes: ['RichTextBox'],
    propertyType: 'RichTextBoxProperties',
    nickname: 'richTextBox',
    styles: {
      richtextbox1: 'wixui.skins.RichTextBox'
    }
  }
};

/***/ }),

/***/ 173:
/*!*****************************************************!*\
  !*** ./legacy/components/RichTextBox/dataSchema.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dataSchema = {
  RichTextBox: {
    type: 'object',
    allOf: [{
      properties: {
        maxLength: {
          type: ['number', 'null'],
          description: 'maximum number of characters allowed'
        }
      }
    }, {
      $ref: 'BaseTextInput'
    }]
  }
};

exports.default = dataSchema;

/***/ }),

/***/ 174:
/*!***************************************************!*\
  !*** ./legacy/components/RichTextBox/metaData.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  disableable: true,
  isRepeatable: true,
  layoutLimits: {
    minHeight: 100,
    minWidth: 200
  }
};

/***/ }),

/***/ 175:
/*!***************************************************************!*\
  !*** ./legacy/components/ToggleSwitch/componentDefinition.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.ToggleSwitch': {
    skins: ['wixui.skins.ToggleSwitch'],
    dataTypes: ['ToggleSwitch'],
    propertyType: 'ToggleSwitchProperties',
    nickname: 'switch',
    styles: {
      ts1: 'wixui.skins.ToggleSwitch'
    }
  }
};

/***/ }),

/***/ 176:
/*!****************************************************!*\
  !*** ./legacy/components/ToggleSwitch/metaData.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  resizableSides: [],
  layoutLimits: {
    minHeight: 24,
    maxHeight: 128,
    minWidth: 48,
    maxWidth: 256,
    aspectRatio: 2
  },
  disableable: true,
  isRepeatable: true
};

/***/ }),

/***/ 177:
/*!******************************************************!*\
  !*** ./legacy/components/ToggleSwitch/dataSchema.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  ToggleSwitch: {
    type: 'object',
    allOf: [{
      properties: {
        checked: {
          type: 'boolean',
          description: 'The checked status of the input'
        }
      }
    }, {
      $ref: 'BaseTextInput'
    }]
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 178:
/*!*****************************************************!*\
  !*** ./components/SearchBox/componentDefinition.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.SearchBox': {
    skins: ['wixui.skins.SearchBox'],
    dataTypes: ['SearchBox'],
    propertyType: 'SearchBoxProperties',
    nickname: 'searchBox',
    styles: {
      SearchBox_1: 'wixui.skins.SearchBox'
    }
  }
};

/***/ }),

/***/ 179:
/*!***************************************!*\
  !*** ./components/SearchBox/hooks.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function beforeUpdateProperties() {
  console.log('beforeUpdateProperties');
}

function beforeUpdateData() {
  console.log('beforeUpdateData');
}

function beforeUpdateLayout() {
  console.log('beforeUpdateLayout');
}

var hooks = {
  beforeUpdateProperties: beforeUpdateProperties,
  beforeUpdateData: beforeUpdateData,
  beforeUpdateLayout: beforeUpdateLayout
};

exports.default = hooks;

/***/ }),

/***/ 180:
/*!******************************************!*\
  !*** ./components/SearchBox/metaData.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ 181:
/*!********************************************!*\
  !*** ./components/SearchBox/dataSchema.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  SearchBox: {
    type: 'object',
    properties: {
      placeholder: {
        type: 'string',
        default: 'Search...',
        maxLength: 255
      },
      suggestionsEnabled: {
        type: 'boolean',
        default: true,
        description: 'Determines whether the suggestions disabled or not'
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 182:
/*!****************************************************!*\
  !*** ./components/BarChart/componentDefinition.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.BarChart': {
    skins: ['wixui.skins.BarChart'],
    dataTypes: ['BarChart'],
    propertyType: 'BarChartProperties',
    nickname: 'barChart',
    styles: {
      barChart1: 'wixui.skins.BarChart'
    }
  }
};

/***/ }),

/***/ 183:
/*!**************************************!*\
  !*** ./components/BarChart/hooks.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(/*! lodash */ 2);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function updateOrientationLayout(prevLayout) {
  return _lodash2.default.assign({}, prevLayout, {
    width: prevLayout.height,
    height: prevLayout.width
  });
}

function getTicksSize(tickShape, tickPosition) {
  if (tickPosition === 'middle') {
    return 0;
  }

  switch (tickShape) {
    default:
    case 'line':
      return 22;
    case 'dot':
      return 15;
    case 'none':
      return 0;
  }
}

function shouldShowTicks(data, props) {
  return data.step > 0 && props.tickMarksShape !== 'none';
}

function updateTicksLayout(_ref) {
  var prevLayout = _ref.prevLayout,
      prevProps = _ref.prevProps,
      nextProps = _ref.nextProps,
      prevData = _ref.prevData,
      nextData = _ref.nextData;

  var lastShowTicks = shouldShowTicks(prevData, prevProps);
  var showTicks = shouldShowTicks(nextData, nextProps);
  var lastSize = lastShowTicks ? getTicksSize(prevProps.tickMarksShape, prevProps.tickMarksPosition) : 0;
  var size = showTicks ? getTicksSize(nextProps.tickMarksShape, nextProps.tickMarksPosition) : 0;
  var sizeDiff = size - lastSize;
  var dim = nextProps.orientation === 'horizontal' ? 'height' : 'width';

  return _lodash2.default.assign({}, prevLayout, _defineProperty({}, dim, prevLayout[dim] + sizeDiff));
}

function didOrientationChange(prevProps, nextProps) {
  return nextProps.orientation && prevProps.orientation && nextProps.orientation !== prevProps.orientation;
}

function didTicksChange(prevProps, nextProps, prevData, nextData) {
  var lastShowTicks = shouldShowTicks(prevData, prevProps);
  var nextShowTicks = shouldShowTicks(nextData, nextProps);
  var lastTickMarksShape = prevProps.tickMarksShape;
  var nextTickMarksShape = nextProps.tickMarksShape;
  var lastTickMarksPosition = prevProps.tickMarksPosition;
  var nextTickMarksPosition = nextProps.tickMarksPosition;

  return lastShowTicks !== nextShowTicks || lastTickMarksShape !== nextTickMarksShape || lastTickMarksPosition !== nextTickMarksPosition;
}

var beforeUpdate = function beforeUpdate(_ref2) {
  var compDriver = _ref2.compDriver,
      prevProps = _ref2.prevProps,
      nextProps = _ref2.nextProps,
      prevData = _ref2.prevData,
      nextData = _ref2.nextData;

  var prevLayout = compDriver.layout.get();
  var newLayout = void 0;

  if (didOrientationChange(prevProps, nextProps)) {
    newLayout = updateOrientationLayout(prevLayout);
  } else if (didTicksChange(prevProps, nextProps, prevData, nextData)) {
    newLayout = updateTicksLayout({ prevLayout: prevLayout, prevProps: prevProps, nextProps: nextProps, prevData: prevData, nextData: nextData });
  }

  if (newLayout) {
    compDriver.layout.update(newLayout);
  }
};

var beforeUpdateProperties = function beforeUpdateProperties(compDriver, nextProps) {
  var prevProps = compDriver.properties.get();
  var prevData = compDriver.data.get();
  return beforeUpdate({ compDriver: compDriver, prevProps: prevProps, nextProps: nextProps, prevData: prevData, nextData: prevData });
};

var beforeUpdateData = function beforeUpdateData(compDriver, nextData) {
  var prevProps = compDriver.properties.get();
  var prevData = compDriver.data.get();
  return beforeUpdate({ compDriver: compDriver, prevProps: prevProps, nextProps: prevProps, prevData: prevData, nextData: nextData });
};

var getSize = function getSize(currentLayout, nextLayout) {
  return {
    width: nextLayout.width || currentLayout.width,
    height: nextLayout.height || currentLayout.height
  };
};

var beforeUpdateLayout = function beforeUpdateLayout(compDriver, nextLayout) {
  if (!nextLayout.width && !nextLayout.height) {
    return;
  }

  var currentLayout = compDriver.layout.get();
  var compProperties = compDriver.properties.get();

  var _getSize = getSize(currentLayout, nextLayout),
      width = _getSize.width,
      height = _getSize.height;

  var newLayout = _lodash2.default.cloneDeep(nextLayout);

  if (compProperties.orientation === 'vertical') {
    var minHeight = 4 * width;
    newLayout.height = Math.max(height, minHeight);
  } else if (compProperties.orientation === 'horizontal') {
    var minWidth = 4 * height;
    newLayout.width = Math.max(width, minWidth);
  }

  compDriver.layout.update(newLayout);
};

var hooks = {
  beforeUpdateProperties: beforeUpdateProperties,
  beforeUpdateData: beforeUpdateData,
  beforeUpdateLayout: beforeUpdateLayout
};

exports.default = hooks;

/***/ }),

/***/ 184:
/*!*****************************************!*\
  !*** ./components/BarChart/metaData.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  isRepeatable: true,
  disableable: true
};

/***/ }),

/***/ 185:
/*!*******************************************!*\
  !*** ./components/BarChart/dataSchema.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  BarChart: {
    type: 'object',
    properties: {
      dataset: {
        type: 'array'
      },
      total: {
        type: 'number'
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 187:
/*!******************************************************!*\
  !*** ./components/TimePicker/componentDefinition.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.TimePicker': {
    skins: ['wixui.skins.TimePicker'],
    dataTypes: ['TimePickerData'],
    propertyType: 'TimePickerProperties',
    nickname: 'timePicker',
    styles: {
      tp1: 'wixui.skins.TimePicker'
    }
  }
};

/***/ }),

/***/ 188:
/*!*******************************************!*\
  !*** ./components/TimePicker/metaData.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  layoutLimits: {
    minHeight: 42,
    minWidth: 150
  },
  disableable: true,
  isRepeatable: true
};

/***/ }),

/***/ 189:
/*!*********************************************!*\
  !*** ./components/TimePicker/dataSchema.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  TimePickerData: {
    type: 'object',
    allOf: [{
      properties: {
        placeholder: {
          type: 'string',
          description: 'The value of the placeholder if chosen',
          maxLength: 1000
        },
        step: {
          type: 'number',
          minimum: 1,
          maximum: 60,
          default: 1,
          description: 'Increment step in minutes'
        }
      }
    }, {
      $ref: 'BaseTextInput'
    }]
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 190:
/*!********************************************************!*\
  !*** ./components/AddressInput/componentDefinition.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(/*! ./constants */ 72);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = _defineProperty({}, _constants.ComponentMetaData.componentType, {
  skins: [_constants.ComponentMetaData.skinName],
  dataTypes: [_constants.ComponentMetaData.displayName],
  propertyType: _constants.ComponentMetaData.propertiesType,
  nickname: _constants.ComponentMetaData.nickName,
  styles: {
    ai1: _constants.ComponentMetaData.skinName
  }
});

/***/ }),

/***/ 191:
/*!***********************************************!*\
  !*** ./components/AddressInput/dataSchema.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  AddressInput: {
    type: 'object',
    properties: {
      locale: { type: 'string', maxLength: 100 },
      googleMapsApiKey: { type: 'string', maxLength: 400 },
      filter: {
        oneOf: [{
          type: 'null'
        }, {
          type: 'object',
          properties: {
            country: { type: 'string', maxLength: 10 }
          }
        }],
        default: null
      },
      sorting: {
        oneOf: [{
          type: 'null'
        }, {
          type: 'object',
          properties: {
            location: {
              type: 'object',
              properties: {
                lat: { type: 'number' },
                lng: { type: 'number' }
              }
            },
            radius: {
              type: 'number',
              default: 100
            },
            formatted: { type: 'string', maxLength: 10 }
          }
        }],
        default: null
      },
      placeholder: {
        type: 'string',
        description: 'The value of the placeholder if chosen',
        maxLength: 1000
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 192:
/*!*********************************************!*\
  !*** ./components/AddressInput/metaData.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metaData = {
  layoutLimits: {
    minHeight: 25,
    minWidth: 200
  },
  isRepeatable: true,
  disableable: true
};

module.exports = metaData;

/***/ }),

/***/ 193:
/*!********************************************************!*\
  !*** ./components/RatingsInput/componentDefinition.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.RatingsInput': {
    skins: ['wixui.skins.Rating'],
    dataTypes: ['RatingsInput'],
    propertyType: 'RatingsInputProperties',
    nickname: 'ratingsInput',
    styles: {
      ri1: 'wixui.skins.Rating'
    }
  }
};

/***/ }),

/***/ 194:
/*!*********************************************!*\
  !*** ./components/RatingsInput/metaData.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  defaultMobileProperties: {
    shapeSize: 25,
    shapeSpacing: 5
  },
  isRepeatable: true
};

/***/ }),

/***/ 195:
/*!***********************************************!*\
  !*** ./components/RatingsInput/dataSchema.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  RatingsInput: {
    type: 'object',
    properties: {
      value: {
        type: ['number', 'null'],
        description: 'The rating value currently selected',
        minimum: 0,
        maximum: 5
      },
      titleText: {
        type: 'string',
        description: 'the title before a value is selected',
        maxLength: 300
      },
      labels: {
        type: 'object',
        description: 'contains the labels for the different values. maps 1-5 as keys to strings',
        default: {
          1: 'Bad', 2: 'Fine', 3: 'OK', 4: 'Good', 5: 'Great'
        }
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 196:
/*!**********************************************************!*\
  !*** ./components/RatingsDisplay/componentDefinition.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.RatingsDisplay': {
    skins: ['wixui.skins.Rating'],
    dataTypes: ['RatingsDisplay'],
    propertyType: 'RatingsDisplayProperties',
    nickname: 'ratingsDisplay',
    styles: {
      rd1: 'wixui.skins.Rating'
    }
  }
};

/***/ }),

/***/ 197:
/*!***********************************************!*\
  !*** ./components/RatingsDisplay/metaData.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  defaultMobileProperties: {
    shapeSize: 20,
    shapeSpacing: 5
  },
  isRepeatable: true
};

/***/ }),

/***/ 198:
/*!*************************************************!*\
  !*** ./components/RatingsDisplay/dataSchema.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  RatingsDisplay: {
    type: 'object',
    properties: {
      rating: {
        type: 'number',
        description: 'The rating displayed by the component',
        minimum: 1,
        maximum: 5
      },
      svgId: {
        type: 'string',
        maxLength: 100
      },
      numRatings: {
        type: 'number',
        description: 'The amount of ratings the rating is based on',
        minimum: 0
      },
      reviewsCountLabel: {
        type: 'string',
        default: 'Reviews',
        maxLength: 400,
        description: 'Text that describes the numRatings value'
      },
      noReviewsPlaceholder: {
        type: 'string',
        default: 'Be the first to rate this item',
        maxLength: 1000,
        description: 'Placeholder text when there aren\'t any reviews'
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 199:
/*!***************************************************!*\
  !*** ./components/Tags/ds/componentDefinition.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.Tags': {
    skins: ['wixui.skins.Tags'],
    dataTypes: ['Tags'],
    propertyType: 'TagsProperties',
    nickname: 'tags',
    styles: {
      tags1: 'wixui.skins.Tags'
    }
  }
};

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

/***/ 200:
/*!****************************************!*\
  !*** ./components/Tags/ds/metaData.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  layoutLimits: {
    minWidth: 60
  }
};

/***/ }),

/***/ 201:
/*!******************************************!*\
  !*** ./components/Tags/ds/dataSchema.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  Tags: {
    type: 'object',
    properties: {
      items: {
        type: ['null', 'array'],
        pseudoType: ['refList']
      }
    }
  },
  TagItem: {
    type: 'object',
    properties: {
      label: {
        type: 'string',
        maxLength: 400
      },
      link: {
        type: ['string', 'null'],
        pseudoType: ['ref']
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 202:
/*!*******************************************************!*\
  !*** ./components/VideoPlayer/componentDefinition.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.VideoPlayer': {
    skins: ['wixui.skins.VideoPlayer'],
    dataTypes: ['VideoPlayer'],
    propertyType: 'VideoPlayerProperties',
    nickname: 'videoPlayer',
    styles: {
      vp1: 'wixui.skins.VideoPlayer'
    }
  }
};

/***/ }),

/***/ 203:
/*!********************************************!*\
  !*** ./components/VideoPlayer/metaData.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  layoutLimits: {
    minHeight: 180,
    minWidth: 200
  },
  isRepeatable: true
};

/***/ }),

/***/ 204:
/*!**********************************************!*\
  !*** ./components/VideoPlayer/dataSchema.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  VideoPlayer: {
    type: 'object',
    properties: {
      videoType: {
        type: 'string',
        enum: ['dailymotion', 'facebook', 'file', 'twitch', 'vimeo', 'youtube'],
        default: 'file'
      },
      videoRef: {
        type: ['string', 'null'],
        pseudoType: ['ref']
      },
      videoUrl: {
        type: ['string', 'null'],
        default: null
      },
      posterUrl: {
        type: ['string', 'null'],
        default: null
      },
      videoTitle: {
        type: 'string',
        default: '',
        maxLength: 255
      },
      description: {
        type: 'string',
        default: '',
        maxLength: 1000,
        description: 'Video Description'
      },
      logoRef: {
        type: ['string', 'null'],
        pseudoType: ['ref']
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 205:
/*!**************************************************************!*\
  !*** ./components/LineShareButton/ds/componentDefinition.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var componentDefinition = {
  'wixui.LineShareButton': {
    skins: ['wixui.skins.LineShareButton'],
    propertyType: 'LineShareButtonProperties',
    nickname: 'lineShareButton',
    labelDisplayName: 'component_label_line_share',
    styles: {
      lsb1: 'wixui.skins.LineShareButton'
    }
  }
};

module.exports = componentDefinition;

/***/ }),

/***/ 206:
/*!***************************************************!*\
  !*** ./components/LineShareButton/ds/metaData.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metaData = {
  rotatable: false,
  disableable: false,
  isRepeatable: true,
  resizableSides: []
};

module.exports = metaData;

/***/ }),

/***/ 207:
/*!***************************************************!*\
  !*** ./components/Captcha/componentDefinition.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.Captcha': {
    skins: ['wixui.skins.Captcha'],
    dataTypes: ['Captcha'],
    propertyType: 'CaptchaProperties',
    nickname: 'captcha',
    styles: {
      captcha1: 'wixui.skins.Captcha'
    }
  }
};

/***/ }),

/***/ 208:
/*!****************************************!*\
  !*** ./components/Captcha/metaData.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  isRepeatable: false,
  resizableSides: [],
  disableable: false,
  mobileConversionConfig: {
    fixedSize: {
      height: 57,
      width: 235
    }
  }
};

/***/ }),

/***/ 209:
/*!******************************************!*\
  !*** ./components/Captcha/dataSchema.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  Captcha: {
    type: 'object',
    properties: {
      captchaType: {
        type: 'string',
        enum: ['image', 'audio'],
        default: 'image',
        description: 'When set changes the type of the challenge (image or audio)'
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 210:
/*!*******************************************************!*\
  !*** ./components/MusicPlayer/componentDefinition.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.MusicPlayer': {
    skins: ['wixui.skins.MusicPlayer'],
    dataTypes: ['MusicPlayerData'],
    propertyType: 'MusicPlayerProperties',
    nickname: 'audioPlayer',
    styles: {
      MusicPlayer_1: 'wixui.skins.MusicPlayer'
    }
  }
};

/***/ }),

/***/ 211:
/*!**********************************************!*\
  !*** ./components/MusicPlayer/dataSchema.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  MusicPlayerData: {
    type: 'object',
    properties: {
      audioRef: {
        type: ['string', 'null'],
        pseudoType: ['ref'],
        default: null
      },
      audioUrl: {
        type: ['string', 'null'],
        default: null
      },
      playlistId: {
        type: ['string', 'null'],
        maxLength: 255,
        default: null
      },
      playlist: {
        type: 'array',
        items: {
          type: 'object',
          name: 'PlaylistItem',
          properties: {
            artistName: {
              type: 'string',
              maxLength: 255,
              default: 'Unknown Artist'
            },
            trackName: {
              type: 'string',
              maxLength: 255,
              default: 'Unknown Track'
            },
            url: {
              type: ['string', 'null'],
              maxLength: 2500,
              default: null
            },
            cover: {
              type: ['string', 'null'],
              maxLength: 2500,
              default: null
            },
            durationFormatted: {
              type: ['string', 'null'],
              maxLength: 16,
              default: null
            }
          }
        },
        default: []
      },
      coverRef: {
        type: ['string', 'null'],
        pseudoType: ['ref'],
        default: null
      },
      coverUrl: {
        type: ['string', 'null'],
        default: null
      },
      artistName: {
        type: 'string',
        default: 'Unknown Artist',
        maxLength: 255
      },
      trackName: {
        type: 'string',
        default: 'Unknown Track',
        maxLength: 255
      },
      description: {
        type: 'string',
        default: '',
        maxLength: 1000
      }
    }
  },
  WixAudio: {
    type: 'object',
    properties: {
      uri: {
        type: 'string',
        default: ''
      },
      title: {
        type: 'string',
        default: '',
        maxLength: 100
      },
      duration: {
        type: 'number'
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 212:
/*!********************************************!*\
  !*** ./components/MusicPlayer/metaData.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _layoutManagement = __webpack_require__(/*! ./editor/layoutManagement */ 60);

function layoutLimits(compDriver) {
  var compDriverProperties = compDriver.properties;
  var compDriverData = compDriver.data;

  if (!compDriverProperties || !compDriverData) {
    return null;
  }

  return (0, _layoutManagement.findLayoutMinAndMax)(compDriverData.get(), compDriverProperties.get());
}

var metaData = {
  rotatable: false,
  isRepeatable: true,
  canBeStretched: true,
  layoutLimits: layoutLimits
};

module.exports = metaData;

/***/ }),

/***/ 213:
/*!*************************************************************!*\
  !*** ./components/StylableButton/ds/componentDefinition.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.StylableButton': {
    dataTypes: ['StylableButton'],
    styles: {},
    nickname: 'button',
    labelDisplayName: 'component_label_stylable_button',
    isStylableComp: true
  }
};

/***/ }),

/***/ 214:
/*!**************************************************!*\
  !*** ./components/StylableButton/ds/metaData.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  layoutLimits: {
    minHeight: 10,
    minWidth: 10
  },
  isRepeatable: true,
  rotatable: true
};

/***/ }),

/***/ 215:
/*!*************************************************!*\
  !*** ./components/StylableButton/dataSchema.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  StylableButton: {
    type: 'object',
    properties: {
      link: {
        type: ['null', 'string'], pseudoType: ['ref'],
        default: null
      },
      label: {
        type: 'string',
        default: 'MY BUTTON'
      },
      svgId: {
        type: 'string',
        default: '',
        maxLength: 100
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 216:
/*!*******************************************************!*\
  !*** ./components/ProgressBar/componentDefinition.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(/*! ./constants */ 49);

exports.default = {
  'wixui.ProgressBar': {
    skins: ['wixui.skins.ProgressBar'],
    dataTypes: ['ProgressBar'],
    propertyType: 'ProgressBarProperties',
    nickname: 'progressBar',
    labelDisplayName: _constants.TranslationKeys.gfpp.componentLabel,
    styles: {
      pb1: 'wixui.skins.ProgressBar'
    }
  }
};

/***/ }),

/***/ 217:
/*!********************************************!*\
  !*** ./components/ProgressBar/metaData.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  isRepeatable: true
};

/***/ }),

/***/ 218:
/*!**********************************************!*\
  !*** ./components/ProgressBar/dataSchema.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  ProgressBar: {
    type: 'object',
    properties: {
      value: {
        type: 'number',
        description: 'Current progress value'
      },
      targetValue: {
        type: 'number',
        default: 100,
        description: 'Progress target value to be defined as complete'
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 219:
/*!************************************************************!*\
  !*** ./components/CustomElement/ds/componentDefinition.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(/*! ../constants */ 35);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = _defineProperty({}, _constants.COMP_TYPE, {
  dataTypes: [_constants.COMP_NAME],
  styles: {},
  nickname: _constants.COMP_NAME,
  labelDisplayName: 'component_label_custom_element'
});

/***/ }),

/***/ 220:
/*!*************************************************!*\
  !*** ./components/CustomElement/ds/metaData.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ 221:
/*!************************************************!*\
  !*** ./components/CustomElement/dataSchema.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  CustomElement: {
    type: 'object',
    properties: {
      tagName: {
        type: 'string',
        default: null
      },
      url: {
        type: 'string',
        default: null
      },
      hostedInCorvid: {
        type: 'boolean',
        default: false
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 222:
/*!**********************************************************!*\
  !*** ./components/SignatureInput/componentDefinition.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(/*! ./constants */ 24);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = _defineProperty({}, _constants.ComponentMetaData.componentType, {
  skins: [_constants.ComponentMetaData.skinName],
  dataTypes: [_constants.ComponentMetaData.displayName],
  propertyType: _constants.ComponentMetaData.displayName + 'Properties',
  nickname: _constants.ComponentMetaData.nickName,
  styles: {
    SignatureInput_1: _constants.ComponentMetaData.skinName
  }
});

/***/ }),

/***/ 223:
/*!*************************************************!*\
  !*** ./components/SignatureInput/dataSchema.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  SignatureInput: {
    type: 'object',
    properties: {
      titleText: {
        type: 'string',
        description: 'The title of the field',
        maxLength: 400
      },
      clearButtonText: {
        type: 'string',
        description: 'The undo signature text',
        minLength: 1,
        maxLength: 400
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 224:
/*!***********************************************!*\
  !*** ./components/SignatureInput/metaData.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  layoutLimits: {
    minHeight: 130,
    minWidth: 304
  },
  rotatable: false,
  isRepeatable: true,
  disableable: true,
  canBeStretched: true
};

/***/ }),

/***/ 225:
/*!***********************************************************!*\
  !*** ./components/FileUploaderNew/componentDefinition.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(/*! ./constants */ 33);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = _defineProperty({}, _constants.ComponentMetaData.componentType, {
  skins: [_constants.ComponentMetaData.skinName],
  dataTypes: [_constants.ComponentMetaData.displayName],
  propertyType: _constants.ComponentMetaData.displayName + 'Properties',
  nickname: _constants.ComponentMetaData.nickName,
  styles: {
    FileUploaderNew_1: _constants.ComponentMetaData.skinName
  }
});

/***/ }),

/***/ 226:
/*!**************************************************!*\
  !*** ./components/FileUploaderNew/dataSchema.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// REPLACE-ME: Here you can state your components data to be saved in DB (and passed to the component/panels through props)
// Data usually relates to the component’s dynamic aspects and Javascript such as texts, values and placeholders
// Replace example data prop `text` with your own.
// See https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md
// After dataSchema and propertiesSchema shapes are finalized, a ticket to Editor backend team should be created
// in the jira to save those about in the DB. Example: https://jira.wixpress.com/browse/HTMLSRVR-3142
var dataSchema = {
  FileUploaderNew: {
    type: 'object',
    properties: {
      buttonLabel: {
        type: 'string',
        default: 'Upload File'
      },
      placeholderLabel: {
        type: 'string',
        default: 'Max File Size 15MG'
      },
      label: {
        type: ['null', 'string'],
        default: '',
        maxLength: 400
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 227:
/*!************************************************!*\
  !*** ./components/FileUploaderNew/metaData.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  isRepeatable: true,
  disableable: true,
  canBeStretched: true
};

/***/ }),

/***/ 228:
/*!*************************************************************!*\
  !*** ./components/SelectionTagsList/componentDefinition.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(/*! ./constants */ 34);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = _defineProperty({}, _constants.ComponentMetaData.componentType, {
  skins: [_constants.ComponentMetaData.skinName],
  dataTypes: [_constants.ComponentMetaData.displayName],
  propertyType: _constants.ComponentMetaData.displayName + 'Properties',
  nickname: _constants.ComponentMetaData.nickName,
  styles: {
    SelectionTagsList_1: _constants.ComponentMetaData.skinName
  }
});

/***/ }),

/***/ 229:
/*!****************************************************!*\
  !*** ./components/SelectionTagsList/dataSchema.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// REPLACE-ME: Here you can state your components data to be saved in DB (and passed to the component/panels through props)
// Data usually relates to the component’s dynamic aspects and Javascript such as texts, values and placeholders
// Replace example data prop `text` with your own.
// See https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md
// After dataSchema and propertiesSchema shapes are finalized, a ticket to Editor backend team should be created
// in the jira to save those about in the DB. Example: https://jira.wixpress.com/browse/HTMLSRVR-3142
var dataSchema = {
  SelectionTagsList: {
    type: 'object',
    properties: {
      options: {
        description: 'Array of items which should be rendered as Tags',
        type: 'array',
        items: {
          type: 'object',
          required: ['value', 'label'],
          properties: {
            value: {
              type: 'string'
            },
            label: {
              type: 'string'
            },
            link: {
              type: 'string'
            },
            rel: {
              type: 'string'
            }
          }
        }
      },
      value: {
        description: 'Array of strings which represents values of selected options',
        type: 'array',
        items: {
          type: 'string'
        }
      },
      selectedIndices: {
        description: 'Array of integers which represents selected options',
        type: 'array',
        items: {
          type: 'number'
        }
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 230:
/*!**************************************************!*\
  !*** ./components/SelectionTagsList/metaData.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  isRepeatable: true,
  disableable: true,
  canBeStretched: true,
  allowConnectToDB: true,
  verticallyResizable: false,
  layoutLimits: {
    minWidth: 50
  }
};

/***/ }),

/***/ 24:
/*!************************************************!*\
  !*** ./components/SignatureInput/constants.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TranslationKeys = exports.TranslationKeys = {
  layoutPanel: {
    header: 'SignatureInput-layout-panel-header',
    textAlignment: 'SignatureInput-layout-panel-text-alignment',
    titlePaddingStart: 'SignatureInput-layout-panel-title-padding-start',
    titleMarginBottom: 'SignatureInput-layout-panel-title-input-space'
  },
  settingsPanel: {
    header: 'SignatureInput-settings-panel-header',
    titleText: 'SignatureInput-settings-panel-title',
    titleTextTooltip: 'SignatureInput-settings-panel-title-tooltip',
    titleTextPlaceholder: 'SignatureInput-settings-panel-title-placeholder',
    titleTextTooLong: 'SignatureInput-settings-panel-title-invalid-max-length',
    clearButtonText: 'SignatureInput-settings-panel-clear-button',
    clearButtonTextTooltip: 'SignatureInput-settings-panel-clear-button-tooltip',
    clearButtonTextPlaceholder: 'SignatureInput-settings-panel-clear-button-placeholder',
    clearButtonEmpty: 'SignatureInput-settings-panel-clear-button-invalid-empty',
    clearButtonTooLong: 'SignatureInput-settings-panel-clear-button-invalid-max-length',
    generalSettingsTitle: 'SignatureInput-settings-panel-general-settings-title',
    required: 'SignatureInput-settings-panel-required-label',
    requiredTooltip: 'SignatureInput-settings-panel-required-label-tooltip'
  },
  gfpp: {
    mainAction: 'SignatureInput-settings-panel-main-action'
  }
};

var DataHooks = exports.DataHooks = {
  coreComponent: 'SignatureInput-core-component',
  title: 'SignatureInput--label',
  clear: 'SignatureInput--clear-button',
  settingsPanel: {
    titleInput: 'SignatureInput-layout-panel--title',
    clearInput: 'SignatureInput-layout-panel--clear',
    requiredCheckbox: 'SignatureInput-layout-panel--required'
  },
  layoutPanel: {
    directionThumbnails: 'SignatureInput-settings-panel--direction',
    titlePaddingStart: 'SignatureInput-settings-panel--title-padding-start',
    titleMarginBottom: 'SignatureInput-settings-panel--title-margin-bottom'
  }
};

var HelpIds = exports.HelpIds = {
  settingsPanel: '0204d706-a79e-48da-84b3-fbbddc22d5e1',
  layoutPanel: 'ab308a40-ed8e-463d-af49-efe868ae219d',
  gfpp: {
    desktop: 'cefdfa29-6792-48fe-a077-ca7bd230d769',
    mobile: '917142f7-c8e6-4616-839a-3868a27b336c'
  }
};

var ComponentMetaData = exports.ComponentMetaData = {
  displayName: 'SignatureInput',
  componentType: 'wixui.SignatureInput',
  nickName: 'signatureInput',
  skinName: 'wixui.skins.SignatureInput'
};

/***/ }),

/***/ 249:
/*!*********************************************!*\
  !*** ./components/StylableLine/ds/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 397);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ./metaData */ 398);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentType = 'wixui.StylableLine';

module.exports = {
  componentDefinition: _componentDefinition2.default,
  componentType: componentType,
  metaData: _metaData2.default
};

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

/***/ 250:
/*!*****************************************!*\
  !*** ./components/Dropdown/ds/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ./componentDefinition */ 399);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ../metaData */ 401);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const propertiesSchema = require('../propertiesSchema');
//const dataSchema = require('../dataSchema');

module.exports = {
  componentType: 'wixui.Dropdown',
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default
  //dataSchema,
  //propertiesSchema,
};

/***/ }),

/***/ 33:
/*!*************************************************!*\
  !*** ./components/FileUploaderNew/constants.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ACCEPTABLE_FILE_TYPE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TranslationKeys = exports.TranslationKeys = {
  gfpp: {
    mainAction: 'gfpp_mainaction_manage_uploaded_files'
  },
  layoutPanel: {
    header: 'Upload_Button_Layouts_Header'
  },
  settingsPanel: {
    header: 'Upload_Button_Settings_Header'
  }
};

var DataHooks = exports.DataHooks = {
  coreComponent: 'FileUploader-core-component',

  label: 'FileUploader-label',
  buttonLabel: 'FileUploader-buttonLabel',
  placeholderLabel: 'FileUploader-placeholderLabel',

  button: 'FileUploader-button',
  fileInput: 'FileUploader-fileInput',

  settingsPanel: {
    container: 'FileUploader-settings-panel-container',
    text: 'FileUploader-settings-panel-text'
  },
  layoutPanel: {
    container: 'FileUploader-layout-panel-container',
    text: 'FileUploader-layout-panel-text'
  }
};

var ComponentMetaData = exports.ComponentMetaData = {
  displayName: 'FileUploaderNew',
  componentType: 'wixui.FileUploaderNew',
  nickName: 'fileUploaderNew',
  skinName: 'wixui.skins.FileUploaderNew'
};

var HelpIds = exports.HelpIds = {
  gfpp: {
    help: 'd4107177-08e7-4d84-a23a-ca0489f991dc',
    mobileHelp: '1fd85a63-f011-417b-9901-6e011f7c36b9'
  },
  layoutPanel: {
    header: '88fc69c5-9995-4d17-bb16-0fce97f0c9cf'
  },
  settingsPanel: {
    header: 'b62a76a9-8fad-4858-944b-810bfd7a8990'
  }
};

/** @enum */
var FILE_TYPE = exports.FILE_TYPE = {
  IMAGE: 'Image',
  DOCUMENT: 'Document',
  VIDEO: 'Video',
  AUDIO: 'Audio'
};

/** @enum */
var ACCEPTABLE_FILE_TYPES = exports.ACCEPTABLE_FILE_TYPES = (_ACCEPTABLE_FILE_TYPE = {}, _defineProperty(_ACCEPTABLE_FILE_TYPE, FILE_TYPE.IMAGE, '.jpeg,.png,.jpg'), _defineProperty(_ACCEPTABLE_FILE_TYPE, FILE_TYPE.DOCUMENT, '.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.odp,.odt,.epub'), _defineProperty(_ACCEPTABLE_FILE_TYPE, FILE_TYPE.VIDEO, '.avi,.mpeg,.mpg,.mpe,.mp4,.mkv,.webm,.mov,.ogv,.vob,.m4v,.3gp,.divx ,.xvid,.mxf,.wmv'), _ACCEPTABLE_FILE_TYPE);

/***/ }),

/***/ 34:
/*!***************************************************!*\
  !*** ./components/SelectionTagsList/constants.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TranslationKeys = exports.TranslationKeys = {
  settingsPanel: {
    header: 'SelectionTagsList-settings-panel-header'
  },
  managePanel: {
    header: 'selection_tags_manage_choices_header_label',
    addItem: 'selection_tags_manage_choices_button_primary_text',
    connectData: 'selection_tags_manage_choices_button_secondary_text'
  },
  gfpp: {
    mainAction: 'SelectionTagsList-settings-panel-main-action'
  }
};

var DataHooks = exports.DataHooks = {
  coreComponent: 'SelectionTagsList-core-component',
  settingsPanel: {
    container: 'SelectionTagsList-settings-panel-container',
    text: 'SelectionTagsList-settings-panel-text'
  },
  managePanel: {
    container: 'SelectionTagsList-manage-panel-container',
    dragList: 'SelectionTagsList-manage-panel-drag-list',
    addItemButton: 'SelectionTagsList-manage-panel-add-item-button',
    connectButton: 'SelectionTagsList-manage-panel-connect-button'
  }
};

var ComponentMetaData = exports.ComponentMetaData = {
  displayName: 'SelectionTagsList',
  componentType: 'wixui.SelectionTagsList',
  nickName: 'selectionTagsList',
  skinName: 'wixui.skins.SelectionTagsList'
};

/***/ }),

/***/ 35:
/*!***********************************************!*\
  !*** ./components/CustomElement/constants.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var COMP_TYPE = exports.COMP_TYPE = 'wixui.CustomElementComponent';
var COMP_NAME = exports.COMP_NAME = 'CustomElement';

/***/ }),

/***/ 397:
/*!********************************************************!*\
  !*** ./components/StylableLine/componentDefinition.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.StylableLine': {
    styles: {},
    nickname: 'stylableLine',
    isStylableComp: true
  }
};

/***/ }),

/***/ 398:
/*!************************************************!*\
  !*** ./components/StylableLine/ds/metaData.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  // styleCanBeApplied: true,
  rotatable: true
};

/***/ }),

/***/ 399:
/*!*******************************************************!*\
  !*** ./components/Dropdown/ds/componentDefinition.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _translationKeys = __webpack_require__(/*! ../translationKeys */ 400);

var _componentOverride = __webpack_require__(/*! ../componentOverride */ 25);

var _componentOverride2 = _interopRequireDefault(_componentOverride);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  'wixui.Dropdown': {
    skins: [_componentOverride2.default.newComponentSkin],
    dataTypes: ['SelectableList'],
    propertyType: 'ComboBoxInputProperties',
    nickname: 'NewDropdown',
    labelDisplayName: _translationKeys.TranslationKeys.gfpp.componentLabel,
    styles: {
      DropDown_1: _componentOverride2.default.newComponentSkin
    }
  }
};

/***/ }),

/***/ 400:
/*!************************************************!*\
  !*** ./components/Dropdown/translationKeys.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TranslationKeys = exports.TranslationKeys = {
  gfpp: {
    mainAction: 'gfpp_mainaction_progressBar',
    componentLabel: 'component_label_progressBar'
  },
  settingsPanel: {
    header: 'progressBar_Settings_Header_Label',
    targetValueLabel: 'progressBar_Settings_TargetValue_Label',
    targetValueTooltip: 'progressBar_Settings_TargetValue_Tooltip_Text',
    valueLabel: 'progressBar_Settings_CurrentValue_Label',
    valueTooltip: 'progressBar_Settings_CurrentValue_Tooltip_Text'
  },
  layoutPanel: {
    header: 'progressBar_Layout_Header_Label',
    directionLabel: 'progressBar_Layout_ShowProgress_Label',
    directionLtr: 'progressBar_Layout_ShowProgress_LeftToRight_Label',
    directionRtl: 'progressBar_Layout_ShowProgress_RightToLeft_Label'
  }
};

/***/ }),

/***/ 401:
/*!*****************************************!*\
  !*** ./components/Dropdown/metaData.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  isRepeatable: true,
  disableable: true,
  canBeStretched: true,
  allowConnectToDB: true
};

/***/ }),

/***/ 49:
/*!*********************************************!*\
  !*** ./components/ProgressBar/constants.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DataHooks = exports.DataHooks = {
  coreComponent: 'progress-bar-core-component'
};

var TranslationKeys = exports.TranslationKeys = {
  gfpp: {
    mainAction: 'gfpp_mainaction_progressBar',
    componentLabel: 'component_label_progressBar'
  },
  settingsPanel: {
    header: 'progressBar_Settings_Header_Label',
    targetValueLabel: 'progressBar_Settings_TargetValue_Label',
    targetValueTooltip: 'progressBar_Settings_TargetValue_Tooltip_Text',
    valueText: 'progressBar_Settings_UpdateCurrentValue_Text',
    valueLink: 'progressBar_Settings_UpdateCurrentValue_Link',
    invalidTargetValue: 'progressBar_Settings_TargetValue_Invalid_Input',
    targetValueTooltipLink: 'progressBar_Settings_TargetValue_Tooltip_Link'
  },
  layoutPanel: {
    header: 'progressBar_Layout_Header_Label',
    directionLabel: 'progressBar_Layout_ShowProgress_Label',
    directionLtr: 'progressBar_Layout_ShowProgress_LeftToRight_Label',
    directionRtl: 'progressBar_Layout_ShowProgress_RightToLeft_Label'
  }
};

var HelpIds = exports.HelpIds = {
  settingsPanel: {
    header: '45f1253b-1b70-4e49-aca6-c8edd87400d0',
    currentValue: '8aabcccd-43a4-4607-aab7-552d013f0d08'
  },
  layoutPanel: {
    header: '388317b5-71c6-4b52-805a-30d0177e5baf'
  },
  gfpp: {
    help: '05add005-bfbb-4dd7-ad99-d48a67778beb',
    mobileHelp: 'fa99de28-a5c4-47d9-98d6-7393057c195a'
  }
};

/***/ }),

/***/ 59:
/*!***********************************************!*\
  !*** ./components/Slider/propertiesSchema.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  SliderProperties: {
    type: 'object',
    allOf: [{
      properties: {
        trackSize: {
          type: 'number',
          default: 25
        },
        orientation: {
          type: 'string',
          enum: ['horizontal', 'vertical'],
          default: 'horizontal'
        },
        thumbShape: {
          type: 'string',
          enum: ['circle', 'square', 'rectangle', 'bar'],
          default: 'circle'
        },
        tickMarksShape: {
          type: 'string',
          enum: ['none', 'line', 'dot'],
          default: 'line'
        },
        tooltipVisibility: {
          type: 'string',
          enum: ['none', 'hover', 'always'],
          default: 'hover'
        },
        tooltipPosition: {
          type: 'string',
          enum: ['normal', 'across'],
          default: 'normal'
        },
        tooltipPrefix: {
          type: 'string',
          maxLength: 30
        },
        tooltipSuffix: {
          type: 'string',
          maxLength: 30
        },
        tickMarksPosition: {
          type: 'string',
          enum: ['normal', 'middle', 'across'],
          default: 'normal'
        },
        dir: {
          type: 'string',
          enum: ['ltr', 'rtl'],
          default: 'ltr'
        }
      }
    }, {
      $ref: 'InputProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 60:
/*!***********************************************************!*\
  !*** ./components/MusicPlayer/editor/layoutManagement.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findLayoutWidthAndHeight = exports.findLayoutMinAndMax = undefined;

var _lodash = __webpack_require__(/*! lodash */ 2);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SMALL_HEIGHT = 40;
var DEFAULT_HEIGHT = 70;
var COVER_SIZE = 70;
var DEFAULT_WIDTH = 320;

var PLAYLIST_TRACK_ITEM_HEIGHT = 60;
var PLAYLIST_FOOTER_HEIGHT = 60;

/*
Width and height values are taken from design.
Bit map are used to cover all show%layout_info% toggles.

weight = width x height

 0 = 70 x 70
 1 = 70 x 70

 2 = 114 x 40
 3 = 114 + 40 x 40
 4 = 250 x 40
 5 = 250 + 40 x 40
 6 = 250 x 40
 7 = 250 + 40 x 40
 8 = 250 x 40
 9 = 250 + 40 x 40
10 = 250 x 40
11 = 250 + 40 x 40
12 = 250 x 70
13 = 250 + 70 x 70
14 = 250 x 70
15 = 250 + 70 x 70
*/
var LAYOUT_WEIGHTS = {
  showCover: 1,
  showTimeStamp: 2,
  showTrackName: 4,
  showArtistName: 4,
  showProgressBar: 8
};

var NO_SELECT_WEIGHT = 1;
var COVER_WEIGHT = 2;

var LAYOUT_WIDTH_LEVELS = {
  1: 70,
  3: 114,
  15: 250
};
var LAYOUT_HEIGHT_LEVELS = {
  1: 70,
  11: 40,
  15: 70
};

function countLayoutWeights(compProps) {
  return _lodash2.default.chain(Object.keys(compProps)).filter(function (key) {
    return _lodash2.default.startsWith(key, 'show');
  }).map(function (key) {
    return compProps[key] ? LAYOUT_WEIGHTS[key] : 0;
  }).reduce(function (acc, i) {
    return acc | i;
  }, 0) // eslint-disable-line no-bitwise
  .value();
}

function pickLayoutLevel(weight, levels) {
  for (var value in levels) {
    if (weight <= value) {
      return levels[value];
    }
  }
}

function findLayoutMinAndMax(compData, compProps) {
  var showPlaylist = compProps.showPlaylist,
      layout = compProps.layout,
      playlistTrackSpacing = compProps.playlistTrackSpacing;
  var playlist = compData.playlist;


  if (layout === 'icon') {
    return {
      minWidth: 70,
      maxWidth: 300,
      minHeight: 70,
      maxHeight: 300
    };
  }

  var weight = countLayoutWeights(compProps);
  var minWidth = pickLayoutLevel(weight, LAYOUT_WIDTH_LEVELS);
  var minHeight = pickLayoutLevel(weight, LAYOUT_HEIGHT_LEVELS);

  // Every odd weight we have cover added to total width
  if (weight > COVER_WEIGHT && weight % 2) {
    minWidth += minHeight;
  }

  var maxHeight = minHeight;

  if (showPlaylist && _lodash2.default.get(playlist, 'length') > 0) {
    maxHeight += playlist.length * PLAYLIST_TRACK_ITEM_HEIGHT;

    if (playlistTrackSpacing) {
      maxHeight += (playlist.length - 1) * playlistTrackSpacing;
    }

    maxHeight += PLAYLIST_FOOTER_HEIGHT;
  }

  return {
    minWidth: minWidth,
    maxWidth: weight <= NO_SELECT_WEIGHT ? COVER_SIZE : Number.MAX_SAFE_INTEGER,
    minHeight: minHeight,
    maxHeight: maxHeight
  };
}

function findLayoutWidthAndHeight(compData, compProps, compLayout) {
  var showArtistName = compProps.showArtistName,
      showTrackName = compProps.showTrackName,
      showProgressBar = compProps.showProgressBar,
      showTimeStamp = compProps.showTimeStamp,
      showPlaylist = compProps.showPlaylist,
      layout = compProps.layout,
      playlistTrackSpacing = compProps.playlistTrackSpacing;
  var width = compLayout.width,
      height = compLayout.height;
  var playlist = compData.playlist;


  if (layout === 'icon') {
    return { height: 70, width: 70 };
  }

  var showTitle = showTrackName || showArtistName;
  var hasSingleRow = showTitle !== showProgressBar || !showTitle && !showProgressBar && showTimeStamp;
  var nextWidth = width < DEFAULT_WIDTH ? DEFAULT_WIDTH : width;
  var nextHeight = height;

  if (hasSingleRow) {
    nextHeight = SMALL_HEIGHT;
  } else {
    nextHeight = DEFAULT_HEIGHT;

    if (showPlaylist && _lodash2.default.get(playlist, 'length') > 0) {
      nextHeight += playlist.length * PLAYLIST_TRACK_ITEM_HEIGHT;

      if (playlistTrackSpacing) {
        nextHeight += (playlist.length - 1) * playlistTrackSpacing;
      }

      nextHeight += PLAYLIST_FOOTER_HEIGHT;
    }
  }

  if (!showTitle && !showProgressBar && !showTimeStamp) {
    nextWidth = COVER_SIZE;
  } else if (width === COVER_SIZE) {
    nextWidth = DEFAULT_WIDTH;
  }

  return { width: nextWidth, height: nextHeight };
}

exports.findLayoutMinAndMax = findLayoutMinAndMax;
exports.findLayoutWidthAndHeight = findLayoutWidthAndHeight;

/***/ }),

/***/ 72:
/*!**********************************************!*\
  !*** ./components/AddressInput/constants.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DataHooks = exports.DataHooks = {
  dropdownFooter: 'address-input-dropdown-footer'
};

var ImageUrls = exports.ImageUrls = {
  googleWhiteBackground: '//static.parastorage.com/services/santa-resources/resources/viewer/addressInput/powered_by_google_on_white.png'
};

var TranslationKeys = exports.TranslationKeys = {
  exampleAddressText: 'address_input_design_sample_address',
  apiDisconnectedPreviewText: 'address_input_states_error_feature_setup',
  apiDisconnectedLiveSiteText: 'address_input_states_viewer_error_feature_setup',
  overQuota: 'address_input_states_error_quota',
  noResults: 'address_input_states_no_results',
  generalError: 'address_input_states_error_general'
};

var Texts = exports.Texts = {
  ariaLabel: 'Address input field'
};

var ComponentMetaData = exports.ComponentMetaData = {
  displayName: 'AddressInput',
  componentType: 'wixui.AddressInput',
  nickName: 'addressInput',
  skinName: 'wixui.skins.AddressInput',
  propertiesType: 'AddressInputProperties',
  translationKeysId: 'Address_Input'
};

/***/ }),

/***/ 73:
/*!***************************************!*\
  !*** ./components/Slider/ds/index.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 87);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _hooks = __webpack_require__(/*! ../hooks */ 88);

var _hooks2 = _interopRequireDefault(_hooks);

var _metaData = __webpack_require__(/*! ../metaData */ 89);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 59);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 90);

var componentType = 'wixui.Slider';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  hooks: _hooks2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 84:
/*!********************************************************!*\
  !*** ./components/LineShareButton/ds/componentType.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 'wixui.LineShareButton';

/***/ }),

/***/ 85:
/*!***********************************************************!*\
  !*** ./legacy/components/RichTextBox/propertiesSchema.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var propertiesSchema = {
  RichTextBoxProperties: {
    type: 'object',
    allOf: [{
      properties: {
        textAlignment: {
          type: 'string',
          default: 'left',
          enum: ['left', 'right', 'center'],
          description: 'the text alignment',
          maxLength: 100
        },
        textPadding: {
          type: 'number',
          default: 18,
          minimum: 0,
          maximum: 100,
          description: 'the value of the textPadding'
        },
        toolbarPosition: {
          type: 'string',
          default: 'top',
          enum: ['top', 'bottom', 'inline'],
          description: 'the location of the toolbar',
          maxLength: 20
        },
        placeholder: {
          type: 'string',
          description: 'the placeholder',
          default: '',
          maxLength: 4000
        },
        defaultTextType: {
          type: 'string',
          default: 'placeholderText',
          enum: ['none', 'initialText', 'placeholderText', 'placeholderAndInitialText'],
          description: 'the type of the default text for the input',
          maxLength: 100
        },
        allowLinks: {
          type: 'boolean',
          description: 'Are links allowed'
        }
      }
    }, {
      $ref: 'InputProperties'
    }]
  }
};

exports.default = propertiesSchema;

/***/ }),

/***/ 86:
/*!************************************************************!*\
  !*** ./legacy/components/ToggleSwitch/propertiesSchema.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  ToggleSwitchProperties: {
    type: 'object',
    allOf: [{
      properties: {
        displayKnobIcons: {
          type: 'boolean'
        },
        trackHeight: {
          type: 'number',
          default: 100
        },
        knobSize: {
          type: 'number',
          default: 90
        },
        alignment: {
          type: 'string',
          enum: ['left', 'right'],
          default: 'left'
        }
      }
    }, {
      $ref: 'InputProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 87:
/*!**************************************************!*\
  !*** ./components/Slider/componentDefinition.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.Slider': {
    skins: ['wixui.skins.Slider'],
    dataTypes: ['Slider'],
    propertyType: 'SliderProperties',
    nickname: 'slider',
    styles: {
      slider1: 'wixui.skins.Slider'
    }
  }
};

/***/ }),

/***/ 88:
/*!************************************!*\
  !*** ./components/Slider/hooks.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(/*! lodash */ 2);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function updateOrientationLayout(prevLayout) {
  return _lodash2.default.assign({}, prevLayout, {
    width: prevLayout.height,
    height: prevLayout.width
  });
}

function getTicksSize(tickShape, tickPosition) {
  if (tickPosition === 'middle') {
    return 0;
  }

  switch (tickShape) {
    default:
    case 'line':
      return 22;
    case 'dot':
      return 15;
    case 'none':
      return 0;
  }
}

function shouldShowTicks(data, props) {
  return data.step > 0 && props.tickMarksShape !== 'none';
}

function updateTicksLayout(_ref) {
  var prevLayout = _ref.prevLayout,
      prevProps = _ref.prevProps,
      nextProps = _ref.nextProps,
      prevData = _ref.prevData,
      nextData = _ref.nextData;

  var lastShowTicks = shouldShowTicks(prevData, prevProps);
  var showTicks = shouldShowTicks(nextData, nextProps);
  var lastSize = lastShowTicks ? getTicksSize(prevProps.tickMarksShape, prevProps.tickMarksPosition) : 0;
  var size = showTicks ? getTicksSize(nextProps.tickMarksShape, nextProps.tickMarksPosition) : 0;
  var sizeDiff = size - lastSize;
  var dim = nextProps.orientation === 'horizontal' ? 'height' : 'width';

  return _lodash2.default.assign({}, prevLayout, _defineProperty({}, dim, prevLayout[dim] + sizeDiff));
}

function didOrientationChange(prevProps, nextProps) {
  return nextProps.orientation && prevProps.orientation && nextProps.orientation !== prevProps.orientation;
}

function didTicksChange(prevProps, nextProps, prevData, nextData) {
  var lastShowTicks = shouldShowTicks(prevData, prevProps);
  var nextShowTicks = shouldShowTicks(nextData, nextProps);
  var lastTickMarksShape = prevProps.tickMarksShape;
  var nextTickMarksShape = nextProps.tickMarksShape;
  var lastTickMarksPosition = prevProps.tickMarksPosition;
  var nextTickMarksPosition = nextProps.tickMarksPosition;

  return lastShowTicks !== nextShowTicks || lastTickMarksShape !== nextTickMarksShape || lastTickMarksPosition !== nextTickMarksPosition;
}

var beforeUpdate = function beforeUpdate(_ref2) {
  var compDriver = _ref2.compDriver,
      prevProps = _ref2.prevProps,
      nextProps = _ref2.nextProps,
      prevData = _ref2.prevData,
      nextData = _ref2.nextData;

  var prevLayout = compDriver.layout.get();
  var newLayout = void 0;

  if (didOrientationChange(prevProps, nextProps)) {
    newLayout = updateOrientationLayout(prevLayout);
  } else if (didTicksChange(prevProps, nextProps, prevData, nextData)) {
    newLayout = updateTicksLayout({ prevLayout: prevLayout, prevProps: prevProps, nextProps: nextProps, prevData: prevData, nextData: nextData });
  }

  if (newLayout) {
    compDriver.layout.update(newLayout);
  }
};

var beforeUpdateProperties = function beforeUpdateProperties(compDriver, nextProps) {
  var prevProps = compDriver.properties.get();
  var prevData = compDriver.data.get();
  return beforeUpdate({ compDriver: compDriver, prevProps: prevProps, nextProps: nextProps, prevData: prevData, nextData: prevData });
};

var beforeUpdateData = function beforeUpdateData(compDriver, nextData) {
  var prevProps = compDriver.properties.get();
  var prevData = compDriver.data.get();
  return beforeUpdate({ compDriver: compDriver, prevProps: prevProps, nextProps: prevProps, prevData: prevData, nextData: nextData });
};

var getSize = function getSize(currentLayout, nextLayout) {
  return {
    width: nextLayout.width || currentLayout.width,
    height: nextLayout.height || currentLayout.height
  };
};

var beforeUpdateLayout = function beforeUpdateLayout(compDriver, nextLayout) {
  if (!nextLayout.width && !nextLayout.height) {
    return;
  }

  var currentLayout = compDriver.layout.get();
  var compProperties = compDriver.properties.get();

  var _getSize = getSize(currentLayout, nextLayout),
      width = _getSize.width,
      height = _getSize.height;

  var newLayout = _lodash2.default.cloneDeep(nextLayout);

  if (compProperties.orientation === 'vertical') {
    var minHeight = 4 * width;
    newLayout.height = Math.max(height, minHeight);
  } else if (compProperties.orientation === 'horizontal') {
    var minWidth = 4 * height;
    newLayout.width = Math.max(width, minWidth);
  }

  compDriver.layout.update(newLayout);
};

var hooks = {
  beforeUpdateProperties: beforeUpdateProperties,
  beforeUpdateData: beforeUpdateData,
  beforeUpdateLayout: beforeUpdateLayout
};

exports.default = hooks;

/***/ }),

/***/ 89:
/*!***************************************!*\
  !*** ./components/Slider/metaData.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  isRepeatable: true,
  disableable: true
};

/***/ }),

/***/ 90:
/*!*****************************************!*\
  !*** ./components/Slider/dataSchema.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  Slider: {
    type: 'object',
    properties: {
      min: {
        type: 'number',
        default: 0,
        description: 'Minimum value'
      },
      max: {
        type: 'number',
        default: 100,
        description: 'Maximum value'
      },
      value: {
        type: 'number',
        default: 50,
        description: 'Current value'
      },
      step: {
        type: 'number',
        default: 0,
        description: 'Step value'
      },
      stepType: {
        type: 'string',
        default: 'value',
        enum: ['value', 'count'],
        description: 'When set to \'value\', step represents the value of each step. When set to \'count\', step represents the total steps count'
      },
      disabled: {
        type: 'boolean',
        default: false,
        description: 'Determines whether the slider is disabled or not'
      },
      readOnly: {
        type: 'boolean',
        default: false,
        description: 'Determines whether the slider is read-only or not'
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 91:
/*!**************************************************!*\
  !*** ./components/SearchBox/propertiesSchema.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  SearchBoxProperties: {
    type: 'object',
    allOf: [{
      properties: {
        layout: {
          type: 'string',
          enum: ['icon', 'button'],
          default: 'icon'
        },
        iconAlignment: {
          type: 'string',
          enum: ['left', 'right'],
          default: 'left'
        },
        textAlignment: {
          type: 'string',
          enum: ['left', 'center'],
          default: 'left'
        },
        textSpacing: {
          type: 'number',
          default: 12,
          description: 'Setting the spacing from the side the text is aligned to',
          minimum: 0,
          maximum: 50
        },
        iconSpacing: {
          type: 'number',
          default: 12,
          description: 'In icon layout affects the side to which the icon is aligend to, for button layout affects both - left and right sides',
          minimum: 0,
          maximum: 50
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 92:
/*!*************************************************!*\
  !*** ./components/BarChart/propertiesSchema.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  BarChartProperties: {
    type: 'object',
    allOf: [{
      properties: {
        dataset: {
          type: 'array'
        },
        total: {
          type: 'number',
          default: 0
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 93:
/*!***************************************************!*\
  !*** ./components/TimePicker/propertiesSchema.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  TimePickerProperties: {
    type: 'object',
    allOf: [{
      properties: {
        alignment: {
          type: 'string',
          enum: ['left', 'center', 'right'],
          default: 'left'
        },
        useAmPmFormat: {
          type: 'boolean',
          default: false,
          description: 'Should the display format be 12 hours (or 24)'
        },
        controller: {
          type: 'string',
          enum: ['text', 'stepper', 'dropdown'],
          default: 'text',
          description: 'The display of the time picker'
        },
        initialTime: {
          type: 'string',
          enum: ['none', 'current', 'value', 'placeholder'],
          default: 'current',
          description: 'What the time picker should display on load'
        }
      }
    }, {
      $ref: 'InputProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 94:
/*!*****************************************************!*\
  !*** ./components/AddressInput/propertiesSchema.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  AddressInputProperties: {
    type: 'object',
    allOf: [{
      properties: {
        alignment: {
          type: 'string',
          enum: ['left', 'center', 'right'],
          default: 'left'
        },
        iconVisible: {
          type: 'boolean',
          default: false
        },
        dividerVisible: {
          type: 'boolean',
          default: false
        }
      }
    }, {
      $ref: 'InputProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 95:
/*!*****************************************************!*\
  !*** ./components/RatingsInput/propertiesSchema.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  RatingsInputProperties: {
    type: 'object',
    allOf: [{
      properties: {
        showTitle: {
          type: 'boolean',
          default: true
        },
        showLabels: {
          type: 'boolean',
          default: true
        },
        labelPosition: {
          type: 'string',
          enum: ['top', 'bottom', 'side'],
          default: 'top'
        },
        labelAlignment: {
          type: 'string',
          enum: ['left', 'center', 'right'],
          default: 'center'
        },
        shapeSize: {
          type: 'number',
          minimum: 15,
          maximum: 100,
          default: 24
        },
        shapeSpacing: {
          type: 'number',
          minimum: 1,
          maximum: 50,
          default: 5
        },
        direction: {
          type: 'string',
          enum: ['ltr', 'rtl'],
          default: 'ltr'
        },
        required: {
          type: 'boolean',
          default: false
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 96:
/*!*******************************************************!*\
  !*** ./components/RatingsDisplay/propertiesSchema.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  RatingsDisplayProperties: {
    type: 'object',
    allOf: [{
      properties: {
        showReviewsCount: {
          type: 'boolean',
          default: true
        },
        showRating: {
          type: 'boolean',
          default: true
        },
        noReviewsMode: {
          type: 'string',
          enum: ['nothing', 'emptyIcons', 'placeholderText'],
          default: 'emptyIcons'
        },
        ratingPosition: {
          type: 'string',
          enum: ['before', 'after'],
          default: 'before'
        },
        shapeSize: {
          type: 'number',
          minimum: 15,
          maximum: 100,
          default: 24
        },
        shapeSpacing: {
          type: 'number',
          minimum: 1,
          maximum: 50,
          default: 5
        },
        alignment: {
          type: 'string',
          enum: ['left', 'right', 'center'],
          default: 'left'
        },
        direction: {
          type: 'string',
          enum: ['ltr', 'rtl'],
          default: 'ltr'
        },
        renderSeo: {
          type: 'boolean',
          default: true
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 97:
/*!************************************************!*\
  !*** ./components/Tags/ds/propertiesSchema.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  TagsProperties: {
    type: 'object',
    allOf: [{
      properties: {
        alignment: {
          type: 'string',
          enum: ['left', 'center', 'right'],
          default: 'center'
        },
        verticalSpacing: {
          type: 'number',
          default: 20,
          minimum: 0,
          maximum: 50
        },
        horizontalSpacing: {
          type: 'number',
          default: 20,
          minimum: 0,
          maximum: 50
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 98:
/*!****************************************************!*\
  !*** ./components/VideoPlayer/propertiesSchema.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  VideoPlayerProperties: {
    type: 'object',
    allOf: [{
      properties: {
        showVideoTitle: {
          type: 'boolean',
          default: true
        },
        autoplay: {
          type: 'boolean',
          default: false,
          description: 'Autoplay video'
        },
        loop: {
          type: 'boolean',
          default: false,
          description: 'Play video on loop'
        },
        share: {
          type: 'boolean',
          default: true,
          description: 'Allow to share video'
        },
        controlsVisibility: {
          type: 'string',
          enum: ['hover', 'never'],
          default: 'hover'
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 99:
/*!***********************************************************!*\
  !*** ./components/LineShareButton/ds/propertiesSchema.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  LineShareButtonProperties: {
    type: 'object',
    allOf: [{
      properties: {
        buttonType: {
          type: 'string',
          default: 'button',
          enum: ['button', 'classicWithButton', 'classicBig', 'classicMedium', 'classicSmall', 'bubbleBig', 'bubbleMedium', 'bubbleSmall']
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ })

/******/ });
});
//# sourceMappingURL=componentsMetaData.bundle.js.map