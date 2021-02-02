import React, { useState, useRef } from 'react';
import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import SEO from '../components/seo';
import {
  Input,
  Textarea,
  useToast,
  FormField,
} from '@adamwebster/fused-components';
import styled from 'styled-components';
import { StyledContentWrapper, StyledButton } from '../styles';

const StyledInput = styled(Input)`
  border-radius: 4px;
`;

const StyledTextarea = styled(Textarea)`
  border-radius: 4px;
`;

const StyledFormWrapper = styled.div`
  max-width: 700px;
`;

const ContactForm = () => {
  const toast = useToast();
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const messageInputRef = useRef<HTMLTextAreaElement | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const [nameValidation, setNameValidation] = useState({
    inError: false,
    errorMessage: '',
  });
  const [emailValidation, setEmailValidation] = useState({
    inError: false,
    errorMessage: '',
  });
  const [messageValidation, setMessageValidation] = useState({
    inError: false,
    errorMessage: '',
  });

  const submitForm = (ev: any) => {
    ev.preventDefault();

    let valid = true;
    if (!nameInputRef?.current?.value) {
      setNameValidation({
        ...nameValidation,
        inError: true,
        errorMessage: 'Name is required',
      });
      valid = false;
    }

    if (!emailInputRef?.current?.value) {
      setEmailValidation({
        ...nameValidation,
        inError: true,
        errorMessage: 'Email is required',
      });
      valid = false;
    }

    if (!messageInputRef?.current?.value) {
      setMessageValidation({
        ...nameValidation,
        inError: true,
        errorMessage: 'Message is required',
      });
      valid = false;
    }

    if (valid) {
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          setStatus('SUCCESS');
          toast.addInfo('Email sent', 'I will get back to your soon.');
        } else {
          setStatus('ERROR');
        }
      };
      xhr.send(data);
    }
  };

  return (
    <StyledFormWrapper>
      <form
        onSubmit={e => submitForm(e)}
        action="https://formspree.io/f/mgepdlqn"
        method="POST"
      >
        <FormField
          validationMessage={nameValidation.errorMessage}
          htmlFor="name"
          required
          label="Your  Name"
        >
          <StyledInput
            ref={nameInputRef}
            id="name"
            inError={nameValidation.inError}
            type="text"
            name="name"
            value={formData.name}
            onChange={e => {
              if (e.target.value.length > 0) {
                setNameValidation({
                  errorMessage: '',
                  inError: false,
                });
              }
              setFormData({ ...formData, name: e.target.value });
            }}
          />
        </FormField>
        <FormField
          htmlFor="email"
          validationMessage={emailValidation.errorMessage}
          required
          label="Your Email"
        >
          <StyledInput
            ref={emailInputRef}
            id="email"
            inError={emailValidation.inError}
            type="email"
            name="email"
            value={formData.email}
            onChange={e => {
              if (e.target.value.length > 0) {
                setEmailValidation({
                  errorMessage: '',
                  inError: false,
                });
              }
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </FormField>

        <FormField
          htmlFor="message"
          validationMessage={messageValidation.errorMessage}
          required
          label="Message"
        >
          <StyledTextarea
            ref={messageInputRef}
            rows={10}
            id="message"
            name="message"
            inError={messageValidation.inError}
            value={formData.message}
            onChange={e => {
              if (e.target.value.length > 0) {
                setMessageValidation({
                  errorMessage: '',
                  inError: false,
                });
              }
              setFormData({ ...formData, message: e.target.value });
            }}
          />
        </FormField>
        {status === 'SUCCESS' ? (
          <p>Thanks!</p>
        ) : (
          <StyledButton type="submit" primary>
            Send
          </StyledButton>
        )}
        {status === 'ERROR' && <p>Ooops! There was an error.</p>}
      </form>
    </StyledFormWrapper>
  );
};

const Contact = () => {
  return (
    <Layout>
      <StyledContentWrapper>
        <SEO title="Contact" />
        <PageHeader>Contact</PageHeader>
        <p>
          The best way to currently to get in contact with me is through twitter
          by following me{' '}
          <a href="https://twitter.com/adamwebster" target="_blank">
            @adamwebster
          </a>
          .
        </p>
        <ContactForm />
      </StyledContentWrapper>
    </Layout>
  );
};

export default Contact;
