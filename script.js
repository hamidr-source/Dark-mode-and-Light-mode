const rootElement = document.documentElement;
const btn = document.querySelector('.dark-light-btn');

btn.addEventListener('click', () => {
    rootElement.style.setProperty('--bg-color', '#343434')
    rootElement.style.setProperty('--main-color', '#bbb')
    rootElement.style.setProperty('--border-color', '#fff')
})
