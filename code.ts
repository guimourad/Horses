interface Cavalo {
    nome: string;
    descricao: string;
    imagem: string;
}

const cavalos: Cavalo[] = [
    { nome: "Sirius", descricao: "Arabe", imagem: "cavalos/sirius.jpg" },
    { nome: "Polaris", descricao: "Puro sangue Ingles", imagem: "cavalos/polaris.jpg" },
    { nome: "Himalaia", descricao: "Manga-larga", imagem: "cavalos/Himalaia.jpg"},
    { nome: "Havena", descricao: "Manga-larga", imagem: "cavalos/.jpg"},
    { nome: "BelaTrix", descricao: "Manga-larga", imagem: "cavalos/BelaTrix.jpg"},
    { nome: "Oreon", descricao: "Manga-larga", imagem: "cavalos/oreon.jpg"}
];

cavalos.forEach((cavalo, index) => {
    const cavaloDiv = document.getElementById(`cavalo${index + 1}`);
    const imagem = document.getElementById(`imagem${index + 1}`) as HTMLImageElement;
    const nome = document.getElementById(`nome${index + 1}`);
    const descricao = document.getElementById(`descricao${index + 1}`);

    if (cavaloDiv && imagem && nome && descricao) {
        imagem.src = cavalo.imagem;
        imagem.alt = `Foto do ${cavalo.nome}`;
        nome.textContent = cavalo.nome;
        descricao.textContent = cavalo.descricao;
    }
});


