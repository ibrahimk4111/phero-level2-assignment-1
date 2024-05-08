"use strict";
{
    const isRecentBook = (data) => {
        const get_recent_year = new Date().getFullYear();
        if (data.publishedYear > get_recent_year - 5) {
            return true;
        }
        else {
            return false;
        }
    };
    const book1 = {
        title: "Sample Book",
        author: "John Doe",
        publishedYear: 2022,
    };
    console.log(isRecentBook(book1));
}
