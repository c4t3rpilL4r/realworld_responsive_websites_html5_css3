$(document).ready(function () {
    $('.js--section-features').waypoint(function(direction) { /* this will display the sticky nav */
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;' /* this will offset the sticky nav appearance by 60px */
    });
});