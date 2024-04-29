import { useQuery } from "@tanstack/react-query";
const useUser = () => {
    const{isPending,data:users}=useQuery({
        queryKey:["users"],
        queryFn: async()=>{
            const response= await fetch("http://localhost:5000/user")
            return response.json()
        }
    })
    return[users,isPending]
   
};

export default useUser;