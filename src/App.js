import logo from './logo.svg';
import './App.css';
import React from 'react';
import RecipeTitle from './RecipeTitle';
import RecipeRatings from './RecipeRatings';
import IngredientList from './IngredientList';

// TODO: Add recipe object
const recipe = {
  title: 'Mashed potatoes',
  feedback: {
      rating: 4.8,
      reviews: 20
  },
  ingredients: [
      { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
      { name: '4 Tbsp butter', prepared: false },
      { name: '1/8 cup heavy cream', prepared: false },
      { name: 'Salt', prepared: true },
      { name: 'Pepper', prepared: false },
  ],
  
};

function App() {
  return (
    <article>
      <h1> Recipe Manager </h1>
      <RecipeTitle title={ recipe.title } />
      <RecipeRatings feedback={recipe.feedback} />
      <IngredientList ingredients={recipe.ingredients}/>
    </article>
  );
}

export default App;
