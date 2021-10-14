const SibApiV3Sdk = require('sib-api-v3-sdk');
const { generateLetter } = require('./emailAssets.js');
const key = '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';

const sendEmail = async function (toName, toEmail, results) {
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = defaultClient.authentications['api-key'];
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    apiKey.apiKey = key;

    const from = {
        name: 'MNIS',
        email: 'test@gmail.com'
    };
    const subject = 'Результаты тестирования';

    let res;
    let html = '';
    try {
        html = generateLetter(results, toName);
    } catch(e) {
        res = {
            'statusCode': 500,
            'body': e
        };
    }
    if (res) {
        return res;
    }

    sendSmtpEmail.subject = subject;
    sendSmtpEmail.htmlContent = html;
    sendSmtpEmail.sender = from;
    sendSmtpEmail.to = [{
        name: toName,
        email: toEmail
    }];
    sendSmtpEmail.replyTo = from;

    await apiInstance.sendTransacEmail(sendSmtpEmail)
        .then(data => {
            res = {
                'statusCode': 200,
                'body': data
            };
        }).catch(error => {
            res = {
                'statusCode': 500,
                'body': error
            };
        });

    return res;
};

module.exports = { sendEmail }