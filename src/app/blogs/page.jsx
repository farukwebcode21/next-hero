import Link from "next/link";
import React from "react";

const BlogsPages = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const users = await data.json();

  return (
    <div className="min-h-screen p-5">
      {users.map((user) => (
        <div
          className="px-5 py-4 mb-10 border border-orange-600 hover:border-purple-500"
          key={user.id}
        >
          <h3>{user.title}</h3>
          <p>{user.body}</p>
          <Link href={`/blogs/${user.id}`} className="mt-5 btn-outline btn">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPages;
