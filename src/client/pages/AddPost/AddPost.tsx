import React, { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import { StyledPage, StyledText, StyledForm } from "./styles";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import { IUser } from "../../types/types";
import { useNavigate } from "react-router-dom";
import CustomTextArea from "../../components/CustomTextarea/CustomTextArea";
import { setPost } from "../../store/slices/postsSlice";
import store from "../../store";

const AddPost = () => {
  const currentUser = useSelector(
    (state: any) => state.users.currentUser
  ) as IUser;
  const [errorMessege, setErrorMessege] = useState("");
  const [error, setError] = useState(false);

  const AlertFn = () => {
    setError(true);
    setTimeout(() => setError(false), 5000);
  };

  const initState = {
    userId: currentUser.id,
    id: Date.now(),
    title: "",
    body: "",
    user: currentUser.name,
    like: 0,
    dislike: 0,
    favorite: false,
    img: "",
    date: "",
  };
  const [postState, setPostState] = useState(initState);
  const navigate = useNavigate();

  const handleChangeValue = (
    fieldName: keyof typeof initState,
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPostState((prevData: typeof initState) => {
      return { ...prevData, [fieldName]: event.target.value };
    });
  };

  const handleAddPost = () => {
    if (!(postState.body && postState.title)) {
      setErrorMessege("You have empty fields!");
      AlertFn();
    } else {
      const date = new Date();
      store.dispatch(
        setPost({
          userId: currentUser.id,
          id: Date.now(),
          title: postState.title,
          body: postState.body,
          user: currentUser.name,
          like: 0,
          dislike: 0,
          favorite: false,
          img: "",
          date: `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`,
        })
      );
      navigate("/");
    }
  };

  return (
    <StyledPage>
      <StyledForm>
        <CustomInput
          type="text"
          placeholder="Title"
          onChange={(event) => handleChangeValue("title", event)}
          value={postState.title}
        />
        <CustomTextArea
          placeholder="Body"
          onChange={(event) => handleChangeValue("body", event)}
          value={postState.body}
        />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6669E7",
            fontFamily: "Poppins",
            borderRadius: "20px",
          }}
          onClick={handleAddPost}
        >
          Add post
        </Button>
      </StyledForm>
      <Stack
        sx={{
          width: "96%",
          position: "absolute",
          left: "2%",
          bottom: "4%",
          opacity: error ? "1" : "0",
          zIndex: "10",
          height: "200px",
        }}
        spacing={2}
      >
        <Alert variant="filled" severity="error">
          {errorMessege}
        </Alert>
      </Stack>
    </StyledPage>
  );
};

export default AddPost;
