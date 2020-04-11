import React from 'react'
import './optionPanel.css'

function OptionPanel({setEditorTheme,setPreviewTheme}){

    return(
        <div className="optionBar">
            <div className='themesContainer'>
                Themes for editor: 
                    <div className = 'themeSelector' onClick={() => setEditorTheme('material')}>Material</div>
                    <div className = 'themeSelector' onClick={() => setEditorTheme('solarized')}>Solarized</div>
                    <div className = 'themeSelector' onClick={() => setEditorTheme('monokai')}>Monokai</div>
                    <div className = 'themeSelector' onClick={() => setEditorTheme('paraiso-light')}>Paraiso light</div>
            </div>
            <div  className='themesContainer'>
                Themes for preview:
                    <div className = 'themeSelector' onClick={() => {document.body.style.backgroundColor = '#263238'; document.body.style.color= '#b3c3c5'}}>Material</div>
                    <div className = 'themeSelector' onClick={() => {document.body.style.backgroundColor = 'white'; document.body.style.color= '#black'}}>Solarized</div>
                    <div className = 'themeSelector' onClick={() => {document.body.style.backgroundColor = '#272822'; document.body.style.color= '#b9b9b3'}}>Monokai</div>
                    <div className = 'themeSelector' onClick={() => {document.body.style.backgroundColor = '#e7e9db';document.body.style.color = '#4a3b46' }}>Paraiso light</div>
            </div>
        </div>
    )
}

export default OptionPanel