function calcularPrecioFinal(monto, medioPago) {
    let descuento = 0;
    medioPago = medioPago.toUpperCase(); // case insensitive

    if (monto >= 200 && monto <= 400) {
        if (medioPago === "E")  // Efectivo
            descuento = 0.30;
        else if (medioPago === "D") // Débito
            descuento = 0.20;
        else if (medioPago === "C") // Crédito
            descuento = 0.10;
    } else if (monto > 400) {
        descuento = 0.40;
    }
  // Si monto < 200, el descuento queda en 0.

  return monto - (monto * descuento);
}

// Pruebas con distintas combinaciones
const pruebas = [
    { monto: 50, pago: "C" },
    { monto: 150, pago: "E" },
    { monto: 300, pago: "e" },
    { monto: 399, pago: "D" },
    { monto: 220, pago: "C" },
    { monto: 500, pago: "c" },
    { monto: 500, pago: "E" },
];

const nombresMedioPago = {
    E: "Efectivo",
    D: "Débito",
    C: "Crédito"
}; 

for (const p of pruebas) {
    const pagoNombre = nombresMedioPago[p.pago.toUpperCase()];
    const final = calcularPrecioFinal(p.monto, p.pago);
    console.log(`Monto: $${p.monto} | Pago: ${pagoNombre} | Final: $${final}`);
}