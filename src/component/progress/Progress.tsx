import styles from "./progress.module.css";

function Progress(props){

    return(<>

    {/* <div className={styles.heading}>
       <p><b>My learning progress</b></p> 
    </div> */}
    <div className={styles.outer}>


    <div>
            <img
              src={props.images}
              style={{ width: "100px", height: "100%" }}
            ></img>
          </div>


          <div>
            <p>{props.titles}</p>
          </div>

          <div>
            <img src="" alt="" />
          </div>

    </div>
    </>)
}
export default Progress;
