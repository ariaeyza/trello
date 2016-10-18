window.addEventListener("load", trello);

function trello() {
    var contenedor = document.getElementById("contAll");
    var subContenedor = document.getElementById("contList");
    var spanList = document.getElementById("spanList");
    var form = document.getElementById("form");
    var nameList = document.getElementById("inputList");
    var btnSave = document.getElementById("buttonSave");

    //apareceForm
    spanList.addEventListener("click", function (e){
        e.preventDefault();
        spanList.style.display = "none";
        form.style.display = "block";
        nameList.focus();
    });

    btnSave.addEventListener("click", function (e) {
        e.preventDefault();
        //tituloLista
        form.style.display = "none";

        var tittleList = document.createElement("span");
        var enlaceAgregar = document.createElement("a");

        tittleList.classList.add("d-block", "text-center", "tittleList");
        enlaceAgregar.classList.add("d-block", "text-center", "cursor-pointer", "enlaceAgregar");

        tittleList.innerHTML = nameList.value;
        enlaceAgregar.innerHTML = "Agregar nueva tarea..."

        spanList.parentElement.appendChild(tittleList);
        spanList.parentElement.appendChild(enlaceAgregar);
        nameList.value = "";
        //Se empieza agregar nuevas listas a la derecha
        var newContenedor = document.createElement("div");
        contenedor.appendChild(newContenedor);
        newContenedor.appendChild(spanList);
        newContenedor.appendChild(form);
        newContenedor.classList.add("newContenedor","d-inlineblock");
        spanList.style.display = "inline-block";
        
        var contTarjeta = document.createElement("div");
        contTarjeta.classList.add("contTarjeta");

        enlaceAgregar.parentElement.insertBefore(contTarjeta, enlaceAgregar.parentElement.children[3]);
    });
}