const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.PROJECT_API_KEY;

export const sendEmail = async userEmail => {
  try {
    let res = await axios({
      method: "POST",
      url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "rapidprod-sendgrid-v1.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
        accept: "application/json",
        useQueryString: true
      },
      data: {
        personalizations: [
          {
            to: [
              {
                email: userEmail
              }
            ],
            subject: "Thank you for booking!"
          }
        ],
        from: {
          email: "noreply-travelapp@example.com"
        },
        content: [
          {
            type: "text/plain",
            value: "We hope you enjoy your trip!"
          }
        ]
      }
    });

    console.log(res);
    return res.statusCode;
  } catch (error) {
    console.log(error);
  }
};
