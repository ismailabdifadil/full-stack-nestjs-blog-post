import { useNavigate } from "react-router";

import BlogEditor from "../components/BlogEditor";

const NewBlog = () => {
  const navigate = useNavigate();

  const handleCreateBlog = () => {
<<<<<<< HEAD
    console.log(first)
=======
>>>>>>> 05d20f51ac2e90b57d9ccef1b7bc3ffecb3cb4b3
    navigate("/blogs");
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-12 px-4">
        <BlogEditor onSubmit={handleCreateBlog} />
      </main>
    </div>
  );
};

export default NewBlog;
