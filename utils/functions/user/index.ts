
import axios from "axios";

export async function getUserDetails(): Promise<User | null> {
    try {
        const token = localStorage.getItem('at');
        if (token) {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/get`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (res.status !== 200) {
                return null;
            }
            return res.data.body;
        } else {
            return null
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getPreviousOrders(pageNo: number, pageSize: number): Promise<any[]> {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order/get-user?pageNo=${pageNo}&pageSize=${pageSize}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('at')}`
            }
        });
        if (res.status !== 200) {
            return [];
        }
        return res.data.body.orders;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function verifyToken(token: string) {
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/verify-token`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (res.status !== 200) {
            return false;
        }
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
