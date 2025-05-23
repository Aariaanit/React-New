import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:3000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {/* <BlogList blogs={blogs}/> */}
      {blogs && <BlogList blogs={blogs} title="Arianit Blogs" />}
    </div>
  );
};

export default Home;
