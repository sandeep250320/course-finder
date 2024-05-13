import React  from "react";
import Cards from "./components/Cards";
import "./App.css";
import Header from "./components/Header";


const App = () => {
 
  return (<>

 
<Header/>
  <div class="sphere">
  
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>

</div>
  {/* <div class="tetrahedron">
    <div class="triangle"></div>
    <div class="triangle"></div>
    <div class="triangle"></div>
    <div class="triangle"></div>
  </div> */}
 
  <Cards/>
   </>
);
}
 
export default App;
