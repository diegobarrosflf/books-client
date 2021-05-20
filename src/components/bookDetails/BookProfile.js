import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography
} from '@material-ui/core';

const BookProfile = ({ details, ...props }) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          variant="square"
          src={details.volumeInfo && details.volumeInfo.imageLinks && details.volumeInfo.imageLinks.thumbnail
            ? details.volumeInfo.imageLinks.thumbnail
            : null}
          sx={{
            height: 250,
            width: 180
          }}
        />
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h3"
        >
          {details.volumeInfo && details.volumeInfo.title ? details.volumeInfo.title : 'Tìtulo indisponível'}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          {details.volumeInfo && details.volumeInfo.publishedDate ? details.volumeInfo.publishedDate.substring(0, 4) : 'Data indisponível'}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

BookProfile.propTypes = {
  details: PropTypes.object.isRequired
};

export default BookProfile;
