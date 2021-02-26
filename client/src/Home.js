import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = (props) => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const res = await axios.get("/auth", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setUser(res.data);
  };
  useEffect(() => {
    getUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/login");
  };

  if (!localStorage.getItem("token")) {
    props.history.push("/login");
  }
  return (
    <div>
      {" "}
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">Navbar</span>
        <p className="lead">Welcome {user && user.name}</p>
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </nav>
      <div className="m-5">
        <div className="jumbotron">
          <p className="lead">Medi ga punya dual pistol &#128557;</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
