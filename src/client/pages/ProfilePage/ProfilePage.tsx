import React, { useState } from "react";
import { StyledPage, StyledInputsBox, StyledBoxWithLable } from "./styles";
import { useSelector } from "react-redux";
import { IUser } from "../../types/types";
import CustomInput from "../../components/CustomInput/CustomInput";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { editUser } from "../../store/slices/usersSlice";
import store from "../../store";
import Button from "@mui/material/Button";

const ProfilePage = () => {
  const currentUser = useSelector(
    (state: any) => state.users.currentUser
  ) as IUser;
  const initialState = {
    id: currentUser.id,
    name: currentUser.name,
    username: currentUser.username,
    email: currentUser.email,
    street: currentUser.address.street,
    suite: currentUser.address.suite,
    city: currentUser.address.city,
    zipcode: currentUser.address.zipcode,
    lat: currentUser.address.geo.lat,
    lng: currentUser.address.geo.lng,
    companyName: currentUser.company.name,
    catchPhrase: currentUser.company.catchPhrase,
    bs: currentUser.company.bs,
    password: currentUser.password,
    repeatPassword: currentUser.password,
    phone: currentUser.phone,
    website: currentUser.website,
  };
  const [userState, setUserState] = useState(initialState);
  const [error, setError] = useState(false);
  const [errorMessege, setErrorMessege] = useState("");

  const AlertFn = () => {
    setError(true);
    setTimeout(() => setError(false), 5000);
  };

  const handleChangeValue = (
    fieldName: keyof typeof initialState,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserState((prevData: typeof initialState) => {
      return { ...prevData, [fieldName]: event.target.value };
    });
  };
  const handleEditUser = () => {
    switch (true) {
      case userState.repeatPassword !== userState.password:
        setErrorMessege("Paswords mismatch!");
        AlertFn();
        break;
      case !(userState.name && userState.email && userState.username):
        setErrorMessege("Name, email or username is empty");
        AlertFn();
        break;
      case !(userState.password && userState.repeatPassword):
        setErrorMessege("Password or repeat password is empty");
        AlertFn();
        break;
      default:
        store.dispatch(
          editUser({
            currentUser,
            editedUser: {
              id: userState.id,
              name: userState.name,
              username: userState.username,
              email: userState.email,
              address: {
                street: userState.street,
                suite: userState.suite,
                city: userState.city,
                zipcode: userState.zipcode,
                geo: {
                  lat: userState.lat,
                  lng: userState.lng,
                },
              },
              phone: userState.phone,
              website: userState.website,
              company: {
                name: userState.companyName,
                catchPhrase: userState.catchPhrase,
                bs: userState.bs,
              },
              password: userState.password,
            },
          })
        );
        break;
    }
  };

  return (
    <StyledPage>
      <StyledInputsBox>
        <StyledBoxWithLable>
          <p>Name</p>
          <CustomInput
            placeholder="Name"
            type="text"
            onChange={(event) => handleChangeValue("name", event)}
            value={userState.name}
          />
        </StyledBoxWithLable>
        <StyledBoxWithLable>
          <p>Username</p>
          <CustomInput
            placeholder="Username"
            type="text"
            onChange={(event) => handleChangeValue("username", event)}
            value={userState.username}
          />
        </StyledBoxWithLable>
        <StyledBoxWithLable>
          <p>Email</p>

          <CustomInput
            placeholder="Email"
            type="email"
            onChange={(event) => handleChangeValue("email", event)}
            value={userState.email}
          />
        </StyledBoxWithLable>
      </StyledInputsBox>
      <StyledInputsBox>
        <CustomInput
          placeholder="Street"
          type="text"
          onChange={(event) => handleChangeValue("street", event)}
          value={userState.street}
        />
        <CustomInput
          placeholder="Suite"
          type="text"
          onChange={(event) => handleChangeValue("suite", event)}
          value={userState.suite}
        />
        <CustomInput
          placeholder="City"
          type="text"
          onChange={(event) => handleChangeValue("city", event)}
          value={userState.city}
        />
        <CustomInput
          placeholder="Zipcode"
          type="text"
          onChange={(event) => handleChangeValue("zipcode", event)}
          value={userState.zipcode}
        />

        <CustomInput
          placeholder="Geo lat"
          type="text"
          onChange={(event) => handleChangeValue("lat", event)}
          value={userState.lat}
        />
        <CustomInput
          placeholder="Geo lng"
          type="text"
          onChange={(event) => handleChangeValue("lng", event)}
          value={userState.lng}
        />
      </StyledInputsBox>
      <StyledInputsBox>
        <CustomInput
          placeholder="Phone"
          type="phone"
          onChange={(event) => handleChangeValue("phone", event)}
          value={userState.phone}
        />
      </StyledInputsBox>
      <StyledInputsBox>
        <CustomInput
          placeholder="Website"
          type="text"
          onChange={(event) => handleChangeValue("website", event)}
          value={userState.website}
        />
      </StyledInputsBox>
      <StyledInputsBox>
        <CustomInput
          placeholder="Company name"
          type="text"
          onChange={(event) => handleChangeValue("companyName", event)}
          value={userState.companyName}
        />
        <CustomInput
          placeholder="Catch phrase"
          type="text"
          onChange={(event) => handleChangeValue("catchPhrase", event)}
          value={userState.catchPhrase}
        />
        <CustomInput
          placeholder="Bs"
          type="text"
          onChange={(event) => handleChangeValue("bs", event)}
          value={userState.bs}
        />
      </StyledInputsBox>
      <StyledInputsBox>
        <StyledBoxWithLable>
          <p>Password</p>
          <CustomInput
            placeholder="Password"
            type="password"
            onChange={(event) => handleChangeValue("password", event)}
            value={userState.password}
          />
        </StyledBoxWithLable>
        <StyledBoxWithLable>
          <p>Repeat password</p>
          <CustomInput
            placeholder="Repeat password"
            type="password"
            onChange={(event) => handleChangeValue("repeatPassword", event)}
            value={userState.repeatPassword}
          />
        </StyledBoxWithLable>
      </StyledInputsBox>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#6669E7",
          fontFamily: "Poppins",
          borderRadius: "20px",
          maxWidth: "120px",
        }}
        onClick={handleEditUser}
      >
        Edit
      </Button>
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

export default ProfilePage;
