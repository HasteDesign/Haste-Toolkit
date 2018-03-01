/*global tinymce */
(function() {
	/**
	 * Add the shortcodes downdown.
	 */
	tinymce.PluginManager.add( 'haste_shortcodes', function( editor ) {
		var ed      = tinymce.activeEditor;
		var haste_ui = new Haste_Shortcode_UI( editor, ed );

		editor.addButton(
			'jtfo', {
				text: ed.getLang( 'haste.shortcode_title' ),
				type: 'menubutton',

				menu: [ {
					text   : 'Olho',
					onclick: function() {
						haste_ui.olho();
					}
				},
				{
					text   : 'Citação',
					onclick: function() {
						haste_ui.citacao();
					}
				},{
					text   : ed.getLang( 'haste.button' ),
					onclick: function() {
						haste_ui.button();
					}
				}, {
					text   : ed.getLang( 'haste.group_button' ),
					onclick: function() {
						haste_ui.group_button();
					}
				}, {
					text   : ed.getLang( 'haste.alert' ),
					onclick: function() {
						haste_ui.alert();
					}
				}, {
					text   : ed.getLang( 'haste.label' ),
					onclick: function() {
						haste_ui.label();
					}
				}, {
					text   : ed.getLang( 'haste.badge' ),
					onclick: function() {
						haste_ui.badge();
					}
				}, {
					text   : ed.getLang( 'haste.icon' ),
					onclick: function() {
						haste_ui.icon();
					}
				}, {
					text   : ed.getLang( 'haste.well' ),
					onclick: function() {
						haste_ui.well();
					}
				}, {
					text   : ed.getLang( 'haste.table' ),
					onclick: function() {
						haste_ui.table();
					}
				}, {
					text   : ed.getLang( 'haste.grid' ),
					onclick: function() {
						haste_ui.grids();
					}
				}, {
					text   : ed.getLang( 'haste.progress_bar' ),
					onclick: function() {
						haste_ui.progress();
					}
				}, {
					text   : ed.getLang( 'haste.panel' ),
					onclick: function() {
						haste_ui.panel();
					}
				}, {
					text   : ed.getLang( 'haste.tabs' ),
					onclick: function() {
						haste_ui.tabs();
					}
				}, {
					text   : ed.getLang( 'haste.accordion' ),
					onclick: function() {
						haste_ui.accordion();
					}
				}, {
					text   : ed.getLang( 'haste.tooltip' ),
					onclick: function() {
						haste_ui.tooltip();
					}
				}, {
					text   : ed.getLang( 'haste.map' ),
					onclick: function() {
						haste_ui.map();
					}
				}, {
					text   : ed.getLang( 'haste.clear' ),
					onclick: function() {
						haste_ui.clear();
					}
				}, {
					text   : ed.getLang( 'haste.qrcode' ),
					onclick: function() {
						haste_ui.qrcode();
					}
				} ]
			} );
	} );
})();

function Haste_Shortcode_UI( _editor, _ed ) {
	var editor = _editor;
	var ed     = _ed;

	this.button = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'haste.button' ),
			body    : [ {
				type : 'textbox',
				name : 'text',
				label: ed.getLang( 'haste.text' )
			}, {
				type  : 'listbox',
				name  : 'type',
				label : ed.getLang( 'haste.type' ),
				values: [ {
					text : ed.getLang( 'haste.default' ),
					value: 'default'
				}, {
					text : ed.getLang( 'haste.success' ),
					value: 'success'
				}, {
					text : ed.getLang( 'haste.warning' ),
					value: 'warning'
				}, {
					text : ed.getLang( 'haste.danger' ),
					value: 'danger'
				}, {
					text : ed.getLang( 'haste.link' ),
					value: 'link'
				} ]
			}, {
				type  : 'listbox',
				name  : 'size',
				label : ed.getLang( 'haste.size' ),
				values: [ {
					text : ed.getLang( 'haste.lg' ),
					value: 'lg'
				}, {
					text : ed.getLang( 'haste.sm' ),
					value: 'sm'
				}, {
					text : ed.getLang( 'haste.xs' ),
					value: 'xs'
				} ]
			}, {
				type : 'textbox',
				name : 'link',
				id   : 'link_button_input',
				label: ed.getLang( 'haste.link' )
			}, {
				type : 'textbox',
				name : 'class_css',
				id   : 'class_button_input',
				label: ed.getLang( 'haste.class' )
			}, {
				type : 'textbox',
				name : 'tooltip',
				label: ed.getLang( 'haste.tooltip' )
			}, {
				type  : 'listbox',
				name  : 'direction',
				label : ed.getLang( 'haste.direction' ),
				values: [ {
					text : ed.getLang( 'haste.default' ),
					value: 'default'
				}, {
					text : ed.getLang( 'haste.top' ),
					value: 'top'
				}, {
					text : ed.getLang( 'haste.right' ),
					value: 'right'
				}, {
					text : ed.getLang( 'haste.left' ),
					value: 'left'
				}, {
					text : ed.getLang( 'haste.bottom' ),
					value: 'bottom'
				} ]
			} ],
			onsubmit: function( e ) {
				// From textfield fields
				var text      = isEmpty( e.data.text ) ? '' : e.data.text,
				    link      = isEmpty( e.data.link ) ? '' : 'link="' + e.data.link + '" ',
				    class_css = isEmpty( e.data.class_css ) ? '' : 'class="' + e.data.class_css + '" ',
				    tooltip   = isEmpty( e.data.tooltip ) ? '' : 'tooltip="' + e.data.tooltip + '" ';
				// From dropdown fields
				var type      = 'type="' + e.data.type + '" ',
				    size      = 'size="' + e.data.size + '" ',
				    direction = e.data.direction == 'default' ? '' : 'direction="' + e.data.direction + '" ';

				editor.insertContent( '[button ' + type + size + link + class_css + tooltip + direction + ']' + text + '[/button]' );
			}
		} );

		jQuery( '#class_button_input' ).attr( 'placeholder', 'hover' );
		jQuery( '#link_button_input' ).attr( 'placeholder', 'http://www.site.com' );

	};

	this.group_button = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'haste.group_button' ),
			minWidth: 300,
			body    : [ {
				type  : 'listbox',
				name  : 'type',
				label : ed.getLang( 'haste.type' ),
				values: [ {
					text : ed.getLang( 'haste.vertical' ),
					value: 'vertical'
				}, {
					text : ed.getLang( 'haste.group' ),
					value: 'group'
				} ]
			}, {
				type  : 'listbox',
				name  : 'size',
				label : ed.getLang( 'haste.size' ),
				values: [ {
					text : ed.getLang( 'haste.lg' ),
					value: 'lg'
				}, {
					text : ed.getLang( 'haste.sm' ),
					value: 'sm'
				}, {
					text : ed.getLang( 'haste.xs' ),
					value: 'xs'
				} ]
			}, {
				type   : 'checkbox',
				name   : 'justified',
				label  : ed.getLang( 'haste.justified' ),
				checked: false
			} ],
			onsubmit: function( e ) {
				var type      = 'type="' + e.data.type + '" ',
				    size      = 'size="' + e.data.size + '" ',
				    justified = 'justified="' + e.data.justified + '" ';
				editor.insertContent( '[button_group ' + type + size + justified + ']  #content  [/button_group]' );
			}
		} );
	};

	this.alert = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'haste.alert' ),
			body    : [ {
				type : 'textbox',
				name : 'content',
				label: ed.getLang( 'haste.content' ),
				minHeight: 200,
				minWidth: 300,
				multiline: true
			}, {
				type  : 'listbox',
				name  : 'type',
				label : ed.getLang( 'haste.type' ),
				values: [ {
					text : ed.getLang( 'haste.success' ),
					value: 'success'
				}, {
					text : ed.getLang( 'haste.info' ),
					value: 'info'
				}, {
					text : ed.getLang( 'haste.warning' ),
					value: 'warning'
				}, {
					text : ed.getLang( 'haste.danger' ),
					value: 'danger'
				} ]
			}, {
				type   : 'checkbox',
				name   : 'close',
				label  : ed.getLang( 'haste.close' ),
				checked: false
			} ],
			onsubmit: function( e ) {
				var type  = 'type="' + e.data.type + '" ',
				    close = true === e.data.close ? 'close="' + e.data.close + '" ' : '';

				editor.insertContent( '[alert ' + type + close + ']' + e.data.content + '[/alert]' );
			}
		} );
	};

	this.label = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'haste.label' ),
			body    : [ {
				type : 'textbox',
				name : 'content',
				label: ed.getLang( 'haste.content' )
			}, {
				type  : 'listbox',
				name  : 'type',
				label : ed.getLang( 'haste.type' ),
				values: [ {
					text : ed.getLang( 'haste.default' ),
					value: 'default'
				}, {
					text : ed.getLang( 'haste.success' ),
					value: 'success'
				}, {
					text : ed.getLang( 'haste.info' ),
					value: 'info'
				}, {
					text : ed.getLang( 'haste.warning' ),
					value: 'warning'
				}, {
					text : ed.getLang( 'haste.danger' ),
					value: 'danger'
				} ]
			} ],
			onsubmit: function( e ) {
				var type = 'type="' + e.data.type + '" ';
				editor.insertContent( '[label ' + type + ']' + e.data.content + '[/label]' );
			}
		} );
	};

	this.badge = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'haste.badge' ),
			body    : [ {
				type : 'textbox',
				name : 'content',
				label: ed.getLang( 'haste.content' )
			} ],
			onsubmit: function( e ) {
				var type = 'type="' + e.data.type + '" ';
				editor.insertContent( '[badge ]' + e.data.content + '[/badge]' );
			}
		} );
	};

	this.grids = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'haste.grid' ),
			body    : [ {
				type : 'textbox',
				name : 'columns',
				label: ed.getLang( 'haste.columns' )
			}, {
				type : 'textbox',
				name : 'rows',
				label: ed.getLang( 'haste.rows' )
			} ],
			onsubmit: function( e ) {
				var rows          = e.data.rows,
				    columns       = e.data.columns > 12 ? 12 : e.data.columns,
				    final_content = '';

				for( var r = 0; r < rows; r ++ ) {
					final_content += '[row] \n';
					for( var c = 0; c < columns; c ++ ) {
						final_content += '[col class="col-md-' + Math.floor( 12 / columns ) + '"] Column# ' + c + ' Row# ' + r + ' [/col]\n';
					}
					final_content += '[/row] \n';
				}

				final_content = final_content.replace( /\n/ig, "<br>" );
				editor.insertContent( final_content );
			}
		} );
	};

	this.icon = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'haste.icon' ),
			minWidth: 200,
			body    : [ {
				type : 'textbox',
				name : 'icon',
				label: ed.getLang( 'haste.icon' ),
			} ],

			onsubmit: function( e ) {
				var icon = 'type="' + e.data.icon + '" ';
				editor.insertContent( '[icon ' + icon + ']' );
			}
		} );
	};

	this.well = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'haste.well' ),
			body    : [ {
				type : 'textbox',
				name : 'content',
				label: ed.getLang( 'haste.content' ),
				minHeight: 200,
				minWidth: 300,
				multiline: true
			} ],
			onsubmit: function( e ) {
				var type = 'type="' + e.data.type + '" ';
				editor.insertContent( '[well]' + e.data.content + '[/well]' );
			}
		} );
	};

	this.table = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'haste.table' ),
			minWidth: 500,
			body    : [ {
				type  : 'listbox',
				name  : 'type',
				label : ed.getLang( 'haste.type' ),
				values: [ {
					text : ed.getLang( 'haste.striped' ),
					value: 'striped'
				}, {
					text : ed.getLang( 'haste.hover' ),
					value: 'hover'
				}, {
					text : ed.getLang( 'haste.condensed' ),
					value: 'condensed'
				}, {
					text : ed.getLang( 'haste.responsive' ),
					value: 'responsive'
				} ]
			}, {
				type   : 'checkbox',
				name   : 'border',
				label  : ed.getLang( 'haste.border' ),
				checked: false
			}, {
				type : 'textbox',
				name : 'cols',
				id   : 'cols_table_input',
				label: ed.getLang( 'haste.cols' ),
			}, {
				type : 'textbox',
				name : 'rows',
				id   : 'rows_table_input',
				label: ed.getLang( 'haste.rows' ),
			} ],
			onsubmit: function( e ) {
				var type   = 'type="' + e.data.type + '" ',
				    border = true === e.data.border ? 'border=true" ' : '',
				    cols   = 'cols="' + e.data.cols + '" ',
				    rows   = 'rows="' + e.data.rows + '" ';

				editor.insertContent( '[table ' + type + border + cols + rows + ' ] ' );
			}
		} );

		jQuery( '#cols_table_input' ).attr( 'placeholder', 'Column 1, Column 2, ...' );
		jQuery( '#rows_table_input' ).attr( 'placeholder', 'Column 1 row 1, Column 2 row1 | Column 1 row 2' );
	};

	this.progress = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'haste.progress' ),
			body    : [ {
				type  : 'listbox',
				name  : 'type',
				label : ed.getLang( 'haste.type' ),
				values: [ {
					text : ed.getLang( 'haste.success' ),
					value: 'striped'
				}, {
					text : ed.getLang( 'haste.info' ),
					value: 'info'
				}, {
					text : ed.getLang( 'haste.warning' ),
					value: 'warning '
				}, {
					text : ed.getLang( 'haste.danger' ),
					value: 'danger'
				} ]
			}, {
				type  : 'listbox',
				name  : 'class_css',
				label : ed.getLang( 'haste.class' ),
				values: [ {
					text : ed.getLang( 'haste.progress_striped' ),
					value: 'progress-striped'
				}, {
					text : ed.getLang( 'haste.active' ),
					value: 'active'
				} ]
			}, {
				type : 'slider',
				name : 'value',
				label: ed.getLang( 'haste.value_progress' ),
			}, {
				type : 'textbox',
				name : 'max',
				label: ed.getLang( 'haste.max' ),
				value: '100'
			}, {
				type : 'textbox',
				name : 'min',
				label: ed.getLang( 'haste.min' ),
				value: '0'
			} ],
			onsubmit: function( e ) {
				var type      = 'type="' + e.data.type + '" ',
				    class_css = 'class="' + e.data.class + '" ',
				    value     = 'value="' +((e.data.value * 0.01) * e.data.max - e.data.min) + '" ',
				    max       = 'max="' + e.data.max + '" ',
				    min       = 'min="' + e.data.min + '" ';

				editor.insertContent( '[progress ' + type + class_css + value + max + min + ' ] ' );
			}
		} );
	};

	this.panel = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'haste.panel' ),
			body    : [ {
				type : 'textbox',
				name : 'content',
				label: ed.getLang( 'haste.content' ),
				minHeight: 200,
				minWidth: 300,
				multiline: true
			}, {
				type : 'textbox',
				name : 'heading',
				label: 'Cabeçalho',
			}, {
				type  : 'listbox',
				name  : 'type',
				label : ed.getLang( 'haste.type' ),
				values: [ {
					text : ed.getLang( 'haste.default' ),
					value: 'default'
				}, {
					text : ed.getLang( 'haste.info' ),
					value: 'info'
				}, {
					text : ed.getLang( 'haste.primary' ),
					value: 'primary'
				}, {
					text : ed.getLang( 'haste.success' ),
					value: 'success'
				}, {
					text : ed.getLang( 'haste.warning' ),
					value: 'warning'
				}, {
					text : ed.getLang( 'haste.danger' ),
					value: 'danger'
				} ]
			} ],
			onsubmit: function( e ) {
				var type = 'type="' + e.data.type + '" ';

				editor.insertContent( '[panel '+ type +'][panel_heading]' + e.data.heading + '[/panel_heading][panel_body]' + e.data.content + '[/panel_body][/panel]' );
			}
		} );
	};

	this.tabs = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'haste.tabs' ),
			body    : [ {
				type : 'textbox',
				name : 'tabs',
				id   : 'childs_tabs_input',
				label: ed.getLang( 'haste.childs' ),
			} ],
			onsubmit: function( e ) {
				var tabs          = e.data.tabs,
				    tabs_title    = '',
				    tabs_content  = '',
				    final_content = '';

				for( var i = 0; i < tabs; i ++ ) {
					tabs_title += ' [tab id="tab_id_' + i + '" ' +( 0 === i ? 'active = "true"' : "") + ' ]Title #' + i + ' [/tab] \n ';
					tabs_content += ' [tab_content id="tab_id_' + i + '" ' +( 0 === i ? 'active = "true"' : "") + ' ]' + 'content #' + i + '[/tab_content] \n';
				}

				//formating the output to break line
				final_content += '[tabs]\n' + tabs_title + '[/tabs]\n';
				final_content += '[tab_contents]\n' + tabs_content + '[/tab_contents]\n';
				final_content = final_content.replace( /\n/ig, '<br>' );

				editor.insertContent( final_content );

			}
		} );
		jQuery( '#childs_tabs_input' ).attr( 'placeholder', '3' );
	};

	this.accordion = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'haste.accordion' ),
			body    : [ {
				type : 'textbox',
				name : 'accordions_id',
				label: ed.getLang( 'haste.accordions_id' ),
				value: 'haste-accordion'
			}, {
				type : 'textbox',
				name : 'childs',
				id   : 'childs_accordion_input',
				label: ed.getLang( 'haste.childs' ),
			}, {
				type  : 'listbox',
				name  : 'type',
				label : ed.getLang( 'haste.type' ),
				values: [ {
					text : ed.getLang( 'haste.default' ),
					value: 'default'
				}, {
					text : ed.getLang( 'haste.info' ),
					value: 'info'
				}, {
					text : ed.getLang( 'haste.primary' ),
					value: 'primary'
				}, {
					text : ed.getLang( 'haste.success' ),
					value: 'success'
				}, {
					text : ed.getLang( 'haste.warning' ),
					value: 'warning '
				}, {
					text : ed.getLang( 'haste.danger' ),
					value: 'danger '
				} ]
			} ],
			onsubmit: function( e ) {
				var type          = ' type="' + e.data.type + '" ',
				    accordions_id = ' id="' + e.data.accordions_id + '" ',
				    childs        = e.data.childs <= 0 ? 1 : e.data.childs,
				    accordions    = '',
				    final_content = '';

				for( var i = 0; i < childs; i ++ ) {
					accordions += '[accordion id=accordion#' + i + ' title="title#' + i + '" ' + ( 0 === i ? " active='true' " : " " ) + ' ]' + 'content #' + i + ' [/accordion] \n';
				}

				final_content += ' [accordions' + accordions_id + ' ] \n';
				final_content += accordions;
				final_content += '[/accordions] \n';
				final_content = final_content.replace( /\n/ig, '<br>' );
				editor.insertContent( final_content );
			}
		} );
		jQuery( '#childs_accordion_input' ).attr( 'placeholder', '3' );
	};

	this.tooltip = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'haste.tooltip' ),
			body    : [ {
				type : 'textbox',
				name : 'title',
				label: ed.getLang( 'haste.title' )
			}, {
				type : 'textbox',
				name : 'content',
				label: ed.getLang( 'haste.content' )
			}, {
				type : 'textbox',
				name : 'link',
				id   : 'link_tooltip_input',
				label: ed.getLang( 'haste.link' )
			}, {
				type  : 'listbox',
				name  : 'direction',
				label : ed.getLang( 'haste.direction' ),
				values: [ {
					text : ed.getLang( 'haste.top' ),
					value: 'top'
				}, {
					text : ed.getLang( 'haste.right' ),
					value: 'right'
				}, {
					text : ed.getLang( 'haste.left' ),
					value: 'left'
				}, {
					text : ed.getLang( 'haste.bottom' ),
					value: 'success'
				} ]
			} ],
			onsubmit: function( e ) {
				var direction = 'direction="' + e.data.direction + '" ',
				    title     = 'title="' + e.data.title + '" ',
				    link      = 'link="' + e.data.link + '" ';

				editor.insertContent( ' [tooltip ' + title + direction + link + ']' + e.data.content + '[/tooltip]' );

			}
		} );

		jQuery( '#link_tooltip_input' ).attr( 'placeholder', 'http://www.site.com' );
	};

	this.clear = function() {
		editor.insertContent( '[clear]' );
	};

	this.qrcode = function() {
		editor.windowManager.open( {
			title   : ed.getLang( 'haste.qrcode' ),
			body    : [ {
				type : 'textbox',
				name : 'data',
				id   : 'data_qr_input',
				label: ed.getLang( 'haste.data' )
			}, {
				type : 'textbox',
				name : 'size',
				label: ed.getLang( 'haste.size' ),
				value: '150x150'
			}, {
				type : 'textbox',
				name : 'title',
				label: ed.getLang( 'haste.title' )
			} ],
			onsubmit: function( e ) {
				var data  = 'data="' + e.data.data + '" ',
				    size  = 'size="' + e.data.size + '" ',
				    title = 'title="' + e.data.title + '" ';

				editor.insertContent( ' [qrcode ' + data + size + title + ']' );
			}
		} );

		jQuery( '#data_qr_input' ).attr( 'placeholder', 'http://www.site.com' );
	};

	this.map = function() {
		editor.windowManager.open( {
			maxHeight: 500,
			minHeight: 300,
			maxWidth : 700,
			minWidth : 450,
			title    : ed.getLang( 'haste.map' ),
			id       : 'map-shortcode-panel',
			body     : [ {

				type : 'textbox',
				name : 'id',
				value: 'haste_gmap',
				label: ed.getLang( 'haste.id' )
			}, {
				type : 'textbox',
				name : 'latitude',
				id   : 'lat_map_input',
				label: ed.getLang( 'haste.latitude' )
			}, {
				type : 'textbox',
				name : 'longitude',
				id   : 'long_map_input',
				label: ed.getLang( 'haste.longitude' )
			}, {
				type : 'textbox',
				name : 'zoom',
				value: '10',
				label: ed.getLang( 'haste.zoom' )
			}, {
				type : 'textbox',
				name : 'width',
				value: '600',
				label: ed.getLang( 'haste.width' )
			}, {
				type : 'textbox',
				name : 'height',
				value: '400',
				label: ed.getLang( 'haste.height' )
			}, {
				type  : 'listbox',
				name  : 'maptype',
				label : ed.getLang( 'haste.maptype' ),
				values: [ {
					text : ed.getLang( 'haste.ROADMAP' ),
					value: 'ROADMAP'
				}, {
					text : ed.getLang( 'haste.SATELLITE' ),
					value: 'SATELLITE'
				}, {
					text : ed.getLang( 'haste.HYBRID' ),
					value: 'HYBRID'
				}, {
					text : ed.getLang( 'haste.TERRAIN' ),
					value: 'TERRAIN'
				} ]
			}, {
				type : 'textbox',
				name : 'address',
				label: ed.getLang( 'haste.address' )
			}, {
				type : 'textbox',
				name : 'kml',
				id   : 'kml_map_input',
				label: ed.getLang( 'haste.kml' )
			}, {
				type   : 'checkbox',
				name   : 'kmlautofit',
				label  : ed.getLang( 'haste.kmlautofit' ),
				checked: false
			}, {
				type   : 'checkbox',
				name   : 'marker',
				label  : ed.getLang( 'haste.marker' ),
				checked: false
			}, {
				type : 'textbox',
				name : 'markerimage',
				id   : 'markerimg_map_input',
				label: ed.getLang( 'haste.markerimage' )
			}, {
				type   : 'checkbox',
				name   : 'traffic',
				label  : ed.getLang( 'haste.traffic' ),
				checked: false
			}, {
				type   : 'checkbox',
				name   : 'bike',
				label  : ed.getLang( 'haste.bike' ),
				checked: false
			}, {
				type : 'textbox',
				name : 'fusion',
				label: ed.getLang( 'haste.fusion' ),

			}, {
				type : 'textbox',
				name : 'infowindow',
				label: ed.getLang( 'haste.infowindow' ),

			}, {
				type   : 'checkbox',
				name   : 'infowindowdefault',
				label  : ed.getLang( 'haste.infowindowdefault' ),
				checked: false
			}, {
				type   : 'checkbox',
				name   : 'hidecontrols',
				label  : ed.getLang( 'haste.hidecontrols' ),
				checked: false
			}, {
				type   : 'checkbox',
				name   : 'scale',
				label  : ed.getLang( 'haste.scale' ),
				checked: false
			}, {
				type   : 'checkbox',
				name   : 'scrollwheel',
				label  : ed.getLang( 'haste.scrollwheel' ),
				checked: true
			} ],
			onsubmit : function( e ) {
				var id                = ' id="' + e.data.id + '" ',
				    latitude          = '' === e.data.latitude ? '' : ' latitude="' + e.data.latitude + '" ',
				    longitude         = '' === e.data.longitude ? '' : ' longitude="' + e.data.longitude + '" ',
				    zoom              = ' zoom="' + e.data.zoom + '" ',
				    width             = ' width="' + e.data.width + '" ',
				    height            = ' height="' + e.data.height + '" ',
				    maptype           = ' maptype="' + e.data.maptype + '" ',
				    address           = ' address="' + e.data.address + '" ',
				    kml               = ' kml="' + e.data.kml + '" ',
				    kmlautofit        = ' kmlautofit="' + e.data.kmlautofit + '" ',
				    marker            = ' marker="' + e.data.marker + '" ',
				    markerimage       = ' markerimage="' + e.data.markerimage + '" ',
				    traffic           = ' traffic="' + e.data.traffic + '" ',
				    fusion            = ' fusion="' + e.data.fusion + '" ',
				    bike              = ' bike="' + e.data.bike + '" ',
				    infowindow        = ' infowindow="' + e.data.infowindow + '" ',
				    infowindowdefault = ' infowindowdefault="' + e.data.infowindowdefault + '" ',
				    hidecontrols      = ' hidecontrols="' + e.data.hidecontrols + '" ',
				    scale             = ' scale="' + e.data.scale + '" ',
				    scrollwheel       = ' scrollwheel="' + e.data.scrollwheel + '" ';

				editor.insertContent( ' [map' + id + latitude + longitude + zoom + width + height + maptype + address +
					kml + kmlautofit + marker + markerimage + traffic + fusion + bike + infowindow + infowindowdefault + scale + scrollwheel + ']' );
			}
		} );

		jQuery( '#lat_map_input' ).attr( 'placeholder', '-25.363882' );
		jQuery( '#long_map_input' ).attr( 'placeholder', '131.044922' );
		jQuery( '#markerimg_map_input' ).attr( 'placeholder', 'http://.../beachflag.png' );
		jQuery( '#kml_map_input' ).attr( 'placeholder', 'http://.../ggeoxml/cta.kml' );
	};

	this.olho = function() {
		editor.windowManager.open( {
			title   : 'Olho',
			body    : [ {
				type : 'textbox',
				name : 'content',
				label: ed.getLang( 'haste.content' ),
				minHeight: 200,
				minWidth: 300,
				multiline: true
			}, {
				type  : 'listbox',
				name  : 'type',
				label : ed.getLang( 'haste.type' ),
				values: [ {
					text : 'Esquerda',
					value: 'alignleft'
				}, {
					text : 'Direita',
					value: 'alignright'
				}, {
					text : 'Centro',
					value: 'aligncenter'
				} ]
			} ],
			onsubmit: function( e ) {
				var type = 'type="' + e.data.type + '" ';
				editor.insertContent( '[olho class="' + e.data.type + '"]' + e.data.content + '[/olho]' );
			}
		} );
	};

	this.citacao = function() {
		editor.windowManager.open( {
			title   : 'Citação',
			body    : [
				{
					type : 'textbox',
					name : 'content',
					label: ed.getLang( 'haste.content' ),
					minHeight: 200,
					minWidth: 300,
					multiline: true
				},
				{
					type : 'textbox',
					name : 'credito',
					label: 'Crédito'
				}
			],
			onsubmit: function( e ) {
				var type 	= 'type="' + e.data.type + '" ',
					credito	= 'credito="' + e.data.credito + '" ';

				editor.insertContent( '[citacao ' + credito + ']' + e.data.content + '[/citacao]' );
			}
		} );
	};
}

/**
 * Check is empty.
 *
 * @param  {string} value
 * @return {bool}
 */
this.isEmpty = function( value ) {
	value = value.toString();

	if ( 0 !== value.length ) {
		return false;
	}

	return true;
};
