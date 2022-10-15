const btn = document.querySelector('.show-more')
const blocks = document.querySelectorAll('.hidden')



const showMoreBlocks = () => {
    for (let block of blocks) {
        block.classList.remove('hidden')
        block.classList.add('border')
    }
    btn.classList.add('hidden')

}
btn.addEventListener('click', showMoreBlocks)

const color = document.getElementById('color');
color.addEventListener('change', (e) => {
    for (let el of color.children) {
        el.classList.remove('active-color')
    };
    if (e.target.checked) {
        e.target.labels[0].classList.add('active-color')
    }
});

const color2 = document.getElementById('color2');
color2.addEventListener('change', (e) => {
    for (let el of color2.children) {
        el.classList.remove('active-color')
    };
    if (e.target.checked) {
        e.target.labels[0].classList.add('active-color')
    }
});