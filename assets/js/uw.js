function main() {
    function makeImages(size) {
        return [...Array(size).keys()].map(i => {
            let src = 'assets/img/emblem_' +('0' + i).slice(-2)+'.webp';
            let img = document.createElement('img');
            img.src = src;
            img.alt = "Random Sigil";
            img.title = "Emblem";
            return img;
    })};    
    function switchImage() {
        images[idx].classList.toggle('show');
        idx = Math.floor(Math.random() * images.length);
        images[idx].classList.toggle('show');
    }
    let div = document.getElementById('content');
    let images = makeImages(49);
    let idx = 0;
    images[idx].classList.toggle('show');
    div.append(...images);
    setInterval(switchImage, 5000);
}

window.onload = (event) => main();
