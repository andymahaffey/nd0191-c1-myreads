import { useEffect, useState } from "react";

const DebouncedInput = ({inputChanged, debounceMs, disabled}) => {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, debounceMs || 250);

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    useEffect(() => {
        inputChanged(debouncedQuery);
    }, [debouncedQuery]);

    return <input
        type="text"
        placeholder="Search by title, author, or ISBN"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={disabled} 
    />
};

export default DebouncedInput;