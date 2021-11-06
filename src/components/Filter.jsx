import React, { useContext, useState } from 'react'
import SearchContext from './searchContext'
import './Filter.css'

function Navbar() {
    const [search,setSearch] = useState('')
    const [searchchild,setSearchChild]= useState('')
    const [datePicker,setDatePicker] = useState('')
    const ctx =  useContext(SearchContext)

    const searchWords =(e)=>{
        e.preventDefault()
        setSearch(e.target.value)
    }

    const searchChildHandler =(event)=>{
        event.preventDefault()
        setSearchChild(event.target.value)
    }

    const searchHandler =(e)=>{
        e.preventDefault()
        ctx.setSearchname(search)
        ctx.setSearchchild(searchchild)
        ctx.setSearchDate(datePicker)
        ctx.setPageNumber(0)
    }

    const resetHandlar = ()=>{
        ctx.setSearchname('')
        ctx.setSearchchild('')
        ctx.setSearchDate('')
        setSearch('')
        setSearchChild('')
        setDatePicker('')
    }

    const handleDate = (e)=>{
        e.preventDefault()
        setDatePicker(e.target.value)
    }
    var myString = '2nd Apr, 2021'
    var newString = myString.replace('nd','').replace('rd','')
  
    return (
         <div>
      <nav className="navbar navbar-expand-lg navbar-expand-md my-3 navbar-collapse-sm navbar-light ">
        <div className="container  p-2">
          <div className="navbar-collapse collapse  d-flex justify-content-around show" id="navbarSupportedContent">
            
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
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
              <button
                className="btn btn-outline-danger mx-3"
                type="reset"
                onClick={resetHandlar}
              >
                Reset
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
