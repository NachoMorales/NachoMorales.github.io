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

// Theme
function changeTheme() {
    var style = document.querySelector(':root').style;
    var icon = document.getElementById("themeIcon")

    if ( icon.classList.contains('fa-moon') ) {
        style.setProperty('--main-background-color', '#011c23');
        style.setProperty('--main-text-color', 'white');
        style.setProperty('--main-color', '#013948');
        style.setProperty('--main-nav-color', '#2aa198');
        style.setProperty('--main-color-2', '#2aa198');
        style.setProperty('--opacity', '1');
        style.setProperty('--main-color-3', 'rgb(29, 161, 242)');
        icon.className = 'fas fa-sun fa-lg';
    } else {
        style.setProperty('--main-background-color', 'white');
        style.setProperty('--main-text-color', 'black');
        style.setProperty('--main-color', 'rgb(165, 53, 53)');
        style.setProperty('--main-nav-color', 'rgb(165, 53, 53)');
        style.setProperty('--main-color-2', 'rgb(255, 168, 168)');
        style.setProperty('--opacity', '0.55');
        style.setProperty('--main-color-3', '#f8f9fa');
        icon.className = 'fas fa-moon fa-lg';
    }
}