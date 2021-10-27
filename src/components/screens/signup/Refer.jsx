import styled from 'styled-components'
import Dotimg from "../../images/Group 2608.svg"
import Couponimg from "../../images/coupon.svg"

import React from 'react'

export default function Refer() {
    return (
        <>
            <Refersec>
                <Dot>
                    <img src={Dotimg} alt="Group 2645" />
                </Dot>
                <H4>
                    Enter a Referal Code
                </H4>
                <P>
                    Please enter a referal code given by your friend
                </P>
                <Form>
                    <Coupon>
                        <img src={Couponimg} alt="Coupoon" />
                    </Coupon>
                    <Input type="text" placeholder="Enter Your Name" />
                    <Submit type="Submit" value="Continue" />
                </Form>
                <Pb>
                    Don't you have a referral code?<a href="/">Skip for Now</a>
                </Pb>
            </Refersec>
        </>
    )
}

const Refersec = styled.section`
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
const Coupon = styled.div`
    position: absolute;
    width: 30px;
    top: 25px;
    left: 2%;`
const Input = styled.input`
    border: 2px solid;
    padding: 25px 25px 15px 60px;
    width: 100%;
    border-radius: 10px;
    font-weight: 700;
    margin-bottom: 50px;`
const Submit = styled.input`
    text-align: center;
    width: 100%;
    color: #fff; 
    font-weight: 700;
    padding: 25px 25px;
    background: rgb(15,167,111);
    border-radius: 10px;
    margin-bottom: 50px;`
const Pb = styled.p`
    font-size: 18px;
    color: #727272;
    text-align:center;
    font-weight: 500;
    a{
        color:#536af5;
        font-weight: 500;
        margin-left: 10px;
    }`