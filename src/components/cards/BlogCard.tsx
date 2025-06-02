import Image from "next/image";
import React from "react";
import blogImage from "@/assets/blogs/blog1.png";
import { TBlog } from "@/interface/globalType";
import Link from "next/link";

const BlogCard = ({ data }: { data: TBlog }) => {
  return (
    <Link
      href={`/blogs/${data?._id}`}
      className="max-w-md overflow-hidden bg-white rounded-lg shadow-2xl cursor-pointer hover:shadow-none duration-300 mx-auto"
    >
      {/* Image */}
      <div className="w-full">
        <Image
          src={data?.image?.url || blogImage}
          width={500}
          height={300}
          alt="Modern wooden house with black roof"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Author and Date */}
        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center text-blue-gray-400">
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-[15px]">{data?.admin?.name}</span>
          </div>

          <div className="flex items-center text-blue-gray-400">
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 2V6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 2V6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 10H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[15px]">
              {new Date(data?.createdAt).toDateString()}
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="mb-3 text-2xl font-bold text-gray-900 leading-tight">
          {data?.title || "How to Protect Your Roof After a Storm"}
        </h2>

        {/* Description */}
        <p
          className="mb-5 text-blue-gray-500 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data?.content || "" }}
        />

        {/* Read More Link */}
        <div className="flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-red-600 font-medium"
          >
            Read More
            <svg
              className="w-5 h-5 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
