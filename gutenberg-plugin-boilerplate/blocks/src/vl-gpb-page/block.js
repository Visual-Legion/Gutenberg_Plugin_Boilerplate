/**
 * BLOCK: main
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

// import * as api from './api';
import { CPTSelect } from './components/CPTSelect';
import { CPTPreview } from './components/CPTPreview';

const {MediaUpload, PlainText, RichText} = wp.editor;
const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType, InspectorControls} = wp.blocks; // Import registerBlockType() from wp.blocks
const {Button} = wp.components;

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
registerBlockType('vl-gpb/page', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('VL Gutenberg Plugin Boilerplate Page '), // Block title.
	icon: 'admin-plugins', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__('VL Gutenberg Plugin Boilerplate Page '),
		__('Gutenberg Plugin Boilerplate Page ')
	],
	attributes: {
		title: {
			type: 'string',
			source: 'meta',
			meta: 'vl_gpb_page_per_page',
			default: ''
		},
		title: {
			type: 'string',
			source: 'meta',
			meta: 'vl_gpb_page_order',
			default: ''
		},
	},


	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function(props) {

		const {attributes: {vl_gpb_page_order, vl_gpb_page_per_page}, setAttributes} = props;

		let updateAttributes = (attributeOjbect) => {
			setAttributes(attributeOjbect);
		}

		// 
		return (

			<div className={ props.className }>
     <h2> CPTs </h2>
     <CPTSelect updateAttributes={ updateAttributes } vl_gpb_page_order={ vl_gpb_page_order } vl_gpb_page_per_page={ vl_gpb_page_per_page } />
     { (vl_gpb_page_order && vl_gpb_page_per_page) ? (
       <CPTPreview vl_gpb_page_order={ vl_gpb_page_order } vl_gpb_page_per_page={ vl_gpb_page_per_page } />
       ) : (
       <div> Preview to be shown once event output options have been selected </div>
       ) }
   </div>
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
	save: function(props) {
		const {attributes: {title}, setAttributes} = props;

		return null;

	},
});
