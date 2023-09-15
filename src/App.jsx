import './App.css'
import Header from './Components/Header/Header'
import CourseLog from './Components/CourseLog/CourseLog'
import Courses from './Components/Courses/Courses'
function App() {

const handleCourseAdd = () => {
console.log("added");
}

  return (
    <> 
    <div className='bg-[#F3F3F3]'>   
    <Header></Header>   
    <div className='md:flex max-w-7xl mx-auto'>
    <Courses handleCourseAdd={handleCourseAdd}></Courses>
    <CourseLog></CourseLog>
    </div>
    </div> 
    </>
  )
}

export default App
