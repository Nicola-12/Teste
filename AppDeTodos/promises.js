var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users/nicola-12');
        xhr.send(null);

            xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.readyState === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisição');
                }
            }
        }
    });
}

minhaPromise()
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.warn(error);
});