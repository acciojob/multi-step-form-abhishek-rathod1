// Step.js
import React from "react";
import "../styles/App.css";

const Step = ({ step, formData, setFormData, nextStep, prevStep, handleSubmit }) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const renderFields = () => {
    switch (step) {
      case 1:
        return (
          <>
            <input
              type="text"
              id="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
            />
            <input
              type="text"
              id="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </>
        );
      case 2:
        return (
          <>
            <input
              type="text"
              id="model"
              name="model"
              placeholder="Car Model"
              value={formData.model}
              onChange={handleChange}
            />
            <input
              type="number"
              id="car_price"
              placeholder="Car Price"
              value={formData.car_price}
              onChange={handleChange}
            />
          </>
        );
      case 3:
        return (
          <>
            <input
              type="number"
              id="card_info"
              placeholder="Card Info"
              value={formData.card_info}
              onChange={handleChange}
            />
            <input
              type="date"
              id="expiry_date"
              placeholder="Expiry Date"
              value={formData.expiry_date}
              onChange={handleChange}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h3>Step {step}</h3>
      {renderFields()}
      <div className="button-group">
        {step > 1 && (
          <button type="button" onClick={prevStep}>
            Previous
          </button>
        )}
        {step < 3 && (
          <button type="button" onClick={nextStep}>
            Next
          </button>
        )}
        {step === 3 && (
          <button type="submit">
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default Step;
