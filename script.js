$("#videoModal").on('hidden.bs.modal', function (e) {
    $("#videoModal iframe").attr("src", $("#videoModal iframe").attr("src"));
});

$('#videoModal').on('show.bs.modal', function (event) {
var button = $(event.relatedTarget)
var recipient = button.data('url')
var modal = $(this)
modal.find('iframe').attr('src', recipient)
})