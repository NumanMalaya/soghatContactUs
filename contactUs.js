$(document).ready(function () {
    $('.contact-page-input').click(function () {
        $(this).css({ 'border-bottom': '1px solid rgba(141, 141, 141, 1)', 'transition': '-100s', 'color': 'rgba(141, 141, 141, 1)'});
        $(this).prev('label').css({ 'color': 'rgba(141, 141, 141, 1)', 'transition': '-100s'});
    }).blur(function () {
        $(this).css({ 'border-bottom': '', 'color': ''});
        $(this).prev('label').css({ 'color': '' }); 
    });
    
});
