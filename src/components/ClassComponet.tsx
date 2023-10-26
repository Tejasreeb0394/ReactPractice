
import React from "react";
import ClassChildComponent from "./ClassChildComponent";

class Sample extends React.Component<{}, { name: string, count: number }> {

    constructor(props: any) {
        super(props);
        console.log("constructor")
        this.state = {
            name: "test",
            count: 0
        }
    }

    componentDidMount(): void {
        console.log("after component render componentDidMount will trigger")
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: any, snapshot?: any): void {
        console.log({ prevState, currentState: this.state, snapshot })
        if (prevState.name !== this.state.name) {
            console.log("name update")
        }
        if (prevState.count !== this.state.count) {
            console.log(" count upated")
        }
        console.log("after component render componentDidUpdate will trigger after state update",)
    }

    componentWillUnmount(): void {
        console.log("unmount")
    }

    render() {
        console.log("render")
        console.log(this.state)
        const { name, count } = this.state
        return (
            <>
                <h1>Class component {name}</h1>
                <ClassChildComponent name="child1"/>
                <ClassChildComponent name="child2" />
                <button onClick={() => this.setState({ name: "kjslnagsa" })}>Click Me</button><br />
                <button onClick={() => this.setState({ count: count + 1 })}>Click Me</button>
            </>
        )
    }
}

export default Sample