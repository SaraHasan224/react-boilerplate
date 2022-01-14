function PAYMENT_METHOD_PAYLOAD_UPDATE(payment_methods) {
    let selected_payment_method = {};
    payment_methods &&
        payment_methods.map((payment_method, index) => {
            payment_method.index = index;
            if (payment_method.is_selected) {
                selected_payment_method = payment_method;
            }
            return null;
        });
    return {
        methods: payment_methods,
        selected_payment_method
    };
}

const APP_HELPER = {
    PAYMENT_METHOD_PAYLOAD_UPDATE
};

export default APP_HELPER;