<?php
/**
 * Plugin Name:       Admin Welcome Guide
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.4
 * Requires PHP:      5.6
 * Version:           0.0.1
 * Author:            Atanas Yonkov, Vlastimir Samolov
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       admin-welcome-guide
 *
 * @package           create-block
 */

/* Enqueue admin scripts */
function admin_welcome_guide_plugin_script_register() {
    wp_register_script(
        'build/index.js',
        plugins_url( 'build/index.js', __FILE__ ),
        [ 'wp-plugins', 'wp-edit-post', 'wp-element' ] // <== the dependencies array is important!
    );
}
add_action( 'init', 'admin_welcome_guide_plugin_script_register' );

function admin_welcome_guide_plugin_assets_enqueue() {
    wp_enqueue_script( 'build/index.js' );
    wp_enqueue_style(
        'admin_welcome_guide-editor-css',
        plugins_url( 'build/style-index.css', __FILE__ ),
        [],
        filemtime( plugin_dir_path( __FILE__ ) . 'build/style-index.css' )
    );
}
add_action( 'enqueue_block_editor_assets', 'admin_welcome_guide_plugin_assets_enqueue' );