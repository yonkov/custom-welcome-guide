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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/templates/admin.js");
/******/ })
/************************************************************************/
/******/ ({

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
 * Get all Guides using the WordPress rest api
 * @package Admin Welcome Guide
 * @since 0.0.1
 * @see https://developer.wordpress.org/rest-api/reference/
 */


const getPosts = () => {
  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getData = async () => {
      const response = await fetch('/wp-json/wp/v2/guides');
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
            isShowPost: response['awg_options']['is_show_post'] ? response['awg_options']['is_show_post'] : '',
            isShowPage: response['awg_options']['is_show_page'] ? response['awg_options']['is_show_page'] : '',
            isShowCPT: response['awg_options']['is_show_cpt'] ? response['awg_options']['is_show_cpt'] : '',
            featuredPostId: response['awg_options']['featured_post_id'] ? response['awg_options']['featured_post_id'] : '',
            isAPILoaded: true
          });
        });
      }
    });
  }, []);
  return data;
};

/***/ }),

/***/ "./src/templates/admin.js":
/*!********************************!*\
  !*** ./src/templates/admin.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api */ "@wordpress/api");
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _admin_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin.scss */ "./src/templates/admin.scss");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../data */ "./src/data.js");


/**
 * Template for Displaying the Plugin's Settings page using React Components
 * @package Admin Welcome Guide
 * @since 0.0.1
 * @see https://wholesomecode.ltd/wordpress/create-settings-page-wordpress-gutenberg-components/
 */









const Notices = () => {
  const notices = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(select => select(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__["store"]).getNotices().filter(notice => notice.type === 'snackbar'), []);
  const {
    removeNotice
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__["store"]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SnackbarList"], {
    className: "welcome-guide-admin-notices",
    notices: notices,
    onRemove: removeNotice
  });
};

class App extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);
    this.state = {
      isAPILoaded: false,
      isShowPost: true,
      isShowPage: true,
      isShowCPT: false,
      featuredPostId: '',
      posts: ''
    };
  }

  componentDidMount() {
    // fetch all plugin options
    _wordpress_api__WEBPACK_IMPORTED_MODULE_3___default.a.loadPromise.then(() => {
      this.settings = new _wordpress_api__WEBPACK_IMPORTED_MODULE_3___default.a.models.Settings();
      const {
        isAPILoaded
      } = this.state;

      if (!isAPILoaded) {
        this.settings.fetch().then(response => {
          this.setState({
            isShowPost: response['awg_options']['is_show_post'] ? response['awg_options']['is_show_post'] : '',
            isShowPage: response['awg_options']['is_show_page'] ? response['awg_options']['is_show_page'] : '',
            isShowCPT: response['awg_options']['is_show_cpt'] ? response['awg_options']['is_show_cpt'] : '',
            featuredPostId: response['awg_options']['featured_post_id'] ? response['awg_options']['featured_post_id'] : '',
            isAPILoaded: true
          });
        });
      }
    }); // fetch all posts

    fetch('/wp-json/wp/v2/guides').then(response => response.json()).then(posts => {
      this.setState({
        posts: posts
      });
    });
  }

  toggleCheckbox(name) {
    this.setState({
      [name]: !this.state[name]
    });
  }

  render() {
    const {
      isAPILoaded,
      posts,
      featuredPostId
    } = this.state;

    if (!isAPILoaded) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        icon: "admin-plugins"
      }), " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Welcome Guide Options', 'admin-welcome-guide')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Spinner"], null))));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      icon: "admin-plugins"
    }), " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Welcome Guide Options', 'admin-welcome-guide')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Show guides in the Post editor', 'admin-welcome-guide'),
      help: "Show a list of all the admin guides in the post editor's sidebar.",
      checked: this.state.isShowPost,
      onChange: this.toggleCheckbox.bind(this, 'isShowPost')
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Show guides in the Page editor', 'admin-welcome-guide'),
      help: "Display the admin guides in the page editor's sidebar.",
      checked: this.state.isShowPage,
      onChange: this.toggleCheckbox.bind(this, 'isShowPage')
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Show guides in Custom Post Types', 'admin-welcome-guide'),
      help: "Enable the welcome guides for custom post types. Note that they need to use the Block editor for this option to work.",
      checked: this.state.isShowCPT,
      onChange: this.toggleCheckbox.bind(this, 'isShowCPT')
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Choose a Featured Guide if you want to replace the Block Editor's Welcome Guide Modal that pops up when you open the Block Editor for the first time.", 'admin-welcome-guide'),
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Featured Guide', 'admin-welcome-guide'),
      onChange: featuredPostId => this.setState({
        featuredPostId
      }),
      options: posts && posts.map((post, index) => index == 0 ? {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('None', 'admin-welcome-guide'),
        value: ''
      } : {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])(post.title.rendered, 'admin-welcome-guide'),
        value: post.id
      }),
      value: featuredPostId
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      isPrimary: true,
      onClick: () => {
        const {
          isShowPost,
          isShowPage,
          isShowCPT
        } = this.state;
        const settings = new _wordpress_api__WEBPACK_IMPORTED_MODULE_3___default.a.models.Settings({
          awg_options: {
            ['is_show_post']: isShowPost ? 'true' : '',
            ['is_show_page']: isShowPage ? 'true' : '',
            ['is_show_cpt']: isShowCPT ? 'true' : '',
            ['featured_post_id']: featuredPostId
          }
        });
        settings.save();
        Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["dispatch"])('core/notices').createNotice('success', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Settings Saved', 'admin-welcome-guide'), {
          type: 'snackbar',
          isDismissible: true,
          icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
            icon: "smiley"
          })
        });
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Save', 'admin-welcome-guide')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Notices, null));
  }

}

document.addEventListener('DOMContentLoaded', () => {
  const htmlOutput = document.getElementById('admin-welcome-guide-wrapper');

  if (htmlOutput) {
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(App, null), htmlOutput);
  }
});

/***/ }),

/***/ "./src/templates/admin.scss":
/*!**********************************!*\
  !*** ./src/templates/admin.scss ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

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

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["notices"]; }());

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
//# sourceMappingURL=admin.js.map