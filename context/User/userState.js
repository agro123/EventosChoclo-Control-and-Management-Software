import { useReducer, useState, useEffect } from "react";
import UserContext from "./userContext";
import reducer from "./userReducer";

const UserState = ({ children }) => {
  const [initialState, setInitialState] = useState({
    user: {},
    token: null,
    isAuth: false,
  });

  useEffect(async () => {
    const userI = await JSON.parse(window.localStorage.getItem("user"));
    const tokenI = await JSON.parse(window.localStorage.getItem("token"));
    console.log(tokenI);
    console.log(tokenI !== null);
    if (tokenI !== null) {
      setInitialState({
        user: userI,
        token: tokenI,
        isAuth: true,
      });
    }
  }, []);

  useEffect(() => {
    if (initialState.token !== null) {
      dispatch({
        type: "LOGIN",
        payload: initialState,
      });
    }
  }, [initialState]);

  const [user, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider
      value={{
        user,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;