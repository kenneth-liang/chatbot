module.exports = function(controller) {
    controller.on('connected', async(bot, message) => {
        await bot.beginDialog('typing');
        await bot.reply(message, `Hello! I'm K3PO, the artificial conciousness of Kenneth's mind.`);
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, {
                text: 'What would you like to know about my creator?',
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
        }, 1000);
    });

    controller.on('welcome_back', async(bot, message) => {
        await bot.beginDialog('typing');
        await bot.reply(message, `Welcome Back! I'm K3PO, the artificial conciousness of Kenneth's mind.`);
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, {
                text: 'What would you like to know about my creator?',
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
        }, 1000);
    });

    controller.hears('back', "message, direct_message",  async(bot, message) => {
        await bot.beginDialog('typing');
        await bot.reply(message, {type: 'typing'});
        setTimeout(async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, {
                text: 'What else would you like to know about my creator?',
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
        }, 1000);
    });
    
}