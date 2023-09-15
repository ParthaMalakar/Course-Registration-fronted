import PropTypes from 'prop-types';
import Log from '../Log/Log';
const CourseLog = ({courseLog}) => {
    return (
        <div className="md:w-1/3 bg-white rounded-xl ml-4 mt-2 pt-4">
            <div>
                <h3 className='text-center text-[#2F80ED] mt-6 font-bold text-xl '>Credit Hour Remaining</h3>
                <hr className='w-[354px] mx-auto mt-4'></hr>
            </div>
            <h2 className="text-2xl font-bold mt-4 ml-3 mb-3">Course Name</h2>
            {
                courseLog.map((courseLog, idx) => <Log key={idx}  courseLog={courseLog}></Log> )
            }
        </div>
    );
};
CourseLog.propTypes = {
  courseLog: PropTypes.array.isRequired,
  
}
export default CourseLog;