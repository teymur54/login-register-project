import { Link } from "react-router-dom"
import Users from "./Users"
const Editor = () => {
    return (
        <section>
            <h1>Editors Page</h1>
            <br />
            <Users />
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Editor