$('.header').each(function () {
    var
        $header      = $(this),
        $burger      = $header.find('.header__burger'),
        $userBtn     = $header.find('.header__user-btn'),
        $userMenu    = $header.find('.header__user'),
        $contentMask = $header.find('.header__mask');

    $header.addClass('header--closed');
    $userMenu.addClass('header__user--closed');

    $burger.on('click', function (evt) {
        evt.preventDefault();
        $header.toggleClass('header--closed');
        return false;
    });

    $contentMask.on('click', function (evt) {
        evt.preventDefault();
        $header.toggleClass('header--closed');
        return false;
    });

    $userBtn.on('click', function (evt) {
        evt.stopPropagation();
        $userMenu.toggleClass('header__user--closed');
        $('html').one('click', function () {
            $userMenu.addClass('header__user--closed');
        });
        return false;
    });
});
