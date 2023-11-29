import ProductCard from '@/components/ProductCard';
import prisma from '../../lib/db/prisma';

interface searchPageProps {
    searchParams: { query: string }
}



//impliment pagination here


export default async function searchPage({ searchParams: { query } }: searchPageProps) {
    const products = await prisma.product.findMany({
        where: {
            OR: [
                { name: { contains: query, mode: "insensitive" } },
                { description: { contains: query, mode: "insensitive" } },
            ]
        },
        orderBy: { id: "desc" }
    })

    if (products.length === 0) {
        <div className='text-center'>No Product Found</div>
    }
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {products.map(product => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div >
    )
}