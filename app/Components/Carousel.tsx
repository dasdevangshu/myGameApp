import React from 'react'
import CarouselClient from './CarouselClient'
import GetTenGames from '../../lib/GetTenGamesForCarousel'

export default async function Carousel() {

  const tenGames: Promise<GameForCarousel[]> = GetTenGames()
  const tenGamesData = await tenGames

  return (
    <>
      <CarouselClient tenGamesData = {tenGamesData}/>
    </>
  )
}


