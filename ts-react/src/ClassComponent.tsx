import { Component } from "react";
import { Button } from "react-bootstrap";

interface ClassComponentProps {
  name: string;
  color?: string;
}
interface ClassComponentState {
  clicked: boolean;
}

class ClassComponent extends Component<
  ClassComponentProps,
  ClassComponentState
> {
  state = {
    clicked: false,
  };
  render() {
    return (
      <>
        <h2 className="text-center">This is a Class Component</h2>
        <h3 style={{ color: this.props.color || "black" }}>
          Salutiamo {this.props.name} !
        </h3>
        <Button
          onClick={() => {
            this.setState({
              clicked: !this.state.clicked,
            });
          }}
        >
          CLICCATO: {this.state.clicked ? "SI" : "NO"}
        </Button>
      </>
    );
  }
}
export default ClassComponent;
