const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;                   //it will check if all the images are loaded correctly or not if evyerthing is loaded it will chnage to true.
let imagesLoaded = 0;               //it will tell how many umages has been loaded 
let totalImages = 0;                //it will tell how many total iamges are there 
let photosArray = [];

// Unsplash API
const count = 30;                                                      //no.of images we want to show
const apiKey = "rnyld1hiikbcOflED9aEGNPLRwvUEHUdRYLHT_VbyLU";        //api key will use to make api calls and it wll also track of how many calls we made without the api(access) key we will not ablw to access the data.
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;   //url is client id. (in location in public authentication pn uplash developers site)

// Check if all images were loaded
function imageLoaded() {
  console.log("image loaded");
  imagesLoaded++;
  if (imagesLoaded === totalImages) {           
    ready = true;
    loader.hidden = true;
    console.log("ready =", ready);
  }
}

// Helper function to set attributes on DOM elements
function setAttributes(element, attributes) {
  // element.setAttribute(href, photo.links.html)       //thats what hapening here.
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}


// Create Elements for Links and Photos, Add to DOM
function displayPhotos() {
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    imagesLoaded = 0;
    totalImages = photosArray.length;
    console.log("total images", totalImages);
    
    //   Create <a> to link to Unsplash
    const item = document.createElement("a");
    // item.setAttribute("href", photo.links.html);
    // item.setAttribute("target", "_blank");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });


    //   Create <img> for photo
    const img = document.createElement("img");
    // img.setAttribute("src", photo.urls.regular);
    // img.setAttribute("alt", photo.alt_description);
    // img.setAttribute("title", photo.alt_description);
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    // Event Listener, check when each image is finished loading
    img.addEventListener("load", imageLoaded);

    //   Put <img> inside <a>, then put <a> inside imageContainer
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}


// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();

    displayPhotos();
  } catch (error) {
    // Catch Error Here
    console.log(error);
  }
}


// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

// On Load
getPhotos();