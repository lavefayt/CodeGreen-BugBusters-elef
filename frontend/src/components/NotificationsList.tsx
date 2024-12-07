import { Spinner } from "react-activity";
import useNotifications from "../hooks/useNotifications";
import NotificationCard from "./NotificationCard";

const NotificationsList = () => {
  const { notifications, haveNotification, loading } = useNotifications();
  return (
    <div className="w-full h-auto bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-5">
      <div>
        <h1 className="text-4xl font-syke-bold">Notifications</h1>
      </div>

      <div
        className="w-full h-[15rem] overflow-y-auto"
        id="listcontainer">
        <div className="flex flex-col overflow-y-auto h-full scrollbar-thin scrollbar text-white p-5 space-y-3">
          {haveNotification ? (
            notifications?.map((notification) => (
              <div
                key={notification.id}
                className="cursor-pointer hover:bg-secondgrey">
                <NotificationCard notification={notification} />
              </div>
            ))
          ) : (
            <p className="flex justify-center items-center m-3">
              {loading ? (
                <Spinner
                  size={40}
                  color="#008000"
                  animating={loading}
                />
              ) : (
                "No Notifications"
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationsList;
