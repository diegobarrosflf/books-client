import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';

const BookProfileDetails = ({ details, ...props }) => {
  const addFavoritos = () => {
    let books = localStorage.getItem('BOOKS');
    books = !books ? [] : JSON.parse(books);

    const booksId = books.map((book) => book.id);

    if (!booksId.includes(details.id)) {
      books.push(details);
    }
    console.log('books', books);
    localStorage.setItem('BOOKS', JSON.stringify(books));
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          title="Detalhes"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <Typography
                color="textPrimary"
                variant="h5"
              >
                Descrição
              </Typography>
              <Typography>
                {details.volumeInfo && details.volumeInfo.description ? details.volumeInfo.description : 'Descrição indisponível'}
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                variant="h5"
              >
                Editora
              </Typography>
              <Typography>
                {details.volumeInfo && details.volumeInfo.publisher ? details.volumeInfo.publisher : 'Editora indisponível'}
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                variant="h5"
              >
                Autor
              </Typography>
              <Typography>
                {details.volumeInfo && details.volumeInfo.authors ? details.volumeInfo.authors : 'Autor indisponivel'}
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                variant="h5"
              >
                Ano de publicação
              </Typography>
              <Typography>
                {details.volumeInfo && details.volumeInfo.publishedDate ? details.volumeInfo.publishedDate.substring(0, 4) : 'Data indisponível'}
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                variant="h5"
              >
                Número de páginas
              </Typography>
              <Typography>
                {details.volumeInfo && details.volumeInfo.pageCount ? details.volumeInfo.pageCount : 'Indisponível'}
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                variant="h5"
              >
                Categoria
              </Typography>
              <Typography>
                {details.volumeInfo && details.volumeInfo.categories ? details.volumeInfo.categories.map((categorie) => (
                  <Typography key={categorie.id}>{categorie}</Typography>
                )) : 'Indisponível'}
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                variant="h5"
              >
                IBSN
              </Typography>
              <Typography>
                {details.volumeInfo && details.volumeInfo.industryIdentifiers ? details.volumeInfo.industryIdentifiers[details.volumeInfo.industryIdentifiers.length - 1].identifier : 'Indisponível'}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={() => addFavoritos()}
          >
            Adicionar aos Favoritos
          </Button>
        </Box>
      </Card>
    </form>
  );
};

BookProfileDetails.propTypes = {
  details: PropTypes.object.isRequired
};

export default BookProfileDetails;
