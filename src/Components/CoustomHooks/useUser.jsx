import { useQuery } from "@tanstack/react-query";
const useUser = () => {
    const{isPending,data:users,refetch}=useQuery({
        queryKey:["users"],
        queryFn: async()=>{
            const response= await fetch("https://shoes-container-server.vercel.app/user")
            return response.json()
        }
    })
    return[users,isPending,refetch]
   
};

export default useUser;