import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.",
};

const Blogs = async () => {
  const res = await fetch(`http://localhost:5000/blogs`);
  const blogs = await res.json();
  console.log(blogs);
  return (
    <div>
      <h1 className="text-3xl text-center my-5 font-bold">
        Latest Blogs From <span className="text-teal-600">NexaBlog</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
