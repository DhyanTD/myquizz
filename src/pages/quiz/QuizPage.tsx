import styles from "./quizpage.module.css";
import { LiaPhoenixSquadron } from "react-icons/lia";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import { FaRegCircle } from "react-icons/fa";
<FaRegCircle />;

function QuizPage() {
  const options = [
    {
      option: "Paris",
    },

    {
      option: "London",
    },

    {
      option: "berlin",
    },
    {
      option: "Rome",
    },
  ];
  return (
    <>
      <div className={styles.quizPage}>
        <div className={styles.quizHeader}>
          <div className={styles.quizMaster}>
            <LiaPhoenixSquadron />

            <p>QuizMaster</p>
          </div>

          <div className={styles.quizProfile}>
            <img src="/profilePic.jpg" />
          </div>
        </div>
        <hr />
        <div className={styles.quizMain}>
          <div className={styles.progress}>
            <p>Question 1/5</p>
            <Box sx={{ width: "95%" }}>
              <LinearProgress variant="determinate" value={20} />
            </Box>
          </div>
          <div>
            <p
              style={{
                fontSize: "x-small",
                fontWeight: "800",
                marginTop: "4px",
              }}
            >
              What is the capital of France?
            </p>
          </div>

          <div>
            {options.map((values,index) => (
              <div className={styles.option}>
                <input type="radio" name="Rome" id= {`${index}`} />
                <label htmlFor={`${index}`} > {values.option}</label>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.submitButton}>
          <button
            onClick={() => {}}
            style={{
              background: "rgb(244, 244, 244)",
              color: "black",
              border: "none",
              fontSize: "xx-small",
              borderRadius: "6px",
              fontWeight: "500",
              padding: "6px",
            }}
          >
            submit
          </button>
        </div>
      </div>
    </>
  );
}
export default QuizPage;
