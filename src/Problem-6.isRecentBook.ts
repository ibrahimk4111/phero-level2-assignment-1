{

  const isRecentBook = (data: Book) => {
    const get_recent_year = new Date().getFullYear();
    if (data.publishedYear > get_recent_year - 5) {
      return true;
    } else {
      return false;
    }
  };
  
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022,
  };

  console.log(isRecentBook(book1));
}
