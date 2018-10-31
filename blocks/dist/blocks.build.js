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
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/src/blocks.js":
/*!******************************!*\
  !*** ./blocks/src/blocks.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./gutenberg-plugin-boilerplate/block */ "./blocks/src/gutenberg-plugin-boilerplate/block.js");

__webpack_require__(/*! ./gpb-editor/block */ "./blocks/src/gpb-editor/block.js");

/***/ }),

/***/ "./blocks/src/gpb-editor/block.js":
/*!****************************************!*\
  !*** ./blocks/src/gpb-editor/block.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./style.scss */ "./blocks/src/gpb-editor/style.scss");

__webpack_require__(/*! ./editor.scss */ "./blocks/src/gpb-editor/editor.scss");

// import * as api from './api';

/**
 * BLOCK: main
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText;
var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    InspectorControls = _wp$blocks.InspectorControls; // Import registerBlockType() from wp.blocks

var Button = wp.components.Button;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

// Inspired by https://codepen.io/abergin/pen/ihlDf

registerBlockType('vl-gpb/editor', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('VL Gutenberg Plugin Boilerplate Editor '), // Block title.
	icon: 'admin-plugins', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__('VL Gutenberg Plugin Boilerplate Editor '), __('Gutenberg Plugin Boilerplate Editor ')],
	attributes: {
		title: {
			type: 'string',
			source: 'meta',
			meta: 'vl_gpb_editor__title',
			default: ''
		}
	},

	/**
  * The edit function describes the structure of your block in the context of the editor.
  * This represents what the editor will render when the block is used.
  *
  * The "edit" property must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  */
	edit: function edit(props) {
		var title = props.attributes.title,
		    setAttributes = props.setAttributes;


		var settings_values = {
			api_key: api_key

			// REMOVE FOR PRODUCTION
			// console.log('settings_values.api_key', settings_values.api_key);

			//TODO : if api key return map, else ask to setup api key => <h2>Please enter your google maps api key <a href="/wp-admin/admin.php?page=vl_gpb_editor">here</a> before we can load your map.</h2>

		};return wp.element.createElement(
			'div',
			{ className: [props.className] },
			wp.element.createElement(RichText, { keepPlaceholderOnFocus: 'true', tagName: 'h1', className: "vl_gpb_editor__title", label: 'Boilerplate title', help: 'Enter some text', value: title, name: 'title',
				placeholder: 'Boilerplate title', onChange: function onChange(content) {
					return setAttributes({
						title: content
					});
				} })
		);
	},

	/**
  * The save function defines the way in which the different attributes should be combined
  * into the final markup, which is then serialized by Gutenberg into post_content.
  *
  * The "save" property must be specified and must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  */
	save: function save(props) {
		var title = props.attributes.title,
		    setAttributes = props.setAttributes;


		return null;
	}
});

/***/ }),

/***/ "./blocks/src/gpb-editor/editor.scss":
/*!*******************************************!*\
  !*** ./blocks/src/gpb-editor/editor.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/gpb-editor/style.scss":
/*!******************************************!*\
  !*** ./blocks/src/gpb-editor/style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/gutenberg-plugin-boilerplate/block.js":
/*!**********************************************************!*\
  !*** ./blocks/src/gutenberg-plugin-boilerplate/block.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./style.scss */ "./blocks/src/gutenberg-plugin-boilerplate/style.scss");

__webpack_require__(/*! ./editor.scss */ "./blocks/src/gutenberg-plugin-boilerplate/editor.scss");

// import * as api from './api';

/**
 * BLOCK: main
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText;
var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    InspectorControls = _wp$blocks.InspectorControls; // Import registerBlockType() from wp.blocks

var Button = wp.components.Button;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

// Inspired by https://codepen.io/abergin/pen/ihlDf

registerBlockType('vl-gpb/main', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('VL Gutenberg Plugin Boilerplate '), // Block title.
	icon: 'admin-plugins', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__('VL Gutenberg Plugin Boilerplate '), __('Gutenberg Plugin Boilerplate ')],
	attributes: {
		title: {
			type: 'string',
			selector: '.vl_gpb__title',
			default: ''
		}
	},

	/**
  * The edit function describes the structure of your block in the context of the editor.
  * This represents what the editor will render when the block is used.
  *
  * The "edit" property must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  */
	edit: function edit(props) {
		var title = props.attributes.title,
		    setAttributes = props.setAttributes;


		var settings_values = {
			api_key: api_key

			// REMOVE FOR PRODUCTION
			// console.log('settings_values.api_key', settings_values.api_key);

			//TODO : if api key return map, else ask to setup api key => <h2>Please enter your google maps api key <a href="/wp-admin/admin.php?page=vl_gpb">here</a> before we can load your map.</h2>

		};return wp.element.createElement(
			'div',
			{ className: [props.className] },
			wp.element.createElement(RichText, { keepPlaceholderOnFocus: 'true', tagName: 'h1', className: "vl_gpb__title", label: 'Boilerplate title', help: 'Enter some text', value: title, name: 'title',
				placeholder: 'Boilerplate title', onChange: function onChange(content) {
					return setAttributes({
						title: content
					});
				} })
		);
	},

	/**
  * The save function defines the way in which the different attributes should be combined
  * into the final markup, which is then serialized by Gutenberg into post_content.
  *
  * The "save" property must be specified and must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  */
	save: function save(props) {
		var title = props.attributes.title,
		    setAttributes = props.setAttributes;


		return wp.element.createElement(
			'div',
			{ className: [props.className] },
			wp.element.createElement(
				'h1',
				{ className: 'vl_gpb__title' },
				' ',
				title,
				' '
			)
		);
	}
});

/***/ }),

/***/ "./blocks/src/gutenberg-plugin-boilerplate/editor.scss":
/*!*************************************************************!*\
  !*** ./blocks/src/gutenberg-plugin-boilerplate/editor.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/gutenberg-plugin-boilerplate/style.scss":
/*!************************************************************!*\
  !*** ./blocks/src/gutenberg-plugin-boilerplate/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ncGItZWRpdG9yL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvZ3BiLWVkaXRvci9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2dwYi1lZGl0b3Ivc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2d1dGVuYmVyZy1wbHVnaW4tYm9pbGVycGxhdGUvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ndXRlbmJlcmctcGx1Z2luLWJvaWxlcnBsYXRlL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvZ3V0ZW5iZXJnLXBsdWdpbi1ib2lsZXJwbGF0ZS9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbIndwIiwiZWRpdG9yIiwiTWVkaWFVcGxvYWQiLCJQbGFpblRleHQiLCJSaWNoVGV4dCIsIl9fIiwiaTE4biIsImJsb2NrcyIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJCdXR0b24iLCJjb21wb25lbnRzIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJrZXl3b3JkcyIsImF0dHJpYnV0ZXMiLCJ0eXBlIiwic291cmNlIiwibWV0YSIsImRlZmF1bHQiLCJlZGl0IiwicHJvcHMiLCJzZXRBdHRyaWJ1dGVzIiwic2V0dGluZ3NfdmFsdWVzIiwiYXBpX2tleSIsImNsYXNzTmFtZSIsImNvbnRlbnQiLCJzYXZlIiwic2VsZWN0b3IiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtB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LE1BQ0RWLEtBREMsR0FDd0JVLEtBRHhCLENBQ2ROLFVBRGMsQ0FDREosS0FEQztBQUFBLE1BQ09XLGFBRFAsR0FDd0JELEtBRHhCLENBQ09DLGFBRFA7OztBQUdyQixTQUNDO0FBQUE7QUFBQSxLQUFLLFdBQVksQ0FBQ0QsTUFBTUksU0FBUCxDQUFqQjtBQUNFO0FBQUE7QUFBQSxNQUFJLFdBQVksZUFBaEI7QUFBQTtBQUFxQ2QsU0FBckM7QUFBQTtBQUFBO0FBREYsR0FERDtBQU9BO0FBckUrQixDQUFqQyxFOzs7Ozs7Ozs7OztBQ2pDQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiaW1wb3J0ICcuL2d1dGVuYmVyZy1wbHVnaW4tYm9pbGVycGxhdGUvYmxvY2snO1xuaW1wb3J0ICcuL2dwYi1lZGl0b3IvYmxvY2snOyIsIi8qKlxuICogQkxPQ0s6IG1haW5cbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG4vLyBpbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi9hcGknO1xuXG5jb25zdCB7TWVkaWFVcGxvYWQsIFBsYWluVGV4dCwgUmljaFRleHR9ID0gd3AuZWRpdG9yO1xuY29uc3Qge19ffSA9IHdwLmkxOG47IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuY29uc3Qge3JlZ2lzdGVyQmxvY2tUeXBlLCBJbnNwZWN0b3JDb250cm9sc30gPSB3cC5ibG9ja3M7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5jb25zdCB7QnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogUmVnaXN0ZXI6IGFhIEd1dGVuYmVyZyBCbG9jay5cbiAqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9cbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICogQHJldHVybiB7P1dQQmxvY2t9ICAgICAgICAgIFRoZSBibG9jaywgaWYgaXQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICovXG5cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vY29kZXBlbi5pby9hYmVyZ2luL3Blbi9paGxEZlxucmVnaXN0ZXJCbG9ja1R5cGUoJ3ZsLWdwYi9lZGl0b3InLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ1ZMIEd1dGVuYmVyZyBQbHVnaW4gQm9pbGVycGxhdGUgRWRpdG9yICcpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogJ2FkbWluLXBsdWdpbnMnLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG5cdGNhdGVnb3J5OiAnY29tbW9uJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbXG5cdFx0X18oJ1ZMIEd1dGVuYmVyZyBQbHVnaW4gQm9pbGVycGxhdGUgRWRpdG9yICcpLFxuXHRcdF9fKCdHdXRlbmJlcmcgUGx1Z2luIEJvaWxlcnBsYXRlIEVkaXRvciAnKVxuXHRdLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0c291cmNlOiAnbWV0YScsXG5cdFx0XHRtZXRhOiAndmxfZ3BiX2VkaXRvcl9fdGl0bGUnLFxuXHRcdFx0ZGVmYXVsdDogJydcblx0XHR9LFxuXHR9LFxuXG5cblx0LyoqXG5cdCAqIFRoZSBlZGl0IGZ1bmN0aW9uIGRlc2NyaWJlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgYmxvY2sgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGVkaXRvci5cblx0ICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuXHQgKlxuXHQgKiBUaGUgXCJlZGl0XCIgcHJvcGVydHkgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuXHQgKlxuXHQgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG5cdCAqL1xuXHRlZGl0OiBmdW5jdGlvbihwcm9wcykge1xuXG5cdFx0Y29uc3Qge2F0dHJpYnV0ZXM6IHt0aXRsZX0sIHNldEF0dHJpYnV0ZXN9ID0gcHJvcHM7XG5cblx0XHRsZXQgc2V0dGluZ3NfdmFsdWVzID0ge1xuXHRcdFx0YXBpX2tleVxuXHRcdH1cblxuXHRcdC8vIFJFTU9WRSBGT1IgUFJPRFVDVElPTlxuXHRcdC8vIGNvbnNvbGUubG9nKCdzZXR0aW5nc192YWx1ZXMuYXBpX2tleScsIHNldHRpbmdzX3ZhbHVlcy5hcGlfa2V5KTtcblxuXHRcdC8vVE9ETyA6IGlmIGFwaSBrZXkgcmV0dXJuIG1hcCwgZWxzZSBhc2sgdG8gc2V0dXAgYXBpIGtleSA9PiA8aDI+UGxlYXNlIGVudGVyIHlvdXIgZ29vZ2xlIG1hcHMgYXBpIGtleSA8YSBocmVmPVwiL3dwLWFkbWluL2FkbWluLnBocD9wYWdlPXZsX2dwYl9lZGl0b3JcIj5oZXJlPC9hPiBiZWZvcmUgd2UgY2FuIGxvYWQgeW91ciBtYXAuPC9oMj5cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IFtwcm9wcy5jbGFzc05hbWVdIH0+XG4gICAgIDxSaWNoVGV4dCBrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPVwidHJ1ZVwiIHRhZ05hbWU9XCJoMVwiIGNsYXNzTmFtZT17IFwidmxfZ3BiX2VkaXRvcl9fdGl0bGVcIiB9IGxhYmVsPVwiQm9pbGVycGxhdGUgdGl0bGVcIiBoZWxwPVwiRW50ZXIgc29tZSB0ZXh0XCIgdmFsdWU9eyB0aXRsZSB9IG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgcGxhY2Vob2xkZXI9XCJCb2lsZXJwbGF0ZSB0aXRsZVwiIG9uQ2hhbmdlPXsgKGNvbnRlbnQpID0+IHNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdHRpdGxlOiBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIH0gLz5cbiAgIDwvZGl2PlxuXHRcdClcblxuXHR9LFxuXG5cblx0LyoqXG5cdCAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXG5cdCAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cblx0ICpcblx0ICogVGhlIFwic2F2ZVwiIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG5cdCAqXG5cdCAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cblx0ICovXG5cdHNhdmU6IGZ1bmN0aW9uKHByb3BzKSB7XG5cdFx0Y29uc3Qge2F0dHJpYnV0ZXM6IHt0aXRsZX0sIHNldEF0dHJpYnV0ZXN9ID0gcHJvcHM7XG5cblx0XHRyZXR1cm4gbnVsbDtcblxuXG5cdH0sXG59KTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvKipcbiAqIEJMT0NLOiBtYWluXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuLy8gaW1wb3J0ICogYXMgYXBpIGZyb20gJy4vYXBpJztcblxuY29uc3Qge01lZGlhVXBsb2FkLCBQbGFpblRleHQsIFJpY2hUZXh0fSA9IHdwLmVkaXRvcjtcbmNvbnN0IHtfX30gPSB3cC5pMThuOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cbmNvbnN0IHtyZWdpc3RlckJsb2NrVHlwZSwgSW5zcGVjdG9yQ29udHJvbHN9ID0gd3AuYmxvY2tzOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuY29uc3Qge0J1dHRvbn0gPSB3cC5jb21wb25lbnRzO1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2NvZGVwZW4uaW8vYWJlcmdpbi9wZW4vaWhsRGZcbnJlZ2lzdGVyQmxvY2tUeXBlKCd2bC1ncGIvbWFpbicsIHtcblx0Ly8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG5cdHRpdGxlOiBfXygnVkwgR3V0ZW5iZXJnIFBsdWdpbiBCb2lsZXJwbGF0ZSAnKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICdhZG1pbi1wbHVnaW5zJywgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRjYXRlZ29yeTogJ2NvbW1vbicsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRrZXl3b3JkczogW1xuXHRcdF9fKCdWTCBHdXRlbmJlcmcgUGx1Z2luIEJvaWxlcnBsYXRlICcpLFxuXHRcdF9fKCdHdXRlbmJlcmcgUGx1Z2luIEJvaWxlcnBsYXRlICcpXG5cdF0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzZWxlY3RvcjogJy52bF9ncGJfX3RpdGxlJyxcblx0XHRcdGRlZmF1bHQ6ICcnXG5cdFx0fSxcblx0fSxcblxuXG5cdC8qKlxuXHQgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG5cdCAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cblx0ICpcblx0ICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cblx0ICpcblx0ICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuXHQgKi9cblx0ZWRpdDogZnVuY3Rpb24ocHJvcHMpIHtcblxuXHRcdGNvbnN0IHthdHRyaWJ1dGVzOiB7dGl0bGV9LCBzZXRBdHRyaWJ1dGVzfSA9IHByb3BzO1xuXG5cdFx0bGV0IHNldHRpbmdzX3ZhbHVlcyA9IHtcblx0XHRcdGFwaV9rZXlcblx0XHR9XG5cblx0XHQvLyBSRU1PVkUgRk9SIFBST0RVQ1RJT05cblx0XHQvLyBjb25zb2xlLmxvZygnc2V0dGluZ3NfdmFsdWVzLmFwaV9rZXknLCBzZXR0aW5nc192YWx1ZXMuYXBpX2tleSk7XG5cblx0XHQvL1RPRE8gOiBpZiBhcGkga2V5IHJldHVybiBtYXAsIGVsc2UgYXNrIHRvIHNldHVwIGFwaSBrZXkgPT4gPGgyPlBsZWFzZSBlbnRlciB5b3VyIGdvb2dsZSBtYXBzIGFwaSBrZXkgPGEgaHJlZj1cIi93cC1hZG1pbi9hZG1pbi5waHA/cGFnZT12bF9ncGJcIj5oZXJlPC9hPiBiZWZvcmUgd2UgY2FuIGxvYWQgeW91ciBtYXAuPC9oMj5cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IFtwcm9wcy5jbGFzc05hbWVdIH0+XG4gICAgIDxSaWNoVGV4dCBrZWVwUGxhY2Vob2xkZXJPbkZvY3VzPVwidHJ1ZVwiIHRhZ05hbWU9XCJoMVwiIGNsYXNzTmFtZT17IFwidmxfZ3BiX190aXRsZVwiIH0gbGFiZWw9XCJCb2lsZXJwbGF0ZSB0aXRsZVwiIGhlbHA9XCJFbnRlciBzb21lIHRleHRcIiB2YWx1ZT17IHRpdGxlIH0gbmFtZT1cInRpdGxlXCJcbiAgICAgICBwbGFjZWhvbGRlcj1cIkJvaWxlcnBsYXRlIHRpdGxlXCIgb25DaGFuZ2U9eyAoY29udGVudCkgPT4gc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0dGl0bGU6IGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgfSAvPlxuICAgPC9kaXY+XG5cdFx0KVxuXG5cdH0sXG5cblxuXHQvKipcblx0ICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcblx0ICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxuXHQgKlxuXHQgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cblx0ICpcblx0ICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuXHQgKi9cblx0c2F2ZTogZnVuY3Rpb24ocHJvcHMpIHtcblx0XHRjb25zdCB7YXR0cmlidXRlczoge3RpdGxlfSwgc2V0QXR0cmlidXRlc30gPSBwcm9wcztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IFtwcm9wcy5jbGFzc05hbWVdIH0+XG4gICAgIDxoMSBjbGFzc05hbWU9eyAndmxfZ3BiX190aXRsZScgfT4geyB0aXRsZSB9IDwvaDE+XG4gICA8L2Rpdj5cblx0XHQpXG5cblxuXHR9LFxufSk7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==