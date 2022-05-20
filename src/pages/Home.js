import React, { useContext } from "react";
import { UserContext } from "../App";
import { Login } from "../units/Login";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h2>This is the Home Component</h2>
      <pre>this massage from : {JSON.stringify(user, null, 2)} </pre>
      {user ? (
        <button onClick={() => {
          //call logout
          setUser(null);

        }}>Logout</button>
      ) : (
        <button
          onClick={async () => {
            const user = await Login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </>
  );
};

export default Home;
