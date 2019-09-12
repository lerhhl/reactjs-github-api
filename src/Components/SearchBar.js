import React, { useState } from "react";
import {
  TextField,
  Button,
} from '@material-ui/core/';
import "./SearchBar.css"

export const SearchBar = () => {
  const [username, setUsername] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    console.log("submit username")
  }

  function handleChange(event) {
    setUsername(event.target.value);
  }

  return (
    <form onSubmit={handleSearch} autoComplete="off" className="search-bar-form">
      <TextField
        margin="normal"
        id="username-textfield"
        label="Username"
        InputLabelProps={{shrink: true}}
        value={username}
        placeholder="e.g. lerhhl"
        onChange={handleChange}
        error={username === ""}
        helperText={username === "" ? "username cannot be empty" : ""}
        variant="outlined"
        required
      />
      <Button
        type="submit"
        color="primary"
        variant="contained"
        id="search-button"
      >
        Search
      </Button>
    </form>
  )
}

export default SearchBar;