import React from 'react'
import defaultImg from '../../resources/images/profile_pic.png'

const Image = ({ type, imgsrc = defaultImg, alttext = "" }) => {
    return (
        <div className={type || 'default-img'}>
            <picture>
                <source srcSet={imgsrc}></source>
                <img alt={alttext + ' image'} />
            </picture>
        </div>
    )
}

export default Image;
