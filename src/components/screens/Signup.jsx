import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Left from './signup/Left'
import Mobile from './signup/Mobile'
import Name from './signup/Name'
import Password from './signup/Password'
import Refer from './signup/Refer'
import LoginMobile from './login/LoginMobile'


export default function Signup() {
    return (
        <Router>
            <Namesec>
            <Section className="wrapper">
                <Left />
                <Switch>
                    <Route path="/signup/" exact component={Mobile} />
                    <Route path="/signup/name" component={Name} /> 
                    <Route path="/signup/password" component={Password} /> 
                    <Route path="/signup/refer" component={Refer} />
                    <Route path="/login/" exact component={LoginMobile} />
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