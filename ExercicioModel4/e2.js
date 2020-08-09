
var inputElement = document.querySelector('input');
var elElement = document.querySelector('ul');

function pegarRepositorio() {
    elElement.innerHTML = "";
    var liElement = document.createElement('li');
    liElement.innerText = "Carregando...";

    elElement.appendChild(liElement);

    var input = inputElement.value;

    axios.get(`https://api.github.com/users/${input}/repos`,{ validateStatus: false }).then(response => {
        elElement.innerHTML = "";
        if (response.status === 200) {
            response.data.forEach(renderRepo)
        } else {

            console.log("FATAL");
            var liElement = document.createElement('li');
            liElement.innerText = "Usuário não encontrado";

            elElement.appendChild(liElement);
        }
    });

}

function renderRepo(repositorio) {
    var liElement = document.createElement('li');
    liElement.innerText = repositorio.name;

    elElement.appendChild(liElement);
}