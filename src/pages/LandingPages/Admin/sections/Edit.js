/* eslint-disable react/prop-types */
/* eslint-disable no-extra-boolean-cast */
import { useState, forwardRef } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageServie } from "../../../../firebase";

const Alert = forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

function Edit({ userObj }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [attachment, setAttachment] = useState("");
  const [messageOpen, setMessageOpen] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";

    if (attachment !== "") {
      const attachmentRef = storageServie.ref().child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }

    await dbService.collection("menu").add({
      title: title ?? "",
      description: description ?? "",
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    });

    setDescription("");
    setTitle("");
    setAttachment("");
    setMessageOpen(true);
  };

  const onChange = (event) => {
    event.preventDefault();
    const {
      target: { name, value },
    } = event;

    if (name === "title") {
      setTitle(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const [fileInfo] = files;
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };

    if (Boolean(fileInfo)) {
      reader.readAsDataURL(fileInfo);
    }
  };

  const onClearAttachment = () => {
    setAttachment("");
    setTitle("");
    setDescription("");
  };

  const onHandleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setMessageOpen(false);
  };

  return (
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
            component="form"
            role="form"
            onSubmit={onSubmit}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={
                  attachment !== ""
                    ? {
                        backgroundImage: ({
                          palette: { gradients },
                          functions: { rgba, linearGradient },
                        }) =>
                          `${linearGradient(
                            rgba(gradients.dark.main, 0.8),
                            rgba(gradients.dark.state, 0.8)
                          )}, url(${attachment})`,
                        backgroundSize: "cover",
                      }
                    : {}
                }
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <MKTypography variant="h3" color="black" mb={1}>
                      메뉴 이미지 업로드
                    </MKTypography>
                    <MKInput type="file" accept="image/*" onChange={onFileChange} />
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <MKBox p={2}>
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography variant="h2" mb={1}>
                      신메뉴 등록
                    </MKTypography>
                    <MKTypography variant="body1" color="text" mb={2}>
                      새로운 메뉴 정보를 등록해주세요.
                    </MKTypography>
                  </MKBox>
                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Title"
                          placeholder="메뉴명을 입력해주세요."
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          onChange={onChange}
                          name="title"
                          value={title}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Description"
                          placeholder="메뉴설명을 입력해주세요."
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          multiline
                          rows={6}
                          onChange={onChange}
                          name="description"
                          value={description}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <MKButton variant="gradient" color="info" type="submit">
                        저장
                      </MKButton>
                      <MKButton
                        variant="gradient"
                        color="warning"
                        type="button"
                        onClick={onClearAttachment}
                      >
                        Clear
                      </MKButton>
                    </Grid>
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
        <Snackbar open={messageOpen} autoHideDuration={2000} onClose={onHandleClose}>
          <Alert onClose={onHandleClose} severity="success" sx={{ width: "100%" }}>
            저장이 완료되었습니다.
          </Alert>
        </Snackbar>
      </Container>
    </MKBox>
  );
}

export default Edit;
