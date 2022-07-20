import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/" class="nav-link">Home</Link>
                            </li>
                            <li>
                                <Link to="/create" class="nav-link">Create</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/edit/1" class="nav-link">Edit</Link>
                            </li>
                            <li>
                                <Link to="/help" class="nav-link">Help</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header