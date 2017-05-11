// SmallBox notification Plugin
// IIFE
(function(){
    //add new method to jQuery
    $.smallBox = function(opciones){
        // merge object default parameters with yours
        opciones = $.extend({
            titulo : undefined,
            subtitulo : undefined,
            contenido : undefined,
            fa: 'fa-facebook',
            img : undefined,
            timeout: undefined
        },opciones);
    
        // create the html
        var html = "";

        html += '  <div class="smallBox-contenedor">'
        html += '  		<div class="smallBox-foto">'
        html += '  			<img src="'+ opciones.img +'">'
        html += '  		</div>'
        html += '  		<div class="smallBox-contenido" align="center">'
        html += '  			<div class="smallBox-textoContenedor" align="left">'
        html += '  				<span class="smallBox-titulo">'+ opciones.titulo +'</span>'
        html += '  				<span class="smallBox-subTitulo">'+ opciones.subtitulo +'</span>'
        html += '  			</div>'
        html += '  			<div class="smallBox-cajaColor">'
        html += '  				<div class="smallBox-colorTexto">'
        html += '  					<i class="fa fa-user-circle"></i> '+ opciones.contenido +''
        html += '  				</div>'
        html += '  				<div class="smallBox-colorIcon">'
        html += '  					<i class="fa '+ opciones.fa +' fa-2x"></i>'
        html += '  				</div>'
        html += '  			</div>'
        html += '  			<div class="smallBox-sombra"></div>'
        html += '  		</div>'
        html += '  </div>';

        // insert to the body
        $('body').append(html);

        // animate entry
        smallBoxAnimate();

        if(opciones.timeout !== undefined){
            // animate exit
            setTimeout(function(){
                exitAnimation();
            }, opciones.timeout);         
        }

    }

    // entry function
    function smallBoxAnimate(){

        // same animation for all messages
        var $smallBox = $(".smallBox-contenedor");
        var tl = new TimelineMax();
            tl.from($smallBox, 1.5, {y:"+= 200px", opacity:0});
    
    }

    // exit animation
    function exitAnimation(){

        // same animation for all messages
        var $smallBox = $(".smallBox-contenedor");
        var tl = new TimelineMax();
            tl.to($smallBox, 1.5, {y:"+= 200px", opacity:0, onComplete: removeSmallBox});
    }

    // remove all smallbox from DOM
    function removeSmallBox(){
        $(".smallBox-contenedor").remove();
    }

})();