import styles from "./signUp.module.css";
import * as React from "react";

function QSignUp() {
  return (
    <>
      <div className={styles.qMain}>
        <h1>Sign Up to your account </h1>

        <div className={styles.qAuth}>
          <p>Username</p>
          <div className={styles.qInputs}>
            <input type="name" placeholder="Enter Username" />
          </div>
          <p>Email</p>
          <div className={styles.qInputs}>
            <input type="email" placeholder="Enter Email" />
          </div>
          <p>Password</p>
          <div className={styles.qInputs}>
            <input type="password" placeholder="Enter Password" />
          </div>
          <p>Confirm Password</p>
          <div className={styles.qInputs}>
            <input type="password" placeholder="Confirm Password" />
          </div>
        </div>

        <div>
          <br />
          <button className={styles.signupB}> Sign Up</button>
        </div>
        <div className={styles.qUnderline}>
          <p>Forgot your Password?</p>
        </div>
      </div>
    </>
  );
}
export default QSignUp;
