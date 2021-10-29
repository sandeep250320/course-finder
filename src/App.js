import "./App.css";
import Header from "./HeaderComponent/Header";
import CardOne from "./BodyComponent/Card.jsx";
import Cards from  "./BodyComponent/Sdata.jsx";
import  "./BodyComponent/Card.css"
function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        {Cards.map(CardOne)}
      </div>
    </div>
  );
}

export default App;
