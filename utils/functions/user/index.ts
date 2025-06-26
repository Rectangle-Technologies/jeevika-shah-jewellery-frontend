
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
        return null;
    }
}

export async function getPreviousOrders(pageNo: number, pageSize: number): Promise<OrderProduct[]> {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order/get-user?pageNo=${pageNo}&pageSize=${pageSize}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('at')}`
            }
        });
        if (res.status !== 200) {
            return [];
        }
        return res.data.body.orders;
    } catch (error) {
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
        return false;
    }
}


export async function updateProfile(profileDetails: User): Promise<boolean> {
    try {
        const token = localStorage.getItem('at');
        if (!token) {
            return false;
        }
        const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/user/update`,
            profileDetails,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        );
        if (res.data.result && res.data.result.toLocaleLowerCase() === 'success') {
            return true;
        } else {
            return false
        }
    } catch (error) {
        return false;
    }
}
