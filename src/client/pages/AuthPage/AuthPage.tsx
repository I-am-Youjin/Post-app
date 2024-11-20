import React, { useState } from "react";
import { StyledPage, StyledForm } from "./styles";
import CustomInput from "../../components/CustomInput/CustomInput";
import { Button } from "@mui/material";
import { setCurrentUser } from "../../store/slices/usersSlice";
import store from "../../store";

const AuthPage = () => {
  const initState = {
    name: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
  const [userState, setUserState] = useState(initState);
  const handleChangeValue = (
    fieldName: keyof typeof initState,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserState((prevData: typeof initState) => {
      return { ...prevData, [fieldName]: event.target.value };
    });
    console.log(userState);
  };
  const handleSignIn = () => {
    console.log(userState);
  };
  return (
    <StyledPage>
      <StyledForm>
        <CustomInput
          type="text"
          placeholder="Name"
          onChange={(event) => handleChangeValue("name", event)}
          value={userState.name}
        />
        <CustomInput
          type="text"
          placeholder="Username"
          onChange={(event) => handleChangeValue("username", event)}
          value={userState.username}
        />
        <CustomInput
          type="email"
          placeholder="Email"
          onChange={(event) => handleChangeValue("email", event)}
          value={userState.email}
        />
        <CustomInput
          type="password"
          placeholder="Password"
          onChange={(event) => handleChangeValue("password", event)}
          value={userState.password}
        />
        <CustomInput
          type="password"
          placeholder="Repeat password"
          onChange={(event) => handleChangeValue("repeatPassword", event)}
          value={userState.repeatPassword}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6669E7",
            fontFamily: "Poppins",
            borderRadius: "20px",
          }}
          onClick={handleSignIn}
        >
          Sign In
        </Button>
      </StyledForm>
    </StyledPage>
  );
};

export default AuthPage;
