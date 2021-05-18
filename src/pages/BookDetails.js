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

const BookDetails = () => {
  const { id } = useParams();

  console.log(id);

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
              <BookProfile />
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <BookProfileDetails />
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
