import { motion } from "framer-motion";

interface NotificationsProps {
  notifications: { id: number; message: string }[];
  setNotifications: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        message: string;
      }[]
    >
  >;
}

export default function Notifications(props: NotificationsProps) {
  return (
    <>
      <div className="notifications">
        {props.notifications.map((notification) => (
          <motion.div
            className="notification"
            key={notification.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <button onClick={() => props.setNotifications(props.notifications.filter( a => a.id !== notification.id))}>✕</button>
            {notification.message}
          </motion.div>
        ))}
      </div>
    </>
  );
}
