// import { Bell, Clock, MessageCircle, ThumbsUp } from "lucide-react";
// import "./Notification.css";

// const notifications = [
//   { id: 1, icon: <ThumbsUp size={20} />, text: "John Doe liked your video.", time: "2 hours ago" },
//   { id: 2, icon: <MessageCircle size={20} />, text: "Alice commented on your post.", time: "5 hours ago" },
//   { id: 3, icon: <Clock size={20} />, text: "Reminder: Live stream starts in 30 mins.", time: "1 day ago" },
//   { id: 4, icon: <Bell size={20} />, text: "New subscriber: Mike joined your channel.", time: "2 days ago" },
// ];

// export default function NotificationsPage() {
//   return (
//     <div className="notifications-wrapper">
//       <main className="notifications-content">
//         <h1>Notifications</h1>
//         <div className="notifications-list">
//           {notifications.map((notif) => (
//             <div key={notif.id} className="notification-item">
//               <span className="notification-icon">{notif.icon}</span>
//               <div className="notification-text">
//                 <p>{notif.text}</p>
//                 <span className="notification-time">{notif.time}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }




// s1
// import { useEffect, useState } from "react";
// import {
//   Bell,
//   Clock,
//   MessageCircle,
//   ThumbsUp,
//   UserPlus,
// } from "lucide-react";
// import "./Notification.css";

// export default function NotificationsPage({ accessToken, channelId }) {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       const newNotifications = [];

//       try {
//         // 1. Fetch New Subscribers
//         const subRes = await fetch(
//           `https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mySubscribers=true&maxResults=5`,
//           {
//             headers: {
//               Authorization: `Bearer ${accessToken}`,
//             },
//           }
//         );
//         const subData = await subRes.json();
//         if (subData.items) {
//           subData.items.forEach((item) => {
//             newNotifications.push({
//               id: item.id,
//               icon: <UserPlus size={20} />,
//               text: `New subscriber: ${item.snippet.subscriberSnippet.title}`,
//               time: new Date(item.snippet.publishedAt).toLocaleString(),
//             });
//           });
//         }

//         // 2. Fetch Upcoming Livestreams
//         const liveRes = await fetch(
//           `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=upcoming&type=video`,
//           {
//             headers: {
//               Authorization: `Bearer ${accessToken}`,
//             },
//           }
//         );
//         const liveData = await liveRes.json();
//         if (liveData.items) {
//           liveData.items.forEach((item) => {
//             newNotifications.push({
//               id: item.id.videoId,
//               icon: <Clock size={20} />,
//               text: `Reminder: ${item.snippet.title} goes live soon.`,
//               time: new Date(item.snippet.publishedAt).toLocaleString(),
//             });
//           });
//         }

//         // Add mock "like" notification (optional fallback)
//         if (newNotifications.length === 0) {
//           newNotifications.push({
//             id: "default",
//             icon: <ThumbsUp size={20} />,
//             text: "You have no new alerts. Stay tuned!",
//             time: "Just now",
//           });
//         }

//         setNotifications(newNotifications);
//       } catch (error) {
//         console.error("Error fetching notifications:", error);
//       }
//     };

//     if (accessToken && channelId) {
//       fetchNotifications();
//     }
//   }, [accessToken, channelId]);

//   return (
//     <div className="notifications-wrapper">
//       <main className="notifications-content">
//         <h1>Notifications</h1>
//         <div className="notifications-list">
//           {notifications.map((notif) => (
//             <div key={notif.id} className="notification-item">
//               <span className="notification-icon">{notif.icon}</span>
//               <div className="notification-text">
//                 <p>{notif.text}</p>
//                 <span className="notification-time">{notif.time}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import {
  Clock,
  ThumbsUp,
  UserPlus,
} from "lucide-react";
import "./Notification.css";

export default function NotificationsPage({ accessToken, channelId }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const newNotifications = [];

      try {
        // 1. Fetch New Subscribers
        const subRes = await fetch(
          `https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mySubscribers=true&maxResults=5`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const subData = await subRes.json();
        if (subData.items) {
          subData.items.forEach((item) => {
            newNotifications.push({
              id: item.id,
              icon: <UserPlus size={20} />,
              text: `New subscriber: ${item.snippet.subscriberSnippet.title}`,
              time: new Date(item.snippet.publishedAt).toLocaleString(),
            });
          });
        }

        // 2. Fetch Upcoming Livestreams
        const liveRes = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=upcoming&type=video`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const liveData = await liveRes.json();
        if (liveData.items) {
          liveData.items.forEach((item) => {
            newNotifications.push({
              id: item.id.videoId,
              icon: <Clock size={20} />,
              text: `Reminder: ${item.snippet.title} goes live soon.`,
              time: new Date(item.snippet.publishedAt).toLocaleString(),
            });
          });
        }

        // Add mock "like" notification 
        if (newNotifications.length === 0) {
          newNotifications.push({
            id: "default",
            icon: <ThumbsUp size={20} />,
            text: "You have no new alerts. Stay tuned!",
            time: "Just now",
          });
        }

        setNotifications(newNotifications);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    if (accessToken && channelId) {
      fetchNotifications();
    }
  }, [accessToken, channelId]);

  return (
    <div className="notifications-wrapper">
      <main className="notifications-content">
        <h1>Notifications</h1>
        <div className="notifications-list">
          {notifications.map((notif) => (
            <div key={notif.id} className="notification-item">
              <span className="notification-icon">{notif.icon}</span>
              <div className="notification-text">
                <p>{notif.text}</p>
                <span className="notification-time">{notif.time}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
