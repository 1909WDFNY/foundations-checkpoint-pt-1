
const createBook = (id, title, author, price) => {
    const createBookProto = {
        getPrice() {
            return this.price;
        },
        getInfo() {
            return `${this.title} by ${this.author}`
        },
        addRating(rating) {
            this.rating.push(rating);
        },
        getRating() {
            let totalRatings = this.rating.join('');
            return totalRatings.length / this.rating.length;
        }
    }

    let book = Object.create(createBookProto);
    book.id = id;
    book.title = title;
    book.author = author;
    book.price = price;
    book.rating = [];
    return book;
}
