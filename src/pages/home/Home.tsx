import styles from "./home.module.css";
import Dashboard from "../../component/dashboard/Dashboard";
import Quizz from "../../component/quizz/Quizz";
import Progress from "../../component/progress/Progress";

function Home(){


    const data = [
        {
            id:1,
          title: " Maths quizz",
          time: 12,
          rating: 1,
          image: "/maths_quizz.webp",
          buttons:"start"
        },
    
        {
            id:2,
          title: " English quizz",
          time: 12,
          rating: 1,
          image: "/english_quiz.webp",
          buttons:"start"
        },

        {
            id:3,
          title: " Take quizz",
          time: 12,
          rating: 1,
          image: "/take_Quiz.jpg",
          buttons:"start"
        },

        {
            id:4,
          title: " Quizz Analytics",
          time: 12,
          rating: 1,
          image: "/quiz_analytics.jpg",
          buttons:"start"
        },
      ];
    

      const details = [{
        images:"/photography.jpg",
        titles:"Becaming a photographer",
        name:"Emili Thomson",
        
      },
      {
        images:"/design_thinking.jpg",
        titles:"design thinking 2.0",
        name:"David Johnson",}];
    return(<>
    
    <div className={styles.main}>
    <p> <b>Featured Quizzes</b></p>
        

    
        <div className={styles.inner}>
        {/* {/* <div>
        <Dashboard></Dashboard>
        // </div>  */}


        
        <div className={styles.quiz}>
            



        {
        data.map((values)=>(
            <Quizz title={values.title} image={values.image} time={values.time} rating={values.rating}  buttons={values.buttons} > </Quizz>
        
        ))
      }
           
        </div>

        

        </div>
        <div >
       <p><b>My learning progress</b></p> 
    </div>
        <div className={styles.progress}>
       
        {
        details.map((values)=>(
            <Progress titles={values.titles} images={values.images} name={values.name} >   </Progress>
        
        ))
}


        
        </div>
        

        

        
        
    </div>
   

    </>)
}
export default Home;