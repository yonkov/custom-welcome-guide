/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied to the post editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import WelcomeGuideButton from './templates/guide-list';

/**
 * add localization support 
 */
const { __ } = wp.i18n;
const { registerPlugin } = wp.plugins;

/**
 * Register the Welcome Guide plugin in the Gutenberg document sidebar
 * @package Admin Tour Guide
 * @since 0.0.1
 * @see https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-document-setting-panel/
 */

 const { PluginDocumentSettingPanel } = wp.editPost;
 
 const WelcomeGuidePluginDocumentSettingPanel = () => (
   <PluginDocumentSettingPanel
	 name="welcome-guide"
	 title="Welcome Guide"
	 className="welcome-guide"
   >
	 <WelcomeGuideButton></WelcomeGuideButton>
   </PluginDocumentSettingPanel>
 );
 
 registerPlugin( 'welcome-guide-plugin-document-setting-panel', {
   render: WelcomeGuidePluginDocumentSettingPanel,
   icon: 'welcome-view-site'
 })