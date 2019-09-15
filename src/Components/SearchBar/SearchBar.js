import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
} from '@material-ui/core/';
import axios from "axios";
import { connect } from "react-redux";
import "./SearchBar.css"
import {
  updateUserRepos,
  updateUserOrgs,
} from "../../actions";

export const SearchBar = (props) => {
  const [username, setUsername] = useState("");
  const [buttonStatus, setButtonStatus] = useState({disabled: true, isSearching: false});
  const [message, setMessage] = useState("");

  function handleSearch(event) {
    setButtonStatus({disabled: true, isSearching: true});
    event.preventDefault();
    Promise.all([fetchUserRepos(), fetchUserOrgs()])
      .then(responses => {
        let repositories = responses[0];
        let orgs = responses[1];
        props.updateUserRepos(repositories);
        props.updateUserOrgs(orgs);
        setMessage("");
        setButtonStatus({disabled: false, isSearching: false});
      })
      .catch(() => {
        props.updateUserRepos([]);
        props.updateUserOrgs([]);
        setMessage("Username not found");
        setButtonStatus({disabled: false, isSearching: false});
      });
  };

  function fetchUserRepos() {
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
            });
          });
        };
        return repositories;
      });
  };

  function fetchUserOrgs() {
    return axios.get(`https://api.github.com/users/${username}/orgs`)
      .then((response) => {
        const orgsData = response.data;
        let orgs = [];
        if (orgsData && orgsData.length > 0) {
          // Get organisation's name and html_url
          orgsData.forEach(org => {
            orgs.push({
              name: org.login,
              description: org.description,
              html_url: `https://github.com/${org.login}`,
            });
          });
        };
        return orgs;
      });
  };

  function handleChange(event) {
    // Allow alphanumeric and dash only
    const newUsername = event.target.value.replace(/[^a-zA-Z0-9-]/, "");
    let isEmpty = false;
    if (newUsername === "") {
      isEmpty = true
    }
    setUsername(newUsername);
    setButtonStatus({...buttonStatus, disabled: isEmpty});
  };

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
        disabled={buttonStatus.disabled}
      >
        {buttonStatus.isSearching ? "Searching" : "Search"}
      </Button>
      {message !== "" &&
        <Typography style={{marginTop: 8, fontSize: "0.75rem", color: "#f44336"}}>
          {message}
        </Typography>
      }
    </form>
  )
}

export default connect(null, {
  updateUserRepos,
  updateUserOrgs,
})(SearchBar);