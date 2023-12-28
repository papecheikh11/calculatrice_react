class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
    };
  }

  handleClick = (e) => {
    this.setState({
      result: this.state.result.concat(e.target.name),
    });
  };

  clear = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.result).toString(),
      });
    } catch (error) {
      this.setState({
        result: "error",
      });
    }
  };

  render() {
    return (
      <div className="container w-25">
        <form>
          <input
            type="text"
            value={this.state.result}
            onChange={this.handleClick}
          />
        </form>
        <Button
          handleClick={this.handleClick}
          result={this.state.result}
          clear={this.clear}
          backspace={this.backspace}
          calculate={this.calculate}
        />
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <div className="keypad">
        <button className="highlight" onClick={this.props.clear} id="clear">
          Clear
        </button>
        <button
          className="highlight"
          onClick={this.props.backspace}
          id="backspace"
        >
          C
        </button>
        <button className="highlight" name="/" onClick={this.props.handleClick}>
          &divide;
        </button>
        <button name="7" onClick={this.props.handleClick}>
          7
        </button>
        <button name="8" onClick={this.props.handleClick}>
          8
        </button>
        <button name="9" onClick={this.props.handleClick}>
          9
        </button>
        <button className="highlight" name="*" onClick={this.props.handleClick}>
          &times;
        </button>
        <button name="4" onClick={this.props.handleClick}>
          4
        </button>
        <button name="5" onClick={this.props.handleClick}>
          5
        </button>
        <button name="6" onClick={this.props.handleClick}>
          6
        </button>
        <button className="highlight" name="-" onClick={this.props.handleClick}>
          &ndash;
        </button>
        <button name="1" onClick={this.props.handleClick}>
          1
        </button>
        <button name="2" onClick={this.props.handleClick}>
          2
        </button>
        <button name="3" onClick={this.props.handleClick}>
          3
        </button>
        <button className="highlight" name="+" onClick={this.props.handleClick}>
          +
        </button>
        <button name="0" onClick={this.props.handleClick}>
          0
        </button>
        <button name="." onClick={this.props.handleClick}>
          .
        </button>
        <button
          className="highlight"
          onClick={this.props.calculate}
          id="result"
        >
          =
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
