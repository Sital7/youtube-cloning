// import React, { useEffect, useState } from 'react';

// const CategoryDisplay = ({ category }) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchDataByCategory = async () => {
//       let url = '';
//       if (category === 'liked') url = 'https://api.example.com/likedVideos';
//       else if (category === 'story') url = 'https://api.example.com/story';
//       else if (category === 'libraryBooks') url = 'https://api.example.com/libraryBooks';
//       else return;

//       try {
//         const res = await fetch(url);
//         const result = await res.json();
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchDataByCategory();
//   }, [category]);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>{category.toUpperCase()} Content</h2>
//       <ul>
//         {data && data.length > 0 ? (
//           data.map((item, index) => (
//             <li key={index}>{item.title || JSON.stringify(item)}</li>
//           ))
//         ) : (
//           <p>No content available</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default CategoryDisplay;


import React, { useEffect, useState } from 'react';

const CategoryDisplay = ({ category, accessToken }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataByCategory = async () => {
      let url = '';
      if (category === 'liked') {
        url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&myRating=like';
      } else if (category === 'playlists') {
        url = 'https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true';
      } else {
        setData([]);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: 'application/json',
          },
        });

        if (!res.ok) throw new Error('Failed to fetch data');

        const result = await res.json();

        const items = result.items || [];
        setData(items);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    if (accessToken) {
      setLoading(true);
      fetchDataByCategory();
    }
  }, [category, accessToken]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>{category.toUpperCase()} Content</h2>
      {loading ? (
        <p>Loading...</p>
      ) : data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.snippet?.title || 'Untitled'}
            </li>
          ))}
        </ul>
      ) : (
        <p>No content available</p>
      )}
    </div>
  );
};

export default CategoryDisplay;
