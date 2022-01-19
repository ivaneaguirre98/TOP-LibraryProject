// Array to store my book objects
let myLibrary = [];

//defining button variables and adding event listeners 
const formButt = document.getElementById("formButton");
const cancelButt = document.querySelector(".cancelButton");
const addButt = document.querySelector(".addBookButton");
formButt.addEventListener("click", addBookButton);
cancelButt.addEventListener("click", cancelButton);
addButt.addEventListener("click", validateForm);

//book object constructor
function Book(title, author, pageNum, isRead){
    this.title = title,
    this.author = author,
    this.pageNum = pageNum,
    this.isRead = isRead
}

//shows 'add book' form on screen
function addBookButton(){
    const bookForm = document.querySelector('.formContainer');
    bookForm.style.display = "flex";
    
    let actualForm = document.getElementById("bookForm");
    actualForm.reset()
}

//hides 'add book' form on screen
function cancelButton(){
    const bookForm = document.querySelector(".formContainer");
    bookForm.style.display = "none";
}

// validates form to ensure that all fields are filled out
function validateForm(){
    let bookName = document.getElementById("bookname").value;
    let authorName = document.getElementById("author").value;
    let pageNum = document.getElementById("pageNum").value;
    let isRead = document.getElementById("isRead").value;

    if(bookName == "" || authorName ==="" || pageNum === "" || isRead === ""){
        alert("Must fill out all fields.")
    }

    else{
        createBookObject(bookName, authorName, pageNum, isRead);
    }
}

// takes user form input and creates book object then adds to array
function createBookObject(bookName, authorName, pageNum, isRead){
    const newBookObject = new Book(bookName, authorName, pageNum, isRead);
    myLibrary.push(newBookObject);
    console.log(myLibrary);
    createBookCard(newBookObject);
}

function createBookCard(newBookObject){
    console.log("Book added");
    const bookForm = document.querySelector(".formContainer");
    bookForm.style.display = "none";

    let bookGrid = document.getElementById("libraryContainer");
    bookGrid.innerHTML = ""


    for(let i = 0; i < myLibrary.length; i++){
        let newBookCard = document.createElement("div");
        newBookCard.classList.add("card","text-dark", "bg-light", "mb-3", "text-center");
        newBookCard.setAttribute('bookPlace', i);
        newBookCard.style.width = "18rem";
        bookGrid.appendChild(newBookCard);

        let newBookTitle = document.createElement("h4");
        newBookTitle.innerHTML = "Title: " + myLibrary[i].title;
        newBookTitle.classList.add("card-title");
        newBookCard.appendChild(newBookTitle);

        let newBookAuthor = document.createElement("h4");
        newBookAuthor.innerHTML = "Author: " + myLibrary[i].author;
        newBookAuthor.style.fontSize = "medium"
        newBookCard.appendChild(newBookAuthor);

        let newPageNum = document.createElement("p");
        newPageNum.innerHTML = "Pages: " + myLibrary[i].pageNum;
        newBookCard.appendChild(newPageNum);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete Book";
        deleteButton.classList.add("removeBook", "btn", "btn-danger");
        newBookCard.appendChild(deleteButton);

        let readButton = document.createElement("button");
        readButton.innerHTML = "Read";
        readButton.classList.add("btn" ,"btn-success");
        newBookCard.appendChild(readButton);

        deleteButton.addEventListener("click", function(){
            removeBook(newBookCard);
        });

        readButton.addEventListener("click", function(){
            haveRead(readButton);
        })
    
    }

}

function removeBook(bookCard){
    console.log("Deleted");
    let bookPlace = bookCard.getAttribute("bookplace");
    myLibrary.splice(bookPlace, 1);
    console.log(myLibrary);
    updateGrid();
}

function updateGrid(){
    createBookCard(); 
}

function haveRead(readButton){

    if(readButton.innerHTML === "Read"){
        readButton.innerHTML = "Not Read";
        readButton.classList.remove("btn-success");
        readButton.classList.add("btn-secondary");
    }

    else{
        readButton.innerHTML = "Read";
        readButton.classList.remove("btn-secondary");
        readButton.classList.add("btn-success");
    }

}
