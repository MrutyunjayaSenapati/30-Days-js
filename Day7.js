Objects

// create an object representing a book with properties like title, author, and year, and log the object to the console
const book={title: "12th fail",
    author:"Anurag Pathak",
    year:2019
}
console.log(book);

// Access and log the title and author properties of the book object
console.log(book.title,book.author);

// Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method
const book1={title:"2 states",
    author:"Chetan Bhagat",
    year:2010,
    getDetails: function(book1){
        return `${this.title} by ${this.author}`;
    }
}
console.log(book1.getDetails());

// Add  a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object
const book={title: "clean code",
    author:"Robert c.Martin",
    Year:2012,
    updateYear:function(newYear){
        this.Year=2024;
    }
}
book.updateYear(2024);
console.log(book);

// Create a nested object representing a library with properties like name and books(an array of book objects), and log the library object to the console
const book1={
    title:"clean code",
    author:"Rober c.martin",
    year:2009
    }
const book2={
    title:"12th Fail",
    author:"anurag Pathak",
    year:2019
}
const book3={
    title:"2 states",
    author:"Chetan Bhagat",
    year:2019
}
const library={
    name:"Library",
    books:[book1,book2,book3]

}

console.log(library);
// Access and log the name of the library and the titles of all the books in the library
library.books.forEach(book => {
    console.log(book.title);
    
});
// Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method
const book1={
    title:"clean code",
    author:"Rober c.martin",
    year:2009,
    details:function(){
        return `${this.title} in ${this.year}`
    }

    }
    
    console.log(book1.details());

// use a for...in loop to iterate over the properties of the book object and log each property and its value
const book1={
        title:"clean code",
        author:"Rober c.martin",
        year:2009
        }
        for(i in book1)
        {
            console.log(book1[i]);
        }


use Object.keys and Object.values methods to log all the keys and values of the book object.
        const book1={
            title:"clean code",
            author:"Rober c.martin",
            year:2009
            }
            console.log(Object.keys(book1));


            const book1={
                title:"clean code",
                author:"Rober c.martin",
                year:2009
                }

                console.log(Object.values(book1));