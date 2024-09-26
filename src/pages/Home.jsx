import React from 'react';

var push = 'maik';

async function getData() {
  const url = "https://restcountries.com/v3.1/all";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return(json);
  } catch (error) {
    console.error(error.message);
  }
}

const countries = await getData();


function getValueFind(capitalCity) {

  return (countries.find(country => country.capital == capitalCity))
}

const country = getValueFind('Madrid');

const Home = () => {


  async function getData() {
    const url = "https://restcountries.com/v3.1/all";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      console.log('got response');
      const json = await response.json();
      return(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  const countries = getData();
  
  
  function getValueFind(capitalCity) {
  
    return (countries.find(country => country.capital == capitalCity))
  }
  
  const country = getValueFind('Madrid');


  return (

    <main>
      <h2>Hola Mundo</h2>
    </main>
  );
};

export default Home;