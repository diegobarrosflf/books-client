import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';
import BookListToolbar from 'src/components/book/BookListToolbar';
import BookCard from 'src/components/book/BookCard';
import axios from 'axios';
import { useState } from 'react';

const BookList = () => {
  const apiUrl = 'https://www.googleapis.com/books/v1';

  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(0);
  const [books, setBooks] = useState([]);

  const searchBooks = (book) => {
    setSearchValue(book);
    if (book) {
      axios.get(`${apiUrl}/volumes?q=${book}&startIndex=0&maxResults=6`)
        .then((response) => {
          const bookList = response.data.items;
          setBooks(bookList);
        }).catch((erro) => {
          console.log(erro);
        });
    }
  };

  const searchBooksPage = (pageIndex) => {
    console.log('searchValue', searchValue);
    console.log('searchBooksPage page', pageIndex);
    const virtualPage = 7 * (pageIndex - 1);
    if (searchValue.length > 0) {
      console.log('virtualPage', virtualPage);
      axios.get(`${apiUrl}/volumes?q=${searchValue}&startIndex=${virtualPage}&maxResults=6`)
        .then((response) => {
          const bookList = response.data.items;
          setBooks(bookList);
        }).catch((erro) => {
          console.log(erro);
        });
    }
  };

  const handleChange = (event, value) => {
    setPage(value);
    searchBooksPage(value);
  };

  return (
    <>
      <Helmet>
        <title>Books | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <BookListToolbar searchBooks={searchBooks} />
          <Box sx={{ pt: 3 }}>
            <Grid
              container
              spacing={3}
            >
              {books && books.map((book) => (
                <Grid
                  item
                  key={book.id}
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <BookCard book={book} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 3
            }}
          >
            <Pagination
              color="primary"
              count={3}
              size="small"
              page={page}
              onChange={handleChange}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default BookList;
