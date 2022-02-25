import { useState, useRef, useContext } from "react";
import { useRouter } from "next/router";

import AuthContext from "../store/auth-context";
import classes from "./AuthForm.module.css";

const AuthForm = (props) => {
  const router = useRouter();
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const lastnameInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    //login
    {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDg6nq0OtMBow6qeE4-kYLq4LgDxWsi0kE",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication failed!";
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
              }

              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          const expirationTime = new Date(
            new Date().getTime() + +data.expiresIn * 1000
          );
          authCtx.login(data.idToken, expirationTime.toISOString(),data.email);
          console.log(data.email, "lets see thisssssss");
          router.push("/");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    //signUp

    if (!isLogin) {
      const enteredName = nameInputRef.current.value;
      const enteredLastName = lastnameInputRef.current.value;
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDg6nq0OtMBow6qeE4-kYLq4LgDxWsi0kE",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication failed!";
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
              }

              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          const expirationTime = new Date(
            new Date().getTime() + +data.expiresIn * 1000
          );
          const user = {
            name: enteredName,
            lastname: enteredLastName,
            email: enteredEmail,
            password: enteredPassword,
            token: data.idToken,
          };
          props.onAddUser(user);
          authCtx.login(data.idToken, expirationTime.toISOString());

          router.push("/");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="name" id="name" required ref={nameInputRef} />
          </div>
        )}
        {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="lastname">Your LastName</label>
            <input
              type="lastname"
              id="lastname"
              required
              ref={lastnameInputRef}
            />
          </div>
        )}
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};
export default AuthForm;
