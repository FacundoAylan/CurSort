import React from 'react'
import { useState } from 'react'
import { Grid, GridItem, Button } from '@chakra-ui/react'
import { useDispatch} from "react-redux";
import {AllFilterDifficulty} from '../../Redux/actions/index'

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

    <Grid
      gridTemplateRows='repeat(3, 45px)' 
      p={0}
    >
      <GridItem p={0}>
        <Button value='principiante'>Beginner</Button>
      </GridItem>
      <GridItem>
        <Button value='intermedio'>Middle</Button>
      </GridItem>
      <GridItem>
        <Button value='avanzado'>Advanced</Button>
      </GridItem>
    </Grid>

  )
}

export default FilterDifficulty