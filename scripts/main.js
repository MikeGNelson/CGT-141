
// This function gets called when the page finishes loading
window.onload = function() {
  //import data from './data/data.json';
  const data = [{
          "title": "Steam",
          "content": "Welcome to Steam",
          "image": "images/steam.jpg"
        }, {
          "title": "Nintendo",
          "content": "Welcome to Switch",
          "image": "images/switch.jpg"
        }, {
          "title": "Sony",
          "content": "Welcome to PS5",
          "image": "images/ps5.jpg"
        }, {
          "title": "Microsoft",
          "content": "Welcome to Xbox",
          "image": "images/xbox.jpg"
        }
      ]
  ;


  // Get Data from URL
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const title = urlParams.get('title')

  // Get values in html 
  const title_Element = document.getElementById("title");
  const content_Element = document.getElementById("content");
  const image_Element = document.getElementById("image");

  // Set content of the html page based on data
  Object.entries(data).forEach((entry) => {
      const [key, value] = entry;
      console.log(`${value.title}, ${value.content}`);

      if(key == title)
      {
          title_Element.innerText = value.title;
          content_Element.innerText = value.content;
          image_Element.src = value.image;
      }
    });


};
