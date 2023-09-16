import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({handleCourseAdd}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="lg:w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 mt-8">
             {
                courses.map(course => <Course
                 key={course.id}
                 course={course}
                 handleCourseAdd={handleCourseAdd}
                 
                 >

                </Course>)
             }
        </div>
    );
};
Courses.propTypes = {
    handleCourseAdd: PropTypes.func,
   
}
export default Courses;