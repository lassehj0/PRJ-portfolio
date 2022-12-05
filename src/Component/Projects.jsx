import useFetch from "./useFetch";
import Post from "./Post";


const Projects = () => {
  let { data: posts, isloading, errMsg } = useFetch(
    "http://localhost:4000/posts"
  );

  return (
    <section className="posts">

      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      {isloading && <div> loading ... </div>}
      {!posts && !isloading && !errMsg && (
        <div className="not-found"> No Files </div>
      )}
      {errMsg && <div className="error"> {errMsg}</div>}
     
    </section>
    
  );
};

export default Projects;
