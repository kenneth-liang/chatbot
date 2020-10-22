module.exports = function (controller) {
  const resume = {
    background : {
      name: "Software Engineer",
      email: "kennethkjliang@gmail.com",
      website: "kennethliang.com",
      location: "San Francisco",
      profiles: [
        {
          network: "LinkedIn",
          user: "Kenneth Liang",
          link: "https://www.linkedin.com/in/insightfulkennethliang/"
        },
        {
          network: "AngelList",
          user: "kenneth-liang",
          link: "https://angel.co/u/kenneth-liang"
        },
        {
          network: "GitHub",
          user: "kenneth-liang",
          link: "https://github.com/kenneth-liang"
        },

      ],
    },
    work: [
      {
        company: "LendingClub",
        position: "Senior Credit Operations Analyst",
        startDate: "November 2018",
        endDate: "December 2019",
        summary: [
          "Developed and implemented operation strategies that involved assessing risk and improving company opportunities",
          "Launched forecasting model that prevented $18 million in loss from lending exploitations each year which was adopted into automated practices",
          "Coordinated relationship with third-party agency to cross-reference data focused on reducing the probability of default that resulted in saving the company $48 million from delinquency",
          "Produced 5,000 (average) additional listings each year using bank transactional data to identify overlooked additional income and automate second offers to eligible customers"
        ]
      },
      {
        company: "LendingClub",
        position: "Credit Analyst",
        startDate: "July 2017",
        endDate: "November 2018",
        summary: [
          "Issued $74.85 million loan revenue in first 12 months (7,864 total decisions - 2nd highest in the company history)",
          "Averaged 98% Quality Assurance score and maintained top 10 ranking month over month",
          "Led Member Support MarketPlace Project that lowered call abandoning rates by 15% which drastically improved customer satisfaction"
        ]
      },
      {
        company: "Google",
        position: "TripShot Technician",
        startDate: "Feb 2016",
        endDate: "July 2017",
        summary: [
          "Responsible for troubleshooting, migrating, and updating software on Android devices",  
          "Prepared accurate documentation and communication to facilitate elimination of issues and created efficient bug fixes",
          "Headed all applicable hardware & software inventory"
        ]
      },
    ],
    education: [
      {
        institution: "App Academy",
        focus: "Full Stack Software Development",
        degree: "Certificate",
        startDate: "April 2020",
        endDate: "July 2020"
      },
      {
        institution: "San Jose State University",
        focus: "Business Analytics",
        degree: "Bachelor of Science",
        startDate: "August 2011",
        endDate: "December 2016"
      },
    ],
    projects: [
      {
        name: "Seat Check",
        date: "2020",
        link: "https://seat-check.herokuapp.com/#/",
        repo: "https://github.com/kenneth-liang/SeatCheck",
        summary: "A full-stack web application with an OpenTable inspired UX/UI, where users can reserve seatings at their local restaurant."
      },
      {
        name: "FitBook",
        date: "2020",
        link: "http://fitness-book.herokuapp.com/",
        repo: "https://github.com/AChen414/FitBook",
        summary: "Fitness tracking web application that allows users to create, track, and share custom workouts"
      },
      {
        name: "WorldWide Pen",
        date: "2020",
        link: "https://kenneth-liang.github.io/WorldwidePen/",
        repo: "https://github.com/kenneth-liang/WorldwidePen",
        summary: "A full-stack web application with an OpenTable inspired UX/UI, where users can reserve seatings at their local restaurant."
      },
    ],
    skills: [
      {
        language: "JavaScript",
        experience: "Advanced",
      },
      {
        language: "Ruby on Rails",
        experience: "Advanced",
      },
      {
        language: "SQL",
        experience: "Advanced",
      },
      {
        language: "React",
        experience: "Advanced",
      },
      {
        language: "Redux",
        experience: "Advanced",
      },
      {
        language: "Redux",
        experience: "Advanced",
      }
    ]
  };

  const work = resume.work.map(job => (
    {
      title: `${job.company} - ${job.position}`,
      payload: `${job.position} at ${job.company}`
    }
  ));
  
  // work 
  controller.hears(['work', 'experience', 'more work information'], 'message,direct_message',
    async (bot, message) => {
        await bot.reply(message,
            {
                text: "My professional work experience ranges from technician, analyst, and software engineering.",
                quick_replies: work
            });
    });

  controller.hears("Senior Credit Operations Analyst", "message, direct_message", 
    async (bot,message) => {
      await bot.beginDialog('typing');
      const job = resume.work[0]
      await bot.changeContext(message.reference);
      await bot.reply(message, `I worked for ${job.company} as a ${job.position} from ${job.startDate} to ${job.endDate}`)
      await bot.beginDialog('typing');
      await bot.reply(message, `My accomplishments: `)
      for (let i = 0; i < job.summary.length; i++){
        let description = job.summary[i]
        await bot.reply(message, `✶ ${description} ✶`)
      }
      await bot.beginDialog('typing');
      setTimeout( async () => {
          await bot.changeContext(message.reference);
          await bot.reply( message, {
            text: 'What to hear more contact information?',
            quick_replies: [
              {
                title: 'Yes, More Work Information',
                payload: 'more work information'
              },
              {
                title: 'Back',
                payload: 'Back'
              }
            ]
          })
      })
    }
  )

  controller.hears("Credit Analyst", "message, direct_message", 
    async (bot,message) => {
      const job = resume.work[1]
      await bot.beginDialog('typing');
      await bot.changeContext(message.reference);
      await bot.reply(message, `KennIeth worked for ${job.company} as a ${job.position} from ${job.startDate} to ${job.endDate}`)
      await bot.beginDialog('typing');
      await bot.reply(message, `My accomplishments: `)
      for (let i = 0; i < job.summary.length; i++){
        let description = job.summary[i]
        await bot.reply(message, `✶ ${description} ✶`)
      }
      await bot.beginDialog('typing');
      setTimeout( async () => {
          await bot.changeContext(message.reference);
          await bot.reply( message, {
            text: 'What to hear more contact information?',
            quick_replies: [
              {
                title: 'Yes, More Work Information',
                payload: 'more work information'
              },
              {
                title: 'Back',
                payload: 'Back'
              }
            ]
          })
      })
    }
  )

  controller.hears("TripShot Technician", "message, direct_message", 
    async (bot,message) => {
      const job = resume.work[2]
      await bot.beginDialog('typing');
      await bot.changeContext(message.reference);
      await bot.reply(message, `I worked for ${job.company} as a ${job.position} from ${job.startDate} to ${job.endDate}`)
      await bot.beginDialog('typing');
      await bot.reply(message, `My accomplishments: `)
      for (let i = 0; i < job.summary.length; i++){
        let description = job.summary[i]
        await bot.reply(message, `✶ ${description} ✶`)
      }
      await bot.beginDialog('typing');
      setTimeout( async () => {
          await bot.changeContext(message.reference);
          await bot.reply( message, {
            text: 'What to hear more contact information?',
            quick_replies: [
              {
                title: 'Yes, More Work Information',
                payload: 'more work information'
              },
              {
                title: 'Back',
                payload: 'Back'
              }
            ]
          })
      })
    }
  )

  const education = resume.education.map( edu => (
    {
      title: edu.institution,
      payload: edu.institution
    }
  ));

  // edu
  controller.hears(['education', "more education"], 'message,direct_message',
      async (bot, message) => {
          await bot.reply(message,
              {
                  text: 'Here is a list of schools that I have studied at',
                  quick_replies: education
              })
      }
  )

  controller.hears("App Academy",  "message, direct_message", 
      async (bot,message) => {
        const edu = resume.education[0]
        await bot.beginDialog('typing');
        await bot.changeContext(message.reference);
        await bot.reply(message, `I attended ${edu.institution} from ${edu.startDate} to ${edu.endDate}`) 
        await bot.reply(message, `I studied ${edu.focus} and was awarded with a ${edu.degree}`) 
        await bot.beginDialog('typing');
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply( message, {
              text: 'What to hear more contact information?',
              quick_replies: [
                {
                  title: 'Yes, More Education Information',
                  payload: 'more education'
                },
                {
                  title: 'Back',
                  payload: 'Back'
                }
              ]
            })
        })
    }
  )

  controller.hears("San Jose State University",  "message, direct_message", 
      async (bot,message) => {
        const edu = resume.education[1]
        await bot.beginDialog('typing');
        await bot.changeContext(message.reference);
        await bot.reply(message, `I attended ${edu.institution} from ${edu.startDate} to ${edu.endDate}`) 
        await bot.reply(message, `I studied ${edu.focus} and was graduated with a ${edu.degree}`)
        await bot.beginDialog('typing');
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply( message, {
              text: 'What to hear more contact information?',
              quick_replies: [
                {
                  title: 'Yes, More Education Information',
                  payload: 'more education'
                },
                {
                  title: 'Back',
                  payload: 'Back'
                }
              ]
            })
        })
    }
  )

  //skills

  const skills = resume.skills.map( skill => (
    {
      title: `${skill.language}`,
      payload: skill.language
    }
  ));



  controller.hears('skills', 'message,direct_message',
      async (bot, message) => {
          await bot.reply(message,
              {
                  text: 'Here are my skills',
                  quick_replies: skills
              })
      }
  )

  // contact 
  const contact = {
    email: resume.background.email,
    phone: resume.background.phone
  };


  controller.hears(['contact','more contact'], 'message,direct_message',
    async (bot, message) => {
      await bot.reply(message,
        {
            text: 'Feel free to contact me via phone, email, or online profiles!',
            quick_replies: [
                {
                    title: 'Portfolio',
                    payload: 'Portfolio'
                },
                {
                    title: 'Email',
                    payload: 'Email'
                },
                {
                    title: 'LinkedIn',
                    payload: 'LinkedIn'
                },
                {
                    title: 'GitHub',
                    payload: 'GitHub'
                },
                {
                    title: 'AngelList',
                    payload: 'AngelList'
                }
            ]
        }
      )
    }
  )

  
  controller.hears('Portfolio', "message, direct_message", 
    async (bot,message) => {
      const port = resume.background.website
      await bot.beginDialog('typing');
      await bot.changeContext(message.reference);
      await bot.reply(message, `Visit my website @ ${port}`);
      await bot.beginDialog('typing');
      setTimeout( async () => {
          await bot.changeContext(message.reference);
          await bot.reply( message, {
            text: 'What to hear more contact information?',
            quick_replies: [
              {
                title: 'Yes, More Contact Information',
                payload: 'more contact'
              },
              {
                title: 'Back',
                payload: 'Back'
              }
            ]
          })
      })
    }
  )

  controller.hears('email', "message, direct_message", 
    async (bot,message) => {
      const email = resume.background.email
      await bot.beginDialog('typing');
      await bot.changeContext(message.reference);
      await bot.reply(message, `Send me an email! ${email}`);
      await bot.beginDialog('typing');
      setTimeout( async () => {
          await bot.changeContext(message.reference);
          await bot.reply( message, {
            text: 'What to hear more contact information?',
            quick_replies: [
              {
                title: 'Yes, More Contact Information',
                payload: 'more contact'
              },
              {
                title: 'Back',
                payload: 'Back'
              }
            ]
          })
      })
    }
  )

  controller.hears('LinkedIn', "message, direct_message", 
    async (bot,message) => {
      const linked_in = resume.background.profiles[0]
      await bot.beginDialog('typing');
      await bot.changeContext(message.reference);
      await bot.reply(message, `Connect with me on LinkedIn. Here is my profile, ${linked_in.link}`);
      await bot.beginDialog('typing');
      setTimeout( async () => {
          await bot.changeContext(message.reference);
          await bot.reply( message, {
            text: 'What to hear more contact information?',
            quick_replies: [
              {
                title: 'Yes, More Contact Information',
                payload: 'more contact'
              },
              {
                title: 'Back',
                payload: 'Back'
              }
            ]
          })
      })
    }
  )

  controller.hears('AngelList', "message, direct_message", 
    async (bot,message) => {
      const angel = resume.background.profiles[1]
      await bot.beginDialog('typing');
      await bot.changeContext(message.reference);
      await bot.reply(message, `Connect with me on AngelList. Here is my profile, ${angel.link}`);
      await bot.beginDialog('typing');
      setTimeout( async () => {
          await bot.changeContext(message.reference);
          await bot.reply( message, {
            text: 'What to hear more contact information?',
            quick_replies: [
              {
                title: 'Yes, More Contact Information',
                payload: 'more contact'
              },
              {
                title: 'Back',
                payload: 'Back'
              }
            ]
          })
      })
    }
  )

  controller.hears('GitHub', "message, direct_message", 
    async (bot,message) => {
      const github = resume.background.profiles[2]
      await bot.beginDialog('typing');
      await bot.changeContext(message.reference);
      await bot.reply(message, `Want to see my work?. Here is my GitHub, ${github.link}`);
      await bot.beginDialog('typing');
      setTimeout( async () => {
          await bot.changeContext(message.reference);
          await bot.reply( message, {
            text: 'What to hear more contact information?',
            quick_replies: [
              {
                title: 'Yes, More Contact Information',
                payload: 'more contact'
              },
              {
                title: 'Back',
                payload: 'Back'
              }
            ]
          })
      })
    }
  )
  


}