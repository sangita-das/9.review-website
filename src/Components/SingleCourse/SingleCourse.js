import React from 'react';
import '../Courses/Courses.css'
import Rating from 'react-rating';



const SingleCourse = (props) => {
  const { name, Duration, img, price, Offer, star } = props.course;
  return (
    <div className="col-md-4 cart">
      <div className="card shadow rounded mb-4 " >
        <img src={img} className="card-img-top" alt="" />
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
          <button className="btn btn-primary mt-4" onClick={() => props.handleAddToList(props.detail)}>Enroll NOw</button>
        </div>
      </div>
    </div>
  );
};






/* <Col xl={4} md={6} sm={12}>
  <div className="rounded shadow-sm bg-custom">
    <div className="d-flex align-items-center p-3">
      <div className="w-25">
        <img className="img-fluid rounded" src={img} alt="" />
      </div>
      <div className="w-75 ps-3">
        <h6>{name}</h6>
        <div className="d-flex justify-content-between">
          <div>
            Price: $<span className="text-success fw-bold">{price}</span>
          </div>

        </div>

        <div className="d-flex justify-content-between custom-font-size">

          <span className='d-inline-block duration text-success custom-font-size fw-bold'><i className="far fa-clock"></i> {Duration}</span>
        </div>
        <div>
          <span className="text-success fw-bold">{Offer}</span>
        </div>
      </div>
    </div>

  </div>
</Col>
);
};
*/
export default SingleCourse;