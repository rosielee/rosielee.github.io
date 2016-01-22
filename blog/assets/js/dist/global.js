var Global = (function($) {

    'use strict';

    var tpl = $('#tpl-home').html();

    var allEntries = [
        { url: 'http://awwards.co', name: 'awwards', date: 'Jan 11 20,16', user: 'Ed Williams' },
        { url: 'http://www.transformicons.com', name: 'transformicons', date: 'Jan 11 2016', user: 'Ed Williams' },
        { url: 'https://daneden.github.io/animate.css', name: 'animate.css', date: 'Jan 11 2016', user: 'Ed Williams' },
        { url: 'https://www.google.com/design/spec/animation/authentic-motion.htm', name: 'motion design', date: 'Jan 11 2016', user: 'Ed Williams' },
        { url: 'http://tympanus.net/codrops', name: 'codrops', date: 'Jan 11 20,16', user: 'Ed Williams' },
        { url: 'http://www.smallvictori.es/', name: 'Small Victories', date: 'Dec 15 2015', user: 'Mark Boyce' },
        { url: 'http://www.commonsans.com', name: 'Common Sans', date: 'Dec 15 2015', user: 'Mark Boyce' },
        { url: 'http://padbury.me/clock', name: 'Padbury', date: 'Dec 15 20,15', user: 'Mark Boyce' },
        { url: 'http://www.carlkleiner.com', name: 'Carl Kleiner', date: 'Dec 15 2015', user: 'Mark Boyce' },
        { url: 'http://hallointer.net', name: 'hallointer', date: 'Nov 19 2015', user: 'Mark Boyce' },
        { url: 'http://good-music.com', name: 'good-music', date: 'Nov 19 2015', user: 'Mark Boyce' },
        { url: 'http://www.quayola.com', name: 'quayola', date: 'Nov 19 20,15', user: 'Mark Boyce' },
        { url: 'http://resn-experiments.tumblr.com', name: 'resn-experiments', date: 'Nov 19 2015', user: 'Mark Boyce' },
        { url: 'http://njla.us', name: 'njla.us', date: 'Nov 19 20,15', user: 'Mark Boyce' },
        { url: 'http://www.newmoticons.com', name: 'znewmoticons', date: 'Nov 19 2015', user: 'Mark Boyce' },
        { url: 'http://zaronfilkey.com/look_as_i', name: 'look as if', date: 'Nov 19 2015', user: 'Mark Boyce' }
    ];

    function init() {

        settings();
        events();

    }

    function settings() {

        // {{ asda }}, instead of <%= asda %>
        _.templateSettings = { interpolate: /\{\{(.+?)\}\}/g };

    }

    function events() {

        $(window).on('load', function() {
            renderEntries( allEntries );
        });

        $(document).on('keyup', '#search', function() {

            renderSearchResults();

        });

    }

    function renderEntries( data ) {

        $('#content').html('');
        data.forEach(function(entry) {
            let template = _.template( tpl );
            $('#content').append( template( entry ) );
        });

    }

    function renderSearchResults() {

        var val = $('#search').val().toLowerCase();
        var newSearchEntries = [];

        allEntries.forEach(function(entry) {

            if ( entry.name.toLowerCase().indexOf(val) !== -1 ) {
                newSearchEntries.push( entry );
            }

        });

        renderEntries( newSearchEntries );

    }

    // function router( hash ) {
    //     if ( hash == '' || hash == '#/' ) { hash = 'home'; } else { hash = hash.split('#/')[1]; }
    //     if ( hash == 'home' ) {
    //         renderEntries(allEntries);
    //     } else {
    //         $('#content').load('partials/_404.html');
    //     }
    // }

    init();

})(jQuery);