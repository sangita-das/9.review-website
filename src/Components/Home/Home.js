import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';
import Banner from '../Banner/Banner';
import { Row } from 'react-bootstrap';


const Home = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/courses.JSON')
      .then(res => res.json())
      .then(data => setCourses(data.slice(0, 5)));
  }, []);


  return (
    <div>
      <Banner></Banner>
      <div className="container shadow my-4 rounded p-4">
        <div className="shadow my-4 rounded p-4">
          <Link to="/courses" className="text-decoration-none">
            <h1 className="text-light text-center fw-bold">Our Courses</h1>

          </Link>
        </div>
        <div>

          <Row className="gy-5">
            {
              courses.map(course => <SingleCourse key={course.key} course={course}></SingleCourse>)
            }
          </Row>

        </div>
      </div>

    </div>
  );
};

export default Home;