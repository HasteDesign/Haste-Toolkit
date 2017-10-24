<?php
// Prevents direct access
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Registrates custom taxonomies
 */
function haste_taxonomies() {
	/**
	 * Formato
	 */
	$format = new Odin_Taxonomy(
		__( 'Formato', 'haste-toolkit' ), // Nome (Singular) da nova Taxonomia.
		'formato', // Slug do Taxonomia.
		'post' // Nome do tipo de conteúdo que a taxonomia irá fazer parte.
	);

	$format->set_labels(
		array(
			'name'              => __( 'Formatos', 'haste-toolkit' ),
			'singular_name'     => __( 'Formato', 'haste-toolkit' ),
			'search_items'      => __( 'Procurar formato', 'haste-toolkit' ),
			'all_items'         => __( 'Todos os formatos', 'haste-toolkit' ),
			'edit_item'         => __( 'Editar formato', 'haste-toolkit' ),
			'update_item'       => __( 'Atualizar formato', 'haste-toolkit' ),
			'add_new_item'      => __( 'Adicionar novo formato', 'haste-toolkit' ),
			'new_item_name'     => __( 'Novo nome de formato', 'haste-toolkit' ),
			'menu_name'         => __( 'Formatos', 'haste-toolkit' ),
		)
	);

	$format->set_arguments(
		array(
			'hierarchical' => false,
			'rewrite' => array( 'slug' => 'conhecimento' ),
		)
	);

	/**
	 * Position
	 */
	$position = new Odin_Taxonomy(
		__( 'Posição', 'haste-toolkit' ), // Nome (Singular) da nova Taxonomia.
		'posicao', // Slug do Taxonomia.
		'pessoa' // Nome do tipo de conteúdo que a taxonomia irá fazer parte.
	);

	$position->set_labels(
		array(
			'name'              => __( 'Posições', 'haste-toolkit' ),
			'singular_name'     => __( 'Posição', 'haste-toolkit' ),
			'search_items'      => __( 'Procurar posição', 'haste-toolkit' ),
			'all_items'         => __( 'Todas as posições', 'haste-toolkit' ),
			'edit_item'         => __( 'Editar posição', 'haste-toolkit' ),
			'update_item'       => __( 'Atualizar posição', 'haste-toolkit' ),
			'add_new_item'      => __( 'Adicionar nova posição', 'haste-toolkit' ),
			'new_item_name'     => __( 'Novo nome de posição', 'haste-toolkit' ),
			'menu_name'         => __( 'Posição', 'haste-toolkit' ),
		)
	);

	$position->set_arguments(
		array(
			'hierarchical' => false
		)
	);
}
add_action( 'init', 'haste_taxonomies', 1 );

/**
 * Unregister the default taxonomy category
 */
function haste_unregister_category(){
	global $wp_taxonomies;

	if ( taxonomy_exists( 'category' ) ) {
		unset( $wp_taxonomies['category']);
	}
}
add_action( 'init', 'haste_unregister_category' );
