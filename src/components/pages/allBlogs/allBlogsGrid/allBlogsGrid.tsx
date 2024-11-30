/* eslint-disable @typescript-eslint/no-explicit-any */
// components/pages/allBlogs/allBlogsGrid/allBlogsGrid.tsx
'use client'
import BlogCard from '@/components/cards/BlogCard/BlogCard';
import { useGetAllBlogsQuery } from '@/redux/features/blog/blogApi';
import { isNonEmptyArray } from '@/utils/isNonEmptyArray';
import { Pagination, PaginationProps } from 'antd';
import { useState } from 'react';

// interface AllBlogsGridProps {
//   blogs: TBlogPost[];
//   currentPage: number;
//   totalBlogs: number;
//   defaultPageSize: number;
// }

const AllBlogsGrid = () => {

  const [page, setPage] = useState(1);
  const { data: getAllBlogs } = useGetAllBlogsQuery({ page, limit:10 });

  console.log(getAllBlogs?.data?.blogs);
  const onChange: PaginationProps['onChange'] = (page) => {
    window.scrollTo(0, 0);
      setPage(page);
    };

  return (
    <div>
        
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container py-10">
        {isNonEmptyArray(getAllBlogs?.data?.blogs) && getAllBlogs?.data?.blogs?.map((item:any ) => (
          <BlogCard
            key={item._id}
            imageSrc={item.banner}
            author={item?.authorId?.username}
            date={item.createdAt}
            title={item.title}
            description={item.content}
            readMoreLink={`/blog/${item._id}`}
          />
        ))}
      </div>
    {/* <MyPagination currentPage={currentPage} totalBlogs={totalBlogs} defaultPageSize={defaultPageSize}/> */}
    <div className='my-3 flex justify-center'>
       <Pagination current={page} onChange={onChange} total={getAllBlogs?.data?.totalBlogs} />
       </div>
    </div>
  );
};

export default AllBlogsGrid;
