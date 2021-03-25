import React, { Component } from 'react'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
export default class Card extends Component {
    state = {
        editMode: false,
        name:this.props.name,
        picUrl:this.props.picUrl,
        type:this.props.type
    }
    changeEditMode = () => {
        this.setState({ editMode: !this.state.editMode })
    }
    inputsHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        //console.log(e.target.name, e.target.value)
    }
    handleConfirm=()=>{
        this.changeEditMode();
        this.props.updatePokemon(this.props.id,this.state.name,this.state.picUrl,this.state.type)
    }
    render() {
        return (
            <div className="card">
                <div className="closeIcon">
                    <AiOutlineCloseSquare
                        size={34}
                        onClick={() => this.props.removePokemon(this.props.id)}
                    />
                </div>
                <div className="editIcon">
                    <FiEdit
                        size={34}
                        onClick={this.changeEditMode}
                    />
                </div>
                {
                    this.state.editMode ? (
                        <div className="editInput">
                            <label>Name: </label>
                            <input type="text" value={this.state.name} name="name" onChange={(e)=>this.inputsHandler(e)} />
                            <label>PicUrl: </label>
                            <input type="text" value={this.state.picUrl} name="picUrl" onChange={(e)=>this.inputsHandler(e)} />
                            <label>Type: </label>
                            <input type="text" value={this.state.type} name="type" onChange={(e)=>this.inputsHandler(e)} />
                            <div className="editBtns">
                                <button onClick={this.handleConfirm}>confirm</button>
                                <button onClick={this.changeEditMode}>cancel</button>
                            </div>
                        </div>
                    ) :
                        <div className="cardTitle">
                            <h2>Name: {this.props.name}</h2>
                            <h2>Type: {this.props.type}</h2>
                            <img src={this.props.picUrl} alt="pic" />
                        </div>
                }
            </div>
        )
    }
}
