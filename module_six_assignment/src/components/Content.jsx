import React, { useState } from 'react';

const Content = () => {
    const [textAreaContent, setTextAreaContent] = useState('');
    const [showContent, setShowContent] = useState(false);

    const handleTextAreaChange = (e) => {
        setTextAreaContent(e.target.value);
    };

    const handleShowContent = () => {
        setShowContent(true);
    };

    return (
        <div className='flexDiv'>
            <textarea onChange={handleTextAreaChange}></textarea>
            <button className='contentButton' onClick={handleShowContent}>Show Content</button>
            {showContent && <h3>{textAreaContent}</h3>}
        </div>
    );
};

export default Content;