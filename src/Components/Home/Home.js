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
      .then(data => setCourses(data.slice(0, 6)));
  }, []);


  return (
    <div>
      <Banner></Banner>

      {/* ------------------------welcome----------- */}
      <div className="container">
        <div className="row d-flex- justify-content-center align-items-center py-5 my-5">
          <div className="col-md-6">
            <h1 className="text-dark">Welcome to Learning Point</h1>
            <p className="text-black">Learning Point is a comprehensive learning and development portal by Keypoint.
              A professional training institute for millennials imparting quality vocational education in the field of arts, science, and technology.

              all our course are short and practical to capture the Millenial mindset and provide them an opportunity to quickly get into the market and make a decent living.
              Exploring our website and find out all you need to know about joining us as a new member.

            </p>
            <p> Here, you will have access to real world, tried and true, leadership insights, tools, templates, and best practices. Your leadership journey just got some extra juice. You can enroll in one program at a time or you can sign up for our Smart Pass, which gives you "all access" for an entire year. Great investment – check it out.</p>
          </div>
          <div className="col-md-6">
            <img src="https://t4.ftcdn.net/jpg/02/54/80/61/360_F_254806159_XDaYgRIDwydC3JQm2Tf0HMoxYr9DB7MY.jpg" alt="" className="img-fluid rounded" />
          </div>
        </div>
      </div>

      {/*------------------- Courses---------- */}
      <div className="container my-4 p-4">
        <div className=" my-4  p-4">
          <h1 className="text-dark fw-bold text-center"> <u>Our Courses</u> </h1>
          <Link to="/courses" className="text-decoration-none">
            <h4 className="text-primary fw-bold text-center">Browse all courses.. </h4>
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