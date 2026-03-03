const TailwindCssConcept=()=>{
    const arr=[1,2,3,4,5,6,7,8,9,10]
    return(
       <div className='w-screen h-auto flex flex-wrap gap-25 justify-around'>
        {/* <h1 className='bg-red-500'>Abhilipsa</h1>
         <h1 className='bg-amber-200'>Abhilipsa</h1>
         <h1 className='text-red-500'>Abhilipsa</h1>
         <h1 className='bg-[#91ec91] text-red-400 text-[50px] font-bold underline uppercase'>Abhilipsa</h1> */}
         {/* <div className='w-screen h-screen bg-blue-500'> */}
         {
            arr.map((ele,index)=>{
                return(
                    <div  key={index} className='w-[300px] h-75 bg-blue-500 border-2 border-red-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-950 cursor-pointer hover:bg-fuchsia-950 hover:scale-105 transition-all duration-[1s] animate-bounce'>{ele}</div>

                )
            })
         }
       </div>

    )
}
export default TailwindCssConcept