import { Component } from "react";

export default class Student extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Student details',
            count: 0,
            note: ''
        }
    }

    render() {
        var card = {
            borderRadius: 4,
            borderWidth: 1,
            borderColor: 'red',
            borderStyle: 'dashed',
            width: 200,
            padding: 10
        }
        return (
            <div>
                <div>
                    <h3>{this.state.title} for id {this.props.id}</h3>
                    <div style={card}>
                        <h5>Name: {this.props.name}</h5>
                        <h5>Id: {this.props.id}</h5>
                    </div>
                </div>
                <span>{this.state.note}</span>
                <br></br>
                <button onClick={() => this.updateRecord()}>Update</button>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }

    updateRecord() {
        this.setState({
            title: "Updated Student details",
            note: 'Updated ' + (this.state.count + 1) + ' times',
            count: this.state.count + 1
        })
    }
}