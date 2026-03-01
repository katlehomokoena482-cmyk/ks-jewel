export default function Home() {
  const phoneNumber = "27799346533";
  const message = encodeURIComponent(
    "Hi K's Jewel 💖 I'm interested in your exclusive Hello Kitty luxury collection."
  );

  const products = [
    {
      name: "Hello Kitty Crystal Necklace",
      price: "R349",
      image: "https://via.placeholder.com/300x300.png?text=Necklace",
    },
    {
      name: "Hello Kitty Charm Bracelet",
      price: "R299",
      image: "https://via.placeholder.com/300x300.png?text=Bracelet",
    },
    {
      name: "Hello Kitty Limited Mini Handbag",
      price: "R799",
      image: "https://via.placeholder.com/300x300.png?text=Handbag",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(to bottom, #ffe6f2, #ffffff)",
        minHeight: "100vh",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "42px", color: "#d63384" }}>
        K's Jewel 🎀
      </h1>

      <p
        style={{
          maxWidth: "600px",
          margin: "20px auto",
          fontSize: "17px",
          lineHeight: "1.6",
          color: "#555",
        }}
      >
        K's Jewel is a limited luxury boutique for Hello Kitty lovers.
        Each piece is carefully sourced internationally and prepared
        exclusively for you. All orders are pre-order only with a
        7-day sourcing period. Payment is required to secure your
        exclusive item.
      </p>

      <h2 style={{ marginTop: "40px", color: "#d63384" }}>
        Limited Collection ✨
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1000px",
          margin: "40px auto",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                borderRadius: "15px",
                marginBottom: "15px",
              }}
            />
            <h3>{product.name}</h3>
            <p style={{ fontWeight: "bold", color: "#d63384" }}>
              {product.price}
            </p>
          </div>
        ))}
      </div>

      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#25D366",
          color: "white",
          padding: "15px 35px",
          borderRadius: "40px",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "bold",
          display: "inline-block",
          marginTop: "30px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
      >
        Secure Your Exclusive Order 💚
      </a>
    </div>
  );
}
