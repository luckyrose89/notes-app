import React from "react";

class ViewFlashCards extends React.Component {
  state = {
    counter: 0,
    flip: false
  };

  handleNext = () => {
    this.setState({
      counter: this.state.counter + 1,
      flip: false
    });
  };

  handlePrevious = () => {
    this.setState({
      counter: this.state.counter - 1,
      flip: false
    });
  };

  handleFlip = () => {
    if (this.state.flip === false) {
      this.setState({
        flip: true
      });
    } else {
      this.setState({
        flip: false
      });
    }
  };
  render() {
    let quesAns = this.props.notebook.map(item => item.questionAnswer);
    let queryArray = [].concat.apply([], quesAns);
    let { counter, flip } = this.state;
    return (
      <div>
        This is where you see Flashcards for {this.props.title} notebook
        <p>Click the Card to View Answer</p>
        <div
          onClick={this.handleFlip}
          onKeyDown={this.handleFlip}
          role="button"
          tabIndex="0"
        >
          <p>{!flip ? queryArray[counter].ques : queryArray[counter].ans}</p>
        </div>
        <div>
          {counter < queryArray.length - 1 && (
            <button onClick={this.handleNext}>next</button>
          )}
          {counter !== 0 && (
            <button onClick={this.handlePrevious}>previous</button>
          )}
        </div>
        <button onClick={this.props.backHandler}>Back</button>
      </div>
    );
  }
}

export default ViewFlashCards;
