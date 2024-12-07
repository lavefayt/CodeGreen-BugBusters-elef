import { UserNotification } from "../types/datatypes";

const NotificationCard = ({
  notification,
}: {
  notification: UserNotification;
}) => {
  return (
    <div className="flex flex-col bg-slate-400 bg-opacity-30 rounded-md p-2 items-right overflow-y-auto">
      <div className="flex space-x-1 w-full">
        <h1 className="text-white font-syke-light text-sm">Sender: </h1>
        <h1 className="text-textgreen font-syke-medium text-sm">
          {notification.sender}
        </h1>
      </div>
      <div className="flex w-full break-all">{notification.message}</div>
    </div>
  );
};

export default NotificationCard;
