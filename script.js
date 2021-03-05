// Auto stop video
$("#videoModal").on('hidden.bs.modal', function (e) {
    $("#videoModal iframe").attr("src", $("#videoModal iframe").attr("src"));
});

// Assign url to iframe
$('#videoModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('url')
    var modal = $(this)
    modal.find('iframe').attr('src', recipient)
})

// Navbar scroll
function handleScroll(targetDiv) {
    // $('html,body').scrollTop($(targetDiv).offset().top);
    $(targetDiv)[0].scrollIntoView();
}

// Responsive navbar
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});