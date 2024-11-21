import React, { useState } from "react";
import { StyledPage, StyledForm, StyledText } from "./styles";
import CustomInput from "../../components/CustomInput/CustomInput";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { setCurrentUser, setUser } from "../../store/slices/usersSlice";
import store from "../../store";
import { useSelector } from "react-redux";
import { IUser } from "../../types/types";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const initState = {
    name: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
  const [userState, setUserState] = useState(initState);
  const [signState, setSignState] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessege, setErrorMessege] = useState("");
  const users = useSelector((state: any) => state.users.allUsers);
  const navigate = useNavigate();

  const handleChangeValue = (
    fieldName: keyof typeof initState,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserState((prevData: typeof initState) => {
      return { ...prevData, [fieldName]: event.target.value };
    });
  };

  const handleSignIn = () => {
    switch (true) {
      case !(
        userState.email &&
        userState.password &&
        userState.name &&
        userState.username &&
        userState.repeatPassword
      ):
        setErrorMessege("You have empty fields");
        return AlertFn();
      case !(userState.password === userState.repeatPassword):
        setErrorMessege("Passwords mismatch");
        return AlertFn();
      case !userState.email.includes("@"):
        setErrorMessege(`Email not include "@" symbol`);
        return AlertFn();
      default:
        if (
          !!users.find((user: IUser) => {
            return user.username === userState.username;
          })
        ) {
          setErrorMessege(`User exists!`);
          return AlertFn();
        } else {
          const userId = Date.now();
          store.dispatch(
            setCurrentUser({
              id: userId,
              name: userState.name,
              username: userState.username,
              email: userState.email,
              address: {
                street: "",
                suite: "",
                city: "",
                zipcode: "",
                geo: {
                  lat: "",
                  lng: "",
                },
              },
              phone: "",
              website: "",
              company: {
                name: "",
                catchPhrase: "",
                bs: "",
              },
              password: userState.password,
            })
          );
          store.dispatch(
            setUser({
              id: userId,
              name: userState.name,
              username: userState.username,
              email: userState.email,
              address: {
                street: "",
                suite: "",
                city: "",
                zipcode: "",
                geo: {
                  lat: "",
                  lng: "",
                },
              },
              phone: "",
              website: "",
              company: {
                name: "",
                catchPhrase: "",
                bs: "",
              },
              password: userState.password,
            })
          );
          navigate("/");
        }
    }
  };

  const handleSignUp = () => {
    switch (true) {
      case !(
        users.find((user: IUser) => {
          return user.username === userState.username;
        }).password === userState.password
      ):
        setErrorMessege("Wrong password!");
        return AlertFn();
      case !(userState.password && userState.username):
        setErrorMessege("You have empty fields");
        return AlertFn();
      default:
        if (
          !users.find((user: IUser) => {
            return user.username === userState.username;
          })
        ) {
          setErrorMessege(`User doesn't exist!`);
          return AlertFn();
        } else {
          store.dispatch(
            setCurrentUser(
              users.find((user: IUser) => {
                return user.username === userState.username;
              })
            )
          );
          navigate("/");
        }
    }
  };

  const toogleForm = () => {
    setSignState(!signState);
    setUserState(initState);
  };

  const AlertFn = () => {
    setError(true);
    setTimeout(() => setError(false), 5000);
  };

  return (
    <StyledPage>
      <StyledForm $hidden={signState}>
        <CustomInput
          type="text"
          placeholder="Username"
          onChange={(event) => handleChangeValue("username", event)}
          value={userState.username}
        />
        <CustomInput
          type="password"
          placeholder="Password"
          onChange={(event) => handleChangeValue("password", event)}
          value={userState.password}
        />
        <StyledText>
          Don't have an account? <span onClick={toogleForm}>Sign up</span>
        </StyledText>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6669E7",
            fontFamily: "Poppins",
            borderRadius: "20px",
          }}
          onClick={handleSignUp}
        >
          Sign In
        </Button>
      </StyledForm>
      <StyledForm $hidden={!signState}>
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
        <StyledText>
          Do you have an account? <span onClick={toogleForm}>Sign in</span>
        </StyledText>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6669E7",
            fontFamily: "Poppins",
            borderRadius: "20px",
          }}
          onClick={handleSignIn}
        >
          Sign Up
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

export default AuthPage;
