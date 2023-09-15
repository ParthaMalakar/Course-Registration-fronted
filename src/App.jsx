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
  
}
const handleCourseAdd = course => {
  const courseExist = courseLog.find(existing => existing.id === course.id)

  if(!courseExist)
  {
    
  let DDD = document.getElementById('zero')
  const ALLValue = DDD.innerText;
  const totalNumber = parseFloat(ALLValue);
  let credit = course.credit;
  let TotalCredit = totalNumber + credit;
  if(TotalCredit>20){
    toast.error(`20 credit Limit exist`, {
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
