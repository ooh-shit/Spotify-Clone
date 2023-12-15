import React from "react";
import SearchCard from "./SearchCard";
import data from "./Searchdata";
import Footer from "../../Footer/footer"

function SearchMain()
{

  function createSearchCard(item)
  {
    return <SearchCard title = {item.title} ImgUrl = {item.Image} />
  }

  return <div className="searchMain">
    <h1 id="browse">Browse All</h1>
    <div className="searchCardGrid">
      {data.map(createSearchCard)}
    </div>
    <Footer />
  </div>
}

export default SearchMain