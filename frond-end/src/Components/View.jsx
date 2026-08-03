import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const View = () => {
  // const { _id } = useParams()

  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false)

  const [editData, setEditData] = useState({
    _id: "",
    _name: "",
    email: "",
    password: "",

  })


  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchFun();
  }, []);


  
  const fetchFun = async () => {
    try {
      // const url = "http://localhost:9000/api/get";
            const url = `https://crud-back-end-14id.onrender.com/api/get`;


      const res = await axios.get(url);

      // setData(result.data);
      setUsers(res.data.data);

      // toast.success(res.data.message);
      // console.log(res.data.name, "******");

      console.log(res.data.data[0].name);
      // console.log("######",result.data.data)

    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const DeleteUser = async (_id) => {
    // const url = `http://localhost:9000/api/del/${_id}`;
          const url = `https://crud-back-end-14id.onrender.com/api/del/${_id}`;

    // alert(_id)
    const response = await axios.delete(url)
    toast.success(response.data.message)
    fetchFun()


  }

  const handleEdit = (users) => {
    setEditData(users)
    setIsOpen(true)

  }
  //   const UpdateUser = async ( ) => {
  //     const url = `http://localhost:9000/api/edit/${editData._id}`;
  //     const response = await axios.put(url,editData)
  //     toast.success(response.data.message)
  //  setIsOpen(false);


  //   }
  const UpdateUser = async () => {
    try {
      // const url = `http://localhost:9000/api/edit/${editData._id}`;
      const url = `https://crud-back-end-14id.onrender.com/api/edit/${editData._id}`;

      const response = await axios.put(url, editData);

      toast.success(response.data.message);

      setIsOpen(false);

      fetchFun();

    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  return (
    <>


      <div className="mt-5 overflow-x-auto rounded-lg shadow-lg border border-gray-300">
        <table className="min-w-full border-collapse bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left " type="password">Password</th>
              <th className="px-6 py-4 text-left">Created At</th>
              <th className="px-6 py-4 text-left">Updated At</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {users?.map((data) => (
              <tr
                key={data._id}
                className="border-b hover:bg-gray-100 transition duration-200"
              >
                <td className="px-6 py-4 font-medium">
                  {data.name}
                </td>

                <td className="px-6 py-4">
                  {data.email}
                </td>

                {/* <td className="px-6 py-4">
                  {data.password}
                </td> */}
                <td className="px-6 py-4">
                  {"*".repeat(data.password.length)}
                </td>

                <td className="px-6 py-4">
                  {new Date(data.createdAt).toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata",
                  })}
                </td>

                <td className="px-6 py-4">
                  {new Date(data.updatedAt).toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata",
                  })}
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center items-center gap-3">
                    <button onClick={() => { DeleteUser(data._id) }}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow-md transition duration-200"
                    >
                      Delete
                    </button>

                    <button onClick={() => { handleEdit(data) }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition duration-200"
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          {
            isOpen && (
              <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

                <div className="bg-white p-6 rounded-lg `w-[400px]` ">
                  <h2 className="text-2xl font-bold mb-5">Edit User</h2>
                  <input className="border w-full p-2 mb-3 rounded" type="text" value={editData.name} onChange={(e) => {
                    setEditData({
                      ...editData,
                      name: e.target.value
                    })
                  }} />
                  <input className="border w-full p-2 mb-3 rounded" type="text" value={editData.email} onChange={(e) => {
                    setEditData({
                      ...editData,
                      email: e.target.value
                    })
                  }} />
                  <input className="border w-full p-2 mb-3 rounded" type="text" value={editData.password} onChange={(e) => {
                    setEditData({
                      ...editData,
                      password: e.target.value
                    })
                  }} />


                  <div className="flex justify-end gap-3 mt-5">
                    <button onClick={() => { setIsOpen(false) }} className="bg-blue-500 text-white px-4 py-2 rounded">
                      cancel
                    </button>
                    <button onClick={() => { UpdateUser(editData._id) }} className="bg-green-500 text-white px-4 py-2 rounded">
                      Update
                    </button>
                  </div>

                </div>
              </div>
            )
          }
        </div>
      </div>

    </>
  )
}

export default View
