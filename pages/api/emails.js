import { sendEmail } from "../../server/email";
//http://localhost:3000/api/emails?usermail=bla@blabla.com
export default async (req, res) => {
  const {
    query: { usermail }
  } = req;

  console.log("useermail", usermail);
  const sendMailResult = await sendEmail(usermail);
  //   console.log("sendmailresult", sendMailResult);
  if (sendMailResult !== 202) {
    return res.status(404).json({
      status: 404,
      message: "Oops, something went wrong with the email"
    });
  }
  return res.json({ sendMailResult });
};
