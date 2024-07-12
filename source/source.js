function showContent(contentId) {
    var elements = document.getElementsByClassName('home');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
    var elements = document.getElementsByClassName('app');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }


    var elements = document.getElementsByClassName(contentId);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'block';
    }
}