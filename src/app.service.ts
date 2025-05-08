import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly mailService: MailerService) {}

  sendMail() {
    const message = `Forgot your password? If you didn't forget your password, please ignore this email!`;

    this.mailService.sendMail({
      from: 'Bacancy <bacancy1@yopmail.com>',
      to: 'bacancy@yopmail.com',
      subject: `How to Send Emails with Nodemailer`,
      text: message,
    });
  }
}
