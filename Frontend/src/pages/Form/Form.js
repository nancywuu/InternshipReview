import React from "react"
<<<<<<< HEAD
import Search from "./Search"
// import Header from "./Header/Header"
// import Footer from "./Footer/Footer.js"
=======
import Search from "./search"
import Header from "../Header/Header"
import Footer from "../Footer/Footer.js"
>>>>>>> e46cbee4b1183b6a2845291c80318527917b8388

// TODO: Ask Sacchit if he's ok with moving Search.js into this file.

function app() {
    return (
        <div className="form-box">
            {/* <Header /> */}
            <Search />
            {/* <Footer />  */}
        </div>
    )
}

export default app