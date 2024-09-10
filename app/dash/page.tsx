"use client";
import React, { useState, useEffect } from 'react';
import PrimaryNavigation from '../components/Navigation/navigation/PrimaryNavigation';

function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setBlogs(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    return (
      <div>
        <PrimaryNavigation/>
        <div className="container px-4 py-8 mx-auto">
            
            {blogs.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {blogs.map(blog => (
                        <div key={blog.id} className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                            <h2 className="mb-2 text-2xl font-semibold">{blog.title}</h2>
                            <p className="mb-4 text-gray-700">{blog.content}</p>
                            <p className="text-gray-600"><strong>Author:</strong> {blog.author}</p>
                            <p className="text-gray-600"><strong>Date:</strong> {blog.date}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No blogs available</p>
            )}
        </div>
      </div>
        
    );
}

export default BlogList;
