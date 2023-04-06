import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  ListItemButton,
} from "@mui/material";

const CardUser = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "20px" }}>
      <CardActionArea>
        <CardMedia component="img" image={data.avatar_url} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.login}
          </Typography>
          <Typography>
            <ListItemButton>
              <a
                href={data.html_url}
                target="}_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "#1976d2" }}
              >
                Go to page
              </a>
            </ListItemButton>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardUser;
