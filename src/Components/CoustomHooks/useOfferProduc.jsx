import { useQuery } from "@tanstack/react-query";

const useOfferProducts = () => {
    const {data:offers,isPending}=useQuery({
        queryKey:["offers"],
        queryFn: async ()=>{
            const response=await fetch("http://localhost:5000/offer")
            if(!response.ok){
                throw new Error("Fail to fetch")
            }
            return response.json()
        }
    })
    console.log(offers)
    return [offers,isPending];
    
};

export default useOfferProducts;