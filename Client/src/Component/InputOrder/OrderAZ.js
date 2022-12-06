//no esta conectado

import React from 'react'
import { Select } from '@chakra-ui/react'

const OrderAZ = ({handleOrderByName}) => {

    return (
      <div> 
        <Select onChange={(e)=>handleOrderByName(e.value)} placeholder="Order">
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </Select>
      </div>
    );
}

export default OrderAZ