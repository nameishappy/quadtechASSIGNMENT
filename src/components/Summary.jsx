import React from 'react'

const Summary = (props) => {
  const handleOnClick=()=>{
    props.onBookTicket();
    
  }
  const handleBackClick=()=>{
    props.onBackClick();
    
  }
  return (
    <div className='max-w-[1200px] flex mx-auto'>
    <div className='flex flex-col justify-center max-w-[1200px] bg-gray-300 p-9 rounded-xl'>
      <h2 className='text-3xl font-bold mb-4'>Summary</h2>
      <div className='flex flex-row gap-4'>
        <div><img src={props.el.image.medium} alt="" /></div>
        <div>
          <h2 className='text-2xl font-semibold text-[blue]'>{props.el.name}</h2>
        <p className='max-w-[500px] mb-5'>{props.el.summary}</p>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-2 focus:outline-none"
          onClick={()=>handleOnClick()} >Book Ticket</button>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-2 focus:outline-none"
          onClick={()=>handleBackClick()} >Go back</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Summary
