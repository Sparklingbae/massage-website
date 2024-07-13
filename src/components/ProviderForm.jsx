import { useState } from "react";
import "./SignupForm.css";

const ProviderForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialty: "",
    password: "",
    bio: "",
    services: "",
    location: "",
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

  return (
    <form className="provider-form">
      {step === 1 && (
        <div className="form-step">
          <h2>Personal Information</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="specialty"
            placeholder="Specialty"
            value={formData.specialty}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={handleNextStep}>
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div className="form-step">
          <h2>Professional Information</h2>
          <textarea
            name="bio"
            placeholder="Bio"
            value={formData.bio}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="services"
            placeholder="Services Offered"
            value={formData.services}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            name="images"
            multiple
            onChange={handleImageChange}
            required
          />
          <button type="button" onClick={handlePreviousStep}>
            Back
          </button>
          {/*<button type="button" onClick={handleNextStep}>
            Next
          </button>*/}
        </div>
      )}
    </form>
  );
};

export default ProviderForm;