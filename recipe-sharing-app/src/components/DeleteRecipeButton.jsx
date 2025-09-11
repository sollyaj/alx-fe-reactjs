import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const filterRecipes = useRecipeStore((s) => s.filterRecipes);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!window.confirm('Are you sure you want to delete this recipe?')) return;
    deleteRecipe(recipeId);
    // refresh filtered array
    filterRecipes();
    // navigate back to list
    navigate('/');
  };

  return (
    <button
      onClick={handleDelete}
      style={{ marginTop: '10px', marginLeft: '10px', color: 'white', background: 'red', border: 'none', padding: '8px' }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;

