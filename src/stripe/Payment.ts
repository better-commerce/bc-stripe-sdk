import { StripeEnvironment } from "../base/config/StripeEnvironment";
import { IPayment } from "../base/contracts/IPayment";
import { sanitizeAmount } from "../utils/app-util";

/**
 * Class {Payment} implements the IPayment interface and provides concrete implementation of all the methods.
 * 
 * @class Payment
 * @implements {IPayment}
 */
export class Payment implements IPayment {
    
    /**
     * Create a PaymentIntent. Creates a PaymentIntent object.
     * 
     * API Reference - https://stripe.com/docs/api/payment_intents/create
     * 
     * @param data {Object}
     * @returns {Promise<any>}
     */
    async initIntent(data: any): Promise<any> {
        try {
            const secretKey = StripeEnvironment.getSecretKey();
            const stripe = require("stripe")(secretKey);
            const paymentIntentResult = await stripe.paymentIntents.create({ ...data, ...{ amount: sanitizeAmount(data?.amount) } });
            return paymentIntentResult;
        } catch (error) {
            return { hasError: true, error: error };
        }
    }

    /**
     * Retrieve a PaymentIntent. Retrieves the details of a PaymentIntent that has previously been created.
     * 
     * API Reference - https://stripe.com/docs/api/payment_intents/retrieve
     * 
     * @param data {String}
     * @returns {Promise<any>}
     */
    async getDetails(data: any): Promise<any> {
        try {
            const secretKey = StripeEnvironment.getSecretKey();
            const stripe = require("stripe")(secretKey);
            const paymentDetailsResult = await stripe.paymentIntents.retrieve(data);
            return paymentDetailsResult;
        } catch (error) {
            return { hasError: true, error: error };
        }
    }
}