<?php
/**
 * Plugin Name:       Admin Welcome Guide
 * Description:       Create interactive step-by-step introduction tours/tutorials/walkthrough guides for your admin users through a friendly user admin interface. Inspired by the Welcome Guide component for the Gutenberg editor.
 * Requires at least: 5.4
 * Requires PHP:      5.6
 * Version:           0.0.1
 * Author:            Atanas Yonkov, Vlastimir Samolov
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       admin-welcome-guide
 */

define( 'ADMIN_WELCOME_GUIDE_VERSION', '0.0.1' );

/* Enqueue scripts and styles for the post editor */
function admin_welcome_guide_editor_script_register() {
    wp_register_script(
        'build/index.js',
        plugins_url( 'build/index.js', __FILE__ ),
        [ 'wp-plugins', 'wp-edit-post', 'wp-element' ] // <== the dependencies array is important!
    );
}
add_action( 'init', 'admin_welcome_guide_editor_script_register' );

function admin_welcome_guide_editor_assets_enqueue() {
    wp_enqueue_script( 'build/index.js' );
    wp_enqueue_style(
        'admin_welcome_guide-editor-css',
        plugins_url( 'build/style-index.css', __FILE__ ),
        [],
        filemtime( plugin_dir_path( __FILE__ ) . 'build/style-index.css' )
    );
}
add_action( 'enqueue_block_editor_assets', 'admin_welcome_guide_editor_assets_enqueue' );

/* Enqueue scripts and styles for the whole WordPress admin */
function admin_welcome_guide_admin_scripts_and_styles() {
    wp_enqueue_script( 'admin-welcome-guide-plugin-script', plugins_url( '/', __FILE__ ) . 'build/admin.js', [ 'wp-api', 'wp-components', 'wp-compose', 'wp-data', 'wp-element', 'wp-i18n', 'wp-notices', 'wp-polyfill' ], ADMIN_WELCOME_GUIDE_VERSION, true );
    wp_enqueue_style( 'admin-welcome-guide-plugin-style', plugins_url( '/', __FILE__ ) . 'build/admin.css', [ 'wp-components' ], filemtime( plugin_dir_path( __FILE__ ) . 'build/admin.css' ) );
}

add_action( 'admin_enqueue_scripts', 'admin_welcome_guide_admin_scripts_and_styles' );

/* Create Guide Custom post type */
require_once plugin_dir_path( __FILE__ ) . 'inc/guide.php';

/* Register plugin Settings page under Guides Custom Post Type */
function admin_welcome_guide_settings_page() {
    $page_title = __( 'Admin Welcome Guide Options', 'admin-welcome-guide' );
    $menu_title = __( 'Settings', 'admin-welcome-guide' );
    $capability = 'manage_options';
    $slug       = 'admin_welcome_guide';
    $callback   = 'admin_welcome_guide_page_content_callback';
    $icon       = 'dashicons-admin-plugins';
    $position   = 100;

    add_submenu_page( 'edit.php?post_type=guides', $page_title, $menu_title, $capability, $slug, $callback );
}

add_action( 'admin_menu', 'admin_welcome_guide_settings_page' );

/**
 * Add Settings link in WordPress Plugins Page
 */
function admin_welcome_guide_settings_link( array $links ) {
    $url           = get_admin_url() . 'edit.php?post_type=guides&page=admin_welcome_guide';
    $settings_link = '<a href="' . $url . '">' . __( 'Settings', 'admin-welcome-guide' ) . '</a>';
      $links[]     = $settings_link;
    return $links;
}

add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), 'admin_welcome_guide_settings_link' );

/**
 * Add a page wrapper to the Plugin's settings page and let React.js handle the rest
 */
function admin_welcome_guide_page_content_callback() {
    ?>
    <div id="admin-welcome-guide-wrapper" class="admin-welcome-guide-wrapper"></div>
    <?php
}

/**
 * Add Featured Image Url to WP Json
 *
 * @see https://stackoverflow.com/questions/33320227/wp-rest-api-angularjs-how-to-grab-featured-image-for-display-on-page
 */

// Get image URL
function admin_welcome_guide_get_thumbnail_url( $post ) {
    if ( has_post_thumbnail( $post['id'] ) ) {
        $imgArray = wp_get_attachment_image_src( get_post_thumbnail_id( $post['id'] ), 'large' );
        $imgURL   = $imgArray[0];
        return $imgURL;
    } else {
        return false;
    }
}

function admin_welcome_guide_insert_thumbnail_url() {
    register_rest_field(
        'guides',
        'featured_image',  // key-name in json response
        [
            'get_callback'    => 'admin_welcome_guide_get_thumbnail_url',
            'update_callback' => null,
            'schema'          => null,
        ]
    );
}

add_action( 'rest_api_init', 'admin_welcome_guide_insert_thumbnail_url' );

/* Store default settings */

function admin_welcome_guide_register_settings() {

    add_option( 'admin_welcome_guide_is_show_post', 'true' );
    add_option( 'admin_welcome_guide_is_show_page', 'true' );
    add_option( 'admin_welcome_guide_is_show_cpt', '' );

    register_setting(
        'awg_settings',
        'admin_welcome_guide_is_show_post',
        [
            'show_in_rest' => true,
            'type'         => 'string',
        ]
    );

    register_setting(
        'awg_settings',
        'admin_welcome_guide_is_show_page',
        [
            'show_in_rest' => true,
            'type'         => 'string',
        ]
    );

    register_setting(
        'awg_settings',
        'admin_welcome_guide_is_show_cpt',
        [
            'show_in_rest' => true,
            'type'         => 'string',
        ]
    );

}

add_action( 'init', 'admin_welcome_guide_register_settings' );
