import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Nav() {
  return (
        <Div>
            <Login>
                <Link to="login">
                    login
                </Link>
                
            </Login>
        </Div>
  )
}

const Div = styled.div`
    height: 50vh;
    width: 50px;
    position: fixed;
    left: 0;
    top: 0;
    background-color: red;
    z-index: 1;
`
const Login = styled.div`
    background-color: green;
`