import axios from "axios";

export async function createOrder(products: CartProduct[]): Promise<{ isOrderCreated: boolean; orderId?: string }> {
    try {
        const token = localStorage.getItem("at");
        if (!token) return { isOrderCreated: false };
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/order/create`, { products }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (response.status === 201) {
            return { isOrderCreated: true, orderId: response.data.body._id };
        }
        return { isOrderCreated: false };
    } catch (error) {
        console.log(error);
        return { isOrderCreated: false };
    }
}

export async function createRazorpayOrder(orderId: string): Promise<{ isOrderCreated: boolean; razorpayOrderId?: string; amount?: number; currency?: string, razorpayKey?: string }> {
    try {
        const token = localStorage.getItem("at");
        if (!token) return { isOrderCreated: false };
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/razorpay/create-order`, { orderId }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (response.status === 201) {
            return { isOrderCreated: true, razorpayOrderId: response.data.body.razorpayOrderId, amount: response.data.body.amount, currency: response.data.body.currency, razorpayKey: response.data.body.razorpayKey };
        }
        return { isOrderCreated: false };
    } catch (error) {
        console.log(error);
        return { isOrderCreated: false };
    }
}

export async function verifyPaymentSignature(razorpayOrderId: string, razorpayPaymentId: string, razorpaySignature: string): Promise<{ isPaymentVerified: boolean }> {
    try {
        const token = localStorage.getItem("at");
        if (!token) return { isPaymentVerified: false };
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/razorpay/verify-signature`, { razorpayOrderId, razorpayPaymentId, razorpaySignature }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (response.status === 200) {
            return { isPaymentVerified: true };
        }
        return { isPaymentVerified: false };
    } catch (error) {
        console.log(error);
        return { isPaymentVerified: false };
    }
}

export async function updatePaymentDetails(orderId: string, razorpayPaymentId: string): Promise<{ isPaymentUpdated: boolean }> {
    try {
        const token = localStorage.getItem("at");
        if (!token) return { isPaymentUpdated: false };
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/order/update-payment/${orderId}`, { razorpayPaymentId }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (response.status === 200) {
            return { isPaymentUpdated: true };
        }
        return { isPaymentUpdated: false };
    } catch (error) {
        console.log(error);
        return { isPaymentUpdated: false };
    }
}

export async function updateOrderStatus(orderId: string, status: string): Promise<{ isOrderUpdated: boolean }> {
    try {
        const token = localStorage.getItem("at");
        if (!token) return { isOrderUpdated: false };
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/order/send-confirmation/${orderId}`, { status }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (response.status === 200) {
            return { isOrderUpdated: true };
        }
        return { isOrderUpdated: false };
    } catch (error) {
        console.log(error);
        return { isOrderUpdated: false };
    }
}
