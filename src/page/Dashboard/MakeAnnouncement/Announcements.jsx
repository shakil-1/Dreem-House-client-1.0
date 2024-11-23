import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const Announcements = () => {
  const axiosSecure = useAxiosSecure();
  const { data: announcements = [] } = useQuery({
    queryKey: ["annousment"],
    queryFn: async () => {
      const res = await axiosSecure.get("/announcements");
      return res.data;
    },
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {announcements.map((annouce, index) => (
        <div className="border rounded-md" key={annouce._id}>
          <div className="rounded-md p-2 shadow-sm ">
            <btoon className="bg-orange-200 p-1  rounded-sm font-bold mt-2">
              Announcements : {index + 1}
            </btoon>
            <h3 className="my-2">
              <span className="font-medium ">Title</span> : {annouce?.tite}
            </h3>
            <p className="">
              <span className="font-medium">Description</span> :
              {annouce?.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Announcements;
