import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AdminHeader from "../components/AdminHeader";
import useGetDriver from "../hooks/driver-hooks/useGetDriver";
import { DriverWithVandC } from "../types/datatypes";
import Loading from "../components/Loading";
import useSendNotification from "../hooks/useSendNotifications";

const SendNotif: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { loading, driver } = useGetDriver(id!);
  const { handleSendNotification } = useSendNotification();

  const [formData, setFormData] = useState<DriverWithVandC | null>(null);

  useEffect(() => {
    if (driver) {
      setFormData({
        id: driver.id,
        last_name: driver.last_name,
        first_name: driver.first_name,
        middle_name: driver.middle_name,
      });
    }
  }, [driver]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;
    handleSendNotification({
      driver_id: driver.id,
      message: message,
      title: title,
    });
  };

  if (loading) {
    return <Loading loading={loading} />;
  }

  if (!formData) {
    return <div>Error: Driver not found.</div>;
  }

  return (
    <div className="flex flex-col items-center bg-adminlanding-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <AdminHeader />
      <div className="w-[40rem] h-auto bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <div className="p-5 max-w-xl mx-auto items-center">
          <div className="flex space-x-2 py-3">
            <h1 className="text-2xl font-syke-medium text-textgreen flex space-x-4">
              Send a Notification to{" "}
            </h1>
            <h1 className="text-white font-syke-bold text-2xl">
              {formData.last_name}, {formData.first_name}{" "}
            </h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm text-white mb-1 font-syke-medium">
                Title
              </label>
              <input
                placeholder="Title"
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-white px-3 py-2 bg-secondgrey border font-syke-bold border-secondgrey rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-buttongreen focus:border-buttongreen"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="body"
                className="block text-sm font-syke-medium text-white mb-1">
                Body
              </label>
              <textarea
                placeholder="Write your notification..."
                id="body"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="scrollbar w-full px-3 py-2 font-syke-light bg-secondgrey text-white border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-buttongreen focus:border-buttongreen h-[15rem]"
                required></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-buttongreen text-white font-semibold rounded shadow-md hover:bg-colorhover focus:outline-none">
              Send Notification
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendNotif;
