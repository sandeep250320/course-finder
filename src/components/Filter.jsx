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

    var date2 = new Date(newString);
    var date3 = new Date("04-11-2021");
  
    return (
      <div>
          
          <nav className="searchbar navbar-expand-lg navbar-light ">
                  <div className=" _searchbar">
                      
                    
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                          </li>
                          
                      </ul>
                      <form className="d-flex" onSubmit={searchHandler}>
                          <input className="form-control me-3" type="search" placeholder="Course" value={search} onChange={searchWords} aria-label="Search"/>
                          <input className="form-control me-3" type="search" placeholder="Child subject" value={searchchild} onChange={searchChildHandler} aria-label="Search"/>
                          <input className="form-control me-3" type="date" placeholder="Date" value={datePicker} onChange={handleDate} aria-label="Search"/>
                          <button className="btn btn-outline-primary" type="submit">Search</button>
                          <button className="btn btn-outline-danger mx-3" type="reset" onClick={resetHandlar} >Reset</button>
                      </form>

                      </div>
                     
                  </div>
                  
          </nav>
          
      </div>
  )
}

export default Navbar
