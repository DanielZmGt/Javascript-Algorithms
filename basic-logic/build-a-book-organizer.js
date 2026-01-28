

const books = [
  {
    title: "Eragon",
    authorName: "Christopher Paolini",
    releaseYear: 2002
  },
  {
    title: "Eldest",
    authorName: "Christopher Paolini",
    releaseYear: 2005
  },
  {
    title: "Brisingr",
    authorName: "Christopher Paolini",
    releaseYear: 2008
  },
  {
    title: "Inheritance",
    authorName: "Christopher Paolini",
    releaseYear: 2011
  },
  {
    title: "The Fellowship of the Ring",
    authorName: "J.R.R. Tolkien",
    releaseYear: 1954
  },
  {
    title: "The Two Towers",
    authorName: "J.R.R. Tolkien",
    releaseYear: 1954
  },
  {
    title: "The Return of the King",
    authorName: "J.R.R. Tolkien",
    releaseYear: 1955
  },
  {
    title: "A Game of Thrones",
    authorName: "George R.R. Martin",
    releaseYear: 1996
  },
  {
    title: "A Clash of Kings",
    authorName: "George R.R. Martin",
    releaseYear: 1998
  },
  {
    title: "A Storm of Swords",
    authorName: "George R.R. Martin",
    releaseYear: 2000
  },
  {
    title: "The Name of the Wind",
    authorName: "Patrick Rothfuss",
    releaseYear: 2007
  },
  {
    title: "The Way of Kings",
    authorName: "Brandon Sanderson",
    releaseYear: 2010
  }
];

const sortByYear = (book1, book2) =>
{
 const difference = book1.releaseYear - book2.releaseYear
 if (difference === 0) {return 0}
 else if (difference < 0) {return -1}
 else {return 1}
}

console.log(sortByYear(books[4], books[5]))


const filteredBooks = books.filter(book => book.releaseYear <= 2007)
filteredBooks.sort(sortByYear);
console.log(filteredBooks)

