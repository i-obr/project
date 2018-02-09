$('.footer').each(function () {
    var
        $footer = $(this),
        $wrap   = $footer.find('.footer__info-item'),
        $btn    = $footer.find('.footer__info-title'),
        $links  = $footer.find('.footer__info-links');

    $wrap.addClass('footer__info-item--hidden');

    $.each($btn, function() {
        $btn.on("click", function(evt) {
            evt.stopPropagation();
            $(evt.target).parent().toggleClass('footer__info-item--hidden');
            return false;
        })
    });
});
