import React from "react";
import "./Searchpage.css";
import { Button } from "@mui/material";
import SearchResult from "../../Components/SearchResult/SearchResult";

const Searchpage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage-info">
        <p>62 stays · 22 December to 30 December · 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/airflow/Hosting-719933856502762445/original/9162d55d-fd55-448f-9f97-23472fed24c6.jpg?im_w=720&im_format=avif"
        location="Private room in guest suite in Johannesburg, South Africa"
        title="Stay at this majestic Sandton house"
        description="2 guests · 1 bedroom · 1 bed · 1 private bath"
        star={4.4}
        price="R514 / night"
        total="R4,112"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODc1MDU0MzkxODEzOTczNjY5/original/2792a2f6-b2f3-4ebb-a557-780d2a0731fb.jpeg?im_w=1200&im_format=avif"
        location="Entire home in Randburg, South Africa"
        title="Stay at this beautiful Randburg house"
        description="2 guests · 1 bedroom · 1 bed · 1.5 private bath"
        star={4.92}
        price="R2000 / night"
        total="R8,000"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-922391321344014793/original/be9808b0-7062-4c64-9bab-8a081a68c958.jpeg?im_w=1200&im_format=avif"
        location="Entire home in Randburg, South Africa"
        title="Luxury solar powered villa with pool and sauna
"
        description="8 guests · 3 bedroom · 7 bed · 2.5 private bath"
        star={4.92}
        price="R2,400 / night"
        total="R19,200"
      />
    </div>
  );
};

export default Searchpage;
