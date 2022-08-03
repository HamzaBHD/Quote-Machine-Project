import React, { useRef, useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import gsap from 'gsap'


export default function Quotes(props) {

    let paraItem = useRef(null)
    let quoteItem = useRef(null)
    let authorItem = useRef(null)
    let backItem = useRef(null)
    

    useEffect(() => {
      const background = backItem.current;
      const quote = quoteItem.current;
      const author = authorItem.current;
      const para = paraItem.current;

      gsap.fromTo(
        quote,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 3,
        })
      gsap.fromTo(
        author,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 3
        })
      gsap.fromTo(
        para,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 3

        })
      gsap.fromTo(
        background,
        {
          opacity: 0.7,
        },
        {
          opacity: 1,
          duration: 2.5 
        })
    }, [props.quote])

    return (
      <div id='quote-box'
           ref={backItem}
           style={props.style}
        >
        <div id='quote-text'>
            <div id='text'>
            <svg ref={quoteItem} 
                 xmlns="http://www.w3.org/2000/svg" 
                 width="auto" height="auto" fill="currentColor" 
                 className="quotes--icon bi bi-quote" viewBox="0 0 16 16">
              <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
            </svg>
              <p ref={paraItem}>{props.quote}</p>
            </div>
            {props.author ? 
            <div ref={authorItem} id='author'>
              - {props.author}
            </div> :
            <div ref={authorItem} id='author'>
              - UNKNOWN
            </div>}
            <div className='buttons'>
            <div id='tweet-quote'
                 title='Tweet this quote!'>
              <svg xmlns="http://www.w3.org/2000/svg" 
                   width="16" height="16" fill="currentColor" 
                   className="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>
              <a href="https://twitter.com/intent/tweet" 
                 target="_blank">
              </a>
            </div>
            <div id='new-quote' onClick={props.handleClick} >
              New quote
            </div>
            </div>
        </div>  
      </div>
    )
  } 