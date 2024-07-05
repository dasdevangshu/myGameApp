import Carousel from './Components/Carousel';
import SlidingWindows from './Components/SlidingWindows';


export default async function Home() {
  return (
    <main className='flex flex-col items-center w-full h-screen'>
      <Carousel />
      <SlidingWindows genre='adventure'/>
      <SlidingWindows genre='fighting'/>
      <SlidingWindows genre='role-playing-rpg'/>
      <SlidingWindows genre='racing'/>
      <SlidingWindows genre='indie'/>
      <SlidingWindows genre='visual-novel'/>
    </main>
  )
}
