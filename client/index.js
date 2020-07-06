import './index.css';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'hi';
  element.classList.add('test');

  return element;
}

document.body.appendChild(component());