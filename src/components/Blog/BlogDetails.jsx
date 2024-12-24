import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../pages/Footer";

const BlogDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state;

  console.log(blog);
  

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#111111]">
        <p>No blog details available. Go back to <button onClick={() => navigate(-1)} className="text-[#008d92]">Blogs</button></p>
      </div>
    );
  }

  return (
    <div>
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
    <button
          onClick={() => navigate(-1)}
          className="text-[#008d92] mb-4"
        >
          &larr; Back to Blogs
        </button>
      {/* Blog Banner */}
      <div className="relative mb-6">
        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-[#111111] bg-opacity-50 flex flex-col justify-center items-center text-center text-white rounded-lg">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">{blog.title}</h2>
          <p className="italic text-sm md:text-lg">{blog.category}</p>
        </div>
      </div>

      {/* Blog Description */}
      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        <p>{blog.description}</p>
      </div>

      {/* Blog Content */}
      <div className="space-y-8">
        {blog.content.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-300 mb-4">
              {section.heading}
            </h2>
            <p className="text-gray-500 mb-4">{section.body}</p>
            {section.points && (
              <ul className="list-disc list-inside space-y-2 text-gray-500">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
      <Footer/>
      </div>
  );
};

export default BlogDetails;
