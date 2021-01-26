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
import { AWMVariables } from '../styles/StyledVariables';
import { StyledContentWrapper, StyledButton } from '../styles';

const StyledInput = styled(Input)`
  border-radius: ${AWMVariables.borderRadius};
`;

const StyledTextarea = styled(Textarea)`
  border-radius: ${AWMVariables.borderRadius};
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

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };
  const handleSubmit = (e: any) => {
    let valid = true;
    e.preventDefault();
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
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData }),
      })
        .then(() =>
          toast.addInfo('Email sent', 'I will get back to your soon.')
        )
        .catch(error => alert(error));
      e.preventDefault();
    }
  };

  return (
    <StyledFormWrapper>
      <form
        name="contact"
        onSubmit={e => handleSubmit(e)}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />

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
        <StyledButton type="submit" primary>
          Send
        </StyledButton>
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
