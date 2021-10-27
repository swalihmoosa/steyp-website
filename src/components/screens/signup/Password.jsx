import styled from 'styled-components'
import Dotimg from "../../images/Group 2608.svg"
import Lockimg from "../../images/Layer 4.svg"
import { Link } from 'react-router-dom'

export default function Password() {
    return (
        <>
            <Passsec>
                <Dot>
                    <img src={Dotimg} alt="Group 2645" />
                </Dot>
                <H4>
                    Create a Password For Your Account
                </H4>
                <Form>
                    <Lock>
                        <img src={Lockimg} alt="LOck" />
                    </Lock>
                    <Lock2>
                        <img src={Lockimg} alt="LOck" />
                    </Lock2>
                    <Input type="password" placeholder="Enter Your Password" />
                    <Input type="password" placeholder="Confirm Password"  />
                    <Submit  to="/signup/refer" >
                        Reset
                    </Submit>
                </Form>
            </Passsec>
        </>
    )
}


const Passsec = styled.section`
    width:45%;
    padding: 10% 0;`
const Dot = styled.div`
    width: 40px;
    margin-bottom:25px;`
const H4 = styled.h4`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 25px;`
const Form = styled.form`
    position:relative;`
const Lock = styled.div`
    position: absolute;
    width: 30px;
    top: 10px;
    left: 2%;`
const Lock2 = styled.div`
    position: absolute;
    width: 30px;
    top: 42%;
    left: 2%;`
// const Eye = styled.div`
//     position: absolute;
//     width: 30px;
//     top: 22px;
//     left: 90%;`
// const Eye2 = styled.div`
//     position: absolute;
//     width: 30px;
//     top: 60%;
//     left: 90%;`
const Input = styled.input`
    border: 2px solid;
    padding: 25px 60px 15px 60px;
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