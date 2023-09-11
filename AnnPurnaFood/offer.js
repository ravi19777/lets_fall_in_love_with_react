const BestOffer = ({offerList}) =>
{

    console.log("re-rendered");

    return(
        <>
            <h3>Best offer for you</h3>
            {
                offerList.map((elem) =>
                {
                    console.log(elem);
                    return(
                        <div className="offer-card-container">
                        <div className="offer-card-1">

                                {/* <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${elem.imageId}`} alt="FLAT 150" /> */}
                                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/d4cd7ac8ae2639c7c4b8942ef59b41ab`} alt="FLAT 150" />
                                
                            </div>
                        </div>
                    )
                })
            }
            
        </>
    )
};

export default BestOffer;