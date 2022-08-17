export const motherUl = document.querySelector('.dynamicList');
export const clearBtn = document.querySelector('.clearBtn');
export const taskList = JSON.parse(localStorage.getItem('task')) || [];
export const userInput = document.querySelector('.userInput');