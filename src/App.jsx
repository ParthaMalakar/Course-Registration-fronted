import './App.css'
import Header from './Components/Header/Header'
import CourseLog from './Components/CourseLog/CourseLog'
import Courses from './Components/Courses/Courses'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
const [courseLog,setCourseLog]=useState([]);
const handleEventAdd = course => {
  console.log(course)
}
const handleCourseAdd = course => {
  const courseExist = courseLog.find(existing => existing.id === course.id)

  if(!courseExist)
  {
    let TWO = document.getElementById('two')
    const Remove_value = TWO.innerText;
    const remove_total_Number = parseFloat(Remove_value); 
    let cred = course.credit;
    let remove_credit = remove_total_Number - cred;
    if(remove_credit<0){
      toast.error(`credit not negative you wanted ${remove_credit}credit`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    else{
      TWO.innerText=remove_credit;
    }
  let DDD = document.getElementById('zero')
  const ALLValue = DDD.innerText;
  const totalNumber = parseFloat(ALLValue);
  let credit = course.credit;
  let TotalCredit = totalNumber + credit;
  if(TotalCredit>20){
    toast.error(`20 credit Limit exist for you wanted ${TotalCredit}credit`, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
  else{
    const newCourseLog = [...courseLog, course];
    setCourseLog(newCourseLog);
    DDD.innerText = TotalCredit;
  } 
 
  }
  else{
    toast.error(`Course "${course.course_name}" already exists`, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
  
  
  
}

  return (
    <> 
    <div className='bg-[#F3F3F3]'>   
    <Header></Header>  
    <ToastContainer></ToastContainer> 
    <div className='md:flex max-w-7xl mx-auto'>
    <Courses handleCourseAdd={handleCourseAdd} handleEventAdd={handleEventAdd}></Courses>
    <CourseLog courseLog={courseLog} ></CourseLog>
    </div>
    </div> 
    </>
  )
}

export default App
