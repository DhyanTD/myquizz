import styles from "./home.module.css";
import { FcSearch } from "react-icons/fc";
import { BsDot } from "react-icons/bs";
import Quiz1 from "../../components/quiz1/Quiz1";
import {useState} from "react";


function Home() {
  const [selectedQuiz,setSelectedQuiz]=useState({});
  const details = [
    {
      title: "Final exam",
      question: "10 questions",
      time: "5 minutes",
      student: "20 students",
    },

    {
      title: "Mid term",
      question: "10 questions",
      time: "5 minutes",
      student: "20 students",
    },

    {
      title: "Quiz 1",
      question: "10 questions",
      time: "5 minutes",
      student: "20 students",
    },

    {
      title: "Quiz 2",
      question: "10 questions",
      time: "5 minutes",
      student: "20 students",
    },
  ];

  const data = [
    {
      title: "Quiz 1",
      question: "10 questions",
    },
    {
      title: "Quiz 2",
      question: "10 questions",
    },
  ];

  console.log("whats in selectedQuiz", selectedQuiz);
  
  return (
    <>

    {Object.keys(selectedQuiz).length===0 ? (<>
      <div className={styles.homeMain}>
        <div className={styles.homeTitle}>
          <p>Quizzes</p>
        </div>
        <div className={styles.filterSection}>
          <div className={styles.homeDropdown}>
            <select name="filter" id="filter">
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>

          <div className={styles.homeDropdown}>
            <select name="filter" id="filter">
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>

          <div className={styles.homeDropdown}>
            <select name="filter" id="filter">
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
        <div className={styles.search}>
          <FcSearch />
          <input type="text" placeholder="search quizzes" />
        </div>

        <div>
          <p style={{ fontSize: "medium", fontWeight: "600", marginTop:"4px",marginBottom:"6px" ,}}>Published</p>
        </div>

        {/*  */}

        <div>
          {details.map((values) => (
            <>
              <div className={styles.homeQlist} onClick={()=>{setSelectedQuiz(values)}}>
                <div
                  className={styles.subtitle}
                  style={{ marginTop: "0px", marginBottom: "0px" }}
                >
                  <p>{values.title}</p>
                </div>
                <div className={styles.tagline}>
                  <div>
                    <p>{values.question}</p>
                  </div>

                  <div className={styles.dot}>
                    <BsDot />
                    <p>{values.time}</p>
                  </div>

                  <div className={styles.dot}>
                    <BsDot />
                    <p>{values.student}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

        <div>
          <p style={{ fontSize: "medium", fontWeight: "600", marginTop:"4px",marginBottom:"6px" ,}}>Draft</p>
        </div>

        <div>

        {data.map((values) => (
            <>
              <div className={styles.homeQlist}>
                <div
                  className={styles.subtitle}
                  style={{ marginTop: "0px", marginBottom: "0px" }}
                >
                  <p>{values.title}</p>
                </div>
                <div className={styles.tagline}>
                  <div>
                    <p>{values.question}</p>
                  </div>
                  </div>
                  </div>
                  </>
        ))}
        </div>


      </div></>) : (<> <Quiz1 selected={selectedQuiz} ></Quiz1></>)}


     
    </>
  );
}
export default Home;
