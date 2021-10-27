import styled from "styled-components"
import Dotimg from "../../images/Group 2608.svg"
import Phoneimg from "../../images/9180212681582004495.svg"
import { Link } from 'react-router-dom'

export default function ResetOne() {
    return (
        <>
            <Mobilesec>
                <Dot>
                    <img src={Dotimg} alt="Group 2645" />
                </Dot>
                <H4>
                    Password Reset Setup (1/3)
                </H4>
                <P>
                    Enter your registered number to reset your password
                </P>
                <Form>
                    <Phone>
                        <img src={Phoneimg} alt="Phone" />
                    </Phone>
                    <Input type="number" placeholder="Enter the Mobile Number" />
                    <Submit to="/login/resetwo">
                        Send OTP
                    </Submit>
                </Form>
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
    margin-bottom: 10px;
    margin-bottom:50px;`
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