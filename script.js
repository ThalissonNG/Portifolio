document.getElementById("sendWhatsapp").addEventListener("click", function () {
    // Captura o valor do campo de mensagem
    const mensagem = document.getElementById("message").value;

    // Verifica se o campo não está vazio
    if (mensagem.trim() === "") {
        alert("Por favor, digite uma mensagem antes de enviar!");
        return;
    }

    // Substitua com o número do WhatsApp no formato internacional (sem "+" e com código do país)
    const numeroWhatsApp = "5583996013954"; // Exemplo: 55 (Brasil) + número

    // Formata o texto da mensagem para o WhatsApp (codificando caracteres especiais)
    const textoFormatado = encodeURIComponent(mensagem);
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoFormatado}`;

    // Redireciona o usuário para o link do WhatsApp
    window.open(url, "_blank");
});
