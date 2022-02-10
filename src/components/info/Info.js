import React from "react";
import { MdEmail } from "react-icons/md";
import logo from '../../logo.svg';
import "./info.css"

export default function Info() {
    return (
        <div className="info-container">
            <img src={logo} alt="image of person's face" />
            <h1 className="name">Newbie Developer</h1>
            <h4 className="title">Software Engineer</h4>
            <button className="email-button"><MdEmail /><span className="mail-text">Email</span></button>
        </div>
    )
}