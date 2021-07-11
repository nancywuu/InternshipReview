import React from "react"
import ReactDOM from "react-dom"
import DesignComponent from "./DesignComponent";
import Footer from "./Footer.js";
import Image from "./Image.js"
import {IoSearchOutline} from "react-icons/all";
import Search from "../../components/SearchBar/SearchBar.js"
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            companyName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })

    }

    render() {
        return(
            <div>
                <Image />
                 <form className="searchBar">
                    <p> Because Interning
                        Should Be Fun! </p>
                    <input type = "text"
                           placeholder = "Search for an internship company"
                           name = "companyName"
                           value = {this.state.companyName}
<<<<<<< HEAD
                           onChange = {this.handleChange}
                    />
                    <br />  <br />
                </form>
=======
                           onChange = {this.handleChange} />
                <IoSearchOutline className='search-icon'/>
                </form> 
>>>>>>> e46cbee4b1183b6a2845291c80318527917b8388
                <DesignComponent />
                <Footer />
            </div>
        )
    }

}
export default Home