import React from 'react'
import { useState } from 'react'
import { useDispatch} from "react-redux";
import {AllFilterDifficulty} from '../../Redux/actions/index'
import { Select } from '@chakra-ui/react'

const FilterDifficulty = () => {
  const dispatch = useDispatch()

  const [filter, setFilter] = useState({
    difficulty : ''
  })

  const handleSelect = (e)=>{
    setFilter({
      difficulty: e.target.value
    })
  }
  dispatch(AllFilterDifficulty(filter))
  return (
    <div>
        <Select onChange={(e)=>handleSelect(e)} placeholder='Difficulty'>
  <option value='principiante'>Beginner</option>
  <option value='intermedio'>Middle</option>
  <option value='avanzado'>Advanced</option>
 
</Select>
    </div>
  )
}

export default FilterDifficulty