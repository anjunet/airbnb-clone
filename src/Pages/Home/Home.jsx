import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Card from "../../Components/Card/Card";
import { listListing } from "../../actions/listingAction";

const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector((state) => state.listingList);
  const { loading, error, listings } = listingList;

  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);

  return (
    <div>
      <Header />

      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error.message}</h3>
      ) : (
        <div className="home-section">
          {listings.map((listing) => (
            <Card
              key={listing.id}
              src={listing.img}
              title={listing.title}
              description={listing.description}
              price={listing.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
