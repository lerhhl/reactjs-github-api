import React from "react";
import { connect } from "react-redux";
import {
  Paper,
  ListItem,
  ListItemText,
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
      <h3>List of repos ({repos.length})</h3>
      { 
        repos.length > 0 ? (
          repos.map((repo, index) => {
            return (
              <ListItem
                style={{paddingLeft: 0, paddingRight: 0}}
                button
                key={repo.name}
                onClick={() => handleClick(repo.html_url)}
              >
                <ListItemText primary={`${index + 1} ${repo.name}`}/>
              </ListItem>
            );
          })
        ) : (
          <div className="no-repo-text">
            No repos
          </div>
        )
      }
    </Paper>
  );
}

const mapStateToProps = state => ({ repos: state.user.repos });

export default connect(mapStateToProps, null)(ReposSection);