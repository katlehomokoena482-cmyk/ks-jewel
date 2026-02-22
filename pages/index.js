export default function Home() {
  const phoneNumber = "27799346533";
  const message = encodeURIComponent(
    "Hi K's Jewel 💖 I'm interested in your Hello Kitty inspired collection."
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #ffb6c1, #ff69b4)",
        color: "white",
        textAlign: "center",
        padding: "60px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "48px" }}>K's Jewel ✨</h1>
      <p style={{ fontSize: "22px", marginTop: "20px", fontWeight: "bold" }}>
        A Dream Collection for Hello Kitty Lovers 💗
      </p>

      <p style={{ fontSize: "18px", marginTop: "20px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
        Discover our exclusive Hello Kitty inspired jewelry pieces designed for
        true fans who love cute, playful, and timeless accessories. Each piece
        captures soft pink elegance with a bold touch of personality.
      </p>

      <div style={{ marginTop: "60px" }}>
        <h2>💎 Featured Pieces</h2>
        <p>Hello Kitty Charm Necklace — R169.99</p>
        <p>Pink Bow Bracelet — R149.99</p>
        <p>Custom Name Kitty Pendant — R189.99</p>
      </div>

      <div style={{ marginTop: "60px" }}>
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
            marginTop: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          }}
        >
          Order via WhatsApp 💚
        </a>
      </div>

      <div style={{ marginTop: "70px", fontSize: "14px" }}>
        <p>📍 South Africa</p>
        <p>Specially Curated for Hello Kitty Enthusiasts • Premium Cute Aesthetic 💕</p>
      </div>
    </div>
  );
    }
