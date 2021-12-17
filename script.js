let myLibrary = [];

let addButt = document.getElementById("addBookButton");
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

function addBook(){
    console.log("Button Pressed")
}

addToArray(theHobbit);

console.log(myLibrary);
