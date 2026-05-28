// var root = document.querySelector("#root");

// var h1 = document.createElement('h1');

// // console.log(h1)
// // if we have to write anything in h1 so

// h1.innerHTML = "hellow from JS"

// root.appendChild(h1);



var h1 = React.createElement('h1', null, "Hellow from react");
var parent = document.querySelector("#parent");

var root = ReactDOM.createRoot(parent);

root.render(h1);