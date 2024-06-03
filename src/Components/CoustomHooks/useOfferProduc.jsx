import { useQuery } from "@tanstack/react-query";

const useOfferProducts = () => {
    const {data:offers,isPending,refetch}=useQuery({
        queryKey:["offers"],
        queryFn: async ()=>{
            const response=await fetch("https://shoes-container-server.vercel.app/offer")
            if(!response.ok){
                throw new Error("Fail to fetch")
            }
            return response.json()
        }
    })
    return [offers,isPending,refetch];
    
};

export default useOfferProducts;