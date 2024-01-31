import type { Metadata } from 'next'
import { Gemunu_Libre, Inter, Rubik } from 'next/font/google'
import './globals.css'
import NavBar from './Components/Navbar'
import NextTopLoader from 'nextjs-toploader'
// import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import GetGenres from '@/lib/GetGenres'
// import GetPlatforms from '@/lib/GetPlatforms'
// import GetCount from '@/lib/GetCount'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })
const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'myGameApp',
  description: 'myGameApp is myGameApp. Again, myGameApp. Hope this was clear.',
}

const genreProm = GetGenres()
const genreObj = await genreProm
export const allGenres = genreObj.map((item) => {
  return item.slug
})

export let genreNames: { [key: string]: string } = {}

genreObj.forEach(item => {
  genreNames[item.slug] = item.name
});

genreNames['games'] = 'All Games'

const bgImageURL = 'https://images.igdb.com/igdb/image/upload/t_1080p/sc8gfc.png'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className + ' h-screen bg-slate-500 flex flex-col'}>
        <NavBar/>
        <NextTopLoader />
        <div className='bg-slate-950 bg-opacity-75 flex-grow overflow-auto' style={{backgroundImage: `url(${bgImageURL})`, backgroundSize: 'cover', backgroundBlendMode:'multiply'}}>
          {children}
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  )
}


// const platformProm = GetPlatforms()
// const platformObj = await platformProm
// console.log(platformObj)

// const platformData: any = []

// await Promise.all(platformObj.map(async (element) => {
//   platformData.push({
//     slug: element.slug,
//     name: element.name,
//     count: (await GetCount({filter: 'where platforms.slug = "' + element.slug + '";'}))[0]
//   });
// }));

// console.log(platformData)
