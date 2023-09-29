import { motion } from "framer-motion";

interface NotificationsProps {
    notifications: { id: number; message: string }[];
  }

export default function Notifications(props: NotificationsProps) {

  return (
    <>
      <div className="notifications">
        {props.notifications.map((notification) => (
          <motion.div className="notification" key={notification.id}>
            {notification.message}
          </motion.div>
        ))}
      </div>
    </>
  );
}
