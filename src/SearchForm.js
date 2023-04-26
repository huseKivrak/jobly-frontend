import { useState } from "react";

/**
 * Form to search for a string
 *
 * Props:
 * - handleSearch: calls function in parent to search for string
 *
 * State:
 * - formData
 *
 * {CompanyList, JobList} -> SearchForm
 */

function SearchForm({ handleSearch }) {
  const [formData, setFormData] = useState({term: ""});

  console.log("SearchForm", formData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fd => ({
      ...fd,
      [name]: value
    }))
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("SearchForm handleSubmit:",formData);
    handleSearch(formData);
    setFormData({term: ""});
  }

  return (
    <div className="SearchForm mb-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input"></label>
        <input
          id="search-input"
          name="term"
          value={formData.term}
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
