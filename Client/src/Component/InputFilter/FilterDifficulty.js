import React from "react";
// import { useState } from 'react'
import { useDispatch } from "react-redux";
import { filterDifficulty} from "../../Redux/actions/index";
import { Select } from "@chakra-ui/react";

const FilterDifficulty = () => {
  const dispatch = useDispatch();
  

  const handleDifficulty = (e) => {
   dispatch(filterDifficulty(e.target.value));
    
  };

  return (
    <div>
      <Select onChange={(e) => handleDifficulty(e)} placeholder="Difficulty">
        <option value="all">All</option>
        <option value="Principiante">Beginner</option>
        <option value="Intermedio">Middle</option>
        <option value="Avanzado">Advanced</option>
      </Select>
    </div>
  );
};

export default FilterDifficulty;
