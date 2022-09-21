import React from 'react';
import './RandomQuoteMachine.css'

class RandomQuoteMachine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        quote: quotesAndAuthors[Math.floor(Math.random() * quotesAndAuthors.length)].quote,
        author: quotesAndAuthors[Math.floor(Math.random() * quotesAndAuthors.length)].author,
        color: "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")"
      };
      this.handleClick = this.handleClick.bind(this);
      this.randomColor = this.randomColor.bind(this);
    }
    
    randomColor() {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      let color = "rgb(" + r + "," + g + "," + b + ")";
      return color;
    }
    
    handleClick() {
      let newIndex = Math.floor(Math.random() * quotesAndAuthors.length);
      let newColor = this.randomColor();
      this.setState({
        quote: quotesAndAuthors[newIndex].quote,
        author: quotesAndAuthors[newIndex].author,
        color: newColor
      });
    }
    
    render() {
      document.body.style.background = this.state.color;
      return (
        <div id="container">
          <div id="quote-box">
            <h1 id="text" style={{color: this.state.color}}><i className="fa fa-quote-left fa-sm"></i> {this.state.quote}</h1>
            <h2 id="author" style={{color: this.state.color}}>- {this.state.author}</h2>
            <div id="button-container">
              <button className="btn btn-default button-display" style={{backgroundColor: this.state.color}}><a href="https://twitter.com/intent/tweet" id="tweet-quote" className="button-link" title="Tweet this quote!"><i className="fa fa-twitter fa-2x"></i></a></button>
              <button id="new-quote" className="btn btn-default button-display" onClick={this.handleClick} style={{backgroundColor: this.state.color}}>New quote</button>
            </div>
          </div>  
          <div id="footer" style={{backgroundColor: this.state.color}}>
            <h3 id="footer-text">by Jeremy</h3>
          </div>
        </div>
      );
    }
  }
  
  const quotesAndAuthors=[
    {
      "quote" : "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
      "author" : "Leonardo da Vinci"
    },
    {
      "quote" : "The mind is everything. What you think you become.",
      "author" : "Buddha"
    },
    {
      "quote" : "A person who never made a mistake never tried anything new.",
      "author" : "Albert Einstein"
    },
    {
      "quote" : "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
      "author" : "Plato"
    },
    {
      "quote" : "Every strike brings me closer to the next home run.",
      "author" : "Babe Ruth"
    },
    {
      "quote" : "An unexamined life is not worth living.",
      "author" : "Socrates"
    },
    {
      "quote" : "Start where you are. Use what you have. Do what you can.",
      "author" : "Arthur Ashe"
    },
    {
      "quote" : "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
      "author" : "Mae Jemison"
    },
    {
      "quote" : "Life is 10% what happens to me and 90% of how I react to it.",
      "author" : "Charles Swindoll"
    },
    {
      "quote" : "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
      "author" : "Dalai Lama"
    },
    {
      "quote" : "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
      "author" : "Vincent Van Gogh"
    },
    {
      "quote" : "Go confidently in the direction of your dreams. Live the life you have imagined.",
      "author" : "Henry David Thoreau"
    },
    {
      "quote" : "Certain things catch your eye, but pursue only those that capture the heart.",
      "author" : "Ancient Indian Proverb"
    },
    {
      "quote" : "The most common way people give up their power is by thinking they don’t have any.",
      "author" : "Alice Walker"
    },
    {
      "quote" : "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
      "author" : "Sheryl Sandberg"
    },
    {
      "quote" : "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
      "author" : "Anne Frank"
    },
    {
      "quote" : "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
      "author" : "Oprah Winfrey"
    },
    {
      "quote" : "I attribute my success to this: I never gave or took any excuse.",
      "author" : "Florence Nightingale"
    },
    {
      "quote" : "Education costs money. But then so does ignorance.",
      "author" : "Sir Claus Moser"
    },
    {
      "quote" : "When I let go of what I am, I become what I might be.",
      "author" : "Lao Tzu"
    },
    {
      "quote" : "I have learned over the years that when one’s mind is made up, this diminishes fear.",
      "author" : "Rosa Parks"
    },
    {
      "quote" : "Whatever the mind of man can conceive and believe, it can achieve.",
      "author" : "Napoleon Hill"
    },
    {
      "quote" : "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
      "author" : "Mark Twain"
    },
    {
      "quote" : "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
      "author" : "Jesus"
    },
    {
      "quote" : "Eighty percent of success is showing up.",
      "author" : "Woody Allen"
    },
    {
      "quote" : "A truly rich man is one whose children run into his arms when his hands are empty.",
      "author" : "Unknown"
    },
    {
      "quote" : "Dream big and dare to fail.",
      "author" : "Norman Vaughan"
    },
    {
      "quote" : "We must balance conspicuous consumption with conscious capitalism.",
      "author" : "Kevin Kruse"
    },
    {
      "quote" : "Everything has beauty, but not everyone can see.",
      "author" : "Confucius"
    },
    {
      "quote" : "You miss 100% of the shots you don’t take.",
      "author" : "Wayne Gretzky"
    },
    {
      "quote" : "Do what you can, where you are, with what you have.",
      "author" : "Teddy Roosevelt"
    },
    {
      "quote" : "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
      "author" : "Erma Bombeck"
    },
    {
      "quote" : "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
      "author" : "Erica Jong"
    },
    {
      "quote" : "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      "author" : "Joshua J. Marine"
    },
    {
      "quote" : "The only person you are destined to become is the person you decide to be.",
      "author" : "Ralph Waldo Emerson"
    }
  
  ];
  
  export default RandomQuoteMachine;
  