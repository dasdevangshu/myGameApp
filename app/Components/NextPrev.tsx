import Link from 'next/link'

export default function NextPrev(props: any) {
    const data = props.navProp;
    const isFirst = data.curPage === '1';
    const isSecond = data.curPage === '2';
    const isThird = data.curPage === '3';
    //console.log(isFirst, data)
    const isLast = data.curPage === data.totalPages;
    const isSecondLast = data.curPage === (parseInt(data.totalPages) - 1).toString();
    const isThirdLast = data.curPage === (parseInt(data.totalPages) - 2).toString();
    //console.log(isFirst, isSecond, isLast, isSecondLast)

    const link = '/' + data.genre + '?page=';

    return (
        <div className="flex gap-1 items-center my-4">
            {/* <h1 className="text-slate-400 font-bold text-sm">{data.page} {data.curPage} {data.totalPages} {data.totalGames}</h1> */}
            {!isFirst && !isSecond && <Link href={link+'1'}><button className="bg-slate-900 h-12 w-12 rounded-md text-slate-400 font-bold text-sm hover:bg-slate-800 hover:outline outline-blue-500 hover:outline-2 ease-in-out duration-300">1</button></Link>}
            {!isFirst && !isSecond && !isThird && <h1 className="text-slate-400 font-bold text-sm mx-1 select-none">...</h1>}
            {!isFirst && <Link href={link+(parseInt(data.curPage) - 1).toString()}><button className="bg-slate-900 h-12 w-12 rounded-md text-slate-400 font-bold text-sm hover:bg-slate-800 hover:outline outline-blue-500 hover:outline-2 ease-in-out duration-300">{(parseInt(data.curPage) - 1).toString()}</button></Link>}
            <button className="bg-slate-800 h-12 w-12 rounded-md text-slate-400 font-bold text-sm">{data.curPage}</button>
            {!isLast && <Link href={link+(parseInt(data.curPage) + 1).toString()}><button className="bg-slate-900 h-12 w-12 rounded-md text-slate-400 font-bold text-sm hover:bg-slate-800 hover:outline outline-blue-500 hover:outline-2 ease-in-out duration-300">{(parseInt(data.curPage) + 1).toString()}</button></Link>}
            {!isLast && !isSecondLast && !isThirdLast && <h1 className="text-slate-400 font-bold text-sm mx-1 select-none">...</h1>}
            {!isLast && !isSecondLast && <Link href={link+props.totalPages}><button className="bg-slate-900 h-12 w-12 rounded-md text-slate-400 font-bold text-sm hover:bg-slate-800 hover:outline outline-blue-500 hover:outline-2 ease-in-out duration-300">{(parseInt(data.totalPages)).toString()}</button></Link>}
        </div>
    )
}