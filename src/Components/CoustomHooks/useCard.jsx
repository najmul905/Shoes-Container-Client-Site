import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const useCard = () => {
    const {user}=useContext(AuthContext)
    const { isPending, data:card, refetch } = useQuery({
        queryKey: ['card',user?.email],
        queryFn: async () => {
            const response = await fetch(`https://shoes-container-server.vercel.app/card/${user?.email}`);
            return response.json();
        },
    });

    return [card,refetch,isPending]
};

export default useCard;