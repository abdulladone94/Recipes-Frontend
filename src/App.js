import "./App.css";
import AddRecipe from "./components/addRecipe";
import NavigationBar from "./components/navigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditRecipe from "./components/editRecipe";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route exact path="/add" element={<AddRecipe />} />

        <Route exact path="/edit" element={<EditRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
