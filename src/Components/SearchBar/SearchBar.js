import React, { useState } from "react";
import {
  TextField,
  Button,
} from '@material-ui/core/';
import axios from "axios";
import { connect } from "react-redux";
import "./SearchBar.css"
import { updateUserRepos } from "../../actions";

export const SearchBar = (props) => {
  const [username, setUsername] = useState("");
  const [disabled, setDisabled] = useState(true);

  function handleSearch(event) {
    setDisabled(true);
    event.preventDefault();
    return axios.get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        const repositoriesData = response.data;
        let repositories = [];
        if (repositoriesData && repositoriesData.length > 0) {
          // Get repository's name and html_url
          repositoriesData.forEach(repository => {
            repositories.push({
              name: repository.name,
              html_url: repository.html_url,
            })
          })
        }
        props.updateUserRepos(repositories)
        setDisabled(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleChange(event) {
    const newUsername = event.target.value;
    let isEmpty = false;
    if (newUsername === "") {
      isEmpty = true
    }
    setUsername(event.target.value);
    setDisabled(isEmpty);
  }

  return (
    <form onSubmit={handleSearch} autoComplete="off" className="search-bar-form">
      <TextField
        margin="normal"
        id="username-textfield"
        label="Username"
        InputLabelProps={{shrink: true}}
        value={username}
        placeholder="GitHub username"
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
        disabled={disabled}
      >
        Search
      </Button>
    </form>
  )
}

export default connect(null, {
  updateUserRepos,
})(SearchBar);