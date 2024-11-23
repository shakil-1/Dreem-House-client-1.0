import A from "./a";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
const Apartment = () => {
  const axiosPublic = useAxiosPublic();
  const [page, setPage] = useState(1);
  const limit = 12;
  const { data: apartments = [], isLoading , refetch} = useQuery({
    queryKey: ["apartment",page],
    queryFn: async () => {
      const res = await axiosPublic.get(`/apainment?available_room=${true}&page=${page}&limit=${limit}`
      );
      return res.data;
    },
  });

  const handelPreview = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const totalPage = Math.ceil(apartments?.total / limit);
  const handelNext = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };

  if (isLoading) {
 return <div className="flex justify-center justify-items-center h-screen">
<span className="loading loading-spinner text-primary"></span>
<span className="loading loading-spinner text-secondary"></span>
<span className="loading loading-spinner text-accent"></span>
<span className="loading loading-spinner text-neutral"></span>
<span className="loading loading-spinner text-info"></span>
<span className="loading loading-spinner text-success"></span>
<span className="loading loading-spinner text-warning"></span>
<span className="loading loading-spinner text-error"></span>
    </div>
  }

  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto w-11/12">
        {apartments.result?.map((items) => (
          <A key={items._id} refetch={refetch} items={items} />
        ))}
      </div>
      <div className="join  py-2 flex justify-center ">
        <div>
          <button onClick={handelPreview} className="join-item btn">
            prev
          </button>

          {[...Array(totalPage).fill(0)].map((item, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={`${
                  pageNumber == page
                    ? "join-item btn bg-blue-400"
                    : "join-item btn"
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
          <button onClick={handelNext} className="join-item btn">
            
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
