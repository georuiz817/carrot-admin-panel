import React from 'react'
import errorImg from '../errorImg.png'
export default function ErrorPage() {

    return (
        <div class='error-div'>
            <img id='errorImage' src={errorImg}  alt='b/a'/>
            <p>The requested page is not found :(</p>
        </div>
    )
}
