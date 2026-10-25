document.querySelectorAll('.fold-button').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var post = btn.closest('.one-post');

        post.classList.toggle('folded');

        btn.innerHTML = post.classList.contains('folded') ? 'развернуть' : 'свернуть';
    });
});