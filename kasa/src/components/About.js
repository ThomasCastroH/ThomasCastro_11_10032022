import Header from "./Header"
import Banner from "./Banner"
import Dropdown from "./Dropdown"

function About() {
    return (
        <div className="container">
            <Header />
            <Banner />
            <Dropdown size="large" content="about" />
        </div>
    )
}
export default About