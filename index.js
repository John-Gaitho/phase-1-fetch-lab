function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!async function getData()
  return fetch("https://anapioficeandfire.com/api/books")
      .then((response) => response.json())
      //.then((data) => console.log(data))
      .then((renderBooks));
  }
  

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

