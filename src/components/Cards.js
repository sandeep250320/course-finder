import React, { useContext, useEffect, useState } from 'react';
import SearchContext from './searchContext';
import "./Card.css";
import CardOne from "./Card";
import ReactPaginate from 'react-paginate';

import axios from './axios.js'

const Cards = () => {

  const ctx = useContext(SearchContext);
  const courseName = ['Course Name']
  const childSub = ['Child Subject']
  const [courses,setNewcourse] = useState([])
  const cardPerPage = 6
  const pagesVisited = ctx.pageNumber * cardPerPage;

  useEffect(() => {
    async function fetchData(){
        const request = await axios.get()
        const dataList = []
        for(var i =0; i<600;i++){
             dataList.push(request.data[i])
        }
        
        setNewcourse(dataList)

    }
    fetchData()
 }, [])

     
 const searchData = ctx.searchname
 const childsearch = ctx.searchchild
 const dateFromPicker = ctx.searchDate
 const dateToSearch = new Date(dateFromPicker);
 dateToSearch.setHours(0,0,0,0);
 console.log(dateToSearch)

 function convert(str) {
     var date = new Date(str),
       mnth = ("0" + (date.getMonth() + 1)).slice(-2),
       day = ("0" + date.getDate()).slice(-2);
     return [date.getFullYear(), mnth, day].join("-");
   }
 const newDateToSearch = convert(dateToSearch)
 

 let dataSearch  = courses.filter(item =>{
     return Object.keys(item).some(key =>{
        return courseName.includes(key) ? item[key].toString().toLowerCase().includes(searchData.toString().toLowerCase()) : false }
         )
 })
.filter(items =>{
     return Object.keys(items).some(key =>{
         return childSub.includes(key) ? items[key].toString().toLowerCase().includes(childsearch.toString().toLowerCase()) : false  }
         )
 }).filter(function (el) {    
     var filteDateString = el['Next Session Date']
     var replacedDate = filteDateString.replace('nd','').replace('rd','').replace('th','')
     var filterDate = new Date(replacedDate)
     const stringDate = convert(filterDate)
     if(dateToSearch != 'Invalid Date'){
         if( filterDate != 'Invalid Date' ){
             if(stringDate == newDateToSearch){
                 return el;
             } 
         }
     }
     else{
         return el;
     }
     
     
     
   });
 
 const numRows = dataSearch.length


 const displayCard = dataSearch.slice(pagesVisited, pagesVisited + cardPerPage).map((props)=>{
  return (
    <div className="Cards">
        <CardOne
          courseId={props["Course Id"]}
          courseName={props["Course Name"].slice(0,55)}
          provider={props["Provider"]}
          university={props["Universities/Institutions"].slice(0,40)}
          parentSub={props["Parent Subject"].slice(0,20)}
          childSub={props["Child Subject"].slice(0,20)}
          url={props["Url"]}
          nextSess={props["Next Session Date"]}
        />
    </div>
    );
    })
    const noCourse = ()=>{
      if(dataSearch == ''){
          return <h3 className="container" >No course found !!</h3>
      }
  }

  const pageHandler = ({selected})=>{
     ctx.setPageNumber(selected)
     window.scrollTo(0, 0)
  }

  const pageCounted = Math.ceil(numRows / cardPerPage)


  return (
      <div>
          
          <center><h5 className="headcard" >Course found : {numRows}</h5></center>
          {noCourse() }
          <div className='row ' >
              {displayCard}
              
          </div>
          <div className='mypage' >
          <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
     
              pageRangeDisplayed={1}
              pageCount={pageCounted}
              onPageChange={pageHandler}
              containerClassName={'pagination justify-content-center mt-4 mb-4'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
              previousClassName={'page-item'}
              previousLinkClassName={'page-link'}
              nextClassName={'page-item'}
              nextLinkClassName={'page-link'}
              breakClassName={'page-item'}
              breakLinkClassName={'page-link'}
              activeClassName={'active'}
              previousLabel="< previous"
          />
          </div>
      </div>
  )
}


export default Cards;
