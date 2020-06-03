import React from 'react'
import './ChildComponent.css'

class ChildComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="ChildComponent">
                Children
            </div>
        )
    }
}

export default ChildComponent