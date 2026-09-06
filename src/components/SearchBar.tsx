import { useEffect, useRef } from "react";

interface SearchBarProps {
  search: string;
  setSearch: (search: string) => void;
}

const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <>
      <div className="searchbar">
        <p> 🔍 search </p>
        <input
          type="text"
          value={search}
          placeholder="search ..."
          onChange={(e) => setSearch(e.target.value)}
          ref={inputRef}
        />
      </div>
    </>
  );
};

export default SearchBar;
