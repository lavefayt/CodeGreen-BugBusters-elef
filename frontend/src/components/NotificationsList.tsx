import useNotifications from "../hooks/useNotifications";
import NotificationCard from "./NotificationCard";

const NotificationsList = () => {
  const { notifications, haveNotification } = useNotifications();
  return (
    <div className="w-full h-auto bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <div>
        <h1 className="text-4xl font-syke-bold">Notifications</h1>
      </div>

      <div
        className="w-full h-[20rem] overflow-y-auto"
        id="listcontainer">
        <div className="flex flex-col overflow-y-auto h-80 scrollbar-thin scrollbar text-white p-5">
          {haveNotification ? (
            notifications?.map((notification) => (
              <NotificationCard notification={notification} />
            ))
          ) : (
            <p className="flex justify-center items-center m-3">
              No Notifications
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationsList;
