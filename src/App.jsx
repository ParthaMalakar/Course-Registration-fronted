import './App.css'
import Header from './Components/Header/Header'
import CourseLog from './Components/CourseLog/CourseLog'
import Courses from './Components/Courses/Courses'
function App() {

  return (
    <> 
    <div className='bg-[#F3F3F3]'>   
    <Header></Header>   
    <div className='md:flex max-w-7xl mx-auto'>
    <Courses></Courses>
    <CourseLog></CourseLog>
    </div>
    </div> 
    </>
  )
}

export default App
