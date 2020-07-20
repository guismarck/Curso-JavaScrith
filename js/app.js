// Eliminar de Local Storage y manipulacion de DOM
localStorage.clear();

/*let elemnto;
elemnto = document;
elemnto = document.all;
elemnto = document.all(10);
elemnto = document.head;
elemnto = document.body;
elemnto = document.domain;
elemnto = document.URL;
elemnto = document.forms;
elemnto = document.characterSet
elemnto = document.forms[0];
//elemnto = document.forms[1].id;
elemnto = document.forms[0].className;
elemnto = document.forms[0].classList;
elemnto = document.forms[0].classList[0];

elemnto = document.images;
elemnto = document.images[2];
elemnto = document.images[2].getAttribute('src');

//console.log(elemnto);
// scripts //

elemnto = document.scripts;
let imagenes = document.images;
let imagesArr = Array.from(imagenes);

imagesArr.forEach(function(imagen) {
    console.log(imagen);
});
-------------------------------------------------------------------
console.log(imagesAr);*/


//------SELECTORES DEL DOM --------------///

//SELECTOR getElemntById de un lemento/ Seleccionando elementos y aplicandole propiedades

/*let elemento ;
elemento = document.getElementById('hero');
elemento = document.getElementById('hero').id;
elemento = document.getElementById('hero').className;

elemento = document.getElementById('header');
console.log(elemento);*/

//let encabezado ;
//encabezado = document.getElementById('encabezado').id;
//encabezado = document.getElementById('encabezado').textContent;
//encabezado = document.getElementById('encabezado').innerText;
//encabezado = document.getElementById('encabezado');
//encabezado.style.background = '#333';
//encabezado.style.color = '#fff';
//encabezado.style.padding = '20px';

//carbia textos//
//encabezado.textContent = 'Los Mejores Cursos'
//encabezado.innerText = 'Los Mejores Cursos'
//console.log(encabezado.innerText);

//SELECTOR Query Selector 46. Seleccionando un elemento en JavaScript
const Encabezado = document.querySelector('#encabezado');
//aplicamos CSS
//Encabezado.style.backgaoud.color = '#333';
Encabezado.style.color = '#fff';
Encabezado.style.padding = '20px';
Encabezado.textContent ='Los Mejores CURSOS'
//const Encabezado = document.querySelector('#encabezado');
//const Encabezado = document.querySelector('h1 ');
console.log(Encabezado);



