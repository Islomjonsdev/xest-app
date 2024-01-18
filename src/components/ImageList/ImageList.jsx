import Image from 'next/image';
import React from 'react';
import icon1 from "../../assets/svg/icon1.svg"
import icon2 from "../../assets/svg/icon2.svg"
import icon3 from "../../assets/svg/icon3.svg"
import icon4 from "../../assets/svg/icon4.svg"
import icon5 from "../../assets/svg/icon5.svg"
import "./ImageList.scss"

const ImageList = () => {
  return (
    <div className='imagelist container' style={{marginBottom: "136px"}}>
        <h3 style={{marginBottom: "24px"}}>Trusted By</h3>
        <ul>
            <li>
                <Image src={icon1}/>
            </li>
            <li>
                <Image src={icon2}/>
            </li>
            <li>
                <Image src={icon3}/>
            </li>
            <li>
                <Image src={icon4}/>
            </li>
            <li>
                <Image src={icon5}/>
            </li>
        </ul>
    </div>
  )
}

export default ImageList