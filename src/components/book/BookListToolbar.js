import {
  Box,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Search as SearchIcon } from 'react-feather';

const BookListToolbar = (props) => {
  const [query, setQuery] = useState('');

  const search = (term) => {
    setQuery(term);
    props.searchBooks(term);
  };

  return (
    <Box {...props}>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Pesquisar livro"
                variant="outlined"
                value={query}
                onChange={(e) => search(e.target.value)}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

BookListToolbar.propTypes = {
  searchBooks: PropTypes.func
};

export default BookListToolbar;
