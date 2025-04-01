return (
    <div>
      <h2>Realizar Pedido</h2>
      {success && <p>Gracias por tu pedido. ¡Nos pondremos en contacto contigo pronto!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form className="checkout-form" onSubmit={handleCheckout}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Enviar Pedido</button>
      </form>
    </div>
  );