import React from "react";
import { useDispatch } from "react-redux";
import { filterDuration } from "../../Redux/actions/index";
import { Select } from "@chakra-ui/react";

//este filtro tiene que mandar por query los valores del select
// http://localhost:3001/filter?duration='1A50'&difficulty=middle&categoryId=23
//se tienen que sumar a los filtros de categoria y dificultad
const FilterDuration = () => {
  const dispatch = useDispatch();

  const handleDuration = (e) => {
    dispatch(filterDuration(e.target.value));
  };
  

  return (
    <div>
      <Select onChange={(e) => handleDuration(e)} placeholder="Duration">
        <option value="all">All</option>
        <option value="1A50">1hs - 50hs</option>
        <option value="51A100">51hs - 100hs</option>
        <option value="100"> + 100hs</option>
      </Select>
    </div>
  );
};

export default FilterDuration;
