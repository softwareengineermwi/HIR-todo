let books = [];
let form = document.forms['form']['title'].value;
let list = document.querySelector('.list');

const addBook = () => {
    const book = {
        title: document.querySelector('.title').value,
        id: books.length,
    }
    books.push(book);
}

const display = () => {
    const title = document.createElement('h4');
    const remove = document.createElement('button');
    books.forEach((book) => {

        remove.classList.add('remove');
        title.classList.add('food');
        remove.textContent = `Remove`;
        list.appendChild(title);
        list.appendChild(remove);
        title.textContent = book.title;
        // author.textContent = book.author;
    });
}

const addButton = document.querySelector('.sub');
addButton.addEventListener('click', () => {
    addBook();
    display();

});