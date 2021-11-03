import React from 'react'
import {Spinner, LockBody, Picture, ReleaseBody} from './styles'

export const Loading = ({src, ...restProps}) => {
    return (
       <Spinner>
           <LockBody {...restProps}/>
           <Picture  src={`/images/users/${src}.png`}/>
       </Spinner>
    )
}

Loading.Release = function LoadingReleaseBody(){
    return <ReleaseBody/>
}
export default Loading
