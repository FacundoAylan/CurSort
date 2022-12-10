import React, { useEffect } from "react";
import { Select } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCategory, filterCategory } from "../../Redux/actions";

const FilterCategory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories);

  const handleCategory = (e) => {
    
    dispatch(filterCategory(e.target.value)); 
  };

  return (
    <div>
      <Select onChange={(e) => handleCategory(e)} placeholder="Category">
      <option key='all' value='all'>All</option>
        {categories &&
          categories.map((e) => {
            return (
              <option key={e.id} value={e.name}>{e.name}</option>
            );
          })}
      </Select>
    </div>
  );
};

export default FilterCategory;
