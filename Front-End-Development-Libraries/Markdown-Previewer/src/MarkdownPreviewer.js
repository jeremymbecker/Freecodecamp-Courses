import React from 'react';
import {marked} from "https://cdn.skypack.dev/marked@4.0.16";
import './MarkdownPreviewer.css';

marked.setOptions({
  breaks: true
});

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: '' 
    };
  }
  
  updateMarkdown(markdown) {
    this.setState({markdown});
  }
  
  render() {
    return (
      <div id="markdown-previewer">
        <div id="editor-box">
          <div id="editor-heading-box" className="heading-box">
            <i className="fa fa-free-code-camp" aria-hidden="true"></i>   
            <h1 className="title">Editor</h1>
          </div>
          <textarea id="editor" value={this.state.markdown} onChange={(e) => {this.updateMarkdown(e.target.value);}}></textarea>
        </div>
        <div id="preview-box">
          <div id="preview-heading-box" className="heading-box">
            <i className="fa fa-free-code-camp" aria-hidden="true"></i>   
            <h1 className="title">Previewer</h1>
          </div>
          <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.markdown)}}>
            
          </div>
        </div>
      </div>
      
    );
  }
}

export default MarkdownPreviewer;