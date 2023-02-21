import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import RecipeList from "../components/RecipeList";
import { searchRecipes } from "../api/spoonacular";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await searchRecipes(searchTerm);
    setRecipes(results);
  };

  return (
    <>
      <Form onSubmit={handleSearch}>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Search for recipes"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <RecipeList recipes={recipes} />
    </>
  );
}

export default Home;
