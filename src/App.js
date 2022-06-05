import React, { useState } from "react";
import InputBox from "./components/InputBox/InputBox";
import UsersList from "./components/UsersList/UsersList";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [userInformations, setUserInformations] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const addUserHandler = (information) => {
    setUserInformations((prevInformation) => [information, ...prevInformation]);
  };

  const errorHandler = (err) => {
    setErrorMessage(err);
    setIsError(!isError);
  };
  return (
    <div>
      {isError && <Modal errorInfo={errorMessage} onClick={errorHandler} />}
      <InputBox onAddUser={addUserHandler} onError={errorHandler} />
      <UsersList users={userInformations} />
    </div>
  );
};

export default App;
