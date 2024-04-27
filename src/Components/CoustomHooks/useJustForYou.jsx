import { useQuery } from "@tanstack/react-query";

const useJustForYou = () => {

const {data:forYou,isPending}=useQuery({
    queryKey:['justForYou'],
    queryFn:async ()=>{
        const response=await fetch("http://localhost:5000/just_for_customer")
        if(!response.ok){
            throw new Error("Fail to fetch")
        }
        return response.json()
    }
})

    return [forYou,isPending]
};

export default useJustForYou;