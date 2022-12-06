import React from "react";
import { Select } from "@chakra-ui/react";
import {  useSelector } from "react-redux"
// import useDispatch from "react-redux"
// import filterCategory from '../../Redux/actions/index'

const FilterCategory = () => {
   const category = [
    {
      name: "Front-End",
      id: 1,
    },
    {
      name: "Back-End",
      id: 2,
    },
    {
      name: "Data Science",
      id: 3,
    },
  ]; 

  //const dispatch = useDispatch()

  const categories = useSelector(state => state.categories)
  
  // function handleFilterCategory(e) {
  //  dispatch(filterCategory(e.target.value))
  // }

  return (
    <div>
      {/* deberia hacer un map de las categorias presentes en base de datos */}
      <Select placeholder="Category">
        {category &&
          category.map((e) => {
            return <option key={e.id} value={e.name}>{e.name}</option>;
          })}

      </Select>
    </div>
  );
};

export default FilterCategory;
