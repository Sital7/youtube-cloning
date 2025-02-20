import { Bell, Clock, MessageCircle, ThumbsUp } from "lucide-react";
import "./Notification.css";

const notifications = [
  { id: 1, icon: <ThumbsUp size={20} />, text: "John Doe liked your video.", time: "2 hours ago" },
  { id: 2, icon: <MessageCircle size={20} />, text: "Alice commented on your post.", time: "5 hours ago" },
  { id: 3, icon: <Clock size={20} />, text: "Reminder: Live stream starts in 30 mins.", time: "1 day ago" },
  { id: 4, icon: <Bell size={20} />, text: "New subscriber: Mike joined your channel.", time: "2 days ago" },
];

export default function NotificationsPage() {
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
