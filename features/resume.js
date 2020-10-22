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
        summary: "An JS incremental game that pits you against market forces. Your job is to make and sell pens - but as you earn more money, you get better and new ways to do the job."
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
    ]
  };

  const work = resume.work.map(job => (
    {
      title: `${job.company} - ${job.position}`,
      payload: `${job.position} at ${job.company}`
    }
  ));
  
  // work 
  controller.hears(['work', 'experience', 'other work information'], 'message,direct_message',
    async (bot, message) => {
      await bot.beginDialog('typing');
      await bot.reply(message,
          {
              text: "Here are my previous work experiences:",
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
            text: 'What to hear about my other work experiences?',
            quick_replies: [
              {
                title: 'Yes, See Other Work Information',
                payload: 'other work information'
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
            text: 'What to hear about my other work experiences?',
            quick_replies: [
              {
                title: 'Yes, See Other Work Information',
                payload: 'other work information'
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
            text: 'What to hear about my other work experiences?',
            quick_replies: [
              {
                title: 'Yes, See Other Work Information',
                payload: 'other work information'
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
  controller.hears(['education', "more educations"], 'message,direct_message',
      async (bot, message) => {
        await bot.beginDialog('typing');
        await bot.reply(message,
            {
                text: 'Here is a list of institutions that I have studied at: ',
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
        await bot.reply(message, `I studied ${edu.focus}`) 
        await bot.beginDialog('typing');
        setTimeout( async () => {
            await bot.changeContext(message.reference);
            await bot.reply( message, {
              text: 'What to hear more about other educations?',
              quick_replies: [
                {
                  title: 'Yes, Other Education Information',
                  payload: 'other educations'
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
              text: 'What to hear more about other educations?',
              quick_replies: [
                {
                  title: 'Yes, Other Education Information',
                  payload: 'other educations'
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


  // projects 
  const projects = resume.projects.map ( project => (
    {
      title: project.name,
      payload: project.name
    }
  ))

  controller.hears('projects', 'message,direct_message', 
    async (bot, message) => {
      await bot.beginDialog('typing');
      await bot.reply(message, {
        text: `Checkout my projects at my <a target="_blank" href="https://kennethliang.com/">Website</a>`
      })
      await bot.reply(message, {
        text: `<a target="_blank" href="https://seat-check.herokuapp.com/#/">Seat Check</a>: A full-stack web application with an OpenTable inspired UX/UI, where users can reserve seatings at their local restaurant. `
      })
      await bot.reply(message, {
        text: `<a target="_blank" href="http://fitness-book.herokuapp.com/">FitBook</a>: Fitness tracking web application that allows users to create, track, and share custom workouts `
      })
      await bot.reply(message, {
        text: `<a target="_blank" href="https://kenneth-liang.github.io/WorldwidePen/">WorldWide Pen</a>: An JS incremental game that pits you against market forces. Your job is to make and sell pens - but as you earn more money, you get better and new ways to do the job.`
      })
      await bot.beginDialog('typing');
      await bot.reply(message, {
            text: 'What else would you like to know about me?',
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
        await bot.beginDialog('typing');
        await bot.reply(message, "Here are my skills: " )
        await bot.reply(message, "Technologies: JavaScript, React, Redux, HTML, CSS, Ruby, Ruby on Rails, Mongoose, MongoDB, Node.js, Express.js, SQL, SQLite3, PostgreSQL, Webpack, jQuery, Git, Heroku, Tableau, JIRA, Amazon Web Services (AWS) " )
        await bot.reply(message, "Interpersonal: Leader, Active Listener, Team Player, Motivating, Flexible " )
        await bot.beginDialog('typing');
        await bot.reply(message, {
            text: 'What else would you like to know about me?',
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
  )

  controller.hears(["JavaScript", "Ruby on Rails", "SQL", "React", "Redux"], "message, direct_message", 
    async (bot,message) => {
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


  // contact 
  const contact = {
    email: resume.background.email,
    phone: resume.background.phone
  };


  controller.hears(['contact','more contact'], 'message,direct_message',
    async (bot, message) => {
      await bot.beginDialog('typing');
      await bot.reply(message,
        {
            text: 'You can contact me through email or one of my online profiles!',
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
      await bot.reply(message, `Visit my website @<a target="_blank" href="${port}">${port}</a>`);
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
      await bot.reply(message, `Send me an <a target="_blank" href="mailto:kennethkjliang@gmail.com">email!</a>`);
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
      await bot.reply(message, `Connect with me on LinkedIn. Here is my <a target="_blank" href="${linked_in.link}">profile!</a>`);
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
      await bot.reply(message, `Connect with me on AngelList. Here is my <a target="_blank" href="${angel.link}">profile!</a>`);
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
      await bot.reply(message, `Want to see my work?. Here is my <a target="_blank" href="${github.link}">GitHub!</a>`);
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