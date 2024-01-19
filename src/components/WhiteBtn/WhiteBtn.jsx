import React from 'react';
import "./WhiteBtn.scss"

const WhiteBtn = ({btnTitle}) => {
  return (
    <div>
        <button className='whitebtn'>{btnTitle}</button>
    </div>
  )
}

export default WhiteBtn