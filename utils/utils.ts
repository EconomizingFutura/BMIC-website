export const sendEmail = () => {
  const to = "jagadeesan.bharath@gmail.com";
  const subject = encodeURIComponent("Inquiry About Services and Quotation");
  const body = encodeURIComponent(`Dear Mr. Bharath,

I came across your contact on your website and am reaching out to inquire about the services you offer.

I am currently looking for professional assistance with the following:

Ducting installation

Cold storage setup

Soundproofing solutions

Insulation work

Could you please share more information about the services you provide in these areas? Additionally, I would appreciate it if you could provide a quotation or cost estimate for these services, along with any brochures or project references you may have.

Please let me know if you require further details from my end.

Looking forward to your response.

Best regards,
[Your Full Name]
[Your Company Name, if any]
[Your Contact Number]
[Your Email Address]`);

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;

  window.open(gmailUrl, "_blank");
};

export const dialNumber = () => {
  const phoneNumber = "7871608088";
  window.location.href = `tel:${phoneNumber}`;
};
