import { useState } from "react";

/** SearchForm
 *
 * Form to search for a string
 *
 * Props:
 * - handleSearch: calls function in parent to search for string
 *
 * State:
 * - formData TODO: describe form
 *
 * [CompanyList, JobList] -> SearchForm
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
    handleSearch(formData.term);
    setFormData({term: ""});
  }

  return (
    <div className="SearchForm mt-4 mb-4">
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
