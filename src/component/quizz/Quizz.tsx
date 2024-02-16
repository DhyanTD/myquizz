import styles from "./quiz.module.css";

function Quizz(props) {
  return (
    <>
      <div className={styles.heading}>
        {/* <div>
        <p>
          <b>Featured Quizz</b>
        </p>
        </div> */}
        

        <div className={styles.outer}>

            
          <div>
            <img
              src={props.image}
              style={{ width: "100%", height: "50px" }}
            ></img>
          </div>

          <div className={styles.title}>
            <p>{props.title}</p>
          </div>

          <div className={styles.bottom}>
          <div className={styles.title}>
            <p>{props.time}</p>
          </div>

          <div  className={styles.title}>
            <p>{props.rating}</p>
          </div>

          <div className={styles.button}>
            <button onClick={()=>{}}> <b>start</b></button>
          </div>

          </div>

          

        </div>
      </div>
    </>
  );
}
export default Quizz;
