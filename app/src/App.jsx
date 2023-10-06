import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from './Components/Button'; 
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
    description: Yup.string().required('Description required').min(5,"Description should be at least 5 characters"),
    ratings: Yup.number().required('Ratings is required').max(10,"Rating cannot be greater than 10"),
    url: Yup.string().url('Enter a valid URL').required('URL is required'),
  });

  const [cardData, setCardData] = useState([]);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    setCardData([...cardData,values]);
    
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ touched, errors }) => (
          <Form>
            <div>
              <label htmlFor="title">Title</label>
              <Field
                type="text"
                id="title"
                name="title"
                placeholder="Title"
              />
              {touched.title && errors.title && (
                <div className="error">{errors.title}</div>
              )}
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <Field
                type="text"
                id="description"
                name="description"
                placeholder="Description"
              />
              {touched.description && errors.description && (
                <div className="error">{errors.description}</div>
              )}
            </div>
            <div>
              <label htmlFor="ratings">Ratings</label>
              <Field
                type="number"
                id="ratings"
                name="ratings"
                placeholder="Ratings"
              />
              {touched.ratings && errors.ratings && (
                <div className="error">{errors.ratings}</div>
              )}
            </div>
            <div>
              <label htmlFor="url">URL</label>
              <Field
                type="url"
                id="url"
                name="url"
                placeholder="URL"
              />
              {touched.url && errors.url && (
                <div className="error">{errors.url}</div>
              )}
            </div>
            <Button type="submit" name="Submit" />
          </Form>
        )}
      </Formik> 
      <div>
        
          {/* cardData.map{(item)=>{
            return <card/>
          }

          } */}
          <div className="card">
        {cardData &&
          cardData.map((item) => {
            return <Card values={item} />;
          })}
      </div>
      
      </div>
    </div>
  );
}

export default App;
