const expect = require('expect');
const { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('Should generete correct message object', () => {
        let from = 'Alex'
        let text = 'Message'
        let message = generateMessage(from, text);
        expect(typeof message.createdAt).toBe('number');
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
    });
});