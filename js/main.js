function moveLeft() {
    var elements = document.getElementsByClassName('image');
    for (i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains('left')) {
            elements[i].classList.remove('left');
            elements[i].classList.add('right');
        }
        else if (elements[i].classList.contains('center')) {
            elements[i].classList.remove('center');
            elements[i].classList.add('left');
        }
        else if (elements[i].classList.contains('right')) {
            elements[i].classList.remove('right');
            elements[i].classList.add('center');
        }
    }
}

function moveRight() {
    var elements = document.getElementsByClassName('image');
    for (i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains('right')) {
            elements[i].classList.remove('right');
            elements[i].classList.add('left');
        }
        else if (elements[i].classList.contains('center')) {
            elements[i].classList.remove('center');
            elements[i].classList.add('right');
        }
        else if (elements[i].classList.contains('left')) {
            elements[i].classList.remove('left');
            elements[i].classList.add('center');
        }
    }
}