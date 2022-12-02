import useFetch from "./useFetch";
import ShowFiles from "./ShowFiles";

const Projects = () => {
  let { data: posts, isloading, errMsg } = useFetch(
    "http://localhost:4000/posts"
  );

  return (
    <section className="ShowFiles">

      {posts && posts.map((post) => <ShowFiles key={post.id} post={post} />)}
      {isloading && <div> loading ... </div>}
      {!posts && !isloading && !errMsg && (
        <div className="not-found"> No Files </div>
      )}
      {errMsg && <div className="error"> {errMsg}</div>}
     
    </section>
    
  );
};

export default Projects;
