/**
 * Class {StripeEnvironment}
 */
export class StripeEnvironment {

    // Static variables
    /**
     * Field to store the public key.
     * @property {string}
     */
    static publicKey: string;

    /**
     * Field to store the secret key.
     * @property {string}
     */
    static secretKey: string;

    static init(publicKey: string, secretKey: string) {
        StripeEnvironment.publicKey = publicKey;
        StripeEnvironment.secretKey = secretKey;
        return this;
    }

    /**
     * Returns the public key.
     * @return {string}
     */
    static getPublicKey(): string {
        return StripeEnvironment.publicKey;
    }

    /**
     * Returns the secret key.
     * @return {string}
     */
    static getSecretKey(): string {
        return StripeEnvironment.secretKey;
    }
}