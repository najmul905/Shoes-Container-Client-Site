import { useQuery } from "@tanstack/react-query";

const useJustForYou = () => {

const {data:forYou,isPending,refetch}=useQuery({
    queryKey:['justForYou'],
    queryFn:async ()=>{
        const response=await fetch("https://shoes-container-server.vercel.app/just_for_customer")
        if(!response.ok){
            throw new Error("Fail to fetch")
        }
        return response.json()
    }
})

    return [forYou,isPending,refetch]
};

export default useJustForYou;