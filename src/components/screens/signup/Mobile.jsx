import styled from 'styled-components'
import Dotimg from "../../images/Group 2608.svg"
import Phoneimg from "../../images/9180212681582004495.svg"
import React from 'react'
import { Link } from 'react-router-dom'

export default function Mobile() {
    return (
        <>
            <Mobilesec>
                <Dot>
                    <img src={Dotimg} alt="Group 2645" />
                </Dot>
                <H4>
                    A beginning of the Digital University for Industry 4.0
                </H4>
                <P>
                    An inventive collaboration for a smart dawn inclining kids to match their vision.
                </P>
                <Form>
                    <Phone>
                        <img src={Phoneimg} alt="Phone" />
                    </Phone>
                    <Input type="number" placeholder="Enter Your Mobile Number"  />
                    <Submit to="/signup/name">
                        Continue
                    </Submit>
                </Form>
                <Pb>
                    Already have an account<Log to="/login/">Login</Log>
                </Pb>
            </Mobilesec>
        </>
    )
}


const Mobilesec = styled.section`
    width:45%;
    padding: 10% 0;`
const Dot = styled.div`
    width: 40px;
    margin-bottom:25px;`
const H4 = styled.h4`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 25px;`
const P = styled.p`
    font-size: 18px;
    color: #727272;
    margin-bottom: 25px;`
const Form = styled.form`
    position:relative;`
const Phone = styled.div`
    position: absolute;
    width: 30px;
    top: 8px;
    left: 2%;`
const Input = styled.input`
    border: 2px solid;
    padding: 25px 25px 15px 60px;
    width: 100%;
    border-radius: 10px;
    font-weight: 700;
    margin-bottom: 50px;`
const Submit = styled(Link)`
    text-align: center;
    width: 100%;
    color: #fff; 
    font-weight: 700;
    padding: 25px 25px;
    background: rgb(15,167,111);
    border-radius: 10px;
    margin-bottom: 50px;
        display: block;`
const Pb = styled.p`
    font-size: 18px;
    color: #727272;
    text-align:center;
    font-weight: 500;`
const Log = styled(Link)`
    color:#536af5;
    font-weight: 500;
    margin-left: 10px;`
