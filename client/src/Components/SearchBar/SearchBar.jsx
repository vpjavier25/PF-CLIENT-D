import React from "react";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { searchName } from "../../Redux/Slicers/projectSlicer";

export default function SearchBar() {

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
        value={name}
      />
    </div>
  );
}
