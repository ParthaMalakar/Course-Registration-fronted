import PropTypes from 'prop-types';
import { AiOutlineRead  } from 'react-icons/ai';
const Course = ({ course , handleCourseAdd }) => {
    const {  picture, course_name, description, price, credit } = course;
    return (
        <div className='bg-[#FFF] p-3 rounded-lg'>
            <div className='space-y-4 p-3'>
                <img className='w-[250px] h-[200px] ' src={picture} alt={`Cover picture of the title ${course_name}`} />
                <h5 className='text-lg font-semibold'>{course_name}</h5>
                <h3 className='w-[245px] font-normal text-sm'>{description}</h3>
                <div className='flex justify-between'>
                    <p>$ Price : {price}</p>
                    <p className='flex text-center justify-center'><AiOutlineRead className='text-2xl'></AiOutlineRead>Credit :{credit}hr</p>                   
                </div>
                <button onClick={() => handleCourseAdd(course)} 
                className='btn text-xl text-center bg-[#2F80ED] w-[240px] py-2 rounded-lg  text-white font-semibold'>Select</button>

            </div>
        </div>
    );
};
Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleCourseAdd: PropTypes.func.isRequired

}
export default Course;