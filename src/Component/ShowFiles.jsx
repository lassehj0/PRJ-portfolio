import { Link } from "react-router-dom";

const ShowFiles = ({ post }) => {
  return (
    <Link to={`/ShowFiles/${post.id}`} className="ShowFiles">
      
      <h1>{post.headline}</h1>
      <h5>{post.Maintext}</h5>

    </Link>
  );
};

export default ShowFiles;
