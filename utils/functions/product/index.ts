'use server';

interface ServerResponse extends Item {
    recommendations: { _id: string, name: string, images: string[] }[];
}

export async function getProductDetails(productId: string): Promise<ServerResponse | null> {
    try {
        const res = await fetch(`${process.env.API_URL}/products/get/${productId}`);
        const data = await res.json();
        if (data.result && data.result.toLocaleLowerCase() === 'success') {
            return data.body;
        } else {
            console.log(data);
            return null
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

