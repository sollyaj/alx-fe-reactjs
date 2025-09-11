import React, { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const filterRecipes = useRecipeStore((s) => s.filterRecipes);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = { ...recipe, title: title.trim(), description: description.trim() };
    updateRecipe(updated);
    // update filtered list
    filterRecipes();
    setEditing(false);
  };

  if (!editing) {
    return <button onClick={() => setEditing(true)}>Edit Recipe</button>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', marginBottom: '6px', width: '100%', padding: '6px' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: 'block', marginBottom: '6px', width: '100%', padding: '6px' }}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={() => setEditing(false)} style={{ marginLeft: '6px' }}>
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;

