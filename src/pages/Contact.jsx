import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in your name, email, and message.' });
      return false;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return false;
    }
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    if (!validate()) return;

    setSubmitting(true);
    try {
      // Placeholder for integration — e.g., call an API endpoint here.
      await new Promise(res => setTimeout(res, 800));
      setStatus({ type: 'success', message: 'Thanks! Your message has been sent.' });
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-hero">
        <div className="container py-24">
          <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
            <div className="animate-fadeInUp">
              <h1>Contact Us</h1>
              <p className="text-secondary">
                We’d love to hear from you. Send us a message and we’ll respond as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section>
        <div className="container py-8">
          <div className="grid grid-2">
            {/* Form Card */}
            <div className="card">
              <h3 className="mb-6">Send us a message</h3>
              <form onSubmit={onSubmit} className="grid" style={{ gap: '1.25rem' }}>
                <div>
                  <label className="form-label" htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="grid" style={{ gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                  <div>
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="Email"
                      value={form.email}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="phone">Phone (optional)</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-input"
                    placeholder="Mobile Number"
                      value={form.phone}
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="form-input"
                    placeholder="How can we help?"
                    value={form.subject}
                    onChange={onChange}
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Write your message..."
                    value={form.message}
                    onChange={onChange}
                    required
                  />
                </div>

                {status.message ? (
                  <div
                    className="rounded-xl px-4 py-3"
                    style={{
                      background: status.type === 'success' ? 'var(--accent-100)' : 'var(--danger-100)',
                      border: `1px solid ${status.type === 'success' ? 'var(--accent-200)' : 'var(--danger-200)'}`,
                      color: status.type === 'success' ? 'var(--accent-700)' : 'var(--danger-700)'
                    }}
                  >
                    {status.message}
                  </div>
                ) : null}

                <div>
                  <button type="submit" className="btn btn-primary btn-lg" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
 
          </div>

          {/* Small CTA */}
          <div className="card card-light mt-12">
            <div className="flex items-center justify-between gap-6" style={{ flexWrap: 'wrap' }}>
              <div>
                <h4 className="mb-2" style={{ marginBottom: '8px' }}>Looking for support?</h4>
                <p className="text-secondary" style={{ margin: 0 }}>
                  Check our FAQs or reach out and we’ll guide you through.
                </p>
              </div>
              <a href="/join-us" className="btn btn-secondary">Explore Join Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;