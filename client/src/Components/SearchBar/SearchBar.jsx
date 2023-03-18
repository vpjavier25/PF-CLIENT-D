import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProjectByName } from "../../Redux/Slicers/projectSlicer";

export default function SearchBar() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handlerInputChange = (e) => {
    setName(e.target.value);
  };

  const handlerButton = (e) => {
    dispatch(getProjectByName(name));
  };

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      dispatch(getProjectByName(name));
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search project by name..."
        onChange={(e) => handlerInputChange(e)}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" onClick={(e) => handlerButton(e)}>
        Search
      </button>
    </div>
  );
}
