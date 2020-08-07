axios.get('https://api.github.com/users/nicola-12')
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.warn(error);
});