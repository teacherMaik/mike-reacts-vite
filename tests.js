

//const tumblrGifs = fetch('https://puppygifs.tumblr.com/api/read/json').then((response) => {})


async function getData() {
  const url = "https://restcountries.com/v3.1/all";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json[2].name.common + ' capital city: ' + json[2].capital);
  } catch (error) {
    console.error(error.message);
  }
}

getData();
