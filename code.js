"use strict";
// Lista de cavalos com raça
const cavalos = [
    { nome: "Sirius", descricao: "chato", imagem: "cavalos/sirius.jpg", raca: "Árabe" },
    { nome: "Polaris", descricao: "a mais top", imagem: "cavalos/polaris.jpg", raca: "Puro Sangue Inglês" },
    { nome: "Himalaia", descricao: "veia", imagem: "cavalos/Himalaia.jpg", raca: "Mangalarga" },
    { nome: "Havena", descricao: "copia da polaris", imagem: "cavalos/polaris.jpg", raca: "Mangalarga" },
    { nome: "BelaTrix", descricao: "carrapenta", imagem: "cavalos/BelaTrix.jpg", raca: "Mangalarga" },
    { nome: "Oreon", descricao: "filho do japa", imagem: "cavalos/oreon.jpg", raca: "Mangalarga" }
];
// Função para renderizar a galeria de cavalos
function renderGallery() {
    const galleryContainer = document.querySelector(".gallery-container");
    if (galleryContainer) {
        // Limpar o contêiner antes de adicionar novos itens
        galleryContainer.innerHTML = "";
        cavalos.forEach((cavalo, index) => {
            // Criar os elementos para cada cavalo
            const galleryItem = document.createElement("div");
            galleryItem.className = "gallery-item";
            galleryItem.onclick = () => openModal(index);
            // Adicionar imagem
            const img = document.createElement("img");
            img.src = cavalo.imagem;
            img.alt = `Foto do ${cavalo.nome}`;
            // Criar overlay com nome
            const overlay = document.createElement("div");
            overlay.className = "overlay";
            overlay.textContent = cavalo.nome;
            // Adicionar elementos ao item da galeria
            galleryItem.appendChild(img);
            galleryItem.appendChild(overlay);
            // Inserir item na galeria
            galleryContainer.appendChild(galleryItem);
        });
    }
}
// Função para exibir os detalhes do cavalo no modal
function openModal(index) {
    const cavalo = cavalos[index];
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalName = document.getElementById("modal-name");
    const modalRace = document.getElementById("modal-race");
    const modalDescription = document.getElementById("modal-description");
    if (modal && modalImage && modalName && modalRace && modalDescription) {
        modalImage.src = cavalo.imagem;
        modalName.textContent = cavalo.nome;
        modalRace.textContent = cavalo.raca; // Alterando para usar a raça
        modalDescription.textContent = cavalo.descricao;
        modal.style.display = "flex"; // Exibir o modal
    }
}
// Fechar o modal
const closeModal = document.getElementById("close-modal");
if (closeModal) {
    closeModal.onclick = () => {
        const modal = document.getElementById("modal");
        if (modal) {
            modal.style.display = "none"; // Esconder o modal
        }
    };
}
// Chamar a função de renderização ao carregar a página
document.addEventListener("DOMContentLoaded", renderGallery);
