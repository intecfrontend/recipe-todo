import React,{useState, useEffect} from 'react';
import Recipe from './Recipe';
import './App.css';
import Header from './header'
const App = () => {
const APP_ID ="12e3bacd";
const APP_Key ="9ede987946f451e821401a575e67980a";

//const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_Key}`;

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState('chicken');

useEffect(() => {getRecipes();}, [query]);



const getRecipes = async()=> {
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_Key}`);
    const data = await response.json();
    setRecipes(data.hits);
    // new Array(5))].map((_, i) => i + 1
    console.log(data.hits)
  };

  //const updateSearch = e => {setSearch(e.target.value); console.log(search)};
const getSearch = e => {
  console.log(search);
  e.preventDefault();
  if(search!=''){
  setQuery(search); setSearch('');
}}

const updateSearch=(e)=>{
  setSearch(e.target.value);
  console.log(search);
}

return (
<div className="App">


<form onSubmit={getSearch} className="search-form">
<Header updatequery={updateSearch}>


    
  
</Header>
</form>

  
  
  <div className="Appwrap">
{recipes.map(recipe =>(
  <Recipe key={recipe.recipe.calories} title={recipe.recipe.label}
  calories={ recipe.recipe.calories}
  image={recipe.recipe.image}
  ingredients={recipe.recipe.ingredients}
  />))}
  </div>
</div>
);
};


export default App;