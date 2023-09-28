
import { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";


const Admin = () => {
    // const data = useLoaderData();
    const [isLoading, setIsLoading] = useState(false);
    const uri = `https://dream-weave-stations-server.vercel.app/allorders`
    // const data = useLoaderData();
    const { data: data = [], refetch, } = useQuery({
        queryKey: ['completedtasks'],
        queryFn: async () => {

            const res = await fetch(uri)
            const data = await res.json();

            return data;
        }
    })

    const handleDeleteBtn = (data) => {
        setIsLoading(true)
        if (confirm(`Are you sure to delete id ${data}`) == true) {
            fetch(`https://dream-weave-stations-server.vercel.app/deleteorders?id=${data}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsLoading(false)
                    toast.success(`Deleted successfully`)
                    refetch();

                })
        }else{
            setIsLoading(false)
            refetch();
        }

    }
    
    return (
        <div className="bg-gradient-to-r from-[#2C2366] to-[#662E91] h-[100vh] w-[100vw]">
            <div className="flex justify-center">
                <div className="pt-24 text-white w-[90%] h-[50%]">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-white text-xl">
                                    <th></th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Confirmation</th>
                                    <th>Deletion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((orders, i) =>
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{orders.name}</td>
                                            <td>{orders.category}</td>
                                            <td>{orders.phone}</td>
                                            <td>{orders.email}</td>
                                            <td>{orders.confirm ? <button className="btn w-[150px] h-[10px] bg-gradient-to-r from-[#B83CB9] to-[#7C47E7] text-white border-[#CFAB5B] scale-75">Confirmed</button> : <button className="btn w-[150px] h-[10px] bg-gradient-to-r from-[#B83CB9] to-[#7C47E7] text-white border-[#CFAB5B] scale-75">Pending</button>}</td>
                                            <td>
                                                {
                                                    isLoading ? <button disabled className="btn w-[150px] h-[10px] bg-gradient-to-r from-[#60131b] to-[#b11635] text-white border-[#CFAB5B] scale-75"><div className="w-5 h-5 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div></button> : 
                                                    <button onClick={() => handleDeleteBtn(orders._id)} className="btn w-[150px] h-[10px] bg-gradient-to-r from-[#60131b] to-[#b11635] text-white border-[#CFAB5B] scale-75">Delete</button>
                                                }
                                                
                                            </td>
                                        </tr>

                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;