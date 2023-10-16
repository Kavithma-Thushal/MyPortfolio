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
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > section:nth-child(5) > h3').css('color', 'black');
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > section:nth-child(5) > nav > div').css('background-color', 'black');
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > section:nth-child(5) > nav:nth-child(2) > div > a > i').css('color', 'white');

        /*about*/
        $('main > section:nth-child(2)').css('background-color', 'white');
        $('main > section:nth-child(2) > section:first-child > h1').css('color', 'black');
        $('main > section:nth-child(2) > section:nth-child(3) > div:first-child > aside:nth-child(2) > h2:first-child').css('color', 'black');
        $('main > section:nth-child(2) > section:nth-child(3) > div:first-child > aside:nth-child(2) > p:nth-child(2), p:nth-child(3)').css('color', 'black');
        $('main > section:nth-child(2) > section:nth-child(3) > div:first-child > aside:nth-child(2) > div:nth-child(4) > #column1 > p').css('color', 'black');
        $('main > section:nth-child(2) > section:nth-child(3) > div:first-child > aside:nth-child(2) > div:nth-child(4) > #column1 > p > span').css('color', 'black');
        $('main > section:nth-child(2) > section:nth-child(3) > div:first-child > aside:nth-child(2) > div:nth-child(4) > #column2 > p').css('color', 'black');
        $('main > section:nth-child(2) > section:nth-child(3) > div:first-child > aside:nth-child(2) > div:nth-child(4) > #column2 > p > span').css('color', 'black');

        /*services*/
        $('main > section:nth-child(3)').css('background-color', 'white');
        $('main > section:nth-child(3) > section:first-child > h1').css('color', 'black');

        /*skills*/
        $('main > section:nth-child(4)').css('background-color', 'white');
        $('main > section:nth-child(4) > section:first-child > h1').css('color', 'black');

        /*gallery*/
        $('main > section:nth-child(5)').css('background-color', 'white');
        $('main > section:nth-child(5) > section:first-child > h1').css('color', 'black');

        /*projects*/
        $('main > section:nth-child(6)').css('background-color', 'white');
        $('main > section:nth-child(6) > section:first-child > h1').css('color', 'black');

        /*contacts*/
        $('main > section:nth-child(7)').css('background-color', 'white');
        $('main > section:nth-child(7) > section:first-child > h1').css('color', 'black');
        $('main > section:nth-child(7) > section:nth-child(2) > section:first-child > h4:nth-child(2)').css('color', 'black');
        $('main > section:nth-child(7) > section:nth-child(2) > section:nth-child(2) > div:first-child > div > h4:nth-child(2)').css('color', 'black');
        $('main > section:nth-child(7) > section:nth-child(2) > section:nth-child(3) > h4:nth-child(2)').css('color', 'black');
    } else {
        /*header*/
        $('header').css('background-color', 'black');
        $('#heading1').css('color', 'white');
        $('.menu ul li a').css('color', 'white');

        /*home*/
        $('main > section:nth-child(1)').css('background-color', 'black');
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > h1:nth-child(2) > span').css('color', 'white');
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > h1:nth-child(3)').css('color', 'white');
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > section:nth-child(5) > h3').css('color', 'white');
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > section:nth-child(5) > nav > div').css('background-color', 'white');
        $('main > section:nth-child(1) > section > div:first-child > aside:nth-child(1) > section:nth-child(5) > nav:nth-child(2) > div > a > i').css('color', 'black');

        /*about*/
        $('main > section:nth-child(2)').css('background-color', 'black');
        $('main > section:nth-child(2) > section:first-child > h1').css('color', 'white');
        $('main > section:nth-child(2) > section:nth-child(3) > div:first-child > aside:nth-child(2) > h2:first-child').css('color', 'white');
        $('main > section:nth-child(2) > section:nth-child(3) > div:first-child > aside:nth-child(2) > p:nth-child(2), p:nth-child(3)').css('color', 'white');
        $('main > section:nth-child(2) > section:nth-child(3) > div:first-child > aside:nth-child(2) > div:nth-child(4) > #column1 > p').css('color', 'white');
        $('main > section:nth-child(2) > section:nth-child(3) > div:first-child > aside:nth-child(2) > div:nth-child(4) > #column1 > p > span').css('color', 'white');
        $('main > section:nth-child(2) > section:nth-child(3) > div:first-child > aside:nth-child(2) > div:nth-child(4) > #column2 > p').css('color', 'white');
        $('main > section:nth-child(2) > section:nth-child(3) > div:first-child > aside:nth-child(2) > div:nth-child(4) > #column2 > p > span').css('color', 'white');

        /*services*/
        $('main > section:nth-child(3)').css('background-color', 'black');
        $('main > section:nth-child(3) > section:first-child > h1').css('color', 'white');

        /*skills*/
        $('main > section:nth-child(4)').css('background-color', 'black');
        $('main > section:nth-child(4) > section:first-child > h1').css('color', 'white');

        /*gallery*/
        $('main > section:nth-child(5)').css('background-color', 'black');
        $('main > section:nth-child(5) > section:first-child > h1').css('color', 'white');

        /*projects*/
        $('main > section:nth-child(6)').css('background-color', 'black');
        $('main > section:nth-child(6) > section:first-child > h1').css('color', 'white');

        /*contacts*/
        $('main > section:nth-child(7)').css('background-color', 'black');
        $('main > section:nth-child(7) > section:first-child > h1').css('color', 'white');
        $('main > section:nth-child(7) > section:nth-child(2) > section:first-child > h4:nth-child(2)').css('color', 'white');
        $('main > section:nth-child(7) > section:nth-child(2) > section:nth-child(2) > div:first-child > div > h4:nth-child(2)').css('color', 'white');
        $('main > section:nth-child(7) > section:nth-child(2) > section:nth-child(3) > h4:nth-child(2)').css('color', 'white');
    }
});