export const  isFav=(id, objList)=> {
    return objList.some(obj => obj.id === id);
}

export const startPayment = async (data) => {
    // console.log(data)
    console.log("[------TRANSACTION INITIALIZING-------]");
    try {
        const res = await fetch(
            `http://localhost:8080/api/payment/${data.amount}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer ' + data.token,
                }
            }
        );
        const response = await res.json();
        
        // console.log("[step 1 done ]")
        if (res.status === 201) {
            return response
        } else {
            return {status:"fail"};
        }
    } catch (error) {
        console.log(error);
        return {status:"fail"};
    }
};