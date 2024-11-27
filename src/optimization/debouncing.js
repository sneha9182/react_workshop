import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (debouncedQuery) {
      console.log("Fetching data for:", debouncedQuery);
      // Call API or search function here
    }
  }, [debouncedQuery]);

  return (
    <div  className="justify-center">
      <input
        type="text"
        value={query}
        className="bg-yellow-200"
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};


export default SearchComponent;
