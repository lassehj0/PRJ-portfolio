import React from 'react';
import { Link } from 'react-router-dom';

//https://codepen.io/ryasan86/pen/bGpqdYV
function Skills() {
  return (
    <>
      <div id='hej'>
        <Link to='/'>
          <button className='button button1'>
            <span>Home</span>
          </button>{' '}
        </Link>
        <div id='skills'>
          <div id='title'>
            <h1>Skills</h1>
          </div>
          <div id='skillText1'>Press a code language</div>
          <div id='skillText2'>Click the bar to see more information</div>
        </div>
        <div id='skillLVL'>
          Skill lvl: Noob <br></br> Experience: <br></br> 2 days <br></br> 50%
        </div>
        <input type='checkbox' id='btnControl' />
        <label className='btn' htmlFor='btnControl'>
          <div id='codeBox'>
            <div id='codeBoxFill'></div>
          </div>
        </label>
      </div>
    </>
  );
}

export default Skills;
