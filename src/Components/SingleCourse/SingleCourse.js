import React from 'react';
import '../Courses/Courses.css'
import Rating from 'react-rating';





const SingleCourse = (props) => {
  const { name, Duration, img, price, Offer, star } = props.course;
  return (

    <div className="col-md-4 cart">

      <div className="card shadow rounded mb-4 container" >
        <img src={img} className="card-img-top mt-5" alt="" />
        <div className="card-body">
          <h5 className="card-title fw-bolder">{name}</h5>
          <table className="mt-4 fw-bold">
            <thead></thead>
            <tbody>

              <tr>
                <td>Price</td>
                <td className="px-2">:</td>
                <td className="text-success">{price}</td>
              </tr>
              <tr>
                <td>Duration</td>
                <td className="px-2">:</td>
                <td className="text-success">{Duration}</td>
              </tr>
              <tr>
                <td>Offer</td>
                <td className="px-2">:</td>
                <td className="text-success">{Offer}</td>
              </tr>

              <Rating
                initialRating={star}
                emptySymbol="far fa-star  "
                fullSymbol="fas fa-star "></Rating>

            </tbody>
            <tfoot></tfoot>
          </table>

          <button className="btn btn-primary mt-3">Enroll NOw</button>


        </div>
      </div>
    </div>
  );
};







export default SingleCourse;