const { filterQuestions, calculateResults } = require('./handlers.js');

module.exports.handler = async function (event, context) {
    const { httpMethod } = event;
    let body;

    try {
        switch(httpMethod) {
            case 'GET':
                body = filterQuestions();
                break;
            case 'POST':
                const answers = JSON.parse(Buffer.from(event.body, 'base64').toString());
                body = calculateResults(answers);
                break;
            default:
                body = target;
                break;
        }
    } catch(e) {
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Headers': '*'
            },
            'isBase64Encoded': false,
            'body': {
                event,
                answers: JSON.parse(Buffer.from(event.body, 'base64').toString()),
                buffered: event.body,
                error: e
            }
        }
    }

    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Headers': '*'
        },
        'isBase64Encoded': false,
        'body': body
    }
};