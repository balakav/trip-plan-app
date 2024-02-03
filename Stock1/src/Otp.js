import React, { useEffect } from 'react';
import twilio from 'twilio';

const TwilioSMSComponent = () => {
  const accountSid = 'AC78aeac52ad6b4d54676dbdbffb9fb5f5';
  const authToken = '3fb02b38bab81ded83aa2ddd9510e041';

  const client = twilio(accountSid, authToken);

  // Assuming you have a Twilio phone number that is capable of sending SMS
  const fromPhoneNumber = '+1415XXXXXXX'; // Replace with your Twilio phone number

  // Replace with the recipient's phone number
  const toPhoneNumber = '+919894332382';

  useEffect(() => {
    const sendSMS = async () => {
      try {
        const message = await client.messages.create({
          body: 'hi',
          from: fromPhoneNumber,
          to: toPhoneNumber,
        });
        console.log('Message SID:', message.sid);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    sendSMS();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      <h1>Twilio SMS Component</h1>
      {/* You can add more content or UI elements here */}
    </div>
  );
};

export default TwilioSMSComponent;
