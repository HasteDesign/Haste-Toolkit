<?php

namespace Haste\Toolkit\Templates;

// Prevents direct access
defined( 'ABSPATH' ) || exit;


/**
 * Haste_Template_Loader class.
 *
 * Load templates from plugin.
 *
 * @package  Haste
 * @author   Allyson Souza
 * @version  1.0.0
 */
class TemplateLoader {

	/**
	 * Single post type slug
	 *
	 * @var string
	 */
    private $single = '';

    /**
	 * Archive post type slug
	 *
	 * @var string
	 */
    private $archive = '';

    /**
	 * Templates location path
	 *
	 * @var string
	 */
    private $path = '';

    function __construct( $single, $archive, $path ) {
        $this->single = $single;
        $this->archive = $archive;
        $this->path = $path;

        // Define archive template for CPT
        add_filter( 'archive_template', array( $this, 'define_archive_template_files' ) );

        // Define single template for CPT
        add_filter( 'single_template', array( $this, 'define_single_template_files' ) );
    }

    private function get_template_path( $slug, $template ) {
        if ( 'single' === $template ) {
            return $this->path . 'single-' . $slug . '.php';
        }

        if ( 'archive' === $template ) {
            return $this->path . 'archive-' . $slug . '.php';
        }
    }

    /**
     * Define file template for archive professores
     * @param  string $archive_template String with source file
     * @return string Source file
     */
    public function define_archive_template_files() {
        global $post;

        if ( empty( $this->archive ) )
            return;

        if ( is_post_type_archive( $this->archive ) ) {
            $archive_template = $this->get_template_path( $this->archive, 'archive' );
        }

        return $archive_template;
    }

    /**
     * Define file template for single professores
     * @param  string $single_template String with source file
     * @return string Source file
     */
    public function define_single_template_files() {
        global $post;

        $single = locate_template( 'single-' . $this->single . '.php' );

        if ( empty( $this->single ) )
            return;

        if ( $post->post_type == $this->single  ) {
            if ( empty( $single ) ) {
                $single_template = $this->get_template_path( $this->single, 'single' );
            }
        }

        return $single_template;
    }
}
