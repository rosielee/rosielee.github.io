(function($) {

    // ========================================
    // accordion
    // ========================================

    $('.accordion-section').on('click', function() {

        if ( $(this).hasClass('open') ) {
            $('.accordion-section').removeClass('open');
        } else {
            $('.accordion-section').removeClass('open');
            $(this).addClass('open');
        }

    });

    // ========================================
    // resize about image
    // ========================================

    function resizePortrait() {
        var height = $('.projects img').height();
        $('.hover-green-arrow-wide figure').height( height );
    }

    $(window).on('load', function() {
        resizePortrait();
    });

    var myEfficientFn = debounce(function() {
        resizePortrait();
    }, 300);

    window.addEventListener('resize', myEfficientFn);

})(jQuery);