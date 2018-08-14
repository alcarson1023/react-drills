import React, {Component} from 'react'

class TextBox extends Component{
    constructor(){
    super()
    this.state = {
        input: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
}
changeHandler(e){
    console.log(e)
    this.setState({
        input: e.target.value
    })
}

render(){
    console.log(this.state)
    return(
        <div>
            <input type='text' value={this.state.input} onChange={e => this.changeHandler(e)}/>
            <div>{this.state.input}</div>
        </div>
    )
  }
}
export default TextBox
