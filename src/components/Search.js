const Search = () => {
  return (
    <div className="header-small">
      <div className="container">
        <form action="result.html" method="">
          <input
            type="text"
            name="name"
            className="field"
            placeholder="Type your product.."
          />
          <button type="submit" className="submit">
            <i className="fa fa-send-o"></i> Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
