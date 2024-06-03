// import React from 'react';

import { useQuery } from "@tanstack/react-query";

const useAllProducts = () => {
    const { isPending, data:all_products, refetch } = useQuery({
        queryKey: ['all_products'],
        queryFn: async () => {
            const response = await fetch('https://shoes-container-server.vercel.app/all_products');
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }
            return response.json();
        },
    });
// console.log(all_products)
    return [all_products, isPending,refetch];
};

export default useAllProducts;
