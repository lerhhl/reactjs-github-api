import React from "react";
import { connect } from "react-redux";
import {
  Paper,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core/';
import "./ReposSection.css";

export function ReposSection(props) {
  function handleClick(html_url) {
    if (html_url !== "" || html_url !== null) {
      window.open(html_url, "_blank");
    }
  }

  const { repos } = props;

  return (
    <Paper className="repos-section">
      <Typography
        noWrap
        className="title"
        style={{fontWeight: "bold", fontSize: "1.17em", marginBottom: "1em", paddingLeft: 16, paddingRight: 16}}
      >
        {repos.length} repositories
      </Typography>
      { 
        repos.length > 0 ? (
          repos.map(repo => {
            return (
              <ListItem
                button
                key={repo.name}
                onClick={() => handleClick(repo.html_url)}
              >
                <ListItemText primary={repo.name}/>
              </ListItem>
            );
          })
        ) : (
          <div className="no-repo-text">
            No repository
          </div>
        )
      }
    </Paper>
  );
}

const mapStateToProps = state => ({ repos: state.user.repos });

export default connect(mapStateToProps, null)(ReposSection);