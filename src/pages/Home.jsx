import { Box } from '@mui/material'
import React from 'react'
import Exercise from '../components/Exercise'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercise />
    </Box>
  )
}

export default Home