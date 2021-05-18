import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';
import ReadMoreIcon from '@material-ui/icons/ReadMore';

const BookCard = ({ book, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
        <Avatar
          alt="Book"
          src={book.volumeInfo.imageLinks.thumbnail}
          variant="square"
          sx={{
            height: 150,
            width: 100
          }}
        />
      </Box>
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h4"
      >
        {book.volumeInfo.title}
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
        {book.volumeInfo.description ? book.volumeInfo.description.substring(0, 99) : 'Sem descrição'}
        {book.volumeInfo.description && book.volumeInfo.description.length > 99 ? '...' : ''}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <EventIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : 'Data indisponível'}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <ReadMoreIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Detalhes
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
);

BookCard.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookCard;
