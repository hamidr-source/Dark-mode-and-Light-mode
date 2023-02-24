const rootElement = document.documentElement;
const btn = document.querySelector('.dark-light-btn');

const getMainColor = () => String(rootElement.style.getPropertyValue('--main-color').trim())

btn.addEventListener('click', () => {
    if (getMainColor() == '#242424') {
      rootElement.style.setProperty('--bg-color', '#343434')
      rootElement.style.setProperty('--main-color', '#bbb')
      rootElement.style.setProperty('--border-color', '#fff')
    }   
    else{
      rootElement.style.setProperty('--bg-color', '#ccc')
      rootElement.style.setProperty('--main-color', '#242424')
      rootElement.style.setProperty('--border-color', '#404949')
    }

  })
