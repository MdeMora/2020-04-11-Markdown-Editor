import React ,{useState} from 'react';
import marked from 'marked'
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/monokai.css'
import 'codemirror/theme/solarized.css'
import 'codemirror/theme/paraiso-light.css'

require('codemirror/mode/markdown/markdown');

function RawEditor({unconpiledText='# Hello world',setUncompiledText,setCompiledText, th}) {

    const handleChange = (e) => {
        setUncompiledText(e.target.value)
        setCompiledText(marked(unconpiledText))
    }

    const options = {
        mode:"mardown",
        lineNumbers:true,
        theme:th

    }

  return (
    <CodeMirror value={unconpiledText}
        options={options}
        onBeforeChange={(editor, data, value) => {
            setUncompiledText(value)
            setCompiledText(marked(unconpiledText))
        }}
    />
  )
}

export default RawEditor;