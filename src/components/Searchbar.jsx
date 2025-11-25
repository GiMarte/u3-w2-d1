const Searchbar = ({ onSearchChange, searchTerm }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    onSearchChange(value);
  };

  return (
    <div className="text-center my-3">
      <input
        type="text"
        placeholder="Cerca qui"
        className="w-50"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default Searchbar;
