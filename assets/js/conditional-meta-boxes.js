jQuery(document).ready(function($) {
	/**
	 * Conditional Meta Boxes
	 */
	idexo_hide_meta_boxes();
	idexo_show_meta_box( $( 'input[name="_ix_format"]:checked' ).val() );

	$( 'input[name="_ix_format"]' ).on( 'change', function() {
		idexo_hide_meta_boxes();
		switch( $( this ).val() ) {
			case 'video' : idexo_show_meta_box( $( this ).val() );
			break;
			case 'podcast' : idexo_show_meta_box( $( this ).val() );
			break;
			case 'paper' : idexo_show_meta_box( $( this ).val() );
			break;
		}
	});

	/**
	 * Displays the current checked meta box
	 * @param  {string} checked The checked option
	 */
	function idexo_show_meta_box( checked ) {
		$( '#post-' + checked ).show();
	}

	/**
	 * Hide all format meta boxes
	 */
	function idexo_hide_meta_boxes() {
		$( '#post-video' ).hide();
		$( '#post-podcast' ).hide();
		$( '#post-paper' ).hide();
	}
});
