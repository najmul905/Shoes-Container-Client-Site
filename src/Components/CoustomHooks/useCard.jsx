import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const useCard = () => {
    const {user}=useContext(AuthContext)
    const { isPending, data:card, refetch } = useQuery({
        queryKey: ['card',user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/card/${user?.email}`);
            return response.json();
        },
    });
console.log(card)
    return [card,refetch,isPending]
};

export default useCard;