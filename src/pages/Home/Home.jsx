// // import React, { useState } from 'react'
// // import './Home.css'
// // import Sidebar from '../../components/SideBar/SideBar'
// // import Feed from '../../components/Feed/Feed'

// // const Home = ({ sidebar }) => {

// //   const [category, setCategory] = useState(0);


// //   return (
// //     <>
// //       <Sidebar sidebar={ sidebar } category={category} setCategory={setCategory} />
// //       <div className={`container ${sidebar?"":'large-container'}`}>
// //         <Feed category={category}/>

// //       </div>
// //     </>
// //   )
// // }

// // export default Home



// import React, { useState } from 'react';
// import './Home.css';
// import Sidebar from '../../components/SideBar/SideBar';
// import Feed from '../../components/Feed/Feed';

// const Home = ({ sidebar }) => {
//   const [category, setCategory] = useState(0);

//   return (
//     <>
//       <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
//       <div className={`container ${sidebar ? '' : 'large-container'}`}>
//         <Feed category={category} />
//       </div>
//     </>
//   );
// };

// export default Home;



import React, { useState } from 'react';
import './Home.css';
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed';

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0); // Controls selected category

  return (
    <div className="home">
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`container ${sidebar ? 'small-container' : 'large-container'}`}>
        <Feed category={category} setCategory={setCategory} /> {/* Pass setCategory */}
      </div>
    </div>
  );
};

export default Home;
