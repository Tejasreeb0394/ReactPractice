import React, { Component } from 'react'

export default class ClassChildComponent extends Component<any, any> {
    constructor(props: any) {
        super(props)
        console.log("child  constructor", this.props.name)
    }
    componentDidMount(): void {
        console.log("child component did mount", this.props.name)
    }
    render() {
        console.log("child  render", this.props.name)
        return (
            <div>ClassChildComponent {this.props.name}</div>
        )
    }
}
