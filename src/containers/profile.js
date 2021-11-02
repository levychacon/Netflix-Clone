import React from 'react'
import {Header} from '../components/header'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

const SelectProfileContainer = ({user, setProfile})=> {
    return (
       <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="netflix"/>
            </Header.Frame>
        </Header>
       </>
    )
}

export default SelectProfileContainer
