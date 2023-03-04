import { useContext } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

import { AppContext } from "../context/appContext";
import { AppContextType } from "../types/types";

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  padding: 0;
  border: 2px solid gray;
  border-radius: 5px;

  input {
    padding: 10px;
    color: gray;
    border: none;
  }
`;

const SearchField = () => {
  const { filterData } = useContext(AppContext) as AppContextType;

  const onSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleChange = (event: any) => {
    filterData(event.target.value);
  };

  return (
    <SearchForm onSubmit={onSubmit}>
      <TextField
        onChange={handleChange}
        fullWidth
        variant="outlined"
        autoComplete="off"
        placeholder="Поиск"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="secondary" />
            </InputAdornment>
          ),
        }}
      />
    </SearchForm>
  );
};

export default SearchField;
