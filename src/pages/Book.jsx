import BookingForm from '../components/BookingForm';
import { PaystackButton } from 'react-paystack';
import './Book.css';

const Book = () => {
  const publicKey = 'pk_test_c764ecba5cc4150770defdc8f17c80e3d4b10147'; // Replace with your Paystack test public key
  const amount = 5000 * 100; // 2000 Naira converted to kobo
  const email = "user@example.com"; // Replace with user's email dynamically
  const name = "John Doe"; // Replace with user's name dynamically

  const componentProps = {
    name,
    email,
    amount,
    publicKey,
    text: "Pay Now",
    onSuccess: () => alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this massage, don't go!!!!"),
  };

  return (
    <div className="book-section">
      <h2>Book a Session</h2>
      <BookingForm />
      <PaystackButton {...componentProps} />
    </div>
  );
};

export default Book;