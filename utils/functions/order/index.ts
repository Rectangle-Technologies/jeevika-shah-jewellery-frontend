'use server';

import axios from "axios";


export async function getOrderDetails(orderId: string, token?: string): Promise<OrderProduct | null> {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order/get/${orderId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (res.data.result && res.data.result.toLocaleLowerCase() === 'success') {
            return res.data.body;
        } else {
            console.log(res);
            return null
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}
