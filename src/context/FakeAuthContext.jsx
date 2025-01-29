import { useReducer } from "react";
import { AuthContext } from "../hooks/useAuth";

const FAKE_USER = {
  name: "Udit",
  email: "udit@commerciax.com",
  password: "qwerty123",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const initialState = {
  user: null,
  isAuthenticated: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: "",
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: "",
      };
    case "EMAIL_NOT_RECOGNIZED":
      return {
        ...state,
        error: "Email not recognized",
      };
    case "INVALID_PASSWORD":
      return {
        ...state,
        error: "Invalid password",
      };
    default:
      throw new Error("Invalid action type");
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user, isAuthenticated, error } = state;

  function login(email, password) {
    if (email !== FAKE_USER.email) {
      return dispatch({ type: "EMAIL_NOT_RECOGNIZED" });
    }
    if (password !== FAKE_USER.password) {
      return dispatch({ type: "INVALID_PASSWORD" });
    }
    dispatch({ type: "LOGIN", payload: FAKE_USER });
  }
  function logout() {
    dispatch({ type: "LOGOUT" });
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, error }}
    >
      {children}
    </AuthContext.Provider>
  );
}
