import React from 'react'
import { Select } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import {orderByName} from '../../Redux/actions'

const OrderAZ = () => {
    const dispatch = useDispatch()

    function handleOrderByName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
    }

    return (
        <div>
        <Select onChange={(e) => handleOrderByName(e)} placeholder="Order">
            <option value="all">All</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
        </Select>
        </div>
    );
}

export default OrderAZ