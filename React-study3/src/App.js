import React, { useState } from "react";
import ReactDOM from "react-dom";
import InputBox from "./components/InputBox/InputBox";
import UsersList from "./components/UsersList/UsersList";
import ErrorModal from "./components/Modal/ErrorModal";

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
    <>
      {isError &&
        ReactDOM.createPortal(
          <ErrorModal errorInfo={errorMessage} onClick={errorHandler} />,
          document.getElementById("overlay-root")
        )}
      <InputBox onAddUser={addUserHandler} onError={errorHandler} />
      <UsersList users={userInformations} />
    </>
  );
};

export default App;
