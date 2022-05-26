import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  { id: 1, title: "Hello", image: "", description: "World" },
  { id: 2, title: "DataGridPro", image: "", description: "is Awasdfasdfasasffesome" },
  { id: 3, title: "MUI", image: "", description: "is Amazing" },
];

const columns = [
  { field: "title", headerName: "메뉴명", width: 150 },
  { field: "image", headerName: "이미지", width: 150 },
  { field: "description", headerName: "메뉴설명", width: 150 },
];

function List() {
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
                <div style={{ height: 300, width: "100%" }}>
                  <DataGrid rows={rows} columns={columns} />
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
