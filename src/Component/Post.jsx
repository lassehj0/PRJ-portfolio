import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} className="post">
      
      <h1>{post.headline}</h1>
      <h5>{post.Maintext}</h5>

    </Link>
  );
};

export default Post;
