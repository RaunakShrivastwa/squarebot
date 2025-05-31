import mailConfig from "./mailConfig.js";

const {transpoter} = mailConfig;
class AccountMailer {
    info = null;
  sendMail = (user) => {
    transpoter.sendMail(
      {
        from: "javaprogramming58@gmail.com",
        to: user.userEmail,
        subject: "JOb Applied",
        html: `
            <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">

            <p>${user.userName} Applied job for role ${user.appliedRole}</p>
          
          </body>
            
            `,
      },
       (err, info) => {
        if (err) {
          console.log("there is error with sending mail", err);
          return;
        }
        return info;
      }
    );
  };
}

export default new AccountMailer();
