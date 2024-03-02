import styles from "./quiz1.module.css";


function Quiz1(props : any) {
  return (
    <>
      <div className={styles.quizMain}>
        <div>
          <div className={styles.qHeading}>
            <p>{props.selected.tittle}</p>
          </div>
          <div>
            <p style={{ fontSize: "x-small", fontWeight: "300" }}>
              This quiz will test you understanding of the material covered in
              the first month of class
            </p>
          </div>

          <p style={{ fontSize: "small", fontWeight: "500" }}>Details</p>

          <hr></hr>

          <div>
            <p>{props.title}</p>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default Quiz1;
