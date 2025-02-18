import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../../data";
import "./SearchResults.css";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;

      try {
        setLoading(true);
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&maxResults=20&key=${API_KEY}`
        );
        const data = await response.json();
        if (data.items) {
          setResults(data.items);
        } else {
          console.error("No items found", data);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="search-results-container">
      {/* <h2>Search Results for "{query}"</h2> */}
      {loading && <p className="loading">Loading...</p>}
      {!loading && results.length === 0 && <p className="no-results">No results found</p>}
      <div className="results-list">
        {results.map((item) => (
          <div key={item.id.videoId || item.id.channelId || item.id.playlistId} className="result-item">
            <div className="result-thumbnail">
              <img src={item.snippet.thumbnails.high.url} alt={item.snippet.title} />
            </div>
            <div className="result-details">
              <p className="result-title">{item.snippet.title}</p>
              <p className="result-channel">{item.snippet.channelTitle}</p>
              <p className="result-meta">Published on {new Date(item.snippet.publishedAt).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
