import nodemailer, { Transporter } from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs'; //filesystem para ler o arquivo

class SendMailService {
  //para usar transporter fora do constructor, Transporter do nodemailer
  private client: Transporter;

  //constructor só permite utilizar o .then e não o asyn await
  //metodo executado assim que uma classe é chamada as informações dentro dele é executadas
  constructor() {
    nodemailer.createTestAccount().then(account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      this.client = transporter;
    });
  }

  //valores recebidos do sendmailcontrollers
  public async execute(
    to: string,
    subject: string,
    variables: object,
    path: string,
  ) {
    const templateFileContent = fs.readFileSync(path).toString('utf8');

    const mailTemplateParse = handlebars.compile(templateFileContent);

    //mandar as variaveis para o handlebars .hbs
    const html = mailTemplateParse(variables);

    const message = await this.client.sendMail({
      to,
      subject,
      html,
      from: 'NPS <noreplay@nps.com.br>',
    });

    console.log('Message sent %s', message.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}

//criar instância assim que a aplicação for executada
export default new SendMailService();
