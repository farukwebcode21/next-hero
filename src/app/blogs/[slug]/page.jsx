import React from "react";

const DetailsPage = async ({ params }) => {
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.slug}`
  );
  const post = await user.json();

  return (
    <div className="max-h-screen p-5 text-center">
      <h3 className="text-2xl underline uppercase">Details Page</h3>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
};

export default DetailsPage;
