import React, { Component } from 'react';

class Main extends Component {

  render() {
    let { state } = this.props;

    return (
      <div className="main">
        <div className={ `page ${ state.fonts[state.activeFont].class } ${ state.ratios[state.activeRatio].class }` }>
          <div className="page-left">
            <div className="headers">
              <h1>Header 1</h1>
              <h2>Header 2</h2>
              <h3>Header 3</h3>
              <h4>Header 4</h4>
              <h5>Header 5</h5>
              <h6>Header 6</h6>
            </div>
            <div className="regulars">
              <p>Normal Text</p>
              <p><strong>Bold Text</strong></p>
              <p><em>Italic Text</em></p>
            </div>
          </div>
          <div className="page-right">
            <h1>The Tiny Book</h1>
            <br />
            <p>Elizabeth Snozcumber looked at the tiny book in her hands and felt lonely.</p>
            <p>She walked over to the window and reflected on her backward surroundings. She had always loved urban Truro with its prickly, pleasant parks. It was a place that encouraged her tendency to feel lonely.</p>
            <p>Then she saw something in the distance, or rather some<i>one</i>. It was the  figure of Felicity Giantbulb. Felicity was a friendly patient with beautiful fingers and wide arms.</p>
            <p>Elizabeth gulped. She glanced at her own reflection. She was a hopeful, snotty, beer drinker with handsome fingers and solid arms. Her friends saw her as an amused, agreeable author. Once, she had even helped a high deaf person cross the road.</p>
            <p>...</p>
            <p>As Elizabeth stepped outside and Felicity came closer, she could see the shy glint in her eye. "I am here because I want a wifi code," Felicity bellowed, in a peculiar tone. She slammed her fist against Elizabeth's chest, with the force of 5573 monkeys. "I frigging hate you, Elizabeth Snozcumber."</p>
            <p>...</p>
            <p>"Hmph," pondered Felicity.</p>
            <p>"Please?" begged Elizabeth with puppy dog eyes.</p>
            <p>Felicity looked worried, her body blushing like a keen, kaleidoscopic kettle.</p>
            <p>Then Felicity came inside for a nice drink of beer.</p>
            <br />
            <p className="ending"><strong>THE END</strong></p>
          </div>
        </div>
      </div>
    );
  }

}

export default Main;
