import styles from "./qLogIn.module.css";
import * as React from "react";
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
function QLogIn() {
  return (
    <>
      <div className={styles.qMain}>
        <h1>Log in to your account </h1>

        <div className={styles.qAuth}>
          <p>Email</p>
          <div className={styles.qInput}>
            <input type="email" placeholder="Enter Email" />
          </div>
          <p>Password</p>
          <div className={styles.qInput}>
            <input type="password" placeholder="Enter Password" />
          </div>
          <div className={styles.qInner}>
          <p>Keep me signed in.</p>
        </div>
        </div>

        
        <div>
          <button className={styles.loginB}> Log In</button>
        </div>
        <div className={styles.qUnderline}>
          <p>Forgot your Password?</p>
          
        </div>
        <div className={styles.qelse}>
          <p>Don't have an account?</p>
        </div>
        <div className={styles.qInput}>
          Sign up for free
        </div>
      </div>
    </>
  );
}
export default QLogIn;
