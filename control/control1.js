const EmailModel = require("../Model1/Model1");

const sendMail=async(req,res)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'oladojabolatito29@gmail.com',
          pass: 'Adeniyi7',
        },
      });
    const { to, subject, body } = req.body;
  
    // Save email to MongoDB
    const newEmail = new EmailModel({ to, subject,body });
    await newEmail.save();

    // Send email using Nodemailer
    const mailOptions = {
      from: 'oladojabolatito29@gmail.com',
      to,
      subject,
      body,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.status(200).json({ message: 'Email sent successfully', info });
    });
}
module.exports={sendMail}


