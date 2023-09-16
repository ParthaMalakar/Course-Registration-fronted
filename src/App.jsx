import './App.css'
import Header from './Components/Header/Header'
import CourseLog from './Components/CourseLog/CourseLog'
import Courses from './Components/Courses/Courses'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courseLog, setCourseLog] = useState([]);
  const [price, setPrice] = useState(0);
  const [remaining, setRemaining] = useState(20);
  const [add_credit,setAdd_credit ]=useState(0);
  const handleCourseAdd = course => {
    const courseExist = courseLog.find(existing => existing.id === course.id)

    if (!courseExist) {

      let cred = course.credit;
      let remove_credit = remaining - cred;
      if (remove_credit < 0) {
        toast.error(`credit not negative you wanted ${remove_credit}credit`, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      else {
        setRemaining(remove_credit);
      }
      
      let credit = course.credit;
      let TotalCredit = add_credit + credit;
      if (TotalCredit > 20) {
        toast.error(`20 credit Limit exist for you wanted ${TotalCredit}credit`, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      else {
        const newCourseLog = [...courseLog, course];
        setCourseLog(newCourseLog);
        setAdd_credit(TotalCredit);
        setPrice(price + course.price);
      }

    }
    else {
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
        <div className='lg:flex max-w-7xl mx-auto'>
          <Courses handleCourseAdd={handleCourseAdd}></Courses>
          <CourseLog courseLog={courseLog} price={price} remaining={remaining} add_credit={add_credit}></CourseLog>
        </div>
      </div>
    </>
  )
}

export default App
