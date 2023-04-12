var api = "https://randomuser.me/api/";
var nombre = document.querySelector("#fullname");
var user = document.querySelector("#username");
var foto = document.querySelector("#avatar");
var email = document.querySelector("#email");
var ciudad = document.querySelector("#city");
var boton = document.querySelector("#btn");
var botonPrueba = document.querySelector(".prueba");

botonPrueba.addEventListener("click", function(){
    alert("Funciona el boton")
})

boton.addEventListener("click", function(){
    fetch(api)
    .then(function(response){
        if(!response.ok){
            throw Error (response.status);
        }
        return response.json();
    }).then(function(data){
        console.log(data);
        user.textContent = data.results[0].login.username;
        nombre.textContent = data.results[0].name.first + " " + data.results[0].name.last;
        email.textContent= data.results[0].email;
        ciudad.textContent = data.results[0].location.city;
        foto.src = data.results[0].picture.large;
    
    }).catch(function(error){
        console.log("Hubo un problema, error: ", error);
    })
});
