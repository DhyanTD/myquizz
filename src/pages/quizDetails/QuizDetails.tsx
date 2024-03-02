import styles from "./quizdetails.module.css";
import Quiz1 from "../../components/quiz1/Quiz1";

function QuizDetails(){
    const data=[
        {
        title:"start",
        description:"sept 12,2023 9:00 AM",
    },

    {
        title:"Ends",
        description:"sept 12,2023 11:59 AM",
    },

    {
        title:"Duration",
        description:"2 hours",
    },

    {
        title:"Time Left",
        description:"1 hour 59 minutes",
    },
];
    return(<>
    
       
        {/* {data.map((values)=>{
            return(
            <Quiz1 title={values.title} description={values.description}></Quiz1>
            )
        })} */}
        
    
    </>)
    
    
}
export default QuizDetails;