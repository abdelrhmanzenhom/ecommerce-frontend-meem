import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteUserById, getAllUsers } from "../../../api/usersApi";
import { Skeleton } from "@mui/material";
import { XCircle } from "lucide-react";

export default function UserTable() {
  const queryClient = useQueryClient();
  const { data, isError, isSuccess, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
    staleTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: 1,
    retryDelay: 1000 * 3, // 3 seconds
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUserById,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  const handleDelete = (productId) => {
    deleteMutation.mutate(productId);
  };

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
              <th className="p-3 font-semibold">Name</th>
              <th className="p-3 font-semibold">email</th>
              <th className="p-3 font-semibold">role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={user._id} className=" ">
                <td className="p-3">{++index}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3 flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      handleDelete(user._id);
                    }}
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
