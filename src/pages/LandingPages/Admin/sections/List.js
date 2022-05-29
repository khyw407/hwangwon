/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { DataGrid } from "@mui/x-data-grid";
import { dbService } from "../../../../firebase";

const columns = [
  { field: "title", headerName: "메뉴명", width: 150 },
  {
    field: "attachmentUrl",
    headerName: "이미지",
    width: 150,
    renderCell: (params) => <img width={50} height={50} alt="no images" src={params.value} />,
  },
  { field: "description", headerName: "메뉴설명", width: 600 },
];

function List({ userObj }) {
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
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKTypography variant="h4" color="text">
                메뉴리스트
              </MKTypography>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <div style={{ height: 350, width: "100%" }}>
                  <DataGrid rows={menu} columns={columns} />
                </div>
              </MKBox>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default List;
