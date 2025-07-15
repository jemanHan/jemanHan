class Book {
    title!: string;
    author!: string;
}

const book1 = new Book();
book1.title = "책1";
book1.author = "저자1";

const book2 = new Book();
book2.title = "책2";
book2.author = "저자2";

const book3 = new Book();
book3.title = "책3";
book3.author = "저자3";

const books: Book[] = [book1, book2, book3];

for (const book of books) {
    console.log(`책 이름: ${book.title}, 저자: ${book.author}`);
}
