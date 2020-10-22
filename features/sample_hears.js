const { BotkitConversation } = require("botkit")

/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
 

// const phrase = "What would you like to learn about Kenneth?"


module.exports = function(controller) {
    
    
    
    controller.hears(
        new RegExp(/(hi|hello|howdy|hey)/i),
        ["message", "direct_message"],
        async function (bot, message) {
            await bot.beginDialog('typing');
            await bot.reply(message, { text: "Hi! My name is K3PO. How are you today?" });
        }
    );
        
        

    controller.hears(
        [new RegExp(/good|cool|great/i)],
        ["message", "direct_message"],
        async function (bot, message) {
        await bot.beginDialog('typing');
        await bot.reply(message, {
                text: 'Awesome to hear, learn more to know about me!',
                    quick_replies: 
                    [
                        {
                            title: 'Work Experience',
                            payload: 'What work experience do you have?'
                        },
                        {
                            title: 'Education',
                            payload: 'Education'
                        },
                        {
                            title: 'Projects',
                            payload: 'Projects'
                        },
                        {
                            title: 'Skills',
                            payload: 'skills'
                        },
                        {
                            title: 'Contact Information',
                            payload: 'Contact Information'
                        },
                ]
    });
        }
    );

    controller.hears(
        [new RegExp(/bad/i), new RegExp(/(soso|so-so)/i)],
        ["message", "direct_message"],
        async function (bot, message) {
        await bot.beginDialog('typing');
        await bot.reply(message, {
            text:
            `Oh, sorry to hear that. How about a joke to cheer you up?`,
        });
        }
    );

    controller.hears(
        new RegExp(/(yes|y|joke|ok|okay)/i),
        ["message", "direct_message"],
        async function (bot, message) {
        await bot.beginDialog('typing');
        await bot.reply(message, {
            text:
            `How do robots eat guacamole?`,
        });
        await bot.beginDialog('typing');
        await bot.reply(message, {
            text:
            `With Microchips!`,
        });
        await bot.beginDialog('typing');
        await bot.reply(message, {
                text: 'Learn more to know about me!',
                    quick_replies: 
                    [
                        {
                            title: 'Work Experience',
                            payload: 'What work experience do you have?'
                        },
                        {
                            title: 'Education',
                            payload: 'Education'
                        },
                        {
                            title: 'Projects',
                            payload: 'Projects'
                        },
                        {
                            title: 'Skills',
                            payload: 'skills'
                        },
                        {
                            title: 'Contact Information',
                            payload: 'Contact Information'
                        },
                ]
        });
    }
  );



    // use a function to match a condition in the message
    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'foo', ['message'], async (bot, message) => {
        await bot.reply(message, 'I heard "foo" via a function test');
    });

    // use a regular expression to match the text of the message
    controller.hears(new RegExp(/^\d+$/), ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'I heard a number using a regular expression.' });
    });

    // match any one of set of mixed patterns like a string, a regular expression
    controller.hears(['allcaps', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'I HEARD ALL CAPS!' });
    });

}