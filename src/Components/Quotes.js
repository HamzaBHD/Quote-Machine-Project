import React, { useRef, useEffect} from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import gsap from 'gsap'
import Footer from "./Footer";


export default function Quotes(props) {

    let paraItem = useRef(null)
    let quoteItem = useRef(null)
    let authorItem = useRef(null)
    let backItem = useRef(null)
    let wrapperItem = useRef(null)
    

    useEffect(() => {
      const background = backItem.current;
      const quote = quoteItem.current;
      const author = authorItem.current;
      const para = paraItem.current;
      const colorItems = wrapperItem.current;

      gsap.fromTo(
        colorItems,{
          opacity: .5,
        },
        {
          opacity: 1,
          duration: 3,
        }
      )
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
      <div id='wrapper' 
           ref={wrapperItem} 
           style={props.style}
           >
        <div id='quote-box'
             ref={backItem}
             style={props.style}
          >
          <div id='quote-text'>
              <div>
              <svg ref={quoteItem} 
                   xmlns="http://www.w3.org/2000/svg" 
                   width="auto" height="auto" fill="currentColor" 
                   className="quotes--icon bi bi-quote" viewBox="0 0 16 16">
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
              </svg>
                <span id="text" ref={paraItem}>{props.quote}</span>
              </div>
              {props.author ? 
              <div ref={authorItem} id='author'>
                - {props.author}
              </div> :
              <div ref={authorItem} id='author'>
                - UNKNOWN
              </div>}
              <div className='buttons'>
                  <div></div>
                  <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
                            encodeURIComponent('"' + props.quote + '" ' + props.author)}
                     target="_top"
                     id='tweet-quote'
                     >
                    <i class="bi bi-twitter"></i>
                  </a>
                <div id='new-quote' onClick={props.handleClick} >
                  New quote
                </div>
              </div>
          </div>  
        </div>
        <Footer />
      </div>
    )
  } 