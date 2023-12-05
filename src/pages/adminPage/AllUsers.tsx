import toast from "react-hot-toast";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../../features/api/users/usersApi";
const AllUsers = () => {
  const { data } = useGetUsersQuery(null);
  const [deleteUser] = useDeleteUserMutation();

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Email</th>
            <th>Position</th>
            <th className="text-center">Delete User</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(
            (user: {
              name: string;
              email: string;
              _id: string;
              userImage: string;
              role: string;
            }) => (
              <tr key={user?._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user?.userImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.name}</div>
                      <div className="text-sm opacity-50">{user?._id}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {user?.email}
                  <br />
                </td>
                <td>{user?.role}</td>
                <td className="flex mt-3 justify-center">
                  <button
                    onClick={() => {
                      toast.success("User is deleted");
                      deleteUser(user?.email);
                    }}
                    className="btn btn-outline btn-circle btn-xs"
                  >
                    X
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
