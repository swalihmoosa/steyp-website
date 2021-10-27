import styled from 'styled-components'
import Dotimg from "../../images/Group 2608.svg"
import Lockimg from "../../images/Layer 4.svg"
import Tickimg from "../../images/checked (1).svg"
import { Link } from 'react-router-dom'


export default function ResetThree() {
    return (
        <>
            <Passsec>
                <Dot>
                    <img src={Dotimg} alt="Group 2645" />
                </Dot>
                <H4>
                    Password Reset Setup (3/3)
                </H4>
                <Form>
                    <Lock>
                        <img src={Lockimg} alt="LOck" />
                    </Lock>
                    <Lock2>
                        <img src={Lockimg} alt="LOck" />
                    </Lock2>
                    <Input type="password" placeholder="Enter Your Password" />
                    <Input type="password" placeholder="Confirm Password" />
                    <Submit id="reset" onClick={active}>
                        Reset
                    </Submit>
                </Form>
                <Overlay id="overlay" >
                <Success>
                    <Tick>
                        <img src={Tickimg} alt="Tick" />
                    </Tick>
                    <H5>
                        Success
                    </H5>
                    <Successp>
                        Your password has been reset successfully
                    </Successp>
                    <Login to="/login/loginpass">
                        Login
                    </Login>
                </Success>
            </Overlay>
            </Passsec>

        </>
    )
}

function active(e){
    e.preventDefault();
    var alert = document.getElementById("overlay");

    alert.classList.add("show");

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
const Input = styled.input`
    border: 2px solid;
    padding: 25px 60px 15px 60px;
    width: 100%;
    border-radius: 10px;
    font-weight: 700;
    margin-bottom: 50px;`
const Submit = styled.button`
    text-align: center;
    width: 100%;
    color: #fff; 
    font-weight: 700;
    padding: 25px 25px;
    background: rgb(15,167,111);
    border-radius: 10px;
    display:block;`
const Overlay = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0,0,0,.4);
    height: 195%;
    display: none;`
const Success = styled.div`
    background: #fff;
    width: 50%;
    margin: auto;
    margin-top: 15%;
    padding: 100px 50px 50px;
    border-radius: 10px;
    position:relative;`
const Tick = styled.div`
    background: #fff;
    width: 150px;
    border-radius: 50%;
    padding: 10px;
    margin: 0 auto;
    margin-bottom: 25px;
    position: absolute;
    left: 40%;
    top: -70px;`
const H5 = styled.h5`
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 25px;
    text-align: center;`
const Successp = styled.p`
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 25px;`
const Login = styled(Link)`
    text-align: center;
    width: 100%;
    color: #fff; 
    font-weight: 700;
    padding: 25px 25px;
    background: rgb(15,167,111);
    border-radius: 10px;
    display:block;`
