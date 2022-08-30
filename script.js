
let dragged = null;
let dx ;
let dy ;

document.addEventListener("dragstart", (event) => {
  // store a ref. on the dragged elem
  dragged = event.target;
  dx = event.clientX - dragged.getBoundingClientRect().x;
  dy = event.clientY - dragged.getBoundingClientRect().y;
  
  // console.log("começou")
});

document.addEventListener("dragover", (event) => {
  // prevent default to allow drop
  event.preventDefault();
  // console.log(event, dx)
  dragged.style.position = 'absolute';
  // dragged.style.zIndex = 999999;
  dragged.style.transform = `translate(${event.clientX - dx}px,${event.clientY - dy}px)`;
});

document.addEventListener("drop", (event) => {
  // console.log("soltou")
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target
  if (event.target.className === "drop") {
    console.log(dragged)
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
  dragged.style.position = 'relative';
  dragged.style.transform = 'unset';
  dragged = undefined;
  dx = dy = 0;

});