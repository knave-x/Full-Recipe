//import "./App.css";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Cuisine from "./pages/Cuisine";
import Search from "./components/Search";
import Recipe from "./pages/Recipe";
const App = () => {
  return (
    <div className=" App">
      <h1>Hello</h1>
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
        <Cuisine />
        <Recipe />
      </BrowserRouter>
    </div>
  );
};

export default App;
