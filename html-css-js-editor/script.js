function hideAttr(area) {
    if (area.attr('hidden')) {
        area.removeAttr('hidden');
    }
    else {
        area.attr('hidden', 'hidden');
    }
}

$('#htmlNav').click(function () {
    let area = $('#htmlEditor');
    hideAttr(area);
});

$('#jsNav').click(function () {
    let area = $('#jsEditor');
    hideAttr(area);
});

$('#cssNav').click(function () {
    let area = $('#cssEditor');
    hideAttr(area);
});