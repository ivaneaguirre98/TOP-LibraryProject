let myLibrary = [];

const addButt = document.getElementById("addBookButton");
const cancelButt = document.querySelector(".cancelButton");
addButt.addEventListener("click", addBook);
cancelButt.addEventListener("click", cancelButton);

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

function addBook(){
    const bookForm = document.querySelector('.formContainer');
    bookForm.style.display = "flex";
}

function cancelButton(){
    const bookForm = document.querySelector(".formContainer");
    bookForm.style.display = "none";
}


