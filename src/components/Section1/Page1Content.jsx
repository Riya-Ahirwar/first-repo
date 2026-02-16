import React from 'react'
import LeftContent from './leftContent'
import RightContent from './rightContent'
const Page1Content = () => {
  return (
    <div className='flex gap-10 items-center px-30 py-10 h-[90vh]'>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}
export default Page1Content  