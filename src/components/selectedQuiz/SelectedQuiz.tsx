import styles from "./quiz1.module.css";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";

interface SelectedQuizProps {
  selected: any;
}
function SelectedQuiz(props: SelectedQuizProps) {

  const navigate=useNavigate();
  return (
    <>
      <div className={styles.quizMain}>
        <div>
          <div className={styles.qHeading}>
            {/* <p>{props.selected.title}</p> */}
            <p>Quiz#1</p>
          </div>
          <div className={styles.qDescription}>
            <p style={{ fontSize: "x-small", fontWeight: "300" }}>
              This quiz will test you understanding of the material covered in
              the first month of class
            </p>
          </div>

          <p style={{ fontSize: "small", fontWeight: "500" }}>Details</p>

          <hr></hr>

          {/* <div>
            <p>{props.selected.title}</p>
            
          </div> */}
          <div className={styles.schedule}>
            <div>
              <p style={{ fontSize: "xx-small" }}>start</p>
              <p style={{ fontSize: "xx-small" }}>sept 12,2023 9:00 AM</p>
            </div>

            <div>
              <p style={{ fontSize: "xx-small" }}>Ends</p>
              <p style={{ fontSize: "xx-small" }}>sept 12,2023 11:59 AM</p>
            </div>
          </div>
          <hr />


          <div className={styles.schedule}>
            <div>
              <p style={{ fontSize: "xx-small" }}>Duration</p>
              <p style={{ fontSize: "xx-small" }}>2 hours</p>
            </div>

            <div>
              <p style={{ fontSize: "xx-small" }}>Time Left</p>
              <p style={{ fontSize: "xx-small" }}>1 hour 59 minutes</p>
            </div>
          </div>


<div className={styles.qProgressBar}>
  <p style={{ fontSize: "x-small" }}>50% Complete</p>
<Box sx={{ width: "95%" }}>
              <LinearProgress variant="determinate" value={50} />
            </Box>
</div>


<div onClick={()=>{navigate("/quiz")}}>
  <div className={styles.qButton}>
  <p>Start Quiz</p>
  </div>
  
</div>
          


        </div>
      </div>
    </>
  );
}
export default SelectedQuiz;
