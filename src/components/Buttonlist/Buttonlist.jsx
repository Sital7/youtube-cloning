import React from 'react';
import './ButtonList.css';

const keywords = [
  { name: "All", id: "0" },
  { name: "Music", id: "10" },
  { name: "Vlogs", id: "22" },
  { name: "Programming", id: "28" },
  { name: "News", id: "25" },
  { name: "Football", id: "17" },
  { name: "Comedy", id: "23" },
  { name: "Thriller", id: "24" },
  { name: "Gaming", id: "20" },
  { name: "Movies", id: "1" },
  { name: "Cars", id: "2" },
  { name: "Pets", id: "15" },
  { name: "Education", id: "27" },
  { name: "DIY", id: "26" },
  { name: "Travel", id: "19" },
  { name: "Business", id: "30" },
  { name: "Sports", id: "31" },
  // { name: "History", id: "32" },
  // { name: "Fitness", id: "33" },
  // { name: "Science Fiction", id: "34" },
  // { name: "Short Films", id: "18" },
  // { name: "Anime", id: "35" },
  // { name: "Esports", id: "36" },
  // { name: "Podcasts", id: "37" },
  // { name: "Motivation", id: "38" },
  // { name: "Art", id: "3" },
  // { name: "Nature", id: "39" },
  // { name: "Space", id: "40" },
  // { name: "Cooking", id: "41" },
  // { name: "Psychology", id: "42" },
  // { name: "Finance", id: "43" },
  // { name: "Science", id: "44" },
  // { name: "Technology", id: "45" },
  // { name: "Health", id: "46" },
  // { name: "Lifestyle", id: "47" },
  // { name: "Horror", id: "48" },
  // { name: "Adventure", id: "49" }
];

const ButtonList = ({ setCategory }) => {
  return (
    <div className="button-list">
      {keywords.map((keyword) => (
        <button key={keyword.id} onClick={() => setCategory(Number(keyword.id))}>
          {keyword.name}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
