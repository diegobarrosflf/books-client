import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import BookProfile from 'src/components/bookDetails/BookProfile';
import BookProfileDetails from 'src/components/bookDetails/BookProfileDetails';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';

const BookDetails = () => {
  const apiUrl = 'https://www.googleapis.com/books/v1';
  const [details, setDetails] = useState('');
  const { id } = useParams();

  const getBookById = () => {
    if (id) {
      axios.get(`${apiUrl}/volumes/${id}`)
        .then((response) => {
          setDetails(response.data);
        }).catch((erro) => {
          console.log(erro);
        });
    }
  };

  useEffect(() => {
    getBookById();
  }, []);

  return (
    <>
      <Helmet>
        <title>Book | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <BookProfile details={details} />
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <BookProfileDetails details={details} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

BookDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default BookDetails;
