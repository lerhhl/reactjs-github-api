import React from "react";
import { connect } from "react-redux";
import {
  Paper,
  ListItem,
  ListItemText,
  Typography,
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
      <Typography
        noWrap
        style={{fontWeight: "bold", fontSize: "1.17em", padding: 16}}
      >
        {orgs.length} organisations
      </Typography>
      { 
        orgs.length > 0 ? (
          orgs.map(org => {
            return (
              <ListItem
                button
                key={org.name}
                onClick={() => handleClick(org.html_url)}
              >
                <ListItemText primary={org.name}/>
              </ListItem>
            );
          })
        ) : (
          <Typography className="no-org-text">
            No organisation
          </Typography>
        )
      }
    </Paper>
  );
}

const mapStateToProps = state => ({ orgs: state.user.orgs });

export default connect(mapStateToProps, null)(OrgsSection);