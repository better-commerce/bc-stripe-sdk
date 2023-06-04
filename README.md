# BetterCommerce Stripe NodeJS SDK

BetterCommerce's Stripe NodeJS SDK enables BC client applications to integrate with Stripe merchant API system.

Use below command for package installation:

```
npm install @better-commerce/bc-stripe-sdk
```

## Architecture Diagram

![Architecture Diagram](/assets/app-architecture.png)

## SDK Initialization

**Use following snippet to initialize the SDK:**

```
StripeEnvironment.init("<public_key>", "<secret_key>");
```

## Usage Example

### Create Payment Intent

```
const data = {
    amount: <amount>,
    currency: "<currency_code>",
    receipt_email: "<receipt_email>",
    description: "<description>"
};
const result = await new Payment.initIntent(data);
```

### Response

```
{
  "id":"pi_3NFEwJJfqoPrHJKR0flGB6qG",
  "object":"payment_intent",
  "amount":10101,
  "amount_capturable":0,
  "amount_details":{
      "tip":{
      }
  },
  "amount_received":0,
  "capture_method":"automatic",
  "confirmation_method":"automatic",
  "created":1685877459,
  "currency":"gbp",
  "customer":null,
  "description":"",
  "invoice":null,
  "metadata":{
  },
  "payment_method_options":{
      "card":{
          "installments":null,
          "mandate_options":null,
          "network":null,
          "request_three_d_secure":"automatic"
      }
  },
  "payment_method_types":[
      "card"
  ],
  "receipt_email":"test@gmail.com",
  ...
  ...
  ...
}
```