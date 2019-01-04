$( document ).ready( function() {

 	var $canvasBtn = $( '#canvas-trigger' );
 	var $canvasMenu = $( '#canvas-menu' );

 	$canvasBtn.on( 'click', function() {

 		if ( $canvasMenu.hasClass( 'open' ) ) {
 			$canvasMenu.removeClass( 'open' );
 			$canvasBtn.removeClass( 'active' );
 			return;

 		}

 		$canvasMenu.addClass( 'open' );
 		$canvasBtn.addClass( 'active' );
 		return;
 	});
})