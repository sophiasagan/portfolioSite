import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AWS_GATEWAY_URL =
  'https://uqsmgja8q8.execute-api.us-east-1.amazonaws.com/prod';


const required = 'This field is required';

export default function App() {
    const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    errors,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await fetch(AWS_GATEWAY_URL, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      setSubmitted(true);
      reset();
    } catch (error) {
      setError(
        'submit',
        'submitError',
        `Oops! There seems to be an issue! ${error.message}`
      );
    }
  };

  const showSubmitError = (msg) => <p className="msg-error">{msg}</p>;
  const showThankYou = (
    <div className="msg-confirm">
      <p>Awesome! Your message was sent. I will get back to you shortly.</p>
      <button type="button" onClick={() => setSubmitted(false)}>
        Send another message?
      </button>
    </div>
  );

  const buttonClassNames = isSubmitting ? 'loading' : null;

  const showForm = (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <label htmlFor="name">
        <h5>Name</h5>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          ref={register({ required })}
          disabled={isSubmitting}
        />
        {errors.name && <div className="msg-error">{errors.name.message}</div>}
      </label>

      <label htmlFor="email">
        <h5>Email</h5>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@email.address"
          ref={register({ required })}
          disabled={isSubmitting}
        />
        {errors.email && (
          <div className="msg-error">{errors.email.message}</div>
        )}
      </label>

      <label htmlFor="question">
        <h5>Message</h5>
        <textarea
          ref={register({ required })}
          name="question"
          id="question"
          rows="3"
          placeholder="What's on your mind?"
          disabled={isSubmitting}
          className="msg-body"
        />
        {errors.question && (
          <div className="msg-error">{errors.question.message}</div>
        )}
      </label>

      <div className="submit-wrapper">
        <button
          type="submit"
          disabled={isSubmitting}
          className={buttonClassNames}
        >
          Send
        </button>
      </div>
    </form>
  );

  return (
    
      
  
      <div className="page contact-page">
        <div className="text-side">
          <h2>Let&apos;s talk</h2>
          <p>Ask me anything, send me ideas, or just say hi...</p>
          {errors && errors.submit && showSubmitError(errors.submit.message)}
        </div>
        <div className="form-side">{submitted ? showThankYou : showForm}</div>
      </div>
   
  );
};
