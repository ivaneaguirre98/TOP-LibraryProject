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
        console.log("Book Added");
        createBookObject(bookName, authorName, pageNum);
    }
}

function createBookObject(bookName, authorName, pageNum){
    const newBookObject = new Book(bookName, authorName, pageNum);
    addToArray(newBookObject);
    console.log(myLibrary);
}


