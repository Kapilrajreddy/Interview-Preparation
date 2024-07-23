const ChildComponent = ({ handleData }) => {
  const handleChild = () => {
    handleData("Kapil")
  };

  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={handleChild}>Send data To Parent</button>
    </div>
  );
};
export default ChildComponent