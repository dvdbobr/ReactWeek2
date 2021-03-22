import React, { Component } from 'react'

export default class Copy extends Component {
    constructor(props) {
        super(props)
        this.txtRef = React.createRef()
    }
    componentDidMount() {
        this.txtRef.current.focus();
    }
    copy = () => {
        let txt = this.txtRef.current.value
        console.log(txt);
    }
    render() {
        return (
            <div style={{backgroundColor:'#333',width:'100vw',height:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h1 style={{color:'white'}}>what is the meaning of life</h1>
                <textarea style={{width:200}} name="txtarea" ref={this.txtRef} id="" cols="30" rows="5"></textarea>
                <button style={{width:100}} onClick={()=>this.copy()}>COPY</button>
            </div>
        )
    }
}
