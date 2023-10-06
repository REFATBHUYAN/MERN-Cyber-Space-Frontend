import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='max-w-[1300px] mx-auto xl:px-5 md:px-4 sm:px-2 px-4'>
      {children}
    </div>
  )
}

export default Container