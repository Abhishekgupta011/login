import { useEffect, useReducer } from "react";
import "./Login.css";
import Button from "../UI/Button";

const initialState = {
  email: "",
  password: "",
  collegeName: "",
  formIsValid: false,
};

const formReducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return {
      ...state,
      email: action.payload,
    };
  }
  if (action.type === "PASSWORD_INPUT") {
    return {
      ...state,
      password: action.payload,
    };
  }
  if (action.type === "COLLEGE_NAME_INPUT") {
    return {
      ...state,
      collegeName: action.payload,
    };
  }
  if (action.type === "VALIDATE_FORM") {
    return {
      ...state,
      formIsValid:
        state.email.includes("@") &&
        state.password.trim().length > 6 &&
        state.collegeName.trim().length > 0,
    };
  }
  return state;
};

function Login(props) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    let validationTimeout = setTimeout(() => {
      dispatch({ type: "VALIDATE_FORM" });
    }, 100);

    return () => {
      clearTimeout(validationTimeout);
    };
  }, [state.email, state.password, state.collegeName]);

  const emailHandler = (event) => {
    dispatch({ type: "EMAIL_INPUT", payload: event.target.value });
  };

  const passwordHandler = (event) => {
    dispatch({ type: "PASSWORD_INPUT", payload: event.target.value });
  };

  const collegeNameHandler = (event) => {
    dispatch({ type: "COLLEGE_NAME_INPUT", payload: event.target.value });
  };

  const loginPage = () => {
    dispatch({ type: "VALIDATE_FORM" });
    props.onLogin();
  };

  return (
    <div className="form">
      <>
        <label htmlFor="email">E-Mail</label>
        <input
          id="email"
          type="text"
          value={state.email}
          onChange={emailHandler}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={state.password}
          onChange={passwordHandler}
        />
        <label htmlFor="name">College Name</label>
        <input
          id="name"
          type="text"
          value={state.collegeName}
          onChange={collegeNameHandler}
        />
        <br />
        <Button
          type="submit"
          onClick={loginPage}
          disabled={!state.formIsValid}
          className="button"
        >
          Login
        </Button>
      </>
    </div>
  );
}

export default Login;
