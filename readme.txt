=== Custom Welcome Guide ===
Contributors:      nravota12, VlastimirSamolov
Tags:              user-onboarding, tour, introduction, walkthrough, block-editor
Tested up to:      5.8
Requires at least: 5.4
Requires PHP:      5.6
Stable tag:        1.0.3
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Easily add step-by-step tours/tutorials/walkthrough guides that get displayed in the WordPress admin. Replace the default welcome guide modal dialog in the Block editor with a custom one.

== Description ==
Create interactive step-by-step introduction tours/tutorials/walkthrough guides for your admin users or content creators through a friendly user admin interface. Inspired by the [Guide](https://developer.wordpress.org/block-editor/reference-guides/components/guide/) Gutenberg component that pops up when you open the Block editor for the first time. Customize the default welcome message or add as many custom guides as you want. Maybe you are a WordPress agency or a freelancer who needs a simple and user-friendly way to showcase to your clients the cms options that you have built in the WordPress admin? Or you work with an editorial team and you want to make the publishing experience as easy and smooth as possible? This plugin will empower you to display custom welcome messages and tips to your admin users in a fun, easy and much more interactive way.

= Plugin Options =
You can create, edit and delete guides and add as many sub-guides (popups) to them as you wish via the Guides tab in the WordPress admin. You can choose whether to display a list of all the guides inside the post editor, page editor or only on a specific custom post type. If you wish, you can also remove or override the default WordPress Block Editor welcome tips.

[youtube https://www.youtube.com/watch?v=IfIbsKaFeH0]

= How it Works =
Navigate to the Guides tab in the WordPress admin and add a new Guide. You can then assign sub-guides (steps) to the guide you have just created. Just add a new guide and link it to the parent guide via the Page Attributes tab from the bottom right corner in the Block Editor's sidebar. In this way, the latter guide will become a sub-guide to the first guide (parent guide) that you have created. Now, when you create (or edit) a post or a page in the WordPress admin, you will see a new "Welcome Guide" tab in the Block Editor's sidebar, right under the Status & Visibility tab. Once you expand it, you will see a list with all the parent guides that you have created. When you click on a parent guide, you will see a tour with all the sub-guides that you have associated to the parent guide via the Page Attributes tab.

== Installation ==
1. Upload the plugin files to the `/wp-content/plugins/admin-user-guide` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress

== Frequently Asked Questions ==

= How to create a guide? =
From your WordPress admin dashboard, navigate to Guides tab and add a new guide by clicking on the "Add New" button.

= How to add an image to the guide? =
When creating or editing a guide, you can optionally assign a featured image to it by going to the featured image tab in the Block Editor's sidebar.

= How to add additional popups to the guide? =
To add more screens (steps/sub-guides) to the guide, you need to create a sub-guide and link it to the parent guide. Create a new guide and link it to the parent guide via the ```Page Attributes``` tab from the right sidebar in the Block Editor.

= Can I create more than one guide? =
Absolutely! You can create as many guides as you want and link as many screens to them as you wish. A list with all the guides will be visible in the ```Welcome Guide``` tab from the block editor's sidebar.

= How to run a guide? =
When creating or editing a post, a "Welcome Guide" tab will be visible in the Block Editor's sidebar, right below the Status & Visibility tab. Expand the tab and you will see a list with all the guides. You can also create a featured Guide, that will popup the first time the user opens the Block Editor. Please check the next question for more details.

= Can I customize the default Welcome Guide modal? =
Deffinitely! When an editor opens the Block Editor for the first time, the default Welcome Guide dialog pops up. To add a custom welcome guide message and replace the default one, simply go to the plugin's settings page (Guides => Settings) and select a featured guide from the dropdown list. 

= Can I disable the guides for a specific post type? =
Sure, you can remove the list with the guides in the Block Editor's sidebar for a specific post type, e.g. pages. Just go to the plugin's settings page and remove the tick on the toggle button for the respective post type.

= Can I show a guide that pops up in all the admin pages? =
Since version 1.0.1 you can! In the plugin's settings page, select a featured guide and enable the option "show the featured guide in The whole WordPress Admin".

= Can I run the guides from the frontend? =
No, the scope of the plugin is to help your admin users or editors with the cms options and currently runs only from the WordPress admin.

= Does the plugin work with the Classic Editor? =
The featured guide should work as expected, however you will not be able to see a list of guides in the post editor's sidebar. The plugin uses the rest api and pre-built Gutenberg components from WordPress core. To take full advantage of all the plugin options, please use the Block editor.

== Screenshots ==

1. Plugin's Settings Page
2. List of all the Guides in the Block Editor's Sidebar
3. Adding a sub-guide (popup) to a guide
4. Custom Welcome Guide Popup

== Changelog ==

= 1.0.3 - September 2021 =
Show the guide to non-admin users

= 1.0.2 - September 2021 =
Provide support for wp 5.4

= 1.0.1 - September 2021 =
Add option to show the featured guide in the whole WordPress Admin

= 1.0.0 - September 2021 =
* First Release