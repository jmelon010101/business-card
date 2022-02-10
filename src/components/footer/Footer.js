import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import {FaTwitterSquare} from "react-icons/fa";
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer-container">
            <i className="footer-icon facebook"><AiFillFacebook/></i>
            <i className="footer-icon"><FaTwitterSquare/></i>
            <i className="footer-icon"><AiFillInstagram/></i>
            <i className="footer-icon"><AiFillGithub/></i>
        </div>
    )
}