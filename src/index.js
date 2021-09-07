/**
 * The Main Js file. Written with ESNext standard and JSX support – build step required.
 * This one gets loaded in the WordPress Block Editor
 * It adds and additional tab in the WordPress Block Editor's sidebar.
 * The plugin takes advantage of the WordPress rest api, introduced in version 4.7.
 * It uses Gutenberg components from WordPress core to load a list of user-defined guides.
 * @package Admin Welcome Guide
 * @since 0.0.1
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */

const { PluginDocumentSettingPanel } = wp.editPost;

/**
 * Internal dependencies
 */
import './style.scss';
import GuideList from './templates/guide-list';
import FeaturedGuide from './templates/featured-guide';
import { pluginOptions } from './data'

import { registerPlugin } from "@wordpress/plugins";

/** 
 * Determine whether to show the guides in the Block Editor's sidebar 
 * Based on plugin options 
 * 
 */
function showGuideList() {
  const isPostEditor = document.body.className.indexOf('post-type-post') > -1;
  const isPаgeEditor = document.body.className.indexOf('post-type-page') > -1;
  const isCPTEditor = !isPostEditor && !isPаgeEditor;
  const { isShowPost, isShowPage, isShowCPT, isAPILoaded} = pluginOptions();
  
  if (isPostEditor && isShowPost) {
    return true
  }
  else if (isPаgeEditor && isShowPage) {
    return true
  }
  else if (isCPTEditor && isShowCPT) {
    return true
  }
  else {
    return false
  }
}

/**
 * Register the Welcome Guide plugin in the Block Editor's sidebar
 * @package Admin Tour Guide
 * @since 0.0.1
 * @see https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-document-setting-panel/
 */

const WelcomeGuidePluginRegisterSidebar = () => (
  <>
  { showGuideList() &&
  <PluginDocumentSettingPanel
    name="welcome-guide"
    title="Welcome Guide"
    className="welcome-guide"
  >
  <GuideList />
  </PluginDocumentSettingPanel>}
  </>
)

registerPlugin('welcome-guide-plugin-document-setting-panel', {
  render: function(){
    return (
      <Fragment>
      { showGuideList() && <FeaturedGuide/> }
      <WelcomeGuidePluginRegisterSidebar/>
      </Fragment>
    )
  },
  icon: 'welcome-view-site'
})