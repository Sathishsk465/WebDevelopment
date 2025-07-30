import React from "react";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white p-4 rounded shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Shipping</span>
            <span>₹5.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span>₹{(totalPrice + 5).toFixed(2)}</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
