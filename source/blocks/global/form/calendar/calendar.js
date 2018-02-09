$('.calendar').each(function () {
    var
        $calendar = $(this),
        $btn      = $calendar.find('.calendar__selected-range'),
        $wrap     = $calendar.find('.calendar__range-wrap');

    $calendar.addClass('calendar--closed');

    $btn.on("click", function(evt) {
        evt.stopPropagation();
        $calendar.toggleClass('calendar--closed');
        return false;
    });
});
