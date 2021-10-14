const start = (name) => {
    return (
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Результаты теста mnisonline</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
            </style> 
        </head>
        <body cellpadding="0" cellspacing="0" style="margin: 0; padding: 0;">
            <table style="border: 0; width:100%; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;background-color: #F9F9F9;font-family: 'Montserrat', sans-serif;font-weight: 400;font-size: 16px;color: #2d2c2a;">
                <tr>
                    <td>
                        <table class="logo" style="margin: 0 auto;border-spacing: 0;">
                            <tr>
                                <td style="padding: 12px 0 40px 0;">
                                    <a href="center.mnisonline.org"> 
                                        <img width="240" src="https://static.tildacdn.com/tild3366-3164-4536-b163-643332663239/logo.png" style="margin: 0 auto;width:12vw">
                                    </a>
                                </td>
                            </tr>
                        </table>
                        <table class="main" style="margin: 0 auto;border-spacing: 0; width: 760px;background-color: white;border-top-left-radius: 20px;border-top-right-radius: 20px;">
                            <tr class="header">
                                <td style="padding: 0 100px;box-sizing: border-box; font-size: 32px;font-weight: 600;line-height: 1.4em;padding-top: 100px;padding-bottom: 30px;">
                                    ${name}, ваши персональные рекомендации
                                </td>
                            </tr>
                            <tr class="intro">
                                <td style="padding: 0 100px;box-sizing: border-box;color: #656A6E;line-height: 1.6em;padding-bottom: 10px;">
                                    ${name}, на основании предоставленной информации, мы составили
                                    рейтинг достаточности содержания микронутриентов в вашем
                                    организме. Обратите внимание на желтую и красную зоны, вам
                                    рекомендовано дополнительно включить в ваш рацион питания
                                    продукты и добавки содержащие данные микронутриенты.
                                </td>
                            </tr>
        `
    );
}
const end = `
                    <tr class="about">
                        <td style="padding: 0 100px;box-sizing: border-box;padding-top: 20px;padding-bottom: 100px;font-size: 12px;font-weight: 500;line-height: 1.4em;letter-spacing: 0.1em; text-transform: uppercase;">
                            <a href="" style="padding-bottom: 6px;border-bottom: 1px solid #2D2C2A80;text-decoration: none;">читать о единицах измерения</a>
                        </td>
                    </tr>
                    <tr class="articles-header">
                        <td style="padding: 0 100px;box-sizing: border-box;font-size: 22px;font-weight: 500;padding-bottom: 30px;line-height: 1.4em;">
                            ТОП продуктов по содержанию микронутриентов
                        </td>
                    </tr>
                    <tr class="articles-about">
                        <td style="padding: 0 100px;box-sizing: border-box;color: #656A6E;padding-bottom: 50px;line-height: 1.6em;">
                            Вы сможете ознакомиться со списком ТОП продуктов, которые содержат самое большое количество микронутриентов в нашей статье.
                        </td>
                    </tr>
                    <tr class="article-row">
                        <td style="padding: 0 100px;box-sizing: border-box;padding-bottom: 100px;">
                            <table class="article" style="margin: 0 auto;border-spacing: 0;">
                                <tr class="article-img">
                                    <td style="height: 300px;background-image: url(https://static.tildacdn.com/tild3662-3565-4164-a439-356265623239/card1.png);background-size: cover;"></td>
                                </tr>
                                <tr class="article-title">
                                    <td style="border-left: 1px solid #D5D5D4;border-right: 1px solid #D5D5D4;font-size: 18px;font-weight: 500;padding: 0 60px;padding-bottom: 30px;line-height: 1.4em;padding-top: 60px;padding-bottom: 30px;">Статья «ТОП продуктов по содержанию микронутриентов»</td>
                                </tr>
                                <tr class="article-about">
                                    <td style="border-left: 1px solid #D5D5D4;border-right: 1px solid #D5D5D4;padding-bottom: 40px;line-height: 1.6em;padding: 0 60px;padding-bottom: 40px;color: #656A6E;">Информация о том, какие продукты помогут вам  сделать свой рацион здоровее и поддерживать содержание микронутриентов в организме</td>
                                </tr>
                                <tr class="article-btn">
                                    <td style="border-left: 1px solid #D5D5D4;border-right: 1px solid #D5D5D4;padding: 0 60px;padding-bottom: 60px;border-bottom: 1px solid #D5D5D4;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;">
                                        <a href="https://center.mnisonline.org/tpost/nuj652zk91-top-foods-ili-spisok-samih-poleznih-prod" style="padding: 17px 50px;display: block;width: 260px;height: 50px;box-sizing: border-box; color: white;border-radius: 25px;text-align: center;background-color: #97A08B;font-size: 12px;letter-spacing: 0.1em;text-transform: uppercase;text-decoration: none;">Читать на сайте</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr class="article-row">
                        <td style="padding: 0 100px;box-sizing: border-box;padding-bottom: 100px;">
                            <table class="article" style="margin: 0 auto;border-spacing: 0;">
                                <tr class="article-img">
                                    <td style="height: 150px;background-image: url(https://static.tildacdn.com/tild6138-3462-4439-b737-343163346136/card2.png);background-size: cover;"></td>
                                </tr>
                                <tr class="second-article article-title">
                                    <td style="background-color: #F4F4F4;padding: 0 60px;font-size: 18px;font-weight: 500;padding-bottom: 30px;line-height: 1.4em;padding-top: 60px;padding-bottom: 30px;">Консультация специалиста</td>
                                </tr>
                                <tr class="second-article article-about">
                                    <td style="background-color: #F4F4F4;padding: 0 60px;padding-bottom: 40px;line-height: 1.6em;padding-bottom: 40px;color: #656A6E;">Если вам требуется консультация нутрициолога или специалиста по IV - терапии, начните поиск в нашем списке сертифицированных специалистов</td>
                                </tr>
                                <tr class="second-article article-btn">
                                    <td style="background-color: #F4F4F4;padding: 0 60px;padding-bottom: 60px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;">
                                        <a href="https://center.mnisonline.org/specialists" style="padding: 17px 50px;display: block;width: 260px;height: 50px;box-sizing: border-box; color: white;border-radius: 25px;text-align: center;background-color: #97A08B;font-size: 12px;letter-spacing: 0.1em;text-transform: uppercase;text-decoration: none;">найти на сайте</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr class="questions">
                        <td style="box-sizing: border-box;text-align: center;padding: 0 200px 30px 200px;">
                            Остались вопросы?
                        </td>
                    </tr>
                    <tr class="helpdesk">
                        <td style="box-sizing: border-box;color: #656A6E;line-height: 1.6em;text-align: center;padding: 0 200px 30px 200px;">
                            Если у вас возникли другие вопросы, обращайтесь в нашу службу поддержки
                        </td>
                    </tr>
                    <tr class="email">
                        <td style="box-sizing: border-box;text-align: center;padding: 0 200px 84px 200px;">
                            mnisonline.org@gmail.com
                        </td>
                    </tr>
                </table>
                <table class="footer" style="margin: 0 auto;border-spacing: 0;margin-top: 116px;">
                    <tr>
                        <td style="padding: 0 100px;box-sizing: border-box;width: 80vw;padding: 30px 0;text-align: center;line-height: 1.6em;box-sizing: border-box;color: #656A6E;border-top: 1px solid #D5D5D4;">Вы получили это письмо, так как приобрели<br>тестирование на сайте center.mnisonline.org</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;

const uniVitamin = (color, name, dosage) => {
    return (
        `<tr class="block-vitamin">
            <td style="padding: 0 100px;box-sizing: border-box;padding: 0;">
                <table class="vitamin ok" style="background-color: white;padding: 0 0 20px 100px;padding-bottom: 20px;border-spacing: 0;margin: 0;">
                    <tr>
                        <td style="width: 560px; padding: 10px 20px; box-sizing: border-box;border: 1px solid #D5D5D4;border-radius: 10px;">
                            <table>
                                <tr>
                                    <td class="vitamin-color" style="padding: 0;height: 30px;width: 8px;border-radius: 4px;background-color: ${color};"></td>
                                    <td class="vitamin-value" style="padding-left: 32px">
                                        ${name}: ваша дневная дозировка ${dosage}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>`
    );
};

function generateOk(results) {
    let text = `<tr class="block-header">
        <td style="padding: 0 100px;box-sizing: border-box;color: #656A6E;font-size: 14px;font-weight: 500;line-height: 1.4em;padding-top: 40px;padding-bottom: 20px;text-transform: uppercase;letter-spacing: 0.12em;">
            Достаточное содержание микронутриентов</td></tr>`;
    results.forEach(res => {
        text += uniVitamin('#97A08B', res.name, res.dosage);
    });
    return text;
}

function generateLack(results) {
    let text = `<tr class="block-header">
        <td style="padding: 0 100px;box-sizing: border-box;color: #656A6E;font-size: 14px;font-weight: 500;line-height: 1.4em;padding-top: 40px;padding-bottom: 20px;text-transform: uppercase;letter-spacing: 0.12em;">
            Недостаток микронутриентов</td></tr>`;
    results.forEach(res => {
        text += uniVitamin('#F2F3A5', res.name, res.dosage);
    });
    return text;
}

function generateBad(results) {
    let text = `<tr class="block-header">
        <td style="padding: 0 100px;box-sizing: border-box;color: #656A6E;font-size: 14px;font-weight: 500;line-height: 1.4em;padding-top: 40px;padding-bottom: 20px;text-transform: uppercase;letter-spacing: 0.12em;">
            Выраженный дефицит микронутриентов</td></tr>`;
    results.forEach(res => {
        text += uniVitamin('#FF0000', res.name, res.dosage);
    });
    return text;
}

function filterResults(results) {
    const okResults = [];
    const lackResults = [];
    const badResults = [];
    Object.keys(results).forEach(resId => {
        const res = results[resId];
        if (res.severity === 0) {
            okResults.push(res);
        } else if (res.severity === 1) {
            lackResults.push(res);
        } else {
            badResults.push(res);
        }
    });
    return { okResults, lackResults, badResults };
}

function generateLetter(results, name) {
    const { okResults, lackResults, badResults } = filterResults(results);
    let letter = start(name);
    if (okResults.length) {
        letter += generateOk(okResults);
    }
    if (lackResults.length) {
        letter += generateLack(lackResults);
    }
    if (badResults.length) {
        letter += generateBad(badResults);
    }
    letter += end;
    return letter;
}

module.exports = { generateLetter };