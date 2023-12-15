import React from "react";
import TopNav from "./topnav/topNav";
import PlayDiv from "./playlist/PlayListDiv";
import RecDiv from "./recommended/RecDiv";
import Footer from "./Footer/footer";
import Search from "./Search/search";

function Main() 
{  
  return  <div className="main">
  <TopNav/>
  <PlayDiv/>
  <RecDiv/>
  <Footer/>
  <Search />
</div>
}

export default Main