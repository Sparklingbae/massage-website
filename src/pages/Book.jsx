import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import { PaystackButton } from 'react-paystack';
import axios from 'axios';
import './Book.css'; // Import CSS for styling

const Book = () => {
    const publicKey = 'pk_test_c764ecba5cc4150770defdc8f17c80e3d4b10147'; // Replace with your Paystack public key
    const amount = 5000 * 100; // Amount in kobo

    // Replace with dynamic user details
    const email = "user@example.com"; 
    const name = "John Doe"; 

    const whatsappNumber = '2348117896388'; // Replace with your WhatsApp business number including country code

    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [transactionReference, setTransactionReference] = useState('');

    const handleSuccess = async (reference) => {
        setPaymentSuccess(true);
        setTransactionReference(reference.reference);

        // Notify backend
        try {
            await axios.post('/api/booking/notify', {
                name,
                email,
                transactionReference: reference.reference,
            });
        } catch (error) {
            console.error('Error notifying backend:', error);
        }

        // Redirect to WhatsApp
        const message = `Thank you for your payment! Your transaction reference is ${reference.reference}`;
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    const handleClose = () => {
        alert("Wait! You need this massage, don't go!!!!");
    };

    const componentProps = {
        email,
        amount,
        publicKey,
        text: "Book Now",
        onSuccess: handleSuccess,
        onClose: handleClose,
    };

    return (
        <div className="book-session">
            <BookingForm />
            <PaystackButton {...componentProps} />

            {paymentSuccess && (
                <div className="payment-success">
                    <h2>Payment Successful!</h2>
                    <p>Thank you for your payment! Your transaction reference is {transactionReference}.</p>
                    <p>If you don't have WhatsApp, you can contact us at <a href="mailto:support@example.com">support@example.com</a>.</p>
                </div>
            )}
        </div>
    );
};

export default Book;