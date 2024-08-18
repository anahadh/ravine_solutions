import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Index"
import AboutUs from "./AboutUs"

export default function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}