import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';
import BookListToolbar from 'src/components/book/BookListToolbar';
import BookCard from 'src/components/book/BookCard';
import books from 'src/__mocks__/books';

const BookList = () => (
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
        <BookListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {books.map((book) => (
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
          />
        </Box>
      </Container>
    </Box>
  </>
);

export default BookList;
