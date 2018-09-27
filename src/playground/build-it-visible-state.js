class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);

    this.state = {
      isVisible: false
    };
  }

  handleVisibilityToggle() {
    this.setState(prev => {
      return {
        isVisible: !prev.isVisible
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibilityToggle}>
          {this.state.isVisible ? "Hide details" : "Show details"}
        </button>

        {this.state.isVisible && <p>These are the details!</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
