import React from 'react';
import './PostTable.css'; // Import the CSS file

const PostTable = ({ postsData, handleUpload }) => {
    // Extract table headers dynamically from the first row of data
    const headers = postsData.length > 0 ? Object.keys(postsData[0]) : [];

    // Helper function to format dates
    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });
        } catch (error) {
            console.error("Invalid date:", dateString);
            return dateString; // Fallback to raw string if formatting fails
        }
    };

    return (
        <div className="table-container">
            <table className="styled-table">
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index}>{header.charAt(0).toUpperCase() + header.slice(1)}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {postsData.map((post, index) => (
                        <tr key={index}>
                            {headers.map((key, colIndex) => (
                                <td key={colIndex}>
                                    {key === 'link' ? (
                                        <a href={post[key]} target="_blank" rel="noopener noreferrer">
                                        {post[key]}
                                        </a>
                                    ) : key === 'date' ? (
                                        formatDate(post[key])
                                    ) : (
                                        post[key]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="upload-button" onClick={handleUpload}>
                Upload to WordPress
            </button>
        </div>
    );
}

export default PostTable;
