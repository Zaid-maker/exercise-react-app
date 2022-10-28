import { Box } from '@mui/material'
import React from 'react'

import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail