import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Dotimg from "../../images/Group 2608.svg"
import Personimg from "../../images/person.svg"

export default function Name() {
    return (
        <>
            <Namesec>
                <Dot>
                    <img src={Dotimg} alt="Group 2645" />
                </Dot>
                <H4>
                    Enter Your Name
                </H4>
                <P>
                    We can provide you the cirtificate with the entered name
                </P>
                <Form>
                    <Person>
                        <img src={Personimg} alt="person" />
                    </Person>
                    <Input type="text" placeholder="Enter Your Name" />
                    <Submit to ="/signup/password" >
                        Continue
                    </Submit>
                </Form>
            </Namesec>

        </>
    )
}
const Namesec = styled.section`
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
    width: 50%;
    color: #727272;
    margin-bottom: 25px;`
const Form = styled.form`
    position:relative;`
const Person = styled.div`
    position: absolute;
    width: 30px;
    top: 15px;
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
    display:block;`