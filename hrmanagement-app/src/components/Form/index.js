import React, { useState } from "react";
import "./form.css";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    address: {
      street: "",
      area: "",
      city: "",
      state: "",
    },
    accountNumber: "",
    bankName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify(formData);
    console.log(data);
  };
  return (
    <div className="form">
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="middleName">Middle Name</label>
          <input
            type="text"
            className="form-control"
            id="middleName"
            placeholder="Enter middle name"
            value={formData.middleName}
            onChange={(e) =>
              setFormData({ ...formData, middleName: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            id="dateOfBirth"
            placeholder="Enter date of birth"
            value={formData.dateOfBirth}
            onChange={(e) =>
              setFormData({ ...formData, dateOfBirth: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
        </div>
        <div className="form-group">
          <label>Male: </label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Female: </label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          />
        </div>
        {/* <div className="form-group">
              <label>Other: </label>
              <input type='radio' name='gender' value="other" onChange={(e) => setFormData({...formData, gender: e.target.value})}/>
          </div> */}
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            className="form-control"
            id="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            className="form-control"
            id="street"
            placeholder="Enter your street"
            value={formData.address.street}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, street: e.target.value },
              })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="area">Area</label>
          <input
            type="text"
            className="form-control"
            id="area"
            placeholder="Enter your area"
            value={formData.address.area}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, area: e.target.value },
              })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="Enter your city"
            value={formData.address.city}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, city: e.target.value },
              })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            className="form-control"
            id="state"
            placeholder="Enter your state"
            value={formData.address.state}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, state: e.target.value },
              })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="accountNumber">Account Number</label>
          <input
            type="number"
            className="form-control"
            id="accountNumber"
            placeholder="Enter your account number"
            value={formData.accountNumber}
            onChange={(e) =>
              setFormData({ ...formData, accountNumber: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="bankName">Bank Name</label>
          <input
            type="text"
            className="form-control"
            id="bankName"
            placeholder="Enter your bank name"
            value={formData.bankName}
            onChange={(e) =>
              setFormData({ ...formData, bankName: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
