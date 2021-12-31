let myLibrary = [];

const formButt = document.getElementById("formButton");
const cancelButt = document.querySelector(".cancelButton");
const addButt = document.querySelector(".addBookButton");
formButt.addEventListener("click", addBookButton);
cancelButt.addEventListener("click", cancelButton);
addButt.addEventListener("click", validateForm);

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


function validateForm(){
    let bookName = document.getElementById("bookname").value;
    let authorName = document.getElementById("author").value;
    let pageNum = document.getElementById("pageNum").value;
    // console.log(bookName);

    if(bookName == "" || authorName ==="" || pageNum === ""){
        alert("Must fill out all fields.")
    }

    else{
        addBook();
    }
}

function addBook(){
    console.log("Booked Added");
    const bookForm = document.querySelector(".formContainer");
    bookForm.style.display = "none";

    let newBookCard = document.createElement("div");
    newBookCard.classList.add("bookCard");
    document.getElementById("libraryContainer").appendChild(newBookCard);
}


