import "./index.css";

import logo from "./images/logo.png";

const Card = ({ restroData }) => {
  // console.log(restroData);

  const {
    cloudinaryImageId,
    name,
    avgRating,
    totalRatingsString,
    cuisines,
    costForTwo,
    sla,
    locality,
    areaName,
  } = restroData?.info;

  // console.log(cuisines);

  // console.log(name);
  return (
    <>
      <div className="card-container">
        <img
          src={
            `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fill/` +
            cloudinaryImageId
          }
          alt="Restro Image"
          className="restro-image"
        />
        <h3 className="restro-name">{name}</h3>
        <div className="star-rating">
          <span className="star">{avgRating} ⭐</span>
          <span className="total-review">{totalRatingsString} reviews</span>
        </div>
        <div className="available-food-list">{cuisines.join(", ")}</div>
        <div className="rate-and-delivery-time">
          <span className="rate">{costForTwo}</span>
          <span className="delivery-time">{sla.deliveryTime} minutes</span>
        </div>

        <div className="restro-address">
          {locality} {areaName}
        </div>
      </div>
    </>
  );
};

export default Card;
