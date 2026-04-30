// Importando a imagem local para garantir que o Vite faça o processamento correto
import refri from "../assets/imagens/coca-cola.png";
import cerv from "../assets/imagens/brahma.webp";
import past from "../assets/imagens/pastel.jpg";
import heineken from "../assets/imagens/heineken.webp";
import skol from "../assets/imagens/skol.jpg";

export default function Products() {
  const items = [
    {
      name: "Refrigerante coca-cola",
      price: "R$ 6,00",
      // Usando a variável refri importada acima, assim o Vite resolve o caminho corretamente
      image: refri
    },
    {
      name: "Skol lata 350ml",
      price: "R$ 8,00",
      image: skol
    },
    {
      name: "Heineken lata 350ml",
      price: "R$ 8,00",
      image: heineken
    },
    {
      name: "Cerveja",
      price: "R$ 8,00",
      image: cerv
    },
    {
      name: "Salgadinho",
      price: "R$ 5,00",
      image: past
    }
  ];

  return (
    <section className="products">
      <h2>Produtos</h2>

      <div className="card-container">
        {items.map((item, index) => {
          // Número do WhatsApp e mensagem personalizada
          const phone = "5591982636791"; // Substitua pelo número desejado
          const message = encodeURIComponent(`Olá! Gostaria de pedir: ${item.name} por ${item.price}`);
          const zapUrl = `https://wa.me/${phone}?text=${message}`;
          return (
            <a
              href={zapUrl}
              className="card card-link"
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.image}
                alt={item.name}
                className={item.name.toLowerCase().includes("salgadinho") ? "card-img pastel-img" : "card-img"}
              />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              {/* Botão removido, card inteiro é clicável */}
            </a>
          );
        })}
      </div>
    </section>
  );
}