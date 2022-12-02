
import Projects from "../Component/Projects";
import { Link } from 'react-router-dom';


export default function projects() {
  return (
    <>
      <Projects />
      <Link to='/'>
          <button className='button button1'>
            <span>Home</span>
          </button>{' '}
        </Link>
    </>
  );
}


