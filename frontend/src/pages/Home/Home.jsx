import React from "react";
import styles from "./Home.module.css";
import { Link, useHistory } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };

  const history = useHistory();
  function startRegister() {
    console.log("Button Clicked",history);

    history.push('/register')
    console.log("Button Clicked",history);
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Clubhouse!" icon="logo">
        <p className={styles.text}>
          Drop into your favorite rooms while you’re commuting, walking your
          poodle or running in the park. Raise your hand if you’d like to chime
          in!
        </p>
        <div>
          <Button onClick={startRegister} text="Get your username" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite?</span>
          <Link style={signInLinkStyle} to="/login">
            Sign In
          </Link>
        </div>
      </Card>
    </div> 
  );
};

export default Home;
