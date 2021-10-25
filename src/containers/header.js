import React from 'react'
import {Header} from '../components/header'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export const HeaderContainer = ({children}) => {
    return (
       <Header>
           <Header.Frame>
               <Header.Logo to={ROUTES.HOME} alt="logo" src={logo}/>
               <Header.ButtonLink to={ROUTES.SIGNIN} alt="teste">Sign in</Header.ButtonLink>
           </Header.Frame>
           {children}

       </Header>
    )
}

export default HeaderContainer
