const a_class='active';
const images=document.querySelectorAll('.slider');

images[0].classList.add(a_class);

function removeactive() {
    const elm=document.querySelector(`.${a_class}`);
    if (elm) {
        elm.classList.remove(a_class);
    }
}

function addClass($event) {
    $event.stopPropagation();
    removeactive();
    const target = $event.currentTarget;
    target.classList.add(a_class);
}

images.forEach(image =>{
    image.addEventListener('click',addClass);
})