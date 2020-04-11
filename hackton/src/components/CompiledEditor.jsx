import React from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

function CompiledEditor({compiledText}){

    return(
        <div className="result">{ ReactHtmlParser(compiledText) }</div>
    )
}

export default CompiledEditor