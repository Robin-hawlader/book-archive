const searchBook = () => {
    const inputField = document.getElementById('search-field');
    const inputText = inputField.value;
    const error = document.getElementById('error');
    inputField.value = '';
    if (inputText === '') {
        const h3 = document.createElement('h3');
        h3.innerText = `Please write book name`;
        error.appendChild(h3);
    }
    else {
        const url = (`http://openlibrary.org/search.json?q=${inputText}`)
        fetch(url)
            .then(res => res.json())
            .then(data => displayBooks(data.docs));
        error.textContent = "";

    }
}

const displayBooks = books => {
    console.log(books)

    document.getElementById('error').innerText = `Search-Result: ${books.length} Items`;
    const bookInfo = document.getElementById('book-info')
    bookInfo.textContent = '';
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 shadow">
            <img width="200px" src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Title: ${book.title}</h5>
                <h5>Author: ${book.author_name}</h5>
                <p>First-Publish: ${book.first_publish_year}</P>
                <p class="card-text">Language: ${book.language}</p>
            </div>
        </div>
        `;
        bookInfo.appendChild(div);
    })
}


