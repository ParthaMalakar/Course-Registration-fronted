import PropTypes from 'prop-types';
const CourseLog = ({courseLog}) => {
    return (
        <div className="md:w-1/3 bg-white rounded-xl ml-4 mt-2 pt-4">
            <div>
                <h3 className='text-center text-[#2F80ED] mt-6 font-bold text-xl '>Credit Hour Remaining<span id='two'> 20 </span>hr</h3>
                <hr className='w-[354px] mx-auto mt-4'></hr>
            </div>
            <h2 className="text-2xl font-bold mt-4 ml-3 mb-3">Course Name</h2>
            <ul>
        {courseLog.map((course, index) => (
          <li key={course.id}>
            {index + 1}. {course.course_name}
          </li>
        ))}
      </ul>
      <hr className='w-[354px] mx-auto mt-4'></hr>
      <h3 className='mt-4 ml-6 font-semibold' >Total Credit Hour : <span id='zero'>0</span></h3>
        </div>
    );
};
CourseLog.propTypes = {
  courseLog: PropTypes.array.isRequired,
  
}
export default CourseLog;