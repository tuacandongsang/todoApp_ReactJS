import { createContext, useState } from "react";


const ThemeUseContext = createContext()

function ThemeContext({ children }) {

    const [numberCart, setNumberCart] = useState(1)

    const handleChangeNumberCart = () => {
        setNumberCart(numberCart + 1)
    }
// console.log(numberCart)
    return (
        <>
            <ThemeUseContext.Provider value={{ handleChangeNumberCart, numberCart, setNumberCart }} >
                {children}
            </ThemeUseContext.Provider>
        </>
    );
}

export { ThemeUseContext, ThemeContext };