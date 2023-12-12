const btn = document.querySelectorAll('.btn')
const filterImg = document.querySelectorAll('.gallery img')

const all = document.querySelector('#all')

window.addEventListener('load', () => {
    all.click();
})
const filter = e => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active')

    filterImg.forEach(img => {
        img.classList.add('hide');

        if (img.dataset.name === e.target.dataset.name) {
            img.classList.remove('hide')
        }
    })
}


btn.forEach(btn => {
    btn.addEventListener('click', filter)
})


const btnTab = document.querySelector('#filterBtn')
const left = document.querySelector('#left')
const right = document.querySelector('#right')

const manageIcons = () => {
    if (btnTab.scrollLeft >= 20) {
        left.classList.add('on');
    } else {
        left.classList.remove('on')
    }

    var maxScrollValue = btnTab.scrollWidth - btnTab.clientWidth - 20;

    if (btnTab.scrollLeft >= maxScrollValue) {
        left.classList.add('on');
        right.classList.remove('on')
    } else {
        right.classList.add('on')
    }

}

right.addEventListener('click', () => {
    btnTab.scrollLeft += 200
    manageIcons()
})

left.addEventListener('click', () => {
    btnTab.scrollLeft -= 200
    manageIcons()
})

btnTab.addEventListener('scroll', manageIcons)