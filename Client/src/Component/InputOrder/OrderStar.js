import React from "react";
import { Select } from "@chakra-ui/react";

const OrderStar = ({handleOrderByStar}) => {
  return (
    <div>
      
      <Select onChange={handleOrderByStar} placeholder="Start" maxW='100%'>
        {/* <option value="option1">⁜</option>
        <option value="option2">⁜ ⁜ </option>
        <option value="option3">⁜ ⁜ ⁜ </option>
        <option value="option4">⁜ ⁜ ⁜ ⁜ </option>
        <option value="option5">⁜ ⁜ ⁜ ⁜ ⁜</option> */}
        <option value="all">All</option>
        <option value="desc">Highest Star</option>
        <option value="asc">Lowest Star</option>
      </Select>
    </div>
  );
};

export default OrderStar;
