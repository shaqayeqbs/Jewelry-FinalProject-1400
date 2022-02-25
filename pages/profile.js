import Profile from "../components/Profile/Profile";
import { useEffect, useState, useContext, useCallback } from "react";
import AuthContext from "../components/store/auth-context";
import { getAllUsers } from "../helpers/api-util";

const ProfilePage = (props) => {
  const authCtx = useContext(AuthContext);

  let email = "";
  if (typeof window !== "undefined") {
    email = localStorage.getItem("email");
  } else {
    email = authCtx.email;
  }

  const { user } = props;

  const luser = user.filter((user) => user.email === email);

  return <Profile myuser={luser[0]} />;
};

export default ProfilePage;

export async function getStaticProps(context) {
  const user = await getAllUsers();
  if (!user || user.lenght === 0) {
    return { notFound: true };
  }

  return {
    props: {
      user: user,
    },
    revalidate: 10,
  };
}
