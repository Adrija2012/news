import React, { useState } from 'react'

export default function Header({getNews,languageDeterminer}) {
    const [userValue, changeUserValue] = useState("")
    function formSubmit (e){
        e.preventDefault()
       getNews(userValue)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-warning" >
                <div className="container-fluid">
                    <a style={{fontSize: "25px"}} className="navbar-brand" href="#">
                        Paris News
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a style={{fontSize: "20px"}} className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                   style={{fontSize: "20px"}}
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Choose Your Language
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a onClick= {()=> languageDeterminer("es")} className="dropdown-item" >
                                            Spanish
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick= {()=> languageDeterminer("en")} className="dropdown-item" >
                                            English
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={()=> languageDeterminer("fr")}className="dropdown-item" href="#">
                                        French
                                        </a>
                                    </li>
                                </ul>
                            </li>
                      
                        </ul>
                        <form onSubmit= {formSubmit} className="d-flex" role="search">
                            <input
                            style={{fontSize: "20px"}}
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange= {(e)=> changeUserValue(e.currentTarget.value)}
                            />
                            <button className="btn btn-outline-success" style={{fontSize: "19px", width: "190px"}} type="submit">
                               Search News
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}
