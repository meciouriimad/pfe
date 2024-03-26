import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const RecipeDetails = ({ particularRecipe, handleClose }) => {
   
  return (
    <Modal show={true} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{particularRecipe.recipename}</Modal.Title>
    </Modal.Header>
    <Modal.Body>                  
      <p>Description: {particularRecipe.description}</p>
      <p>Instructions: {particularRecipe.instructions}</p>
      <p>Ratings: {particularRecipe.ratings}/10</p>
      <p>Cook Time: {particularRecipe.cooktime} h</p>
      <p>Preparation Time: {particularRecipe.preparationtime} h</p>
      <h4>Ingredients:</h4>
      <ul>
        {particularRecipe.ingredient.map((ingredient, index) => (
          <li key={index}>
            <a href={ingredient.link}>{ingredient.quantity} {ingredient.unit} {ingredient.ingredient_name} </a>
          </li>
        ))}
      </ul>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default RecipeDetails
