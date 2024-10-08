$(document).ready(function () {
    $('.contact-page-input').click(function () {
        $(this).css({ 'border-bottom': '1px solid rgba(141, 141, 141, 1)', 'transition': '-100s', 'color': 'rgba(141, 141, 141, 1)'});
        $(this).prev('label').css({ 'color': 'rgba(141, 141, 141, 1)', 'transition': '-100s'});
    }).blur(function () {
        $(this).css({ 'border-bottom': '', 'color': ''});
        $(this).prev('label').css({ 'color': '' }); 
    });
    $('form').on('submit', function(event) {
        let isValid = true;
        $('.contact-page-input').each(function() {
            const inputVal = $(this).val().trim(); 
            if (inputVal === '') { 
                isValid = false; 
            } 
        });
        if ($('input[name="reason"]:checked').length === 0) {
            isValid = false; 
        }
        if (!isValid) {
            event.preventDefault(); 
            $('#error-modal').css('display', 'block'); 
        } 
        else {
            event.preventDefault();
            $('#sent-modal').css('display', 'block'); 
        }
    });
    $('.close').on('click', function() {
        $('.modal').css('display', 'none');
    });
    $(window).on('click', function(event) {
        if ($(event.target).is('.modal')) {
            $('.modal').css('display', 'none'); 
        }
    });

});
