// Função para controlar o carrossel
let currentIndex = 0;

const carouselImages = document.querySelectorAll('.carousel-image');
const totalImages = carouselImages.length;

// Função para atualizar o carrossel
function updateCarousel() {
    carouselImages.forEach((image, index) => {
        if (index === currentIndex) {
            image.style.display = 'block'; // Exibir a imagem atual
        } else {
            image.style.display = 'none'; // Ocultar outras imagens
        }
    });
}

// Função para ir para a próxima imagem
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Avança para a próxima imagem
    updateCarousel();
}

// Função para voltar para a imagem anterior
function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Volta para a imagem anterior
    updateCarousel();
}

// Adicionar eventos de clique nos botões
document.querySelector('.next').addEventListener('click', nextImage);
document.querySelector('.prev').addEventListener('click', prevImage);

// Inicializar o carrossel exibindo a primeira imagem
updateCarousel();

// Manipulação do formulário de contato
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Pegando os valores do formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    // Número da hamburgueria (coloque o número correto com o código do país +55 para o Brasil)
    const numeroHamburgueria = '5599999999999'; // Exemplo de número

    // Criando a URL para WhatsApp com a mensagem personalizada
    const url = `https://wa.me/${numeroHamburgueria}?text=Olá, meu nome é ${nome}, meu WhatsApp é ${telefone}.%0A${mensagem}`;

    // Abrindo o link do WhatsApp
    window.open(url, '_blank');
});