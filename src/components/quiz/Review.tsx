import styles from "./review.module.css";
// import { LiaPhoenixSquadron } from "react-icons/lia";

function Review() {
  return (
    <>
      <div className={styles.reviewMain}>
        <div className={styles.reviewHeader}>
          <div className={styles.quizMaster}>
            {/* <LiaPhoenixSquadron /> */}

            <p>Quiz</p>
          </div>

          <div className={styles.reviewProfile}>
            <img src="/profilePic.jpg" />
          </div>
        </div>
        <hr />
       
       <div className={styles.reviewFlex}>
       <div className={styles.previousButton
}>
          {/* <button */}
           <div onClick={() => { }}
            style={{
              background: "rgb(244, 244, 244)",
              color: "black",
              border: "none",
              fontSize: "xx-small",
              borderRadius: "6px",
              fontWeight: "500",
              padding: "6px",
              height:"6px",
              width:"40px",
              

            }}
            >
            Previous
          {/* </button> */}
          </div>
        </div>
       
        <div>
        <div className={styles.reviewTopic}>
          <p style={{ fontSize: "medium", fontWeight: "800" }}>
            Review your responses
          </p>
          <div>
            <p style={{ fontSize: "small", fontWeight: "600" }}>Questions</p>
          </div>

          <div className={styles.innerText}>
            <p style={{ fontSize: "x-small", fontWeight: "400" }}>
              What is the first letter of english alphabet?
            </p>
            <p
              style={{ fontSize: "xx-small", fontWeight: "400", color: "blue" }}
              >
              a.Apples
            </p>
          </div>

          <div className={styles.innerText}>
            <p style={{ fontSize: "x-small", fontWeight: "400" }}>
              What is the second letter of english alphabet?
            </p>
            <p
              style={{ fontSize: "xx-small", fontWeight: "400", color: "blue" }}
            >
              b.Ball
            </p>
          </div>

          <div className={styles.innerText}>
            <p style={{ fontSize: "x-small", fontWeight: "400" }}>
              What is the third letter of english alphabet?
            </p>
            <p
              style={{ fontSize: "xx-small", fontWeight: "400", color: "blue" }}
            >
              c.Cat
            </p>
          </div>

          <div className={styles.innerText}>
            <p style={{ fontSize: "x-small", fontWeight: "400" }}>
              What is the fourth letter of english alphabet?
            </p>
            <p
              style={{ fontSize: "xx-small", fontWeight: "400", color: "blue" }}
            >
              d.Dog
            </p>
          </div>

          <div className={styles.innerText}>
            <p style={{ fontSize: "x-small", fontWeight: "400" }}>
              What is the fifth letter of english alphabet?
            </p>
            <p
              style={{ fontSize: "xx-small", fontWeight: "400", color: "blue" }}
            >
              e.Elephant
            </p>
          </div>

          <div>
            <p style={{ fontSize: "small", fontWeight: "600" }}>Responses</p>
          </div>

          <div className={styles.innerText}>
            <p style={{ fontSize: "x-small", fontWeight: "400" }}>
              What is the first letter of english alphabet?
            </p>
            <p
              style={{ fontSize: "xx-small", fontWeight: "400", color: "blue" }}
              >
              a.Apples
            </p>
          </div>

          <div className={styles.innerText}>
            <p style={{ fontSize: "x-small", fontWeight: "400" }}>
              What is the second letter of english alphabet?
            </p>
            <p
              style={{ fontSize: "xx-small", fontWeight: "400", color: "blue" }}
              >
              b.Ball
              </p>
          </div>

          <div className={styles.innerText}>
            <p style={{ fontSize: "x-small", fontWeight: "400" }}>
              What is the third letter of english alphabet?
            </p>
            <p
              style={{ fontSize: "xx-small", fontWeight: "400", color: "blue" }}
              >
              c.Cat
            </p>
          </div>

          <div className={styles.innerText}>
            <p style={{ fontSize: "x-small", fontWeight: "400" }}>
              What is the fourth letter of english alphabet?
            </p>
            <p
              style={{ fontSize: "xx-small", fontWeight: "400", color: "blue" }}
              >
              d.Dog
            </p>
          </div>

          <div className={styles.innerText}>
            <p style={{ fontSize: "x-small", fontWeight: "400" }}>
              What is the fifth letter of english alphabet?
            </p>
            <p
              style={{ fontSize: "xx-small", fontWeight: "400", color: "blue" }}
              >
              e.Elephant
            </p>
          </div>

          <div onClick={() => {}}>
            <div className={styles.qButton}>
              <p>Start Quiz</p>
            </div>
          </div>
              </div>
                </div>
        </div>
      </div>
    </>
  );
}
export default Review;
