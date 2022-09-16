function Search(props) {
    const {value, onValueChange} = props
  return (
    <div className="search">
      <input
        className="search-field"
        type="text"
        placeholder="Enter keyword to search"
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
      />
    </div>
  )
}

export default Search
