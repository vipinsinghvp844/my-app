import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WordPressPage = ({ pageId }) => {
    const [page, setPage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios.get(`https://docusoft.net/wp-json/wp/v2/pages/${1437}`);
                setPage(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchPage();
    }, [pageId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>{page.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </div>
    );
};

export default WordPressPage;
