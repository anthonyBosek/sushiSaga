import { useState } from "react";

const CashForm = ({ handleAddCash }) => {
  const [amt, setAmt] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amt) {
      handleAddCash(Number(amt));
    }
    setAmt(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wallet-amt">$</label>
      <input
        type="number"
        id="wallet-amt"
        value={amt}
        onChange={(e) => setAmt(e.target.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default CashForm;
