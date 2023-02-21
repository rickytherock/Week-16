import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, ListGroup } from "react-bootstrap";
import { getRecipe, deleteRecipe } from "../api/spoonacular";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getRecipe(id);
      setRecipe(result);
    };
    fetchData();
  }, [id]);

  const handleDelete = async () => {
    const result = await deleteRecipe(id);
    console.log(result); // do something with the result, e.g. redirect to home page
  };

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Card className="mb-3">
        <Card.Img variant="top" src={recipe.image} />
        <Card.Body>
          <Card.Title>{recipe.title}</Card.Title>
          <Card.Text>{recipe.summary}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {recipe.extendedIngredients.map((ingredient) => (
            <ListGroup.Item key={ingredient.id}>
              {ingredient.original}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Body>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default RecipeDetails;
