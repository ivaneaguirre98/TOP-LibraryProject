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
    // console.log(bookName);

    if(bookName == "" || authorName ==="" || pageNum === ""){
        alert("Must fill out all fields.")
    }

    else{
        createBookObject(bookName, authorName, pageNum);
    }
}

// takes user form input and creates book object then adds to array
function createBookObject(bookName, authorName, pageNum){
    const newBookObject = new Book(bookName, authorName, pageNum);
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
        newBookCard.classList.add("bookCard");
        newBookCard.setAttribute('bookPlace', i);
        bookGrid.appendChild(newBookCard);

        let newBookTitle = document.createElement("h4");
        newBookTitle.innerHTML = myLibrary[i].title;
        newBookCard.appendChild(newBookTitle);

        let newBookAuthor = document.createElement("h4");
        newBookAuthor.innerHTML = myLibrary[i].author;
        newBookCard.appendChild(newBookAuthor);

        let newPageNum = document.createElement("p");
        newPageNum.innerHTML = myLibrary[i].pageNum;
        newBookCard.appendChild(newPageNum);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete Book";
        deleteButton.classList.add("removeBook");
        newBookCard.appendChild(deleteButton);

        deleteButton.addEventListener("click", function(){
            removeBook(newBookCard);
        });
    
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
    let bookGrid = document.getElementById("libraryContainer");
    bookGrid.innerHTML = ""


    for(let i = 0; i < myLibrary.length; i++){
        let newBookCard = document.createElement("div");
        newBookCard.classList.add("bookCard");
        newBookCard.setAttribute('bookPlace', i);
        bookGrid.appendChild(newBookCard);

        let newBookTitle = document.createElement("h4");
        newBookTitle.innerHTML = myLibrary[i].title;
        newBookCard.appendChild(newBookTitle);

        let newBookAuthor = document.createElement("h4");
        newBookAuthor.innerHTML = myLibrary[i].author;
        newBookCard.appendChild(newBookAuthor);

        let newPageNum = document.createElement("p");
        newPageNum.innerHTML = myLibrary[i].pageNum;
        newBookCard.appendChild(newPageNum);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete Book";
        deleteButton.classList.add("removeBook");
        newBookCard.appendChild(deleteButton);

        deleteButton.addEventListener("click", function(){
            removeBook(newBookCard);
        });
    
    }
}