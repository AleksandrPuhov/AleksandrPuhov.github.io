$(document).ready(function () {
    const navbar = $('#navbar');

    $(window).scroll(function () {
        const scrolled = $(this).scrollTop();

        if (scrolled > 0) {
            navbar.css({
                backgroundColor: 'rgb(233, 235, 241)',
                boxShadow: '0px 2px 10px rgb(210, 210, 210)',
            });
        } else {
            navbar.css({
                backgroundColor: 'transparent',
                boxShadow: 'none',
            });
        }
    });
});
