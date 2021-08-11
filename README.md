Admin Welcome Guide is a WordPress plugin, inspired by the Welcome Modal that pops up when the user opens the WordPress editor for the first time. The plugin lets you create onboarding user introduction tours to guide content creators throughout the admin area of the website.

### Technical Information
This plugin is bootstrapped by running ```npx @wordpress/create-block admin-welcome-guide```. See the [Block Api WordPress documentation](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) for more information.

### Installation

Clone or download this repository, unzip it and paste it inside the ```wp-content => plugins``` folder in your WordPress installation. Go to the plugin's root folder and run:

    npm i
    npm start

This step is required if you want to enable support for ES6+ and JSX. Activate the plugin from the WordPress admin. After you finish your work, run ```npm run build``` to generate the code for production.

### Useful Links

1. [WordPress Block Api Documentation](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/)

2. [Gutenberg Core Component: Guide](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/guide)

3. [Setting Up your First Gutenberg Project](https://blog.logrocket.com/setting-up-first-gutenberg-project/)

4. [WordPress Gutenberg PluginDocumentSettingPanel not working with controls?](https://stackoverflow.com/questions/58607970/wordpress-gutenberg-plugindocumentsettingpanel-not-working-with-controls)

5. [Add Custom Welcome Guide Inside the WordPress Block Editor](https://css-tricks.com/adding-a-custom-welcome-guide-to-the-wordpress-block-editor/)

6. [Building a required modal in the WordPress Block Editor Part 1](https://aurooba.com/building-a-required-modal-in-the-wordpress-block-editor-1/)

### Next Steps
1. Find out Why CSS is not loaded through the js
2. Customize the styles to the welcome guide
3. Figure out how to add content to the guide via the cms and the rest api?