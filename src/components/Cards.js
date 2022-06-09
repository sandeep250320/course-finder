import React, { useContext, useEffect, useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import SearchContext from "./searchContext";
import "./Card.css";
import CardOne from "./Card";
import ReactPaginate from "react-paginate";
import Barchart from "./barchart";
import { useSelector, useDispatch } from "react-redux";
import { getCards } from "../action";

const Cards = () => {
    const ctx = useContext(SearchContext);
  const courseName = ["Course Name"];
  const childSub = ["Child Subject"];
  const cardPerPage = 12;
  const pagesVisited = ctx.pageNumber * cardPerPage;


  const dispatch = useDispatch();
  const cardList = useSelector((state) => state.reducer.dataList);
  console.log(cardList);
  const loading = useSelector((state) => state.reducer.loading);
  console.log(loading);
  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get();
  //     const dataList[]
  //     for (var i = 0; i < 4000; i++) {
  //       dataList.push(request.data[i]);
  //     }
  //     setLoading(false);
  //     setNewcourse(dataList);
  //   }
  //   fetchData();
  // }, []);

  const searchData = ctx.searchname;
  const childsearch = ctx.searchchild;
  const dateFromPicker = ctx.searchDate;
  const dateToSearch = new Date(dateFromPicker);
  dateToSearch.setHours(0, 0, 0, 0);
  console.log(dateToSearch);

  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  const newDateToSearch = convert(dateToSearch);

  let dataSearch = cardList
    .filter((item) => {
      return Object.keys(item).some((key) => {
        return courseName.includes(key)
          ? item[key]
              .toString()
              .toLowerCase()
              .includes(searchData.toString().toLowerCase())
          : false;
      });
    })
    .filter((items) => {
      return Object.keys(items).some((key) => {
        return childSub.includes(key)
          ? items[key]
              .toString()
              .toLowerCase()
              .includes(childsearch.toString().toLowerCase())
          : false;
      });
    })
    .filter(function (el) {
      var filteDateString = el["Next Session Date"]
      var replacedDate = filteDateString
        .replace("nd", "")
        .replace("rd", "")
        .replace("th", "");
      var filterDate = new Date(replacedDate);
      const stringDate = convert(filterDate);
      if (dateToSearch != "Invalid Date") {
        if (filterDate != "Invalid Date") {
          if (stringDate == newDateToSearch) {
            return el;
          }
        }
      } else {
        return el;
      }
    })
    .filter(function (el) {
      var self = el["Next Session Date"];

      if (!ctx.self) {
        if (self == "Self paced") {
          return el;
        }
      } else return el;
    });
  const numRows = dataSearch.length;

  const pageParent = [];
  const pageUniversity = [];
  const displayCard = dataSearch
    .slice(pagesVisited, pagesVisited + cardPerPage)
    .map((props) => {
      pageParent.push(props["Parent Subject"]);
      pageUniversity.push(props["Universities/Institutions"]);
      return (
        <div className="Cards">
          <CardOne
            courseId={props["Course Id"]}
            courseName={props["Course Name"].slice(0, 55)}
            provider={props["Provider"]}
            university={props["Universities/Institutions"].slice(0, 40)}
            parentSub={props["Parent Subject"].slice(0, 25)}
            childSub={props["Child Subject"].slice(0, 25)}
            url={props["Url"]}
            nextSess={props["Next Session Date"]}
          />
        </div>
      );
    });

  // PARENT SUBJECT GRAPH LOGIC

  const uniqueParent = [...new Set(pageParent)];
  var parentLength = uniqueParent.length;
  const aCount = new Map(
    [...new Set(pageParent)].map((x) => [
      x,
      pageParent.filter((y) => y == x).length,
    ])
  );
  const parentCount = [];
  for (var i = 0; i < parentLength; i++) {
    parentCount.push(aCount.get(uniqueParent[i]));
  }

  // UNIVERSITY GRAPH LOGIC
  const uniqueUniversity = [...new Set(pageUniversity)];
  var universityLength = uniqueUniversity.length;
  const bCount = new Map(
    [...new Set(pageUniversity)].map((x) => [
      x,
      pageUniversity.filter((y) => y === x).length,
    ])
  );
  const universityCount = [];
  for (var j = 0; j < universityLength; j++) {
    universityCount.push(bCount.get(uniqueUniversity[j]));
  }

  const noCourse = () => {
    if (dataSearch == "" && loading==false) {
      return (
        <h2 className="container">
          <center>No course found !!</center>
        </h2>
      );
    }
  };

  const pageHandler = ({ selected }) => {
    ctx.setPageNumber(selected);
    window.scrollTo(0, 0);
  };

  const pageCounted = Math.ceil(numRows / cardPerPage);

  // GRAPH DROPDOWN
  const [parentGraph, setParentGraph] = useState(false);
  const [universityGraph, setUniversityGraph] = useState(false);

  const handleSelect = (e) => {
    if (e == "parentGraph") {
      setParentGraph(true);
      setUniversityGraph(false);
    } else {
      setParentGraph(false);
      setUniversityGraph(true);
    }
  };

  return (
    <div>
      {dataSearch.length != 0 ? (
        <center>
          <h5 className="headcard">Course found : {numRows}</h5>
        </center>
      ) : ("")}
      
      { loading && (
        <div class="loader">
          <center>
            <h1>Loading Please wait...</h1>
            <div className="dots">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </center>
      </div>) }

      <div className="row ">{displayCard}</div>
      {noCourse()}      
      {dataSearch.length !== 0 ? (
        <div className="mypage">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">>"
            pageRangeDisplayed={1}
            pageCount={pageCounted}
            onPageChange={pageHandler}
            containerClassName={"pagination justify-content-center mt-4 mb-4"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
            previousLabel="<<"
          />
        </div>
      ) : (
        " "
      )}

      {dataSearch.length !== 0 ? (
        <div className="drop">
          <DropdownButton
            alignRight
            title="select chart"
            id="dropdown-menu-align-right"
            onSelect={handleSelect}
            className="pb-4 m-5"
            size="lg"
          >
            <Dropdown.Item eventKey="parentGraph">parent Subject</Dropdown.Item>
            <Dropdown.Item eventKey="universityGraph">university</Dropdown.Item>
          </DropdownButton>
          <div>
            {parentGraph && (
              <Barchart
                name={"Parent sub count"}
                counted={parentCount}
                parentList={uniqueParent}
              />
            )}
          </div>
          <div>
            {universityGraph && (
              <Barchart
                name={"University count"}
                counted={universityCount}
                parentList={uniqueUniversity}
              />
            )}
          </div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Cards;
