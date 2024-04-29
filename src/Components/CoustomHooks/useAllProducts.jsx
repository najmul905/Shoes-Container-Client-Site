// import React from 'react';

import { useQuery } from "@tanstack/react-query";

const useAllProducts = () => {
    const { isPending, data:all_products,  } = useQuery({
        queryKey: ['all_products'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/all_products');
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }
            return response.json();
        },
    });
// console.log(all_products)
    return [all_products, isPending];
};

export default useAllProducts;
