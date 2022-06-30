import React from 'react';



function RecipeScreen ({recipe, deleteRecipe, key}) {
  const url = recipe.photo
  
    return (
        
        <tr>
        
          <td> {recipe.name} </td>
          <td> {recipe.cuisine} </td>
          <td> <img src={url}/> </td>
          <td className='content_td'><p> {(recipe.ingredients)} </p> </td>
          <td className='content_td'><p> {(recipe.preparation)} </p> </td>
          <td><button name='delete' onClick={deleteRecipe}>Delete</button></td>
          
        </tr>
        )
}

export default RecipeScreen