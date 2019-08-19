//= ../../node_modules/jquery/dist/jquery.js
//= ../../node_modules/jquery-validation/dist/jquery.validate.min.js

// импортируем необходимые js-файлы Bootstrap 4
//= ../../node_modules/bootstrap/js/dist/util.js
//= ../../node_modules/bootstrap/js/dist/alert.js
//= ../../node_modules/bootstrap/js/dist/button.js
//= ../../node_modules/bootstrap/js/dist/carousel.js
//= ../../node_modules/bootstrap/js/dist/collapse.js
//= ../../node_modules/bootstrap/js/dist/dropdown.js
//= ../../node_modules/bootstrap/js/dist/modal.js
//= ../../node_modules/bootstrap/js/dist/tooltip.js
//= ../../node_modules/bootstrap/js/dist/popover.js
//= ../../node_modules/bootstrap/js/dist/scrollspy.js
//= ../../node_modules/bootstrap/js/dist/tab.js
//= ../../node_modules/bootstrap/js/dist/toast.js

$(document).ready(function () {
    var $menuTrigger = $('[data-ic-class="button-trigger"]'),
        $menuOverlay = $('[data-ic-class="overlay"]'),
        $menuItem = $('.menu-item'),
        activeClass = 'active';

    $menuTrigger.click(function () {
        $menuTrigger.toggleClass(activeClass);
        $('.menu').toggle(200);
    });



    $('.mouce').click(function () {
        $(".main").moveDown();
        console.log('daun!!!!');
    });
    $('#to_top').click(function () {
        $(".main").moveTo(1);
    });

    $(".main").onepage_scroll({
        sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 1000, // AnimationTime let you define how long each section takes to animate
        pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function (index) {}, // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function (index) {}, // This option accepts a callback function. The function will be called after the page moves.
        loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true, // You can activate the keyboard controls
        responsiveFallback: false, // You can fallback to normal page scroll by defining the width of the browser in which
        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
        // the browser's width is less than 600, the fallback will kick in.
        direction: "vertical" // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  

    });

});

$(window).bind('mousewheel', function (event) {
    var x = screen.width;
    var y;
    if (x <= 767) {
        $('#to_top').hide()
    } else {
        if ($('#home1').hasClass("active")) {
            $('#to_top').hide()
        } else {

            $('#to_top').show()
        }
    }


});