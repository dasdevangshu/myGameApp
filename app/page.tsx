import Carousel from './Components/Carousel';
import SlidingWindows from './Components/SlidingWindows';


export default async function Home() {
  return (
    <main className='flex flex-col items-center w-screen h-screen'>
      <Carousel />
      <SlidingWindows genre='fighting'/>
      <SlidingWindows genre='adventure'/>
      <SlidingWindows genre='racing'/>
      <SlidingWindows genre='indie'/>
      <SlidingWindows genre='visual-novel'/>
    </main>
  )
}
