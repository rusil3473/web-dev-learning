import nodemailer from "nodemailer"
import User from "@/models/userModel"
import bcrypt, { genSalt } from "bcryptjs"


export async function sendEmail({ email, emailType, userId }: any) {
  try {
    const token = await bcrypt.hash(userId.toString(), 10)
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, { verifyToken: token, verifyTokenExpiry: Date.now() + 3600000 })
    }
    else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, { forgotPasswordToken: token, forgotPasswordTokenExpiry: Date.now() + 3600000 })
    }
    // Looking to send emails in production? Check out our Email API/SMTP product!
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "91a0eb042fd17b",
        pass: "877554e4dfaee0"
      }
    });
    const mailOptions={
      from:"varurusil5@gmail.com",
      to:email,
      subject:emailType==="VERIFY"? "Verify your email" :"Reset Your Password",
      html:`<p>Click <a href="${process.env.DOMAIN}/${emailType==="VERIFY"? "verifyemail" : "reset-password"}?token=${token}">Here</a>
      to ${emailType==="VERIFY" ? "Verify your email ":"Reset your Password"}</p>`
    }
    const mail=await transport.sendMail(mailOptions);
    return mail;
  } catch (error: any) {
    console.log(error.message)
    return "Why this is happning"
  }
}