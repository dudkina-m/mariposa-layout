$(function () {
  modalDisplay();
});

function modalDisplay() {

    $('[data-popup]').each(function () {

        $(this).click(function (e) {
            e.preventDefault();
            var id = $(this).attr('data-popup');
            $('.popup').hide();
            $('#' + id).show();
            $('.popup__container').fadeIn(300);
        })
    });

    $('.popup__close').click(function () {
        $('.popup__container').fadeOut(300);
    });

    $('.popup__container').click(function (e) {
        if (!$(e.target).closest('.popup').length) {
            $('.popup__container').fadeOut();
        }
    });
}
