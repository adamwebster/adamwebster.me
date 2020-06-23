import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import SEO from '../components/seo';
import { Input, Textarea, Button, Label } from '@adamwebster/fused-components';
const Contact = () => {
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
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();
  };
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

      {/* <!-- A little help for the Netlify post-processing bots --> */}
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
      <p>
        <form onSubmit={e => handleSubmit(e)}>
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
    </Layout>
  );
};

export default Contact;
