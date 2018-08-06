import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charsLeft: this.props.maxChars,
      tweet: ""
    };
  }

  onChangeHandler = (e) => {
    let previousChars = this.state.charsLeft
    this.setState(
      {
        tweet:e.target.value,
        charsLeft:previousChars -1
      }
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.onChangeHandler} type="text" value={this.state.tweet} />
        <p>{this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
