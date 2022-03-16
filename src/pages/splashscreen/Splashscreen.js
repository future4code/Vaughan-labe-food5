import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import splashlogo from "../../assets/splashlogo.svg";

const SplashscreenContainer = styled.div`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e86e5a;
    height: 100vh;
    `;

const Splashscreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/login");
        }, 2000);
    }, []);

    return (
        <SplashscreenContainer>
            <img src={splashlogo} alt="logo" />
            </SplashscreenContainer>
    );
};

export default Splashscreen;