//see line 13 + 1 number after the ,

import React, {useEffect, useState} from 'react';

import Recipe from './Recipe';
import './App.css';

const App = () => {

const APP_ID ="12e3bacd";
const APP_Key ="9ede987946f451e821401a575e67980a";
const [recipes, setRecipes] = useState([]);
const [calories, setCalories] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('chicken');
useEffect(() =>{
  getRecipes();
},[query]);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_Key}`
  );
const data = await response.json(); 
setRecipes(data.hits);
console.log(data.hits);
};
const updateSearch = e => {setSearch(e.target.value);};
const getSearch = e => {e.preventDefault();setQuery(search); setSearch('')};

return(<div className="App">
  <h1>Cookbook</h1>
  <form onSubmit={getSearch} className = "search-form">
    <input 
    className="search-bar"
    type="text"
    value={search}
    onChange={updateSearch}
    />
    <button className = "search-button" type="submit"> recipe  </button>

    <button className = "cal-button" type="submit"> calories  </button>

  </form>
{recipes.map(recipe=> ( 
  <Recipe 
  key={recipe.recipe.label}
  title={recipe.recipe.label}
  calories={recipe.recipe.calories}
  image={recipe.recipe.image}  
ingredients={recipe.recipe.ingredients}  
  />
  ))}
  </div>
  );
};
export default App;
