import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchName, filter } from "../../Redux/Slicers/projectSlicer";

export default function SearchBar() {
  const searchN = useSelector(state => state.project.projectsSearch);

  useEffect(() => {
    dispatch(filter())
  }, [searchN])

  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handlerInputChange = (e) => {
    setName(e.target.value);
    dispatch(searchName(e.target.value))
  };


  return (
    <div>
      <input
        type="text"
        placeholder="Search project by name..."
        onChange={(e) => handlerInputChange(e)}
      />
    </div>
  );
}
