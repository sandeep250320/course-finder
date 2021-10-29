import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import top100Films from "./DummyData";
import { Button } from "@mui/material";
import ControlledCheckbox from "./Checkbox";
import "./SelectSearch.css";

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.title,
});

export default function SelectTextFields() {
  return (
    <div className="searchbar">
      <div className="_searchbar">
        <Autocomplete
          id="filter-demo"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          filterOptions={filterOptions}
          sx={{ width: 200 }}
          renderInput={(params) => (
            <TextField {...params} label="Custom filter" />
          )}
        />
      </div>
      <div className="_searchbar">
        <Autocomplete
          id="filter-demo"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          filterOptions={filterOptions}
          sx={{ width: 200 }}
          renderInput={(params) => (
            <TextField {...params} label="Custom filter" />
          )}
        />
      </div>
      <div className="_searchbar">
        <TextField
          id="date"
          type="date"
          sx={{ width: 200 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div className="_searchbar">
        <ControlledCheckbox />
        <span>Self placed</span>
      </div>
      <div className="_searchbar">
        <Button className="button" variant="contained">
          Search
        </Button>
      </div>
      <div className="_searchbar">
        <Button className="button" variant="contained">
          Reset
        </Button>
      </div>
    </div>
  );
}
