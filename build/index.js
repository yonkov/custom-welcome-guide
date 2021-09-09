(window["webpackJsonp_custom_welcome_guide"] = window["webpackJsonp_custom_welcome_guide"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp_custom_welcome_guide"] = window["webpackJsonp_custom_welcome_guide"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: getPosts, pluginOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluginOptions", function() { return pluginOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api */ "@wordpress/api");
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Get all the guides using the WordPress rest api
 * @package Custom Welcome Guide
 * @since 0.0.1
 * @see https://developer.wordpress.org/rest-api/reference/
 */


const restUrl = custom_welcome_guide_script_params.rest_url;
const getPosts = () => {
  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      const response = await fetch(restUrl + 'wp/v2/guides?filter[orderby]=date&order=asc');
      const json = await response.json();
      setData(json);
    };

    getData();
  }, []);
  return data;
};
/* Get all the plugin Options */

const pluginOptions = () => {
  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _wordpress_api__WEBPACK_IMPORTED_MODULE_1___default.a.loadPromise.then(() => {
      const settings = new _wordpress_api__WEBPACK_IMPORTED_MODULE_1___default.a.models.Settings();

      if (!data.isAPILoaded) {
        settings.fetch().then(response => {
          setData({
            isShowPost: response['cwg_options']['is_show_post'] ? response['cwg_options']['is_show_post'] : '',
            isShowPage: response['cwg_options']['is_show_page'] ? response['cwg_options']['is_show_page'] : '',
            isShowCPT: response['cwg_options']['is_show_cpt'] ? response['cwg_options']['is_show_cpt'] : '',
            featuredPostId: response['cwg_options']['featured_post_id'] ? response['cwg_options']['featured_post_id'] : '',
            isAPILoaded: true
          });
        });
      }
    });
  }, []);
  return data;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _templates_guide_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/guide-list */ "./src/templates/guide-list.js");
/* harmony import */ var _templates_featured_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/featured-guide */ "./src/templates/featured-guide.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__);


/**
 * The Main Js file. Written with ESNext standard and JSX support – build step required.
 * This one gets loaded in the WordPress Block Editor
 * It adds and additional tab in the WordPress Block Editor's sidebar.
 * The plugin takes advantage of the WordPress rest api, introduced in version 4.7.
 * It uses Gutenberg components from WordPress core to load a list of user-defined guides.
 * @package Custom Welcome Guide
 * @since 0.0.1
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
const {
  PluginDocumentSettingPanel
} = wp.editPost;
/**
 * Internal dependencies
 */






/** 
 * Determine whether to show the guides in the Block Editor's sidebar 
 * Based on plugin options 
 * 
 */

function showGuideList() {
  const isPostEditor = document.body.className.indexOf('post-type-post') > -1;
  const isPаgeEditor = document.body.className.indexOf('post-type-page') > -1;
  const isCPTEditor = !isPostEditor && !isPаgeEditor;
  const {
    isShowPost,
    isShowPage,
    isShowCPT,
    isAPILoaded
  } = Object(_data__WEBPACK_IMPORTED_MODULE_4__["pluginOptions"])();

  if (isPostEditor && isShowPost) {
    return true;
  } else if (isPаgeEditor && isShowPage) {
    return true;
  } else if (isCPTEditor && isShowCPT) {
    return true;
  } else {
    return false;
  }
}
/**
 * Register the Welcome Guide plugin in the Block Editor's sidebar
 * @package Admin Tour Guide
 * @since 0.0.1
 * @see https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-document-setting-panel/
 */


const WelcomeGuidePluginRegisterSidebar = () => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, showGuideList() && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginDocumentSettingPanel, {
  name: "welcome-guide",
  title: "Welcome Guide",
  className: "welcome-guide"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_templates_guide_list__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__["registerPlugin"])('welcome-guide-plugin-document-setting-panel', {
  render: function () {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, showGuideList() && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_templates_featured_guide__WEBPACK_IMPORTED_MODULE_3__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WelcomeGuidePluginRegisterSidebar, null));
  },
  icon: 'welcome-view-site'
});

/***/ }),

/***/ "./src/templates/featured-guide.js":
/*!*****************************************!*\
  !*** ./src/templates/featured-guide.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../data */ "./src/data.js");
/* harmony import */ var _guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guide */ "./src/templates/guide.js");




/**
 * Display a Featured Guide. If selected from the plugin options, 
 * it will popup and override the default welcome guide
 * when the user visits the Block Editor screen for the first time
 */

const FeaturedGuide = props => {
  const [isOpen, setOpen] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    isAPILoaded,
    featuredPostId
  } = Object(_data__WEBPACK_IMPORTED_MODULE_1__["pluginOptions"])();

  if (!isAPILoaded) {
    return null;
  }

  return !localStorage.getItem('custom-welcome-guide') && featuredPostId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, isOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_guide__WEBPACK_IMPORTED_MODULE_2__["default"], {
    parentPostId: featuredPostId,
    onFinish: () => {
      setOpen(false);
      localStorage.setItem('custom-welcome-guide', 'yes');
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturedGuide);

/***/ }),

/***/ "./src/templates/guide-list.js":
/*!*************************************!*\
  !*** ./src/templates/guide-list.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guide */ "./src/templates/guide.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../data */ "./src/data.js");



/**
 * Template for displaying a List of Guides in the Gutenberg Post Sidebar
 * @package Custom Welcome Guide
 * @since 0.0.1
 * @see https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/guide
 * 
 */




const {
  __
} = wp.i18n;

const WelcomeGuideList = props => {
  const [isOpen, setOpen] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const posts = Object(_data__WEBPACK_IMPORTED_MODULE_4__["getPosts"])();
  const [postId, setPostId] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, posts.length > 0 && posts.filter(post => post.parent == 0).map((post, index) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    class: "guide-list"
  }, index == 0 && posts.length == 1 ? '' : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, index + 1 + '.'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "guide-btn",
    key: index,
    onClick: () => {
      setOpen(true);
      setPostId(post.id);
    }
  }, post.title.rendered))), isOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_guide__WEBPACK_IMPORTED_MODULE_3__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    onFinish: () => setOpen(false),
    parentPostId: postId
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (WelcomeGuideList);

/***/ }),

/***/ "./src/templates/guide.js":
/*!********************************!*\
  !*** ./src/templates/guide.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../data */ "./src/data.js");



/**
 * Template for displaying the Welcome Guide
 * @package Custom Welcome Guide
 * @since 0.0.1
 * @see https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/guide
 * 
 */




const WelcomeGuide = props => {
  const posts = Object(_data__WEBPACK_IMPORTED_MODULE_4__["getPosts"])();
  const {
    parentPostId
  } = props;
  /**
   * Strip potentially dangerous html tags to secure post output
   * @param {string} content 
   * @returns escaped html
   */

  function escapeHtml(content) {
    let div = document.createElement('div');
    div.innerHTML = content;
    let scripts = div.querySelectorAll('style, script');
    let i = scripts.length;

    while (i--) {
      scripts[i].parentNode.removeChild(scripts[i]);
    }

    return div.innerHTML;
  }

  return posts.length > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Guide"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    className: "custom-welcome-guide",
    pages: posts.filter(post => post.parent == parentPostId || post.id == parentPostId).map(post => ({
      image: post.featured_image ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        src: post.featured_image
      }) : '',
      content: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", {
        className: "edit-post-welcome-guide__heading"
      }, post.title.rendered), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "edit-post-welcome-guide__text",
        dangerouslySetInnerHTML: {
          __html: escapeHtml(post.content.rendered)
        }
      }))
    }))
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WelcomeGuide);

/***/ }),

/***/ "@wordpress/api":
/*!*****************************!*\
  !*** external ["wp","api"] ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["api"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["plugins"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map