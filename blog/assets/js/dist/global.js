var global = (function($) {

    function init() {

        events();

    }

    function events() {

        $(window).on('load hashchange', function() {

            router( window.location.hash );

        });


    }

    function router( hash ) {

        // process hash into page
        if ( hash == '' || hash == '#/' ) {
            hash = 'home';
        } else {
            hash = hash.split('#/')[1];
        }

        // clear container
        $('body > div').html('');

        // check is page is valid
        var pages = ['home'];
        if ( pages.indexOf(hash) == -1 ) { hash = '404' }

        // load core templates
        $('#header').load('partials/_header.html');
        $('#menu').load('partials/_menu.html');

        // load page
        $('#' + hash).load('partials/_' + hash + '.html');

    }

    init();

})(jQuery);