/* eslint-disable no-plusplus */
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import SimpleBlogCard from "components/Cards/BlogCards/SimpleBlogCard";
import { dbService } from "../../../../firebase";

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    dbService.collection("menu").onSnapshot((snapshot) => {
      const newArray = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
      setMenu(newArray);
    });
  }, []);

  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Check Our Special Menu
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          {menu.map(({ id, title, description, attachmentUrl }) => (
            <Grid key={id} item xs={12} sm={6} lg={3}>
              <SimpleBlogCard image={attachmentUrl} title={title} description={description} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Menu;
