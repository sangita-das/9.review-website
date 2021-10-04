import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleCourse from '../SingleCourse/SingleCourse';
import '../Courses/Courses.css'

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('/courses.JSON')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);
  return (
    <div className="container min-vh-100 g-4">
      <div className="shadow my-4 rounded p-4">
        <div className="courses">
          <h1 className="text-center text-light">Browse all courses</h1>
          <p className="text-center pb-4 text-light">Break into a new field like information technology or data science.No prior experience necessary to get started.</p>
        </div>
        <Row className="gy-5">
          {
            courses.map(course => <SingleCourse key={course.id} course={course}></SingleCourse>)
          }
        </Row>
      </div>
    </div>
  );
};

export default Courses;






















/* import React, { useEffect, useState } from 'react';
import "./Courses.css"




const Courses = () => {
  const [data, setData] = useState("");

  const [courses, setCourses] = useState([]);

  const handleChange = (e) => {
    const searchText = e.target.key;
    setData(searchText);
    console.log(e.target.key);
  };



  useEffect(() => {
    fetch('./data.JSON')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [data]);

  return (

    <div className="container courses">
      <div className="courses">
        <h1>Browse all courses</h1>
        <p>Break into a new field like information technology or data science.No prior experience necessary to get started.</p>
      </div>

      <div className="course">
        <div className="row">
          {courses?.map((pd) => (
            <div className="col-md-4">
              <div className="cart">
                <div className="cart-details">
                  <img className="w-50" src={courses.img} alt="" />
                </div>
                <div className="text-area">
                  <h4>{courses.name}</h4>
                  <p>{pd.strAlternate}</p>
                  <p>League: {courses.price}</p>


                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;







/*  <div>
   <Header></Header>
   <h2>This is all courses.</h2>
 </div>
);
};

export default Courses; */