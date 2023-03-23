import {createContext, useEffect, useState} from 'react'


const ThemeContext = createContext();
const ThemeContextProvider = (props) => {
    const getTheme = ()=>{
        return localStorage.getItem('dark') || false;
      };
      const [ Dark , setDark ] = useState(getTheme());
      const darkMode = ()=>{
        setDark(Dark === 'light' ? 'dark' : 'light' );
      }
    
      useEffect(()=>{
        localStorage.setItem('dark',Dark);
      },[Dark])
  return (
    <ThemeContext.Provider value={{Dark , darkMode}}>
        {
            props.children
        }
    </ThemeContext.Provider>
  )
}

export {ThemeContextProvider, ThemeContext}