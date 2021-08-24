const SendMail = () => {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(
    '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'
  );

  const msg = {
    to: `dzij`,
    from: 'simplyAlgo@gmx.fr',
    subject: 'Bienvenue sur SimplyAlgo',
    text: "L'équipe de SimplyAlgo vous souhaites la bienvenue.",
    html: "<strong>L'équipe de SimplyAlgo vous souhaites la bienvenue. </strong>"
  };

  sgMail
    .send(msg)
    .then((response: any) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error: any) => {
      console.error(error);
    });
};

export default SendMail;
