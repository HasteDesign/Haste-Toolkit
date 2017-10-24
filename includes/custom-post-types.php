<?php

// Prevents direct access
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register custom post types
 */
function haste_post_types() {
	/**
	 * Programas
	 */
	$programs = new Odin_Post_Type(
	    __( 'Programas', 'haste-toolkit' ), // Name
	    'programa' // Slug
	);

	$programs->set_labels(
		array(
			'name'               => __( 'Programas', 'haste-toolkit' ),
			'singular_name'      => __( 'Programa', 'haste-toolkit' ),
			'menu_name'          => __( 'Programas', 'haste-toolkit' ),
			'name_admin_bar'     => __( 'Programas', 'haste-toolkit' ),
			'add_new'            => __( 'Adicionar programa', 'haste-toolkit' ),
			'add_new_item'       => __( 'Adicionar novo programa', 'haste-toolkit' ),
			'new_item'           => __( 'Novo programa', 'haste-toolkit' ),
			'edit_item'          => __( 'Editar programa', 'haste-toolkit' ),
			'view_item'          => __( 'Visualizar programa', 'haste-toolkit' ),
			'all_items'          => __( 'Todos os programas', 'haste-toolkit' ),
			'search_items'       => __( 'Pesquisar programas', 'haste-toolkit' ),
			'not_found'          => __( 'Nenhum programa encontrado', 'haste-toolkit' ),
			'not_found_in_trash' => __( 'Nenhum programa encontrado na lixeira', 'haste-toolkit' ),
		)
	);

	$programs->set_arguments(
		array(
		  'supports'          => array( 'title', 'editor', 'thumbnail' ),
		  'menu_icon'         => 'dashicons-portfolio',
		  'show_in_nav_menus' => true,
		  'menu_position' => 10,
		  'has_archive'       => 'programas'
		)
	);

	/**
	 * Pessoas
	 */
	$team = new Odin_Post_Type(
	    __( 'Pessoas', 'haste-toolkit' ), // Name
	    'pessoa' // Slug
	);

	$team->set_labels(
		array(
			'name'               => __( 'Pessoas', 'haste-toolkit' ),
			'singular_name'      => __( 'Pessoas', 'haste-toolkit' ),
			'menu_name'          => __( 'Pessoas', 'haste-toolkit' ),
			'name_admin_bar'     => __( 'Pessoas', 'haste-toolkit' ),
			'add_new'            => __( 'Adicionar pessoa', 'haste-toolkit' ),
			'add_new_item'       => __( 'Adicionar nova pessoa', 'haste-toolkit' ),
			'new_item'           => __( 'Nova pessoa', 'haste-toolkit' ),
			'edit_item'          => __( 'Editar pessoa', 'haste-toolkit' ),
			'view_item'          => __( 'Visualizar pessoa', 'haste-toolkit' ),
			'all_items'          => __( 'Todas as pessoas', 'haste-toolkit' ),
			'search_items'       => __( 'Pesquisar pessoas', 'haste-toolkit' ),
			'not_found'          => __( 'Nenhuma pessoa da equipe encontrada', 'haste-toolkit' ),
			'not_found_in_trash' => __( 'Nenhuma pessoa da equipe encontrada na lixeira', 'haste-toolkit' ),
		)
	);

	$team->set_arguments(
		array(
		  'supports'          => array( 'title', 'thumbnail' ),
		  'menu_icon'         => 'dashicons-groups',
		  'show_in_nav_menus' => true,
		  'menu_position' => 10,
		  'publicly_queryable' => false,
		)
	);

	/**
	 * Startups
	 */
	$startup = new Odin_Post_Type(
	    __( 'Startups', 'haste-toolkit' ), // Name
	    'startup' // Slug
	);

	$startup->set_labels(
		array(
			'name'               => __( 'Startups', 'haste-toolkit' ),
			'singular_name'      => __( 'Startup', 'haste-toolkit' ),
			'menu_name'          => __( 'Startups', 'haste-toolkit' ),
			'name_admin_bar'     => __( 'Startups', 'haste-toolkit' ),
			'add_new'            => __( 'Adicionar startup', 'haste-toolkit' ),
			'add_new_item'       => __( 'Adicionar nova startup', 'haste-toolkit' ),
			'new_item'           => __( 'Nova startup', 'haste-toolkit' ),
			'edit_item'          => __( 'Editar startup', 'haste-toolkit' ),
			'view_item'          => __( 'Visualizar startup', 'haste-toolkit' ),
			'all_items'          => __( 'Todas as startups', 'haste-toolkit' ),
			'search_items'       => __( 'Pesquisar startups', 'haste-toolkit' ),
			'not_found'          => __( 'Nenhuma startup encontrada', 'haste-toolkit' ),
			'not_found_in_trash' => __( 'Nenhuma startup encontrada na lixeira', 'haste-toolkit' ),
		)
	);

	$startup->set_arguments(
		array(
		  'supports'          => array( 'title', 'thumbnail' ),
		  'menu_icon'         => 'dashicons-store',
		  'show_in_nav_menus' => true,
		  'menu_position' => 10,
		  'publicly_queryable' => false,
		)
	);

	/**
	 * Parceiros
	 */
	$partner = new Odin_Post_Type(
	    __( 'Parceiros', 'haste-toolkit' ), // Name
	    'parceiro' // Slug
	);

	$partner->set_labels(
		array(
			'name'               => __( 'Parceiros', 'haste-toolkit' ),
			'singular_name'      => __( 'Parceiro', 'haste-toolkit' ),
			'menu_name'          => __( 'Parceiros', 'haste-toolkit' ),
			'name_admin_bar'     => __( 'Parceiros', 'haste-toolkit' ),
			'add_new'            => __( 'Adicionar parceiro', 'haste-toolkit' ),
			'add_new_item'       => __( 'Adicionar novo parceiro', 'haste-toolkit' ),
			'new_item'           => __( 'Novo parceiro', 'haste-toolkit' ),
			'edit_item'          => __( 'Editar parceiro', 'haste-toolkit' ),
			'view_item'          => __( 'Visualizar parceiro', 'haste-toolkit' ),
			'all_items'          => __( 'Todos os parceiros', 'haste-toolkit' ),
			'search_items'       => __( 'Pesquisar parceiros', 'haste-toolkit' ),
			'not_found'          => __( 'Nenhum parceiro encontrado', 'haste-toolkit' ),
			'not_found_in_trash' => __( 'Nenhum parceiro encontrado na lixeira', 'haste-toolkit' ),
		)
	);

	$partner->set_arguments(
		array(
		  'supports'          => array( 'title', 'thumbnail' ),
		  'menu_icon'         => 'dashicons-thumbs-up',
		  'show_in_nav_menus' => true,
		  'menu_position' => 10,
		  'publicly_queryable' => false,
		)
	);

	/**
	 * Investidores
	 */
	$investors = new Odin_Post_Type(
		__( 'Investidores', 'haste-toolkit' ), // Name
		'investidor' // Slug
	);

	$investors->set_labels(
		array(
			'name'               => __( 'Investidores', 'haste-toolkit' ),
			'singular_name'      => __( 'Investidor', 'haste-toolkit' ),
			'menu_name'          => __( 'Investidores', 'haste-toolkit' ),
			'name_admin_bar'     => __( 'Investidores', 'haste-toolkit' ),
			'add_new'            => __( 'Adicionar investidor', 'haste-toolkit' ),
			'add_new_item'       => __( 'Adicionar novo investidor', 'haste-toolkit' ),
			'new_item'           => __( 'Novo investidor', 'haste-toolkit' ),
			'edit_item'          => __( 'Editar investidor', 'haste-toolkit' ),
			'view_item'          => __( 'Visualizar investidor', 'haste-toolkit' ),
			'all_items'          => __( 'Todos os investidores', 'haste-toolkit' ),
			'search_items'       => __( 'Pesquisar investidores', 'haste-toolkit' ),
			'not_found'          => __( 'Nenhum investidor encontrado', 'haste-toolkit' ),
			'not_found_in_trash' => __( 'Nenhum investidor encontrado na lixeira', 'haste-toolkit' ),
		)
	);

	$investors->set_arguments(
		array(
		  'supports'          => array( 'title', 'thumbnail' ),
		  'menu_icon'         => 'dashicons-chart-area',
		  'show_in_nav_menus' => true,
		  'menu_position' => 10,
		  'publicly_queryable' => false,
		)
	);

	/**
	 * Depoimentos
	 */
	$testimonials = new Odin_Post_Type(
		__( 'Depoimentos', 'haste-toolkit' ), // Name
		'depoimento' // Slug
	);

	$testimonials->set_labels(
		array(
			'name'               => __( 'Depoimentos', 'haste-toolkit' ),
			'singular_name'      => __( 'Depoimento', 'haste-toolkit' ),
			'menu_name'          => __( 'Depoimentos', 'haste-toolkit' ),
			'name_admin_bar'     => __( 'Depoimentos', 'haste-toolkit' ),
			'add_new'            => __( 'Adicionar depoimento', 'haste-toolkit' ),
			'add_new_item'       => __( 'Adicionar novo depoimento', 'haste-toolkit' ),
			'new_item'           => __( 'Novo depoimento', 'haste-toolkit' ),
			'edit_item'          => __( 'Editar depoimento', 'haste-toolkit' ),
			'view_item'          => __( 'Visualizar depoimento', 'haste-toolkit' ),
			'all_items'          => __( 'Todos os depoimentos', 'haste-toolkit' ),
			'search_items'       => __( 'Pesquisar depoimentos', 'haste-toolkit' ),
			'not_found'          => __( 'Nenhum depoimento encontrado', 'haste-toolkit' ),
			'not_found_in_trash' => __( 'Nenhum depoimento encontrado na lixeira', 'haste-toolkit' ),
		)
	);

	$testimonials->set_arguments(
		array(
		  'supports'          => array( 'title', 'thumbnail' ),
		  'menu_icon'         => 'dashicons-testimonial',
		  'show_in_nav_menus' => true,
		  'menu_position' => 10,
		  'publicly_queryable' => false,
		)
	);
}
add_action( 'init', 'haste_post_types', 1 );
?>
