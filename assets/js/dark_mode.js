$('.theme-checkbox').click(function () {
    if ($(this).is(':checked')) {

        /*header*/
        $('header').css('background-color', 'white');
        $('#heading1').css('color', 'black');
        $('.menu ul li a').css('color', 'black');

        /*home*/
        $('main > section:nth-child(1)').css('background-color', 'white');
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > h1:nth-child(2) > span').css('color', 'black');
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > h1:nth-child(3)').css('color', 'black');
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > button:nth-child(4)').css('color', 'black');
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > button:nth-child(4)').hover(function () {
            $(this).css('color', 'white');
        }, function () {
            $(this).css('color', 'black'); // Reset to the default color when not hovering
        });
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > button:nth-child(4) > div').css('background-color', 'black');
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > section:nth-child(5) > h3').css('color', 'black');
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > section:nth-child(5) > nav > div').css('background-color', 'black');
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > section:nth-child(5) > nav:nth-child(2) > div > a > i').css('color', 'white');

    } else {
        /*header*/
        $('header').css('background-color', 'black');
        $('#heading1').css('color', 'white');
        $('.menu ul li a').css('color', 'white');

        /*home*/
        $('main > section:nth-child(1)').css('background-color', 'black');
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > h1:nth-child(2) > span').css('color', 'white');
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > h1:nth-child(3)').css('color', 'white');
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > button:nth-child(4)').css('color', 'white');
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > button:nth-child(4)').hover(function () {
            $(this).css('color', 'black');
        }, function () {
            $(this).css('color', 'white'); // Reset to the default color when not hovering
        });
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > button:nth-child(4) > div').css('background-color', 'white');
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > section:nth-child(5) > h3').css('color', 'white');
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > section:nth-child(5) > nav > div').css('background-color', 'white');
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > section:nth-child(5) > nav:nth-child(2) > div > a > i').css('color', 'black');
    }
});