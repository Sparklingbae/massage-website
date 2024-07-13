import ProviderForm from '../components/ProviderForm';
import { PaystackButton } from 'react-paystack';
import './Provider.css';

const Provider = () => {
  const publicKey = 'pk_test_c764ecba5cc4150770defdc8f17c80e3d4b10147'; // Replace with your Paystack test public key
  const amount = 10000 * 100; // 2000 Naira converted to kobo
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
    <div className="register-section">
      <h2>Register</h2>
      <ProviderForm />
      <PaystackButton {...componentProps} />
    </div>
  );
};

export default Provider;