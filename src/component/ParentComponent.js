import React from 'react'
import './ParentComponent.css'

class ParentComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="Parent">
                Parent
                {this.props.children}
            </div>
        )
    }
}

export default ParentComponent