import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function RecipeList({ recipes }) {
  return (
    <Row className="mt-3">
      {recipes.map((recipe) => (
        <Col md={4} key={recipe.id}>
          <Card className="mb-3">
            <Link to={`/recipes/${recipe.id}`}>
              <Card.Img variant="top" src={recipe.image} />
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
              </Card.Body>
            </Link>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default RecipeList;
