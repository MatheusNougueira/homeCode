var tabelaLivros = document.querySelector("#livros");
tabelaLivros.addEventListener("click", (evento) => { 
    var elementoClicado = evento.target;

    if (elementoClicado.dataset.type == "remocao") {
        var livroId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3000/livros/${livroId}`, { method: "DELETE" })
            .then(resposta => {

                var tr = elementoClicado.closest(`#livro_${livroId}`);
                tr.remove();

            })
            .catch(erro => console.log(erro));
    }
});