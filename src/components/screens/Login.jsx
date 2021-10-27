import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import ResetThree from './login/ResetThree'
import ResetTwo from './login/ResetTwo'
import ResetOne from './login/ResetOne'
import LogOtp from './login/LogOtp'
import LoginMobile from './login/LoginMobile'
import LogPassword from './login/LogPassword'
import Left from './signup/Left'
import Mobile from './signup/Mobile'

export default function Login() {
    return (
        <Router>
        <Namesec>
        <Section className="wrapper">
            <Left />
            <Switch>
                <Route path="/login/" exact component={LoginMobile} />
                <Route path="/login/loginpass" component={LogPassword} />
                <Route path="/login/loginotp" component={LogOtp} /> 
                <Route path="/login/resetone" component={ResetOne} />
                <Route path="/login/resetwo" component={ResetTwo} />
                <Route path="/login/resethree" component={ResetThree} />
                <Route path="/signup/" exact component={Mobile} />
            </Switch>
        </Section>
        </Namesec>
    </Router>
    )
}
const Namesec = styled.section``
const Section = styled.section`
    display:flex;
    justify-content:space-between;`