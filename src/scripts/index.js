import list from './modules/list';

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', toggle_menu);

function toggle_menu() {
  hamburger.classList.toggle('hamburger_open');
  menu.classList.toggle('hidden');
}

const lookingglass = document.getElementById('lookingglass');
const search = document.getElementById('search');
lookingglass.addEventListener('click', toggle_search);

function toggle_search() {
  search.classList.toggle('hidden');
}
