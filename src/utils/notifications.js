import { notification } from 'antd';
import '../assets/css/notifications.css';

const styledNotification = (type, msg, duration = 5) => notification.open({
    className: `styled-notification-${type}`,
    message: `${msg}`,
    duration,
});

export default styledNotification;
