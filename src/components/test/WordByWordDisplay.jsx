import { useEffect, useState } from 'react';

function WordByWordDisplay({ text }) {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prevText) => prevText + text[index]);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 10);
        return () => {
            clearInterval(interval);
        };
    }, [text]);

    return <div> <pre
        style={{
            overflowWrap: "normal",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            wordWrap: "break-word",
            width: "fit-content",
        }}
        className=""
    >
        {displayedText}
    </pre></div>;
}

export default WordByWordDisplay;
