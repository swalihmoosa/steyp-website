import React from 'react'
import styled from "styled-components"
import Logo from "../images/steyp-logo.svg" 
import Dash from "../images/dashboard-image.png"
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <Homesec>
                <section className="wrapper" >
                    <Header>
                        <H1>
                            <img src={Logo} alt="Logo" />
                        </H1>
                        <Nav>
                            <Login to="/login">
                                Login
                            </Login>
                            <Signup to="/signup">
                                Signup
                            </Signup>
                        </Nav>
                    </Header>
                    <Spot>
                        <Left>
                            <H4>
                            A beginning of the Digital University for Industry 4.0
                            </H4>
                            <P>
                            Steyp is an EdTech company, a beginning of Digital University for industry 4.0, 
                            where one can find the relevant courses to upgrade skills from the top experts and gear up for the future advancements in technology, 
                            a company incubated and accelerated by Talrop.
                            </P>
                        </Left>
                        <Right>
                            <img src={Dash} alt="Dashboard" />
                        </Right>
                    </Spot>
                </section>
            </Homesec>
        </>
    )
}

const Homesec = styled.section`
    padding:25px 0;`
const Header = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;`
const H1 = styled.h1`
    width: 125px;`
const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    width: 25%;`
const Login = styled(Link)`
    border: 2px solid rgb(15, 167, 111);
    padding: 15px 25px;
    border-radius: 20px;
    color: rgb(15,167,111);
    font-weight: 700;
    text-align: center;`
const Signup = styled(Link)`
    border: 2px solid rgb(15, 167, 111);
    padding: 15px 25px;
    border-radius: 20px;
    color: rgb(15,167,111);
    font-weight: 700;
    text-align: center;`
const Spot = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 10% 0;`
const Left = styled.div`
    width:45%;`
const H4 = styled.h4`
    font-size: 47px;
    font-weight: 700;
    margin-bottom: 50px;`
const P = styled.p``
const Right = styled.div`
    width:45%;`
