window.onload= ()=>{
    const hiddenSection = document.getElementById('hidden');
    hiddenSection.classList.add('fadein');
    
    const boton = document.getElementById("randomJoke");
    boton.addEventListener("click", clickedButton);

    const inputRepos = document.getElementById("inputRepos");

    inputRepos.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {  
            githubApi(inputRepos.value);
        }
    });
}

// Funcion que toma un objeto con una url para realizar un get a una API y devolver una promesa

function get(config){
     let {url} = config;
    return new Promise(function(resolve,reject){
        const anHttpRequest = new XMLHttpRequest();
        anHttpRequest.open( "GET", url);            
        
        anHttpRequest.onload = function(){
            if(anHttpRequest.status == 200){
                resolve(anHttpRequest.response);
            }
            else{
                reject(Error(anHttpRequest.statusText));
            }
        };
        anHttpRequest.onerror = function() {
         reject(Error("Network Error"));
        };

        anHttpRequest.send();
    });
}
  
// Llama a una api que devuelve un chiste y lo muestra en una seccion del HTML

function clickedButton(){
    let config = {url:'http://api.icndb.com/jokes/random'}
    get(config).then(function(response) {

        const jokeSection = document.getElementById("sect1");
        const jokeArticle = document.createElement("article"); 
        const joke = JSON.parse(response);    
        const jokeText = document.createTextNode(joke["value"]["joke"]);     

        jokeSection.innerHTML= '';             
        jokeArticle.appendChild(jokeText);
        jokeSection.appendChild(node);

    },function(error){
        console.log("failed", error)
    });
}

// llama a la api de github con el valor del campo de input

function githubApi(q){
    let config = {url:'https://api.github.com/search/repositories?q=' + q}
    if(q === ''){
        alert("Ingrese un valor de búsqueda");
    }
    
    get(config).then(function(response){
        const repositories = JSON.parse(response);
        const listaRepos = document.getElementById("listaRepos");
        listaRepos.innerHTML = '';

        for(let i = 0; i<30;i++){
        console.log(repositories["items"][i]["full_name"]);
        let item = document.createElement("li")
        let nombreRepo = document.createTextNode(repositories["items"][i]["full_name"]);
        item.appendChild(nombreRepo);
        listaRepos.appendChild(item);
        }
    
    },function(error){
        console.log("failed", error)
    })
}

// A partir de un arreglo de dos dimensiones forma una tabla

function crearTabla(arr){
    const contTable = document.getElementById("contTable");
    const table = document.createElement("table");
    const tBody = document.createElement("tbody");

    for (let i = 0; i <arr.length;i++){
        const row = document.createElement("tr");
        for (let j=0; j < arr[i].length;j++){
            const cell = document.createElement("td");
            const cellText = document.createTextNode(arr[i][j]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tBody.appendChild(row);
    }
    
    table.appendChild(tBody);    
    contTable.appendChild(table);
    table.setAttribute("border", "2");
}

