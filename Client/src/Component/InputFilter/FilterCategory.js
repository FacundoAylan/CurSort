import React from "react";
import { Select } from "@chakra-ui/react";

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
  
  return (
    <div>
      {/* deberia hacer un map de las categorias presentes en base de datos */}
      <Select placeholder="Category">
        {category &&
          category.map((e) => {
            return <option value={e.id}>{e.name}</option>;
          })}

      </Select>
    </div>
  );
};

export default FilterCategory;
