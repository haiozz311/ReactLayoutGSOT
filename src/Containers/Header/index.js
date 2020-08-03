/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './header.css';
import img from './asset/index';

export default class Header extends Component {
    render() {
        return (
            <header className="header position-relative">
                <ul className="contact-header">
                    <li>
                        <i className="fas fa-phone-alt" />
                    </li>
                    <li>
                        <i className="far fa-user" />
                    </li>
                    <li style={
                        {
                            marginLeft: 6,
                            height: 35,
                            backgroundColor: "black",
                            border: "1px solid black",
                            width: 1
                        }
                    } />
                    <li>F</li>
                    <li>
                        <i className="fab fa-instagram" />
                    </li>
                    <li>Be</li>
                    <li style={
                        {
                            marginLeft: 6,
                            height: 35,
                            backgroundColor: "black",
                            border: "1px solid black",
                            width: 1
                        }
                    } />
                </ul>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-fixed-top">
                    <a className="navbar-brand" href="#">
                        <img src={
                            img.logo
                        }
                            alt
                            style={
                                {
                                    width: 100,
                                    height: 50
                                }
                            } />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse position-relative" id="navbarSupportedContent">
                        <div className="BG-responsive"></div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active navitem">
                                <a className="nav-link" href="#">
                                    GIỚI THIỆU<span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item navitem">
                                <a className="nav-link" href="#">
                                    DỊCH VỤ
                                </a>
                            </li>
                            <li className="nav-item navitem">
                                <a className="nav-link" href="#">
                                    BẢNG TIN
                                </a>
                            </li>
                            <li className="nav-item navitem">
                                <a className="nav-link" href="#">
                                    TUYỂN DỤNG
                                </a>
                            </li>
                            <li className="nav-item navitemlast">
                                <a className="nav-link" href="#">
                                    LIÊN HỆ
                                </a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0"
                            style={
                                { marginLeft: 50 }
                            }>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
                                style={
                                    { border: "none" }
                                }>
                                <i style={
                                    {
                                        fontSize: 20,
                                        color: "white"
                                    }
                                }
                                    className="fas fa-search" />
                            </button>
                        </form>
                    </div>
                </nav>
                <div id="carouselId" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <ul className="carousel-indicators nav">
                            <li data-target="#carouselId"
                                data-slide-to={0}
                                className="nav-item position-relative active">
                                <div className="half-circle" />
                                <a className="nav-link" href="#">
                                    1
                                </a>
                            </li>
                            <li data-target="#carouselId"
                                data-slide-to={1}
                                className="nav-item position-relative">
                                <div className="half-circle" />
                                <a className="nav-link" href="#">
                                    2
                                </a>
                            </li>
                        </ul>
                        <div className="carousel-item active">
                            <img style={
                                { width: "100%" }
                            }
                                src={
                                    img.slide
                                }
                                alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img style={
                                { width: "100%" }
                            }
                                src={
                                    img.slide
                                }
                                alt="Second slide" />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

