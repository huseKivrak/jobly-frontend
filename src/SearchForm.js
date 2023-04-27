import { useState } from "react";

/** SearchForm
 *
 * Form to search for a string
 *
 * Props:
 * - handleSearch: calls function in parent to search for string
 *
 * State:
 * - term: search term
 *
 * [CompanyList, JobList] -> SearchForm
 */

function SearchForm({ handleSearch }) {
  const [term, setTerm] = useState("");

  console.log("SearchForm", term);

  function handleChange(evt) {
    const term = evt.target.value;
    setTerm(term);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("SearchForm term:",term);
    handleSearch(term);
    setTerm("");
  }

  return (
    <div className="SearchForm mt-4 mb-4">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input"></label>
        <input
          id="search-input"
          name="term"
          value={term}
          placeholder="Enter search term..."
          onChange={handleChange}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchForm;
