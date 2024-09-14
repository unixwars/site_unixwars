const RandomSlides = (containerId, size, miliseconds) => {
    function makeImages(
        size,
        prefix = 'assets/img/emblem_',
        extension = '.webp',
        alt = "Random Sigil",
        title = "Emblem"
    ) {
        let pad = String(size).length;
        return [...Array(size).keys()].map(i => {
            let img = document.createElement('img');
            img.src = prefix + String(i).padStart(pad,'0') + extension;
            img.alt = alt;
            img.title = title;
            img.style.opacity = 0;
            img.style.transition="opacity 2s ease-in-out";
            return img;
        })
    }
    function switchImage() {
        images[idx].style.opacity = 1 - images[idx].style.opacity;
        idx = Math.floor(Math.random() * images.length);
        images[idx].style.opacity = 1 - images[idx].style.opacity;
    }
    let div = document.getElementById(containerId);
    let images = makeImages(size);
    let idx = Math.floor(Math.random() * images.length);
    images[idx].style.opacity = 1;
    div.append(...images);
    return setInterval(switchImage, miliseconds);
}

window.onload = (event) => {
    RandomSlides('content', 49, 3000);
}
