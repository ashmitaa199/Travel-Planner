import React, { useState } from 'react';
import Nav from '../components/Nav';


const OnBoarding = () => {
  // State to manage form values
  const [formData, setFormData] = useState({
    user_id:'',
    first_name: '',
    dob_Day: '',
    dob_Month: '',
    dob_Year: '',
    gender_identity: 'man', // Updated state name for gender identity
    show_gender: false,
    gender_interest: 'woman',
    email:'',
    about: '',
    url: '',
    matches: []
  });

  // Handle form field changes
  const handleChange = (e) => {
    console.log('e',e)
        const value=e.target.type ==='checkbox' ? e.target.checked:e.target.value
        const name=e.target.name

        setFormData((prevState) => ({
                   ...prevState,
                    [name]: value,
                  }));
               
        

    }
    
 console.log(formData);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <>
      <Nav 
      setShowModal={() => {
      }}
      showModal={false}
      />
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>

        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              type='text'
              name="first_name"
              placeholder="First Name"
              required
              value={formData.first_name}
              onChange={handleChange}
            />

            <label>Birthday</label>
            <div className="multiple-input-container">
              <input
                id="dob_Day"
                type="number"
                name="dob_Day"
                placeholder="DD"
                required
                value={formData.dob_Day}
                onChange={handleChange}
              />
              <input
                id="dobMonth"
                type="number"
                name="dobMonth"
                placeholder="MM"
                required
                value={formData.dob_Month}
                onChange={handleChange}
              />
              <input
                id="dobYear"
                type="number"
                name="dobYear"
                placeholder="YYY"
                required
                value={formData.dob_Year}
                onChange={handleChange}
              />
            </div>

            <label>Gender</label>
            <div className="multiple-input-container">
              <input
                id="man-gender-identity"
                type="radio"
                name="gender_identity"
                value="man"
                onChange={handleChange}
                checked={formData.gender_identity==='man'}
              />
              <label htmlFor="man-gender-identity">Man</label>
              <input
                id="woman-gender-identity"
                type="radio"
                name="gender_identity"
                value="woman"
                onChange={handleChange}
                checked={formData.gender_identity==='woman'}
              />
              <label htmlFor="woman-gender-identity">Woman</label>
              <input
                id="more-gender-identity"
                type="radio"
                name="gender_identity"
                value="more"
                onChange={handleChange}
                checked={formData.gender_identity==='more'}
              />
              <label htmlFor="more-gender-identity">More</label>
            </div>

            <div className="checkbox-container">
              <input
                id="show-gender"
                type="checkbox"
                name="show_gender"
                onChange={handleChange}
                checked={formData.show_gender}
              />
              <label htmlFor="show-gender">Show Gender on my Profile</label>
            </div>

            <label>Show Me</label>
            <div className="multiple-input-container">
              <input
                id="man-gender-interest"
                type="radio"
                name="gender_interest"
                value="man"
                onChange={handleChange}
                checked={formData.gender_interest === "man"}
              />
              <label htmlFor="man-gender-interest">Man</label>
              <input
                id="woman-gender-interest"
                type="radio"
                name="gender_interest"
                value="woman"
                onChange={handleChange}
                checked={formData.gender_interest === "woman"}
              />
              <label htmlFor="woman-gender-interest">Woman</label>
              <input
                id="everyone-gender-interest"
                type="radio"
                name="gender_interest"
                value="everyone"
                onChange={handleChange}
                checked={formData.gender_interest === "everyone"}
              />
              <label htmlFor="everyone-gender-interest">Everyone</label>
            </div>

            <label htmlFor="about">About me</label>
            <input
              id="about"
              type="text"
              name="about"
              required
              placeholder="I like long walks..."
              value={formData.about}
              onChange={handleChange}
            />

            <input type="submit" value="Submit" />
          </section>

          <section className=''>
            <label htmlFor="url">Profile Photo</label>
            <input
              type="url"
              name="url"
              id="url"
              onChange={handleChange}
              required
            />
            <div className="photo-container flex justify-center items-center">
              {formData.url && <img src={formData.url} alt="profile pic preview" />}
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default OnBoarding;
