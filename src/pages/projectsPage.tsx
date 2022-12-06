
import Projects from "../Component/Projects";
import { Link } from 'react-router-dom';


export default function projects() {
  return (
    <>
    
    <div id='hej'>
      <Link to='/'>
          <button className='button button1'>
            <span>Home</span>
          </button>{' '}
          </Link>

        <div id='language'>
        <div className="filter">
        <button className="btn filter-btn active">all</button>
        <button className="btn filter-btn">css</button>
        <button className="btn filter-btn">javascript</button>
        <button className="btn filter-btn">html</button>
        </div>
        </div>


        </div>
    </>
  );
}


