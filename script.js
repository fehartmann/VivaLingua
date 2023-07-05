// Banco 1: Newsletter

const newsletter = [
    {
    nomeCompleto: "Fernanda Hartmann",
    email: "fhartmann@gmail.com",
    telefone: "(81)99999-9999"
    }
]

function cadastro (nomeCompleto, email, telefone) {
    return {
        nomeCompleto : nomeCompleto,
        email : email,
        telefone : telefone
    }    
}

function adicionar (nomeCompleto, email, telefone, array) {
    array.push(cadastro (nomeCompleto, email, telefone))
}

// adicionar("Anne Beatriz", "bm@gmail.com", "99989-8888", newsletter)
// adicionar("Marina souza", "marina@gmail.com", "98888-6666", newsletter)
// console.log("Cadastros na Newsletter ", newsletter)

// Banco 2: Formulário--------------------------

const formulario = [
    {
    nomeCompleto: "Fernanda Hartmann",
    email: "nomecompleto@gmail.com",
    telefone: "(81)99999-9999",
    mensagem: "Adiciona uma mensagem de dúvida"
    }
]

function novoContato (nomeCompleto, email, telefone, mensagem) {
    return {
        nomeCompleto: nomeCompleto,
        email: email,
        telefone: telefone,
        mensagem: mensagem
    }
}

function adicionarContato (nomeCompleto, email, telefone, mensagem, array) {
    array.push(novoContato (nomeCompleto, email, telefone, mensagem))
}

// console.log("Pedidos de contato via formulário ", formulario)

// Banco 3: Programas--------------------------

const programas = [
    {
        nome: "Trabalhar nos EUA",
        idioma: "Inglês",
        pais: "Estados Unidos",
        duracao: "6 meses",
        valor: 10000.00,
        sobre: "Ut pellentesque hendrerit tellus, id fringilla elit eleifend sed. Aliquam tincidunt nibh sapien, vitae aliquam nibh facilisis ut. Donec aliquet ut metus quis mollis. Integer euismod libero viverra hendrerit congue. Duis quis sagittis neque, nec laoreet justo. Ut quis quam felis."
    },
    {
        nome: "Trabalhar e Estudar em um College ou Curso Técnico",
        idioma: "Inglês",
        pais: "Estados Unidos",
        duracao: "2 anos",
        valor: 35000.00,
        sobre: "Mauris vel blandit ligula, eget molestie purus. Nullam lorem mi, tempus ac venenatis quis, porta sed diam. Fusce hendrerit, elit nec varius pharetra, enim metus gravida erat, nec ullamcorper ligula dui ut metus. Nullam orci risus, porta sit amet sapien nec, porta eleifend urna. Nullam arcu risus, maximus ut viverra nec, tempor ut arcu."
    },
    {
        nome: "Trabalho voluntário na África do Sul",
        idioma: "Inglês",
        pais: "África do Sul",
        duracao: "6 meses",
        valor: 8000.00,
        sobre: "Pellentesque et aliquet ligula. Donec in lorem lacus. Aliquam ac mattis erat. Nulla vehicula luctus tristique. Praesent euismod velit ipsum, vel hendrerit sapien consectetur eget. Sed imperdiet purus non odio volutpat tempor. Ut viverra justo ipsum, non auctor mi laoreet vel. Donec faucibus lacus non ex tempor convallis. Sed vitae lorem eu justo faucibus maximus eu id ante. "
    },
    {
        nome: "Imigrar para o Canadá",
        idioma: "Inglês",
        pais: "Canadá",
        duracao: "6 meses",
        valor: 20000.00,
        sobre: "Suspendisse sed finibus magna. Nam ac aliquam massa. Integer semper id diam et condimentum. Vestibulum dapibus mollis erat eget rhoncus. Donec sit amet turpis id ipsum euismod maximus at vel ex. Sed ultrices tortor in erat porttitor tempor. Proin elit justo, imperdiet at hendrerit sit amet, egestas in nibh. Donec maximus tortor sed nisi scelerisque, et efficitur dui elementum. Vestibulum finibus arcu sapien, aliquet volutpat odio eleifend eget."
    },
    {
        nome: "Au pair",
        idioma: "Inglês",
        pais: ["Estados Unidos", "Canadá", "Inglaterra"],
        duracao: "6 meses",
        valor: 15000.00,
        sobre: "Praesent pellentesque tincidunt enim a porta. Phasellus lorem mi, congue id mi vel, fermentum mattis ligula. Curabitur sed purus quam. Quisque ultrices, ligula eu volutpat suscipit, tellus risus placerat erat, id hendrerit libero lacus a est. Vestibulum velit velit, efficitur nec convallis in, pulvinar porttitor nisl. Nullam non ultrices lacus, vitae pulvinar lorem."
    },
    {
        nome: "Trabalhar e estudar um idioma",
        idioma: ["Inglês", "Espanhol"],
        pais: ["Estados Unidos", "Canadá", "Inglaterra", "Espanha"],
        duracao: "6 meses",
        valor: 15000.00,
        sobre: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum est quam, a lacinia leo varius in. Mauris sit amet metus blandit, semper quam sit amet, auctor sapien. Proin lorem nisl, commodo et aliquam at, bibendum rutrum elit. Integer massa justo, laoreet id dui vitae, tempus eleifend orci. Cras sit amet justo ut odio eleifend finibus. Nullam at auctor turpis. Vivamus maximus aliquam quam, sed consectetur sapien mollis a. Donec pharetra arcu ac pellentesque porta."
    }
]

function novoPrograma (nomePrograma, idioma, pais, duracao, valor, sobre) {
    return {
        nomePrograma: nomePrograma,
        idioma: idioma,
        pais: pais,
        duracao: duracao,
        valor: valor,
        sobre: sobre
    }
}

function adicionarPrograma (nomePrograma, idioma, pais, duracao, valor, sobre, array) {
    array.push(novoPrograma (nomePrograma, idioma, pais, duracao, valor, sobre))
}

// adicionarPrograma ("Imersão em inglês", "Inglês", ["EUA", "Itália", "Inglaterra", "Canadá"], "6 meses", 10000.00, "Sed laoreet nibh at tellus elementum, nec interdum leo ullamcorper. Sed non augue pellentesque, facilisis risus sit amet, tincidunt magna. Phasellus id leo eros. Fusce accumsan, mi bibendum aliquam ultricies, risus quam egestas turpis, eget auctor erat est quis est. Proin volutpat et quam sit amet facilisis. Suspendisse hendrerit urna eros, et semper mauris aliquet eget.", programas)

// console.log("Programas disponíveis: ", programas)

// Banco 4: Blog--------------------------

const blog = [
    {
        titulo: "Passo a passo para tirar o seu passaporte",
        imagem: "https://fehartmann.github.io/VivaLingua/imagens/documentos-para-tirar-passaporte-blog-ua-br.jpg",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et vehicula ex. Fusce eget odio cursus, pellentesque quam id, viverra erat. In elementum eros sed elit efficitur, et maximus nulla malesuada. Curabitur nec mauris mauris. Nulla fermentum, turpis quis sollicitudin varius, mi nisl fermentum nulla, non convallis nibh justo sed lectus. Aliquam pulvinar sapien sit amet egestas rhoncus. Nunc quis purus rhoncus nisl finibus ultricies ac a leo. Maecenas rhoncus libero eget dui varius ullamcorper. Aliquam eu aliquet eros, non tristique tellus."
    },
    {
        titulo: "Os melhores destinos para estudar inglês",
        imagem: "https://fehartmann.github.io/VivaLingua/imagens/paises_para_fazer_intercambio.jpg",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus nisi tincidunt, pretium ante at, facilisis ligula. Vivamus luctus sapien ac sagittis ultrices. Mauris at nibh ac risus fringilla tristique. Donec sit amet sem eget dolor mollis hendrerit. Nulla imperdiet ante semper, cursus dui nec, condimentum neque. Maecenas convallis erat sed consectetur pellentesque. Etiam vel lectus volutpat, iaculis nibh nec, cursus nibh."
    },
    {
        titulo: "Dicas para estudar inglês",
        imagem: "https://fehartmann.github.io/VivaLingua/imagens/paises_para_fazer_intercambio.jpg",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit vehicula vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean eget eros et turpis suscipit tempus vitae quis lectus. Cras tincidunt tristique purus, et tincidunt nisl sodales ut. Pellentesque elementum eros ac accumsan tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at maximus sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean posuere sagittis faucibus. Aenean ac gravida augue."
    }
]

function novoPost (tituloPost, imagem, texto) {
    return {
        titulo: tituloPost,
        imagem: imagem,
        texto: texto
    }
}

function adicionarPost (tituloPost, imagem, texto, array) {
    array.push(novoPost (tituloPost, imagem, texto))
}

// console.log("Posts do blog VivaLíngua: ", blog)

// Banco 5: Formulário Orçamentos----------------------------------

const orcamento = [
    {
        nome: "Fernanda Hartmann",
        email: "fhartmann@gmail.com",
        dataNascimento: "08/06/1990",
        telefone: "(81)99999-9999",
        destino: ["Estados Unidos"],
        data: ["18/09/2023"],
        programa: ["Trabalhar e estudar um idioma"],
        duracao: "6 meses",
        mensagem: "Gostaria de mais informações"
    }
]

function novoOrcamento (nome, email, dataNascto, telefone, destino, data, programa, duracao, mensagem) {
    return {
        nome: nome,
        email: email,
        dataNascimento: dataNascto,
        telefone: telefone,
        destino: [destino],
        data: [data],
        programa: [programa],
        duracao: duracao,
        mensagem: mensagem
    }
}

function adicionarOrcamento (nome, email, dataNascto, telefone, destino, data, programa, duracao, mensagem, array) {
    array.push(novoOrcamento (nome, email, dataNascto, telefone, destino, data, programa, duracao, mensagem))
}

// console.log("Solicitações de orçamento: ", orcamento)

// Transformando em JSON
function conversao (array) {
    const jsonData = JSON.stringify(array)
    console.log(jsonData)
}

conversao(newsletter)
conversao(formulario)
conversao(programas)
conversao(blog)
conversao(orcamento)

//Inserindo dados no LocalStorage
let keyLocalStorage = document.querySelector('.nome')
localStorage.setItem(nome, keyLocalStorage)

//Interatividade na página
let botaoCadastrar = document.querySelector('.btn')
botaoCadastrar.onclick = function() {
    alert('Formulário enviado com sucesso!')
}

