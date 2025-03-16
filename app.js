//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome) {
        amigos.push(nome);
        atualizarLista();
        input.value = '';
        input.focus();
    } else {
        alert('Por favor, digite um nome.');
    }
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = amigo;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removerAmigo(index);
        listItem.appendChild(removeButton);
        listaAmigos.appendChild(listItem);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Você precisa de pelo menos 2 amigos para realizar o sorteio');
        return;
    }

    const resultado = [];
    const amigosDisponiveis = [...amigos];

    amigos.forEach((amigo) => {
        let indiceAleatorio;
        let amigoSorteado;

        do {
            indiceAleatorio = Math.floor(Math.random() * amigosDisponiveis.length);
            amigoSorteado = amigosDisponiveis[indiceAleatorio];
        } while (amigo === amigoSorteado);

        resultado.push(`${amigo} tirou ${amigoSorteado}`);
        amigosDisponiveis.splice(indiceAleatorio, 1);
    });

    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';

    resultado.forEach((sorteio) => {
        const listItem = document.createElement('li');
        listItem.textContent = sorteio;
        listaResultado.appendChild(listItem);
    });
}