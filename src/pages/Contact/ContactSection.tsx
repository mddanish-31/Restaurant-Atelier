import { useState, type FormEvent } from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const INITIAL_STATE: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INFO_BLOCKS = [
  {
    icon: MapPin,
    label: 'Location',
    lines: ['Ember & Oak', '12 Oak Street', 'Kolkata, West Bengal'],
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: ['+91 98765 43210'],
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['hello@emberandoak.com'],
  },
  {
    icon: Clock,
    label: 'Hours',
    lines: ['Mon-Thu: 12:00 PM - 10:30 PM', 'Fri-Sun: 12:00 PM - 11:30 PM'],
  },
];

const SOCIALS = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'X / Twitter', href: '#' },
];

const inputClasses =
  'w-full rounded-lg border border-border bg-surface px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-200 focus:border-primary focus:outline-none focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2';

const labelClasses = 'mb-2 block font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted';

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  function validate(values: FormState): FormErrors {
    const next: FormErrors = {};
    if (!values.firstName.trim()) next.firstName = 'First name is required.';
    if (!values.lastName.trim()) next.lastName = 'Last name is required.';
    if (!values.email.trim()) {
      next.email = 'Email address is required.';
    } else if (!EMAIL_PATTERN.test(values.email.trim())) {
      next.email = 'Enter a valid email address.';
    }
    if (!values.subject.trim()) next.subject = 'Subject is required.';
    if (!values.message.trim()) next.message = 'Message is required.';
    return next;
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
    setForm(INITIAL_STATE);
  }

  return (
    <section
      id="contact-form"
      aria-labelledby="contact-section-heading"
      className="scroll-mt-24 bg-background py-16 lg:py-24"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={container}
        className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8"
      >
        <motion.div variants={item}>
          <h2 id="contact-section-heading" className="font-display text-2xl text-foreground sm:text-3xl">
            Reach Us
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {INFO_BLOCKS.map(({ icon: Icon, label, lines }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                  <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {label}
                  </p>
                  {lines.map((line) => (
                    <p key={line} className="mt-1 font-sans text-sm leading-relaxed text-muted">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Follow Along
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              {SOCIALS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="font-sans text-sm text-muted transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={item}>
          <form
            noValidate
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-surface p-6 shadow-soft sm:p-8"
          >
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">Send a Message</h2>
            <p className="mt-2 font-sans text-sm text-muted">
              Fill in your details and we&apos;ll get back to you shortly.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className={labelClasses}>
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                  aria-invalid={Boolean(errors.firstName)}
                  aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                  className={inputClasses}
                  placeholder="Jane"
                />
                {errors.firstName && (
                  <p id="firstName-error" className="mt-1.5 font-sans text-xs text-primary">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className={labelClasses}>
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                  aria-invalid={Boolean(errors.lastName)}
                  aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                  className={inputClasses}
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p id="lastName-error" className="mt-1.5 font-sans text-xs text-primary">
                    {errors.lastName}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className={labelClasses}>
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={inputClasses}
                  placeholder="jane@email.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 font-sans text-xs text-primary">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="subject" className={labelClasses}>
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  className={inputClasses}
                  placeholder="Reservation for four, Saturday evening"
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1.5 font-sans text-xs text-primary">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelClasses}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell us a little about what you have in mind..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 font-sans text-xs text-primary">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-sm font-medium text-primary-foreground transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              >
                Send Message &rarr;
              </button>
              {submitted && (
                <p role="status" className="font-sans text-sm text-primary">
                  Thank you - we&apos;ll be in touch soon.
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}