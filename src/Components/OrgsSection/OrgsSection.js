import React from "react";
import { connect } from "react-redux";
import {
  Paper,
  ListItem,
  ListItemText,
} from '@material-ui/core/';
import "./OrgsSection.css";

export function OrgsSection(props) {
  function handleClick(html_url) {
    if (html_url !== "" || html_url !== null) {
      window.open(html_url, "_blank");
    };
  };

  const { orgs } = props;

  return (
    <Paper className="orgs-section">
      <h3>List of organisations ({orgs.length})</h3>
      { 
        orgs.length > 0 ? (
          orgs.map((org, index) => {
            return (
              <ListItem
                style={{paddingLeft: 0, paddingRight: 0}}
                button
                key={org.name}
                onClick={() => handleClick(org.html_url)}
              >
                <ListItemText primary={`${index + 1} ${org.name}`}/>
              </ListItem>
            );
          })
        ) : (
          <div className="no-org-text">
            No organisation
          </div>
        )
      }
    </Paper>
  );
}

const mapStateToProps = state => ({ orgs: state.user.orgs });

export default connect(mapStateToProps, null)(OrgsSection);