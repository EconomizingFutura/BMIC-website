export const sendEmail = () => {
  const to = "example@example.com";
  const subject = encodeURIComponent("Hello from my app");
  const body = encodeURIComponent("This is the body of the email");

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;

  window.open(gmailUrl, "_blank");
};

export const dialNumber = () => {
  const phoneNumber = "9566122235";
  window.location.href = `tel:${phoneNumber}`;
};
