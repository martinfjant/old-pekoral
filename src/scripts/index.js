import list from "./modules/list";

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
hamburger.addEventListener("click", toggle_menu);

function toggle_menu() {
  hamburger.classList.toggle("hamburger_open");
  menu.classList.toggle("hidden");
}

const lookingglass = document.getElementById("lookingglass");
const search = document.getElementById("search");
lookingglass.addEventListener("click", toggle_search);

function toggle_search() {
  lookingglass.classList.toggle("search_open");
  search.classList.toggle("hidden");
}

const do_search = query => {
  // Fetch JSON index of the blog
  fetch("/search.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      let searchIndex = response.search;
      // Reduce the response array to only those containting the query
      const result = searchIndex.map((item, i) => {
        // IndexOf will return -1 if it cannot find the query in a string
        const title = item.title.indexOf(query);
        const text = item.text.indexOf(query);
        // See if either title or text is -1
        if (title && text !== -1) {
          return item;
        }
      });

      console.log(result);
    });
};
