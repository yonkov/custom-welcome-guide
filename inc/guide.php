<?php
// Creating Custom Post Type Guides

function ever_Guides_custom_post_type() {
    $labels = [
        'name'               => __( 'Guides' ),
        'singular_name'      => __( 'Guide' ),
        'menu_name'          => __( 'Guides' ),
        'parent_item_colon'  => __( 'Parent Guide' ),
        'all_items'          => __( 'All Guides' ),
        'view_item'          => __( 'View Guide' ),
        'add_new_item'       => __( 'Add New Guide' ),
        'add_new'            => __( 'Add New' ),
        'edit_item'          => __( 'Edit Guide' ),
        'update_item'        => __( 'Update Guide' ),
        'search_items'       => __( 'Search Guide' ),
        'not_found'          => __( 'Not Found' ),
        'not_found_in_trash' => __( 'Not found in Trash' ),
    ];
    $args   = [
        'label'               => __( 'Guides' ),
        'description'         => __( 'Create Interactive User Guides for your Admin Users' ),
        'labels'              => $labels,
        'supports'            => [ 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'revisions', 'page-attributes' ],
        'public'              => true,
        'hierarchical'        => false,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'has_archive'         => true,
        'can_export'          => true,
        'exclude_from_search' => false,
        'yarpp_support'       => true,
        'publicly_queryable'  => true,
        'capability_type'     => 'page',
        'hierarchical'        => 'true',
    ];
    register_post_type( 'Guides', $args );
}
add_action( 'init', 'ever_Guides_custom_post_type', 0 );
