
$(document).ready( function() {
    // init Masonry after all images have loaded

    var $grid = $('.grid').imagesLoaded( function() {
        $grid.masonry({
            itemSelector: '.grid-item',
            percentPosition: true,
            columnWidth: '.grid-sizer'
        });
    });

        $('.slides').slick({

        });

        $('#p_info').click(function(){
            $('.overlay_info').fadeIn();
            $('.icon').hide();
        });

    $('#p_share').click(function(){
        $('.overlay_share').fadeIn();
        $('.icon').hide();
    });

    $('.overlay_close').click(function(){
        $('.overlay_info').fadeOut();
        $('.overlay_share').fadeOut();
        $('.icon').show();
    });

});
