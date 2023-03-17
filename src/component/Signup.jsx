import React,{useState} from 'react'

export default function signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // handle form submission logic here
      };
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}
