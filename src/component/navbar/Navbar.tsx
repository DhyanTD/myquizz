import styles from "./navbar.module.css";
import { IoMdHome } from "react-icons/io";
import { MdOutlineQuiz } from "react-icons/md";

import { HiOutlineDocumentReport } from "react-icons/hi";
import { SiGoogleclassroom } from "react-icons/si";
import { PiStudentDuotone } from "react-icons/pi";
import { RiLogoutBoxRLine } from "react-icons/ri";

function Navbar() {
  return (
    <>
      <div className={styles.nbMain}>

        <div>
        <div className={styles.nbInnerFlex}>
          <IoMdHome />

          <p style={{ fontSize: "x-small" }}>Home</p>
        </div>

        {/* <div className={styles.nbInnerFlex}>
          <MdOutlineQuiz />

          <p style={{ fontSize: "x-small" }}>Quizzes</p>
        </div> */}

        <div className={styles.nbInnerFlex}>
          <HiOutlineDocumentReport />

          <p style={{ fontSize: "x-small" }}>Report</p>
        </div>

        <div className={styles.nbInnerFlex}>
          <SiGoogleclassroom />

          <p style={{ fontSize: "x-small" }}>Classes</p>
        </div>

        <div className={styles.nbInnerFlex}>
          <PiStudentDuotone />

          <p style={{ fontSize: "x-small" }}>Students</p>
        </div>

        </div>
        


        <div className={styles.nbInnerFlex}>
        <RiLogoutBoxRLine />

          <p style={{ fontSize: "x-small" }}>LogOut</p>
        </div>
      </div>
    </>
  );
}
export default Navbar;
