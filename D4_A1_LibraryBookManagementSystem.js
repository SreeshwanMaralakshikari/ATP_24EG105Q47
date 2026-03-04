/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)

  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise

  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.

  2. Perform the following operations:
      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books
*/

class Book
{
    title;
    author;
    pages;
    isAvailable=true;

    constructor(title,author,pages)
    {
        this.title=title;
        this.author=author;
        this.pages=pages;
    }
    //borrow(): Marks the book as not available
    borrow()
    {
        this.isAvailable=false
    }

    //returnBook(): Marks the book as available
    returnBook()
    {
        this.isAvailable=true
        return (`Book ${this.title} is returned`)
    }

    //getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
    getInfo()
    {
        return (`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages} and isAvailable: ${this.isAvailable}`)
    }
      
    //isLongBook() - Returns true if pages > 300, false otherwise
    isLongBook()
    {
        if(this.pages>300)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

//Create at least 5 book objects using the class:
let library={
    books: []
}
library.books[0]=new Book("Harry Potter","JK Rowling",500)
library.books[1]=new Book("Wings of Fire","Abdul Kalam",300)
library.books[2]=new Book("The Animal Farm","George Orwell",250)
library.books[3]=new Book("The Old Man and the Sea","Ernest Hemingway",150)
library.books[4]=new Book("The Prince","Niccolò Machiavelli",80)

//(1) Display info of all books
for(let book of library.books)
{
    console.log(book.getInfo())
}

console.log()
//(2) Borrow 2 books and show their availability status
library.books[1].borrow()
library.books[3].borrow()

//show their availability status
console.log(library.books[1].getInfo())
console.log(library.books[3].getInfo())

console.log()
//(3) Return 1 book and show updated status
library.books[3].returnBook()

//show updated status
console.log(library.books[3].getInfo())

console.log()
//(4) Count how many books are "long books" (more than 300 pages)
let noOfLongBooks=0;
for(let book of library.books)
{
    if(book.isLongBook())
    {
        noOfLongBooks++
    }
}
console.log("The Number of Long Books:",noOfLongBooks)

console.log()
//(5) List all available books
for(let book of library.books)
{
    console.log(book.getInfo())
}

