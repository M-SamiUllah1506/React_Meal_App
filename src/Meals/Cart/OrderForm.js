import React, { useState } from "react";
import Modal from "../../Components/UI/Modal";
import classes from "./OrderForm.odule.css";

const OrderForm = (props) => {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [tip, setTip] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Order submitted:", {
      paymentMethod,
      tip,
      suggestion,
    });
    props.onConfirm(); 
    alert("Thank you for your order! 🍽️");
  };

  return (
    <Modal onClose={props.onClose}>
      <form className={classes.form} onSubmit={submitHandler}>
        <h2>Confirm Your Order</h2>

        <div className={classes.control}>
          <label>Payment Method</label>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="cash">Cash</option>
            <option value="card">Credit Card</option>
          </select>
        </div>

        <div className={classes.control}>
          <label>Would you like to give a tip?</label>
          <input
            type="number"
            min="0"
            placeholder="Enter tip amount (optional)"
            value={tip}
            onChange={(e) => setTip(e.target.value)}
          />
        </div>

        <div className={classes.control}>
          <label>Suggestion for new menu item?</label>
          <textarea
            rows="3"
            placeholder="Share your ideas..."
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button type="button" onClick={props.onClose}>Cancel</button>
          <button type="submit">Submit Order</button>
        </div>
      </form>
    </Modal>
  );
};

export default OrderForm;
