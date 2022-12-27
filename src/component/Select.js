import React from 'react'
 
const Select = () => {
  return (
    <div className='identity'>
      <select>
        <option value="self">自己的貼文</option>
        <option value="all">全部人</option>
      </select>
    </div>
  )
}
 
export default Select