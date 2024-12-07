import React from 'react';
import useNotif from './useNotif.ts';

const NotificationsComponent: React.FC = () => {
    const {
        notifications,
        loading,
        error,
        deleteNotification,
    } = useNotif();

    if (loading) return <div>Loading notifications...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map((notifs) => (
                    <li key={notifs.id}>
                        {notifs.message}
                        <button onClick={() => deleteNotification(notifs.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            {/* Add functionality to create or update notifications as needed */}
        </div>
    );
};

export default NotificationsComponent;