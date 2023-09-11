import { useEffect, useState } from "react";
import Card from "./card";
import "./index.css";

import restroDataArr from "./restroData";
import Shimmer from "./shimmer";
import BestOffer from "./offer";
import NoSearchedData from "./NotFound/nosearchData";

const Body = () => {

  console.log("Body Rendered!!");
  const [restroData,setRestroData] = useState([]);
  // show/hide filter pop-up
  const [filterPopup,setFilterPopup] = useState(false);
  // store the user input in search input box
  const  [searchValue,setSearchValue] = useState("");
// data on which the card will work
  const [finalData,setFinalData] = useState(restroData);
  const [showNoData,setShowNoData] = useState(false);

  console.log(finalData);

  console.log(restroData);

  // show/hide filter pop-up function
  const show_filter_popup_fun = () =>
  {
    setFilterPopup(true);
  }
  const hide_filter_popup = () =>
  {
    setFilterPopup(false);
  }

  // const sort_by_delievery_time = () =>
  // {
  //   const sortedData = restroData.sort((elem1,elem2) =>
  //   {
  //     return (elem1.info.sla.deliveryTime - elem2.info.sla.deliveryTime);
  //   });
  //   setRestroData(sortedData);

  //   // console.log(restroData);

  //   setFilterPopup(false);
  // }

  // sort by rating
  // const sort_by_rating = () =>
  // {
  //   const sortedData = restroData.sort((elem1,elem2) =>
  //   {

  //     // console.log(elem1.info.avgRating);
  //     return(elem2.info.avgRating - elem1.info.avgRating)
  //   })

  //   setRestroData(sortedData);

  //   setFilterPopup(false);
  // }

  // API call using the 'useEffect'
  useEffect( () =>
  {
    fetchDataFun();
  },[])

  const fetchDataFun = async () =>
  {
    const newData = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.971599&lng=77.594566");
    const jsonData = await newData.json();

    // const restroArr = jsonData?.data?.success?.cards;
    // // console.log(restroArr);

    // restroArr.forEach((elem) =>
    // {
    //   const restroListArr = [];
    //   restroListArr.push(elem);
    //   console.log(restroListArr);
    //   // setRestroData(elem?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    // });

    // const data_from_api = jsonData?.data?.success?.cards[2]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
// console.log(jsonData?.data?.success?.cards[3]?.gridWidget?.gridElements);
const restaurants_data = jsonData.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants;

setRestroData(restaurants_data);

setFinalData(restaurants_data);


    // setRestroData(data_from_api);

  }
     
  // user searched function
  const userSearchedFun = (e) =>
  {
    e.preventDefault();
    setSearchValue(e.target.value);
  }

  useEffect(() =>
  {
    console.log("search value: " + searchValue);

    const searched_restro = restroData.filter((elem) =>
    {
      return (elem.info.name.toLowerCase().includes(searchValue.toLowerCase()));
    });

    searched_restro?setFinalData(searched_restro):setFinalData([]);

    searched_restro?setShowNoData(false):setShowNoData(true);
    
    // setFinalData(searched_restro);

  },[searchValue])

  // console.log(searchValue);

  return(
    <>
      <div className="body-container">
        <div className="search-and-filter-container">
          <div className="filter-container" onClick={show_filter_popup_fun}>
            <i className="fa fa-filter" aria-hidden="true"></i> <span>filter</span>
          </div>

          <div className="body-search-box-container">
            <input
              onChange={userSearchedFun}
              type="search"
              name=""
              id=""
              placeholder="Search for Restaurants and Foods"
              value={searchValue}
            />
            {/* <button>Search</button> */}
          </div>
        </div>

        {/* {console.log(restroData)} */}

        {/* <BestOffer offerList = {offerData.gridWidget.gridElements.infoWithStyle.info} /> */}

        {/* filter container */}
        <div className="filter-and-sort-major-container" id={filterPopup? "show": ""}>
        <div className="filter-container-left-content-container">
            <div className="filter-major-container-heading">
              <h3>Filter</h3>
              <i className="fa fa-times" aria-hidden="true"onClick={hide_filter_popup} ></i>
            </div>

            <div className="filter-content-div">
            <div className="filter-major-container-left-container">
              
                <p>Sort</p>
                <p>Delievery Time</p>
                <p>Cuisines</p>
                <p>Explore</p>
                <p>Ratings</p>
                <p>Veg/Non-Veg</p>
                <p>Offers</p>
                <p>Cost for two</p>
              
            </div>
            <div className="filter-major-container-right-container">

              <ul className="sort">
                <li>
                  <p>Sort By</p>
                </li>
                <li>
                  <input type="radio" name="" id="" />
                  <span>Relevence(Default)</span>
                </li>
                {/* <li onClick={sort_by_delievery_time}>
                  <input type="radio" name="" id="" />
                  <span>Delivery Time</span>
                </li> */}
                {/* <li onClick={sort_by_rating}>
                  <input type="radio" name="" id="" />
                  <span>Rating</span>
                </li> */}
                <li>
                  <input type="radio" name="" id="" />
                  <span>Cost: Low to High</span>
                </li>
                <li>
                  <input type="radio" name="" id="" />
                  <span>Cost: High to Low</span>
                </li>
              </ul>
            </div>
            </div>
            </div>
        </div>

        <div className="body-card-container">
        {
          console.log(showNoData)
        }
          {showNoData?<NoSearchedData></NoSearchedData>:""}
          {finalData.map((elem, index) => {
            return <Card key={elem.info.id || index} restroData={elem} />;
          })}
          {/* <Card restroData={restroData}></Card> */}
        </div>
      </div>
    </>
  );
  
};

export default Body;
