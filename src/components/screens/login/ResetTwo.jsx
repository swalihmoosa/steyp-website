import styled from "styled-components"
import Dotimg from "../../images/Group 2608.svg"
import Phoneimg from "../../images/9180212681582004495.svg"
import { Link } from 'react-router-dom'

export default function ResetTwo() {
    return (
        <>
            <Mobilesec>
                <Dot>
                    <img src={Dotimg} alt="Group 2645" />
                </Dot>
                <H4>
                    Password Reset Setup (2/3)
                </H4>
                <P>
                    The recovery code was sent to you phone number.Please enter the code
                </P>
                <Form>
                    <Phone>
                        <img src={Phoneimg} alt="Phone" />
                    </Phone>
                    <Input type="number" placeholder="Enter the otp" />
                    <For>
                        Resend otp in 30s
                    </For>
                    <Submit to="/login/resethree">
                        Verify
                    </Submit>
                </Form>
                <Create to="/signup">Login with password</Create>
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
    margin-bottom: 10px;`
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
const For = styled.p`
    display: block;
    text-align: right;
    margin-bottom: 50px;
    color:#536af5;
    font-weight: 500;`
const Create = styled(Link)`
    color:#536af5;
    font-weight: 500;
    margin-left: 10px;
    text-align:center;
    display:block;`
