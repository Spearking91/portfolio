"use client";

import { FormEvent, useState } from "react";
import { socials } from "../data/portfolio";

const ContactForm = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-lg flex-col gap-4">
      <label className="form-control w-full">
        <span className="label-text mb-1">Name</span>
        <input
          required
          name="name"
          type="text"
          placeholder="Your name"
          className="input input-bordered w-full"
        />
      </label>
      <label className="form-control w-full">
        <span className="label-text mb-1">Email</span>
        <input
          required
          name="email"
          type="email"
          placeholder="you@example.com"
          className="input input-bordered w-full"
        />
      </label>
      <label className="form-control w-full">
        <span className="label-text mb-1">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Tell me about the role or project"
          className="textarea textarea-bordered w-full"
        />
      </label>
      <button type="submit" className="btn btn-primary">
        Send message
      </button>
      {sent && (
        <p className="text-sm opacity-80">
          Your mail app should open with the message ready to send.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
