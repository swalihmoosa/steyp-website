import styled from 'styled-components'
import Leftimg from "../../images/Mask Group 46.png"
import Logoimg from "../../images/steyp-logo.svg"

export default function Left() {
    return (
        <Leftdiv className="left">
            <Logo>
                <img src={Logoimg} alt="Logo" />
            </Logo>
            <Mask>
                <img src={Leftimg} alt="Mask Group 46.png" />
            </Mask>
        </Leftdiv>
    )
}
const Leftdiv = styled.div`
    width:45%;
    padding: 5% 0px;`
const Logo = styled.div`
    width: 30%;`
const Mask = styled.div``