/**
 * Vertical Roller jQuery Plugin
 *
 * Make an unordered list scrollable by hovering the mouse over it
 *
 * @author Rob DiVincenzo <rob.divincenzo@gmail.com>
 * @version 0.0.4
 * @revision 4
 *
 *
 * Released: 12-20-2012
 *
**/

(function( $ ) {
  $.fn.verticalRoll = function() {
		return this.each( function() {

			var active_area = $(this);
			var gallery = active_area.find('.rolled-gallery');
			var galleryHeight;
			var galleryHeight;
			var galleryOffset;
			var xMouseOffset;
			var yMouseOffset;
			var startingFirstChildOffset;
			var startingLastChildOffset;
			
			
			/**
			 * Binds the mouse move event to get the mouse Y position
			 *
			 */
			function getMouseOffset () {
				active_area.mousemove( function ( e ){
					yMouseOffset = e.pageY;
				});

			}
			
			function setGalleryHeight() {
				galleryHeight = gallery.height();
			}
			
			/**
			 * Sets the gallery offset
			 *
			 */

			function setGalleryOffset() {
				galleryOffset = gallery.offset();
			}
			
			/**
			 * Sets the offset for the first child
			 *
			 */

			function setFirstChildOffset() {
				startingFirstChildOffset = gallery.find( '.rolled-image:first' ).offset();
			}
			/**
			 * Sets the offset for the last child
			 *
			 */

			function setLastChildOffset() {
				startingLastChildOffset = gallery.find( '.rolled-image:last' ).offset();
			}

						
			/**
			 * Gets the y-offset of the first child
			 *
			 */

			function getCurrentFirstChildYOffset() {
				return gallery.find( '.rolled-image:first' ).offset().top;
			}
			
			/**
			 * Gets the y-offset of the last child
			 *
			 */

			function getCurrentLastChildYOffset() {
				return gallery.find( '.rolled-image:last' ).offset().top;
			}
		
			/**
			 * Gets the height of the first child (image in the gallery)
			 *
			 */

			function getFirstChildHeight() {
				return gallery.find( '.rolled-image:first' ).height();
			}
			
			/**
			 * Gets the height of the first child (image in the gallery)
			 *
			 */

			function getLastChildHeight() {
				return gallery.find( '.rolled-image:last' ).height();
			}

			
			/**
			 * Checks if the top of the rolling has been reached
			 *
			 */

			function topReached() {
				if( getCurrentFirstChildYOffset() >= startingFirstChildOffset.top ){
					return true;
				} else { return false; }
			}
			
			/**
			 * Checks if the bottom of the rolling has been reached
			 *
			 */

			function bottomReached() {
				if( getCurrentLastChildYOffset() <= startingFirstChildOffset.top + getLastChildHeight() ){
					return true;
				} else { return false; }
			}
			
			
			/**
			 * Calculates the roll based upon mouse position
			 * 
			 */

			function calculateRoll() {
					if( ( yMouseOffset < ( galleryOffset.top + ( galleryHeight / 6 ) ) ) && !topReached() ){ // roll up very fast
						roll( 'up', 6 );
						}
					if( ( yMouseOffset < ( galleryOffset.top + ( galleryHeight / 3 ) ) ) && !topReached() ){ // roll up
						roll( 'up', 1 );
						}
					else if( ( yMouseOffset > ( galleryOffset.top + ( galleryHeight * ( 5/6 ) ) ) ) && !bottomReached() ){ // roll down very fast
						roll( 'down', 6 );
						}
					else if( ( yMouseOffset > ( galleryOffset.top + ( galleryHeight * ( 2/3 ) ) ) ) && !bottomReached() ){ // roll down
						roll( 'down', 1 );
						}
			}
			
			/**
			 * Will roll the offset
			 *
			 * @param direction {String} Direction in which to move the offset
			 * @param speed {Integer} Speed at which to move the offset
			 * 
			 */

			function roll( direction, speed ){
				if( direction == 'down' ) {
					speed=-speed;
				}
				gallery.children( '.rolled-image' ).each( function() {
					currentOffset= $( this ).offset();
					$( this ).offset( {top: currentOffset.top+speed} );
				});

			}
			
			/**
			 * Set initial variables
			 *
			 */

			setGalleryOffset();
			setGalleryHeight();
			getMouseOffset();
			setFirstChildOffset();
			setLastChildOffset();

			/**
			 * Bind the gallery to roll on enter and stop on leave
			 *
			 */

			active_area.bind('mouseenter', function() {
			this.iid = setInterval(function() {
				calculateRoll();
			    	}, 40);
			}).bind('mouseleave', function(){
			    this.iid && clearInterval(this.iid);
			});	
			
		});
	};
})( jQuery );