const productos = [
    {
        title: "Maceteros",
        price: "200gambita",
        url: "https://i0.wp.com/interactiva.uvic.cat/bloc/wp-content/uploads/sites/2/2021/03/Eksf11vXYAER2KT.jpeg?fit=973%2C760"
    },
    {
        title: "Fertilizante",
        price: "2 chelines",
        url: "https://c.tenor.com/4jIoEQoGLBMAAAAM/dcre-meme.gif"
    },
    {
        title: "Ficus",
        price: "5 peso",
        url: "https://i.imgflip.com/2iwi2u.jpg"
    },
    {
        title: "Calathea",
        price: "porrito de luka",
        url: "https://c.tenor.com/Y6xuqwS3p4MAAAAd/besho-meme.gif"
    }

]

var texto_iterable=""

productos.forEach((element) => {

    var tarjetita_html = `<div class="col">
        <div class="card" style="width: 18rem;">
            <img src="${element.url}" class="card-img-top" alt="foto">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.price}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
            </div>
        </div>
    </div>`
    
    texto_iterable += tarjetita_html
    $("#productos").html( texto_iterable )
});


const users = [
    {
        name: "Admin",
        password: "Admin"
    },
    {
        name: "Visita",
        password: "Admin"
    }
    
]


