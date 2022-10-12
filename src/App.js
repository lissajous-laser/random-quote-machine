import './App.css';
import React from "react";

const quotes = [
  {
    text: 
      `
      It is better to have 100 functions operate on one data structure
      than to have 10 functions operate on 10 data structures.
      `,
    author: "Alan Perlis"
  },
  {
    text:
      `
      If debugging is the process of removing software bugs, then
      programming must be the process of putting them in.
      `,
    author: "Edsger Dijkstra"
  },
  {
    text:
      `
      Debugging is twice as hard as writing code in the first place.
      Therefore, if you write the code as cleverly as possible, you
      are, by definition, not smart enough to debug it.
      `,
    author: "Brian Kernighan"
  },
  {
    text:
      `
      The first 90% of the code accounts for the first 90% of the
      development time. The remaining 10% of the code accounts for the
      other 90% of the development time.
      `,
    author: "Tom Cargill"
  },
  {
    text:
      `
      Computers are good at following instructions, but not at reading
      your mind.
      `,
    author: "Donald Knuth"
  },
  {
    text:
      `
      Programming, when stripped of all its circumstantial
      irrelevancies, boils down to no more and no less than very
      effective thinking so as to avoid unmastered complexity, to very
      vigorous separation of your many different concerns.
      `,
    author: "Edsger Dijkstra"
  },
  {
    text:
      `
      Premature optimization is the root of all evil.
      `,
    author: "Donald Knuth"
  },
  {
    text:
      `
      Testing can only prove the presence of bugs, not their absence.
      `,
    author: "Edsger Dijkstra"
  },
  {
    text:
      `
      Computer science is not really about computers in the same sense
      that physics is not really about particle accelerators, and
      biology is not about microscopes and Petri dishes... and geometry
      isn't really about using surveying instruments.
      `,
    author: "Hal Ableson"
  },
  {
    text:
      `
      Simplicity does not preced complexity, but follows it.
      `,
    author: "Alan Perlis"
  }]


function App() {

  return (
    <div className="App p-2">
      <QuoteBox id="quote-box"/>
    </div>
  );
}

// returns number 0 to quotes.length - 1
function randomisedIdx() {
  return Math.floor(Math.random() * quotes.length);
}

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteIdx: randomisedIdx()
    }
    this.randomQuote = this.randomQuote.bind(this);
  }

  randomQuote() {
    this.setState((state) => {

      let randomIdx = state.quoteIdx;

      while (randomIdx === state.quoteIdx) {
        randomIdx = randomisedIdx();
      }

      return {quoteIdx: randomIdx};
    })
  }

  render() {
    return (
      <div id="quote-box" className="card text-bg-light ps-2 pe-2 pt-1">
        <div className="card-body">
          <p id="text">{quotes[this.state.quoteIdx].text}</p>
          <p id="author" class="blockquote-footer">{quotes[this.state.quoteIdx].author}</p>
          <button 
            id="new-quote" 
            class="btn btn-primary position-absolute translate-middle bottom-0 start-50"
            onClick={this.randomQuote}
          >
            New Quote
          </button>
          <a id="tweet-quote" href="twitter.com/intent/tweet" class="btn btn-secondary float-end"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    );
  }
}



export default App;
