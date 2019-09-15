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
        style={{fontWeight: "bold", fontSize: "1.17em", padding: 16}}
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
          <Typography className="no-repo-text">
            No repository
          </Typography>
        )
      }
    </Paper>
  );
}

const mapStateToProps = state => ({ repos: state.user.repos });

export default connect(mapStateToProps, null)(ReposSection);