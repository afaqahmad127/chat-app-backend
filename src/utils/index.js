export function calculatePayment({
  unitPrice,
  quantity,
  shippingPrice,
  multiplier,
  skipMultiplier = false,
}) {
  shippingPrice = shippingPrice || 0
  if (skipMultiplier) multiplier = 1

  const totalPrice = unitPrice * multiplier * quantity
  const shippingTotal = shippingPrice * multiplier

  return totalPrice + shippingTotal
}
