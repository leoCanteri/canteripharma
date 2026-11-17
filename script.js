function adicionarAoCarrinho(nomeProduto) {
    alert(`Sucesso! O produto "${nomeProduto}" foi adicionado ao seu carrinho.`);
}

function buscarProduto() {
    const termoBusca = document.getElementById('campo-busca').value;
    
    if (termoBusca.trim() === "") {
        alert("Por favor, digite o nome de um medicamento ou produto.");
    } else {
        alert(`Buscando por: "${termoBusca}"...`);
    }
}


function verCarrinho() {
    if (listaProdutosCarrinho.length === 0) {
        alert("Seu carrinho está vazio no momento.");
        return;
    }

    const numeroWhatsApp = "554299806-4787"; 
    let textoMensagem = "Olá, Canteri Pharma! Gostaria de fazer o seguinte pedido:\n\n";
    
    listaProdutosCarrinho.forEach((produto, index) => {
        textoMensagem += `${index + 1}. ${produto}\n`;
    });

    const linkWhatsApp = `https://wa.me{numeroWhatsApp}?text=${encodeURIComponent(textoMensagem)}`;
    window.open(linkWhatsApp, '_blank');
}






jj 


document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");

    // Função para executar a busca
    function executarBusca() {
        const termo = searchInput.value.trim();
        if (termo !== "") {
            alert("Buscando por: " + termo);
            // Aqui você pode redirecionar ou filtrar os produtos na tela
        } else {
            alert("Por favor, digite um produto para buscar.");
        }
    }

    // Evento de clique no botão "Buscar"
    searchButton.addEventListener("click", executarBusca);

    // Evento de apertar "Enter" no teclado dentro do campo
    searchInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            executarBusca();
        }
    });
});



