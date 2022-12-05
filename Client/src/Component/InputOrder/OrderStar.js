import React from "react";
import { Select } from "@chakra-ui/react";

const OrderStar = () => {
  return (
    <div>
      
      <Select placeholder="Start" maxW='100%'>
        <option value="option1">⁜</option>
        <option value="option2">⁜ ⁜ </option>
        <option value="option3">⁜ ⁜ ⁜ </option>
        <option value="option3">⁜ ⁜ ⁜ ⁜ </option>
        <option value="option3">⁜ ⁜ ⁜ ⁜ ⁜</option>
      </Select>
    </div>
  );
};

export default OrderStar;
