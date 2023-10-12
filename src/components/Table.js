import CashForm from "./CashForm";

const Table = ({ cash, plates, handleAddCash }) => {
  const stack = plates.map((_, i) => (
    <div key={i} className="empty-plate" style={{ top: -7 * i }} />
  ));

  return (
    <>
      <h1 className="remaining">You have: ${cash} remaining!</h1>
      <div className="table">
        <div className="stack">{stack}</div>
        <div className="form">
          <CashForm handleAddCash={handleAddCash} />
        </div>
      </div>
    </>
  );
};

export default Table;
