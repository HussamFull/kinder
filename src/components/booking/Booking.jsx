import React, { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    fromDate: "",
    toDate: "",
    fromTime: "",
    toTime: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = () => {
    const message = `
🛎️ طلب حجز جديد

👤 Name : ${form.name}
📧 Email : ${form.email}
📱 Phone : ${form.phone}

📅 From: ${form.fromDate} - ⏰ ${form.fromTime}
📅 To: ${form.toDate} - ⏰ ${form.toTime}
    `;

    const phoneNumber = "+436607363869"; // 🔴 ضع رقمك هنا مع كود الدولة بدون +

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Apartment Booking</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          style={styles.input}
        />

        <div style={styles.row}>
          <div>
            <label>From Date</label>
            <input
              type="date"
              name="fromDate"
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div>
            <label>To Date</label>
            <input
              type="date"
              name="toDate"
              onChange={handleChange}
              style={styles.input}
            />
          </div>
        </div>

        <div style={styles.row}>
          <div>
            <label>From Time</label>
            <input
              type="time"
              name="fromTime"
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div>
            <label>To Time</label>
            <input
              type="time"
              name="toTime"
              onChange={handleChange}
              style={styles.input}
            />
          </div>
        </div>

        <button onClick={handleBooking} style={styles.button}>
          Book Now via WhatsApp
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #4facfe, #00f2fe)",
    fontFamily: "Arial",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "15px",
    width: "350px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  button: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    background: "#25D366",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
};