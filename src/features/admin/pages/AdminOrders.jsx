import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "../../../api/ordersApi";
import { Skeleton } from "@mui/material";

export default function AdminOrders() {
  const {
    data: ordersData,
    isLoading,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getAllOrders,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: 1,
    retryDelay: 1000 * 3, // 3 seconds
  });

  if (isLoading)
    return (
      <div className="flex w-full gap-4">
        <div className="grow">
          <Skeleton className="py-2" />
          <Skeleton className="py-2" />
          <Skeleton className="py-2" />
          <Skeleton className="py-2" />
          <Skeleton className="py-2" />
        </div>
        <div className="grow">
          <Skeleton className="py-2" />
          <Skeleton className="py-2" />
          <Skeleton className="py-2" />
          <Skeleton className="py-2" />
          <Skeleton className="py-2" />
        </div>
      </div>
    );

  if (isError)
    return (
      <div className="flex flex-col items-center text-black bg-white rounded shadow p-4">
        <XCircle size={50}></XCircle>
        <h3 className="text-2xl font-semibold text-center">
          Failed to load Products
        </h3>
      </div>
    );

  if (isSuccess)
    return (
      <>
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className=" border-b">
              <th className="p-3 font-semibold">#</th>
              <th className="p-3 font-semibold">Receipient</th>
              <th className="p-3 font-semibold">Items</th>
              <th className="p-3 font-semibold">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order, index) => (
              <tr key={order._id} className=" ">
                <td className="p-3">{++index}</td>
                <td className="p-3">{order.user?.name}</td>
                <td className="p-3">{order.items?.length}</td>
                <td className="p-3">{order.totalPrice}</td>
                <td className="p-3 flex flex-wrap gap-2">
                  <button
                    // onClick={() => {
                    //   handleDelete(user._id);
                    // }}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}
