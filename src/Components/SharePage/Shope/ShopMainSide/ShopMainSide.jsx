import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const ShopMainSide = () => {
    const { category } = useParams();

    const { data: categories, isPending } = useQuery({
        queryKey: ["category", category], 
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/all_products/${category}`);
            return res.json();
        }
    });

    if (isPending){
        return <div className='flex h-full items-center justify-center'><progress className="progress w-56"></progress></div>
    }

    console.log(categories);

    return (      
            <div className='grid grid-cols-4 gap-2 '>
               {
                categories?.map(data=><div className='' key={data._id}>
                    <p>{data.Name}</p>
                    <img className='h-17' src={data.Image} alt="" />
                </div>)
               }
            </div>
    );
};

export default ShopMainSide;
