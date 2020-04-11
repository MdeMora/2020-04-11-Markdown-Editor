import React ,{useState} from 'react';
import './App.css';
import RawEditor from './components/RawEditor';
import CompiledEditor from './components/CompiledEditor';
import OptionPanel from './components/OptionPanel';

function App() {
  const [unconpiledText, setUncompiledText] = useState('# Hello World')
  const [compiledText, setCompiledText] = useState('')
  const [editorTheme, setEditorTheme] = useState('material')
  const [previewTheme,setPreviewTheme] = useState('material')

  // switch (previewTheme) {
  //   case 'material':
  //     import './previewThemes/material.css'
  //   case 'solarized':
  //     import './previewThemes/solarized.css'
  //   case 'monokai':
  //     import './previewThemes/monokai.css'
  //   case 'paraiso-light':
  //     import './previewThemes/paraisolight.css'
  
  //   default:
  //     break;
  // }

  return (
    <div className="app">
      <OptionPanel setPreviewTheme={setPreviewTheme } setEditorTheme={setEditorTheme}/>
      <RawEditor unconpiledText={unconpiledText} setUncompiledText={setUncompiledText} setCompiledText={setCompiledText} th={editorTheme}/>
      <CompiledEditor compiledText={compiledText}/>
    </div>
  );
}

export default App;
