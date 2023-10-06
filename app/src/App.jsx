import React, { useState } from 'react';
import * as Yup from 'yup';
import './App.css';
import Card from './Components/card';

function App() {
  const initialValues = {
    title: '',
    description: '',
    ratings: '',
    url: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title required'),
    description: Yup.string().required('Description required').min(5, "Description should be at least 5 characters"),
    ratings: Yup.number().required('Ratings is required').max(10, "Rating cannot be greater than 10"),
    url: Yup.string().url('Enter a valid URL').required('URL is required'),
  });

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [cardData, setCardData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validationSchema.validate(formValues, { abortEarly: false })
      .then(() => {
        console.log(formValues);
        setCardData([...cardData, formValues]);
        setFormValues(initialValues);
      })
      .catch((error) => {
        const errors = {};
        error.inner.forEach((fieldError) => {
          errors[fieldError.path] = fieldError.message;
        });
        setFormErrors(errors);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={formValues.title}
            onChange={handleChange}
          />
          {formErrors.title && <div className="error">{formErrors.title}</div>}
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={formValues.description}
            onChange={handleChange}
          />
          {formErrors.description && <div className="error">{formErrors.description}</div>}
        </div>
        <div>
          <label htmlFor="ratings">Ratings</label>
          <input
            type="number"
            id="ratings"
            name="ratings"
            placeholder="Ratings"
            value={formValues.ratings}
            onChange={handleChange}
          />
          {formErrors.ratings && <div className="error">{formErrors.ratings}</div>}
        </div>
        <div>
          <label htmlFor="url">URL</label>
          <input
            type="url"
            id="url"
            name="url"
            placeholder="URL"
            value={formValues.url}
            onChange={handleChange}
          />
          {formErrors.url && <div className="error">{formErrors.url}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="card">
        {cardData &&
          cardData.map((item, index) => {
            return <Card key={index} values={item} />;
          })}
      </div>
    </div>
  );
}

export default App;
