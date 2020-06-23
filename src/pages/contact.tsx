import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import SEO from '../components/seo';
import {
  Input,
  Textarea,
  Button,
  Label,
  useToast,
} from '@adamwebster/fused-components';

const ContactForm = () => {
  const toast = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };
  const handleSubmit = (e: any) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => toast.addInfo('Email sent', 'I will get back to your soon.'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  return (
    <>
      <p>
        <form
          name="contact"
          onSubmit={e => handleSubmit(e)}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />

          <p>
            <Label htmlFor="name">Your Name</Label>

            <Input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
          </p>
          <p>
            <Label htmlFor="email">Your Email</Label>

            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={e =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </p>
          <p>
            <Label htmlFor="message">Message</Label>

            <Textarea
              rows={10}
              id="message"
              name="message"
              value={formData.message}
              onChange={e =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </p>
          <p>
            <Button type="submit" primary>
              Send
            </Button>
          </p>
        </form>
      </p>
    </>
  );
};

const Contact = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Contact;
