"use client";
import React, { useState } from "react";

const CommentSection = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const submitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([comment, ...comments]);
      setComment("");
    }
  };

  return (
    <div className="w-[91%] mx-auto  bg-gray-200 px-4 sm:px-8 md:px-12 py-8 my-8 sm:py-10 rounded-sm shadow-md">
      {/* Heading */}
      <h1 className="font-semibold text-blue-600 text-lg sm:text-xl md:text-2xl mb-4">
        Add Your Comment Here
      </h1>

      {/* Form Section */}
      <form className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 w-full" onSubmit={submitComment}>
        <input
          type="text"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="flex-grow p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-gray-800"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition duration-300 border-2 border-blue-700"
        >
          Submit
        </button>
      </form>

      {/* Comments List */}
      <ul className="space-y-4">
        {comments.map((hereComment, index) => (
          <li
            key={index}
            className="p-4 rounded-lg bg-white shadow-sm text-gray-800 border border-gray-300"
          >
            <p className="text-sm">{hereComment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
