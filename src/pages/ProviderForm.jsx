import { useState } from "react";
import axios from "axios";
import { PaystackButton } from "react-paystack";
import "./SignupForm.css";

const ProviderForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        specialty: '',
        password: '',
        bio: '',
        services: '',
        location: '',
        images: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            images: e.target.files
        });
    };

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    const handlePaymentSuccess = async (reference) => {
        const paymentData = new FormData();
        paymentData.append('name', formData.name);
        paymentData.append('email', formData.email);
        paymentData.append('specialty', formData.specialty);
        paymentData.append('password', formData.password);
        paymentData.append('bio', formData.bio);
        paymentData.append('services', formData.services);
        paymentData.append('location', formData.location);
        paymentData.append('paymentReference', reference);

        for (let i = 0; i < formData.images.length; i++) {
            paymentData.append('images', formData.images[i]);
        }

        try {
            const response = await axios.post('http://localhost:5000/api/providers/signup', paymentData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Signup successful:', response.data);
        } catch (error) {
            console.error('Signup error:', error);
        }
    };

    const publicKey = "pk_test_c764ecba5cc4150770defdc8f17c80e3d4b10147"; // Replace with your Paystack public key

    const componentProps = {
        email: formData.email,
        amount: 10000, // Replace with the amount you want to charge
        metadata: {
            name: formData.name,
            phone: formData.phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: (reference) => handlePaymentSuccess(reference.reference),
        onClose: () => console.log("Payment closed"),
    };

    return (
        <form className="provider-form">
            {step === 1 && (
                <div className="form-step">
                    <h2>Personal Information</h2>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <input type="text" name="specialty" placeholder="Specialty" value={formData.specialty} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                    <button type="button" onClick={handleNextStep}>Next</button>
                </div>
            )}
            {step === 2 && (
                <div className="form-step">
                    <h2>Professional Information</h2>
                    <textarea name="bio" placeholder="Bio" value={formData.bio} onChange={handleChange} required />
                    <input type="text" name="services" placeholder="Services Offered" value={formData.services} onChange={handleChange} required />
                    <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
                    <input type="file" name="images" multiple onChange={handleImageChange} required />
                    <button type="button" onClick={handlePreviousStep}>Back</button>
                    <button type="button" onClick={handleNextStep}>Next</button>
                </div>
            )}
            {step === 3 && (
                <div className="form-step">
                    <h2>Payment Information</h2>
                    <PaystackButton {...componentProps} />
                    <button type="button" onClick={handlePreviousStep}>Back</button>
                </div>
            )}
        </form>
    );
};

export default ProviderForm;