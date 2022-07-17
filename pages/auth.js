import AuthForm from "../components/Auth/AuthForm";
function addUserHandler(user) {

  fetch("https://finalproject-1400-default-rtdb.firebaseio.com/users.json", {
    method: "POST",
    body: JSON.stringify(user),

    headers: {
      "Content-Type": "application/json",
    },
  });
}

const AuthPage = () => {
  return <AuthForm onAddUser={addUserHandler} />;
};

export default AuthPage;
