import React, { useContext, useState } from "react";
import SearchContext from "./searchContext";
import "./Filter.css";

function Navbar() {
  const [search, setSearch] = useState("");
  const [searchchild, setSearchChild] = useState("");
  const [datePicker, setDatePicker] = useState("");
  const [checked,setchecked]= useState(false);
  const ctx = useContext(SearchContext);

  const searchWords = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const searchChildHandler = (event) => {
    event.preventDefault();
    setSearchChild(event.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    ctx.setSearchname(search);
    ctx.setSearchchild(searchchild);
    ctx.setSearchDate(datePicker);
    ctx.setPageNumber(0);
    console.log("search button clicked")
  };

  const resetHandlar = () => {
    ctx.setSearchname("");
    ctx.setSearchchild("");
    ctx.setSearchDate("");
    setSearch("");
    setSearchChild("");
    setDatePicker("");
    console.log("reset button clicked")
  };

  const handleDate = (e) => {
    e.preventDefault();
    setDatePicker(e.target.value);
  };
  const selfPacedHandler = (e)=> {
    setchecked(e.target.checked);
    ctx.setSelfpaced(checked);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-expand-md my-3 navbar-collapse-sm navbar-light ">
        <div className="container  p-2">
          <div
            className="navbar-collapse collapse  d-flex justify-content-around show"
            id="navbarSupportedContent"
          >
            <form className=" d-flex " onSubmit={searchHandler}>
              <input
                className="form-control rounded-pill me-2 mx-auto marg"
                type="search"
                placeholder="Course"
                value={search}
                onChange={searchWords}
                aria-label="Search"
              />
              <input
                className="form-control rounded-pill mx-auto me-2 marg"
                type="search"
                placeholder="Child subject"
                value={searchchild}
                onChange={searchChildHandler}
                aria-label="Search"
              />
              <input
                className="form-control rounded-pill me-2 marg"
                type="date"
                placeholder="Date"
                value={datePicker}
                onChange={handleDate}
                aria-label="Search"
              />
              <div className="form-control rounded-pill me-2 mx-auto marg">
                <input
                  className="form-check-input  mx-auto me-2 marg"
                  type="checkbox"
                  placeholder="self paced"
                  checked={checked}
                  onChange={selfPacedHandler}
                  aria-label="self paced"
                />
                <label className="form-check-label" for="flexCheckDefault">
                Self paced
                </label>
              </div>

              <button className="form-control btn-outline-primary mx-auto" type="submit">
              <b>Search</b>
              </button>
              <button
                className="form-control btn-outline-danger mx-2"
                type="reset"
                onClick={resetHandlar}
              >
                <b>Reset</b>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
