let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/google-chrome-logo-2008-2011.webp') {
        myImage.setAttribute('src', 'images/chrome2.png');
    }
    else {
        myImage.setAttribute('src', 'images/google-chrome-logo-2008-2011.webp');
    }
}
