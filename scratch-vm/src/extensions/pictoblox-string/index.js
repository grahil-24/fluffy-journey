const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');

class PictoBloxString {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'pictobloxString',
            name: 'PictoBlox String',
            blocks: [
                {
                    opcode: 'indexOf',
                    blockType: BlockType.REPORTER,
                    text: 'index of [STRING2] in [STRING1]',
                    arguments: {
                        STRING1: {
                            type: ArgumentType.STRING,
                            defaultValue: 'hello world'
                        },
                        STRING2: {
                            type: ArgumentType.STRING,
                            defaultValue: 'world'
                        }
                    }
                },
                {
                    opcode: 'equals',
                    blockType: BlockType.BOOLEAN,
                    text: '[STRING1] equals [STRING2] (ignore case)',
                    arguments: {
                        STRING1: {
                            type: ArgumentType.STRING,
                            defaultValue: 'hello'
                        },
                        STRING2: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Hello'
                        }
                    }
                }
            ]
        };
    }

    indexOf (args) {
        const {STRING1, STRING2} = args;
        return STRING1.indexOf(STRING2);
    }

    //case insensitive comparison
    equals (args) {
        const {STRING1, STRING2} = args;
        return STRING1.toLowerCase() === STRING2.toLowerCase();
    }
}

module.exports = PictoBloxString;
