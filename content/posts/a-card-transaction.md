---
title: "The story of a card transaction"
description: "An outline of the different participants of a card transaction"
date: 2020-07-24T19:42:14+02:00
draft: false
---

Or, what does actually Visa and Mastercard do?

During the last few years, I have worked in the German finance sector.
Not in any startup, but at the well-established "old" banks, which are desperate to keep up with the quickly changing
digital market.

This experience have taught me a few things about the banking tech and the systems that form the basis of the financial
systems in use.

Recently I have gained some clarity what actually takes place when a purchase is done with a Visa card.
This blog post is an attempt at sharing this, and in addition give some insights to the bank world.

To explain this, some new vocabulary is needed.
In addition to this, I will not use the word 'bank' anymore, as effectively any entity described can be seen as a bank.

### Aquirer (or Acquiring Bank)

This is the company which the seller (person selling a service/good) is signing up to, in order to enter a
payment network. One example is Worldpay. The Aquirer is generally responsible for the card reader (also called Point of
Sale, POS).

### Network Provider

Internationally there are only a few networks to choose from: Visa and Mastercard.
On a national network level, there are also smaller networks such as the German EC (Electronic Cash), now
[girocard](https://en.wikipedia.org/wiki/Girocard) network.

### Processor

This is the entity within the payment network which actually routes the transaction.
Visa is using an [API](https://en.wikipedia.org/wiki/Application_programming_interface) called the Visa DPS.
I have, to this day, not been able to figure out what DPS means.

### Issuer (or Issuing Bank)

This is the company which in a more common definition seen as a bank. This is the company which provides the payment
card, and its gets the name because it is the entity which is _issuing_ the payment card. Examples here are plenty:
DKB, Commerzbank and Swedbank.

## Putting it all together

This diagram ia an attempt at visualising how the entities work together.

![Card transaction flow](https://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.github.com/olof-nord/olof.info/master/static/images/posts/card-transaction-overview.puml)

Now, when it gets interesting is that as a customer, when you choose your bank, you only change the issuing bank.

### What service is provided by the issuing bank?

In terms of card payments, it does not really matter which bank you use.

In this aspect, the only service which is provided by the issuing bank are services such as geoblocking.
Of course, some banks have see-thorugh cards, some have metallic cards etc, but that is just the material the card is
made of.

Now, you probably say: But, I get a notification for a card payment through my bank app!
Correct.

Your bank is just using the Visa/Mastercard API to fetch the data, and to forward it to you.
The bank is basically just an expensive frontend for the Processor API from Visa/Mastercard.

## Who is making money?

Everyone along the way, but mostly Visa and Mastercard.

Each entity in the flow, from the Aquirer through the Processor to the Issuer takes their share of the cake.
This is usually a percentage, all in all around 1.0 to 1.6% of the purchase amount.

The split, and how much goes where, differs between networks, and this can also change per Aquirer and Issuer.

### What about the EC-Card/Girocard?

In Germany, some shops asks customer to use the local network and to pay with Girocard, as to save them fees.
In practice, there is barely any difference in terms of network fees: the network fee is around 1.0% of the
purchase amount.

### Other payment providers

When purchasing online, there is a huge new market with companies providing simpler payments: be it
[Klarna](https://en.wikipedia.org/wiki/Klarna), [Paypal](https://en.wikipedia.org/wiki/PayPal) or
[Stripe](https://en.wikipedia.org/wiki/Stripe_(company)).

Now, what these companies do is just wrapping themselves around the process above, and charging you for it.
If paying through them, there is one more entity touching the money, and thus higher total fees. These fees may or may
not be transparent to the customer.

## What does actually Visa and Mastercard do?

The network providers are basically routers of the card transfers: but in contrast to internet routers, they charge per
transaction and not just to enter the network (as can be argued is the case for an internet connection).

Arguably that is the success of the Visa and Mastercard business model: they let companies hook themselves
into their payment flow both to the right, center and left.
