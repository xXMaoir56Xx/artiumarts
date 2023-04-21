window.onload = extraerdatos;

let datos;

async function extraerdatos(){
    await fetch(
        "https://raw.githubusercontent.com/xXMaoir56Xx/artiumImagenes/main/imagenes.json"
    )
    .then((res) => res.json() )
    .then((imagenes) => {
        datos = imagenes;
        console.log(datos);
        insertarImagenes();
    })
    .catch((err) => console.log(err));
}

function insertarImagenes(){
    

    let cont = document.getElementById("#row portfolio-container");

    datos.results.forEach(element => {
        
    });((element) => {
        
    
    let div = document.createElement("div");
    div.setAttribute("class", element.contenedor);
    cont.appendChild(div);

    let div1 = document.createElement("div");
    div1.setAttribute("class", element.div1);
    div.appendChild(div1);

    let imagen = document.createElement("img");
    imagen.setAttribute("class", element.class);
    imagen.setAttribute("src", element.src);
    div1.appendChild(imagen);
    
    let div2 = document.createElement("div");
    div2.setAttribute("class", element.div2);
    div1.appendChild(div2);

    let h4 = document.createElement("h4");
    h4.setAttribute("h4", element.h4);
    div1.appendChild(h4);

    let p = document.createElement("p");
    p.setAttribute("p", element.p);
    div1.appendChild(p);

    let div3 = document.createElement("div");
    div3.setAttribute("class", element.div3);
    div.appendChild(div3);

    let a = document.createElement("a");
    a.setAttribute("href", element.href);
    a.setAttribute("data-gallery", element.data-gallery);
    a.setAttribute("class", element.class1);
    a.setAttribute("title", element.title);
    div3.appendChild(a);

    let i = document.createElement("i");
    i.setAttribute("class", element.i);
    a.appendChild(i);

    


    });

   
    
    
}