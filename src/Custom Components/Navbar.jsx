import React from 'react'  //imp => React Snippits
import PropTypes from 'prop-types'


// CAPTAIN✨
function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.logo}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.aboutus}</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link disabled">CONTACT</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

// Props and Prop Type:
// Props Types :
// Default Props:
// Pts => proptypes.string

Navbar.prototype = {                    //for Seting as String Values Only
    logo: PropTypes.string.isRequired,
    aboutus: PropTypes.string.isRequired,
}


Navbar.defaultProps = {
    logo: 'Company Logo Here',
    aboutus: 'About You|Your Companys',
}

export default Navbar                   //rfc,rfce,rf