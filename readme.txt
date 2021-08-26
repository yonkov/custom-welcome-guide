=== Admin Welcome Guide ===
Contributors:      nravota12, VlastimirSamolov
Tags:              user-onboarding, tour, introduction, walkthrough, block-editor
Tested up to:      5.8
Requires at least: 5.4
Requires PHP:      5.6
Stable tag:        0.0.1
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Easily add step-by-step tours/tutorials/walkthrough guides from the WordPress admin. Inspired by the Welcome Guide component for the WordPress block editor.

== Description ==
Create interactive step-by-step introduction tours/tutorials/walkthrough guides for your admin users or content creators through a friendly user admin interface. Inspired by the [Welcome Guide](https://developer.wordpress.org/block-editor/reference-guides/components/guide/) Gutenberg component that runs when you open the WordPress block editor for the first time. Maybe you are a WordPress agency or a freelancer who needs a simple and user-friendly way to showcase to your clients the cms options that you have built in the WordPress admin? Or you run a multi-authorship platform and you want to make the publishing experience for your fellow authors as easy and smooth as possible? This plugin will empower you to display custom welcome messages and tips to your admin users in a fun, easy and much more interactive way.

= Plugin Options =
You can create, edit and delete guides and add as many sub-guides (popups) to them as you wish via the Guides tab in the WordPress admin. You can choose whether to display a list of all the guides inside the post editor, page editor or only on a specific custom post type. If you wish, you can also remove or override the default WordPress Block Editor welcome tips.

= How it Works =
You first need to navigate to the Guides tab in the WordPress admin and add a new Guide. You can then assign sub-guides (steps) to the guide you have just created. Just add a new guide and link it to the parent guide via the ```Page Attributes``` tab from the bottom right corner in the Block Editor's sidebar. In this way, the latter guide will become a sub-guide to the first guide that you have created. Now, when you create (or edit) a post or a page in the WordPress admin, you will see a new "Welcome Guide" tab in the Block Editor's sidebar, right under the Status & Visibility tab. Once you expland it, you will see a list with all the parent guides that you have created. When you click on a parent guide, you will see a tour with all the sub-guides that you have associated to the parent guide via the Page Attributes tab.

== Installation ==
1. Upload the plugin files to the `/wp-content/plugins/admin-user-guide` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress

== Frequently Asked Questions ==

== How to create a guide?
From your WordPress admin dashboard, navigate to Guides tab and add a new Guide. 

== How to create additional popups to the guide?
To add more screens (steps) to the guide, create a new guide and link it to the parent guide via the ```Page Attributes``` tab from the right sidebar.

= Can I create more than one guide? =
Absolutely! You can create as many guides as you want and link as many screens to them as you wish. A list with all the guides will be visible in the ```Welcome Guide``` tab from the block editor's sidebar.

= How to run the guides? =
When you are creating or editing a post, a "Welcome Guide" tab will be visible in the Block Editor's sidebar. Expand the tab and you will see a list with all the guides.

= Can I disable or customize the default Welcome Guide? =
When an editor opens the Block Editor for the first time, the default Welcome Guide modal pops up. To remove the default welcome message, go to the plugin's settings page and check the option "disable the default Welcome Guide". 
To replace the default welcome tips with a custom welcome message, you also need to select a featured guide from the guides' dropdown list in the plugin's settings page.

= Can I run the guides from the frontend? =
No, the scope of the plugin is to help your admin users or editors with the cms options and runs only from the WordPress block editor's screen.

= Can I run the guides from the Classic Editor? =
No, the plugin takes advantage of the pre-built Gutenberg components from the WordPress core and can only work with the Block editor.

== Screenshots ==

== Changelog ==

= 0.0.1 - August 2021 =
* First Release