import React, { useState, useEffect, useRef } from 'react';
import { API_KEY } from '../../data'; // Assuming your API key is stored here
import ShortsItem from '../ShortsItem/ShortsItem'; // Your ShortsItem component
import './Shorts.css'; // Assuming you have some basic CSS

const Shorts = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0); // Keep track of the current video index

  const videoRefs = useRef([]);

  // Helper function to convert ISO 8601 duration format to seconds
  const convertDurationToSeconds = (duration) => {
    const match = duration.match(
      /PT(?:(\d+)M)?(?:(\d+)S)?/
    );
    const minutes = parseInt(match[1] || 0, 10);
    const seconds = parseInt(match[2] || 0, 10);
    return minutes * 60 + seconds;
  };

  useEffect(() => {
    const fetchShortsVideos = async () => {
      try {
        // Fetch list of Shorts videos with video category (10 is for music category, but you can adjust this based on preference)
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&videoCategoryId=10&key=${API_KEY}`
        );

        if (response.ok) {
          const data = await response.json();
          const videoIds = data.items.map(item => item.id.videoId);

          // Fetch detailed stats for each video
          const videoDetailsResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${videoIds.join(',')}&key=${API_KEY}`
          );

          if (videoDetailsResponse.ok) {
            const videoDetailsData = await videoDetailsResponse.json();

            // Combine the video details with the snippet information
            const detailedVideos = data.items.map(item => {
              const details = videoDetailsData.items.find(
                video => video.id === item.id.videoId
              );
              return {
                ...item,
                statistics: details?.statistics || {},
                contentDetails: details?.contentDetails || {}
              };
            });

            // Filter videos to only include those between 15 seconds and 1 minute
            const filteredVideos = detailedVideos.filter(video => {
              const duration = video.contentDetails?.duration || '';
              const durationInSeconds = convertDurationToSeconds(duration);
              return durationInSeconds >= 15 && durationInSeconds <= 60;
            });

            setVideos(filteredVideos); // Store the filtered video items
          } else {
            console.error("Error fetching video details:", videoDetailsResponse.statusText);
          }
        } else {
          console.error("Error fetching videos:", response.statusText);
        }
      } catch (error) {
        console.error("API request failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShortsVideos();  // Fetch videos when component mounts
  }, []);

  const handleScroll = (e) => {
    // Detect scroll direction
    if (e.deltaY > 0) {
      // Scrolling down, show next video
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % videos.length;
        videoRefs.current[nextIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
        return nextIndex;
      });
    } else {
      // Scrolling up, show previous video
      setCurrentIndex((prevIndex) => {
        const prevIndexModified = (prevIndex - 1 + videos.length) % videos.length;
        videoRefs.current[prevIndexModified].scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
        return prevIndexModified;
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="shorts-container" onWheel={handleScroll}>
      {videos.length > 0 ? (
        videos.map((video, index) => (
          <div
            key={video.id.videoId}
            ref={(el) => (videoRefs.current[index] = el)}
            className="shorts-item"
          >
            <ShortsItem video={video} />
          </div>
        ))
      ) : (
        <p>No Shorts videos found</p>
      )}
    </div>
  );
};

export default Shorts;
