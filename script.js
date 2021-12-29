let myLibrary = [];

const formButt = document.getElementById("formButton");
const cancelButt = document.querySelector(".cancelButton");
const addButt = document.querySelector(".addBookButton");
formButt.addEventListener("click", addBookButton);
cancelButt.addEventListener("click", cancelButton);
addButt.addEventListener("click", addBook);

function Book(author, title, pageNum, isRead){
    this.author = author,
    this.title = title,
    this.pageNum = pageNum,
    this.isRead = isRead
}


let theHobbit = new Book("John Smith", "The Hobbit", 69, true);
let harryPotter = new Book("Smith John", "Harry Potter", 100, true);

function addToArray(bookObj){
    myLibrary.push(bookObj);
}

//shows 'add book' form on screen
function addBookButton(){
    const bookForm = document.querySelector('.formContainer');
    bookForm.style.display = "flex";
}

//hides 'add book' form on screen
function cancelButton(){
    const bookForm = document.querySelector(".formContainer");
    bookForm.style.display = "none";
}


//collect form entry
function addBook(){
    let bookName = document.getElementById("bookname").value;
    let authorName = document.getElementById("author").value;
    let pageNum = document.getElementById("pageNum").value;
    console.log(bookName, authorName, pageNum);
}

