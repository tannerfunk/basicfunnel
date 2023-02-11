// import axios from 'axios';

// const options = {
//   method: 'POST',
//   url: 'https://api.mailerlite.com/api/v2/subscribers',
//   headers: {
//     accept: 'application/json',
//     'X-MailerLite-ApiDocs': 'true',
//     'content-type': 'application/json',
//     'X-MailerLite-ApiKey': process.env.MAILERLITE_API_KEY
//   },
//   data: {email: 'null', resubscribe: false, type: 'null'}
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });


// const SendEmail = async (email) => {
//     const response = await fetch('https://api.mailerlite.com/api/v2/campaigns/send', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-MailerLite-ApiKey': process.env.MAILERLITE_API_KEY,
//       },
//       body: JSON.stringify({
//         campaign_id: 'YOUR_CAMPAIGN_ID',
//         subscribers: [
//           {
//             email,
//           },
//         ],
//       }),
//     });
  
//     if (response.ok) {
//       console.log('Welcome email sent successfully');
//     } else {
//       console.error('Error sending welcome email');
//     }
//   };

//   export default SendEmail;