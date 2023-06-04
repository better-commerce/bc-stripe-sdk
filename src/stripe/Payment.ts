import { StripeEnvironment } from "../base/config/StripeEnvironment";
import { IPayment } from "../base/contracts/IPayment";

export class Payment implements IPayment {

    async initIntent(data: any): Promise<any> {
        const secretKey = StripeEnvironment.getSecretKey();
        const stripe = require("stripe")(secretKey);
        const paymentIntentResult = await stripe.paymentIntents.create(data);
        return paymentIntentResult;
    }
}