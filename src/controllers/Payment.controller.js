const stripe = require("stripe")("test");

exports.index = function(req, res) {
    res.render("index");
}

exports.createPayment = function(req, res) {
    const customer = stripe.customers.create({
        email: req.body.email,
        source: req.body.stripeToken
    });

    const charge = stripe.charges.create({
        amount: 4000,
        description: 'Laptp Imac',
        currency: 'usd',
        customer: customer.id
    });

    res.render('payment');
}