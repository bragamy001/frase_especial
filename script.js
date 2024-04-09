document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const genero = document.getElementById('genero').value;
    
    console.log('Nome:', nome);
    console.log('Idade:', idade);
    console.log('Gênero:', genero);
});
