export default function Contact() {
  const phone = "5591982636791"; // seu número com DDI + DDD
  const message = "Olá! Gostaria de fazer um pedido.";

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <section className="contact">
      <h2>Peça pelo WhatsApp</h2>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className="whatsapp-btn">
          Fazer Pedido
        </button>
      </a>
    </section>
  );
}