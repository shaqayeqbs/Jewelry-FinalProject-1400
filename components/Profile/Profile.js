import React, { useContext, useEffect, useState } from "react";
import classes from "./Profile.module.css";
import AuthContext from "../store/auth-context";

const Profile = (props) => {


  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  // if (props.isLoading) {
  //   return (
  //     <section>
  //       <p>Loading...</p>
  //     </section>
  //   );
  // }

  return (
    <React.Fragment>
      {isLoggedIn && (
        <div className={classes.container}>
          <section className={classes.section}>
            <h1>Users Profile</h1>
            <div className={classes.title}>
              <div className={classes.label}>Name :</div>
              <div className={classes.data}>{props.myuser.name}</div>
            </div>
            <div className={classes.title}>
              <div className={classes.label}>Last Name :</div>
              <div className={classes.data}>{props.myuser.lastname}</div>
            </div>
            <div className={classes.title}>
              <div className={classes.label}>Email :</div>
              <div className={classes.data}>{props.myuser.email}</div>
            </div>
            <div className={classes.title}>
              <div className={classes.label}>Password :</div>
              <div className={classes.data}>{props.myuser.password}</div>
            </div>
          </section>
        </div>
      )}
    </React.Fragment>
  );
};

export default Profile;
