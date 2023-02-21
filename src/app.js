import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import AddRecipe from "./pages/AddRecipe";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Container className="mt-3">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes/:id" component={RecipeDetails} />
          <Route exact path="/add-recipe" component={AddRecipe} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
