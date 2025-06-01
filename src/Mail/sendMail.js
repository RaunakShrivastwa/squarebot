import nodemailer from "./mailConfig.js";

export default class RegisterEmail{

     sendMail = (user)=>{
        const { userName, appliedRole, userEmail, recruiterEmail } = user;
        nodemailer.transpoter.sendMail({
            from:'javaprogramming58@gmail.com',
            to: [user.userEmail,user.recruiterEmail],
            subject: 'Verify Your Identity',
            html:`
            <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
        <div style="width: 80%; margin: 50px auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
          <h2 style="text-align: center; margin-bottom: 20px;">Job Application Notification</h2>
          <p style="text-align: center;">👤 <strong>${userName}</strong> has applied for the role of <strong>${appliedRole}</strong>.</p>
          <p style="text-align: center; margin-top: 20px;">Please check your dashboard for more details.</p>
          <p style="text-align: center; margin-top: 20px;">Thank you,<br>Team EDUHUB</p>
        </div>
      </body>
            
            `
        },
        (err,info)=>{
            if(err){
                console.log("there is error with sending mail",err);
                return;
            }
            console.log("message send !!!",info);
            return;
        }
        )
    }
}