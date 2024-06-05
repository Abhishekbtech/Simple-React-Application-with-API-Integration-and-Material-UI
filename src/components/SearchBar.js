import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
    const handleInputChange = (event) => {
        onSearch(event.target.value);
    };

    return (
        <Box mb={2}>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                onChange={handleInputChange}
            />
        </Box>
    );
};

export default SearchBar;
