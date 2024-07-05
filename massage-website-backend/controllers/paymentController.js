const axios = require('axios');
const { PAYSTACK_SECRET_KEY } = process.env;

const initiatePayment = async (req, res) => {
  const { email, amount } = req.body;

  try {
    const response = await axios.post('https://api.paystack.co/transaction/initialize', {
      email,
      amount: amount * 100 // Paystack works with the lowest currency unit, hence amount * 100
    }, {
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`
      }
    });

    res.status(200).json({
      status: response.data.status,
      authorization_url: response.data.data.authorization_url
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const verifyPayment = async (req, res) => {
  const { reference } = req.query;

  try {
    const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`
      }
    });

    res.status(200).json({
      status: response.data.status,
      data: response.data.data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  initiatePayment,
  verifyPayment
};