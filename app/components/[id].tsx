import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Blog {
  id: string;
  title: string;
  content: string;
}

const BlogDetail = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchBlog = async () => {
      if (id) {
        const res = await fetch(`/api/blog/${id}`);
        const data = await res.json();
        setBlog(data);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="container p-4 mx-auto">
      <h1 className="text-4xl font-bold text-gray-800">{blog.title}</h1>
      <p className="mt-4 text-gray-600">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
