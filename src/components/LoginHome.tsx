import { useState } from "react";
import App from "../App"
import { MyContext } from "../lib/context/MyContext";
import { HomePage } from "./HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export const LoginHome = () => {
    const [text, setText] = useState<any>("");

    return <MyContext.Provider value={{ text, setText }}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/:userId" element={<HomePage />} />
            </Routes>
        </BrowserRouter>

    </MyContext.Provider>
}