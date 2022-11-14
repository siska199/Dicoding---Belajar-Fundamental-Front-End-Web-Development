let imageFigureElement = document.querySelector("image-figure");

if (!imageFigureElement) {
  console.log("Create the element if the element dosent exist");
  imageFigureElement = document.createElement("image-figure");
  document.body.appendChild(imageFigureElement);
}

setTimeout(() => {
  console.log("text", imageFigureElement);
  imageFigureElement.setAttribute("caption", "Gambar-1");
}, 1000);

setTimeout(() => {
  imageFigureElement.removeAttribute("caption");
}, 3000);
