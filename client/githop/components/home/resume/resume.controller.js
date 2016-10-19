/**
 *
 * Created by githop on 7/31/15.
 */

class ResumeCtrl {
  constructor($document) {
    'ngInject';
    $document.scrollTop(0);
    var Res = this;

    Res.toc = [
      {id: '#intro', icon: 'mdi mdi-information', text: 'About'},
      {id: '#exp', icon: 'mdi mdi-briefcase', text: 'Experience'},
      {id: '#projects', icon: 'mdi mdi-xml', text: 'Projects'},
      {id: '#talks', icon: 'mdi mdi-presentation', text: 'Talks'},
      {id: '#competition', icon: 'mdi mdi-poll', text: 'Competition'},
      {id: '#other', icon: 'mdi mdi-layers', text: 'Other'},
      {id: '#edu', icon: 'mdi mdi-school', text: 'Education'}
    ];

    Res.contactInfo = [
      {link: 'mailto:tom@githop.com', icon: 'mdi mdi-email', text: 'tom@githop.com'},
      {link: '#', icon: 'mdi mdi-web', text: 'githop.com'},
      {link: 'tel:+1-513-675-4467', icon: 'mdi mdi-phone', text: '(513) 675 - 4467'},
      {link: 'https://github.com/githop', icon: 'mdi mdi-github-circle', text: 'github'}
    ];

    Res.skills = {
      langs: ['JAVASCRIPT', 'TYPESCRIPT', 'RUBY', 'PHP', 'ANGULARjs', 'NODE', 'GULP/GRUNT', 'HTML', 'CSS'],
      other: ['GIT', 'LINUX', 'SQL', 'TDD', 'PROTRACTOR', 'VIM', 'AUTOMATION'],
      learning: ['DART', 'FP', 'ANGULAR2']
    };

    var attributes = [
      {name: 'JavaScript', value: 5, text: 'ES6, FP'},
      {name: 'TypeScript', value: 4, text: 'for sanity'},
      {name: 'Ruby', value: 2},
      {name: 'PHP', value: 0.5},
      {name: 'ANGULRjs', value: 4, text: 'superheroic MVC framework!'},
      {name: 'NODE', value: 3, text: 'JS with streams!'},
      {name: 'GULP/GRUNT', value: 2, text: 'client side build automation'},
      {name: 'HTML', value: 3, text: 'HTML5 rocks!'},
      {name: 'CSS', value: 3, text: 'can fizzBuzz in css'},
      {name: 'GIT', value: 3, text: 'Thanks Linus!'},
      {name: 'LINUX', value: 4, text: 'Ubuntu user since college'},
      {name: 'SQL', value: 3, text: 'Bobby Tables will teach you to sanitize your db inputs!'},
      {name: 'TDD', value: 2, text: 'Rspec, Karma/Jasmine'},
      {name: 'PROTRACTOR', value: 2, text: 'Integration testing'},
      {name: 'VIM', value: 3, text: 'no mouse!'},
      {name: 'AUTOMATION', value: 4, text: 'TravisCI, Teamcity,'},
    ];

    Res.itt = [
      {text: 'Design, implement, and test new features'},
      {text: 'Build internal tools for development team to facilitate testing, release and development (version control / doc generation, source code / template generation, perf / stress testing and optimization)'},
      {text: 'Collaborate with non-technical team members outside of agile team for product development (film editors, marketing / sales team)'}
    ];

    Res.wins = [
      {text: 'Contribute to day to day development on agile team.'},
      {text: 'Designed, developed, implemented  gulp based build and optimization process for angular app.'},
      {text: 'Established use of AngularJS best practices in client apps (Controller As syntax, Module pattern, nested views with ui-router..etc).'},
      {text: 'Implemented automated build process in TeamCity'},
      {text: 'Developed protractor testing plan for angular client apps.'},
      {text: 'Led team discussion and adoption of internal style guide.'}
    ];

    Res.talks = [
      {
        title: 'BoulderJS Meetup - Functional Composition',
        href: 'http://www.meetup.com/Boulder-JS/events/232947542/',
        date: 'August 2016',
        description: 'Talk on how First class / Higher-order / pure functions allow for currying and point free composition. Final segment on writing async code with Tasks using folktale.js. Examples in Typescript.'
      },
      {
        title: 'Denver AngularJS Meetup - Components in AngularJS 1.5',
        href: 'http://www.meetup.com/RockyMountainAngularJS/events/230153321/',
        date: 'April 2016',
        description: 'Slide show on example todos AngularJS app featuring the new .component() method. Showcasing routing with the Angular Component router, component to component communication via the directive API.'},
      {
        title: 'Denver AngularJS Meetup - Async Programming ES6 Generators',
        href: 'http://www.meetup.com/RockyMountainAngularJS/events/227891195/',
        date: 'January 2016',
        description: 'Presentation on using generators to implement iterables, observables and coroutines. Live coding with slides and examples in nodeJS and in the browser with Angular.'
      },
      {
        title: 'Denver AngularJS Meetup - ES6 Modules with AngularJS 1.x',
        href: 'http://www.meetup.com/RockyMountainAngularJS/events/225453182/',
        date: 'October 2015',
        description: 'Presented to Meetup group on how to use ES6 with AngularJS today. Presentation detailed how to setup a transpiled build process with Babel, JSPM and Gulp along with code examples on how to use new ES6 with Angular in particular.'
      },
      {
        title: 'Boulder AngularJS Meetup - Rails / Angular app: Padded pockets',
        href: 'http://www.meetup.com/RockyMountainAngularJS/photos/25863001/#433553204',
        date: 'January 2015',
        description: 'Delivered talk on experiences using AngularJS with a Rails API. Presentation focused on PaddedPockets Rails and Angular architecture,  3rd party services,  development and design decisions along the way, followed by a Q&A session regarding the app.'
      },
      {
        title: 'Boulder Ruby Group - Ruby Newby Beginners Track',
        href: 'http://githop.github.io/slides_ruby_newby/',
        date: 'September 2014',
        description: 'Authored presentation at meetup group on basic ruby data structures; i.e. strings and numbers.  Talk includes blog post in Ruby Newby beginner’s series. <a href="http://rubybeginnerstrack.github.io/2014/10/15/basic-data-types.html" target="_blank" rel="noreferrer noopener">Blog post</a>'
      },
    ];

    Res.projects = [
      {
        title: 'Sierpinski Triangle',
        href: 'http://githop.github.io/sierpinski-canvas/',
        date: 'March 2016',
        description: 'Side project of drawing a <a href="https://en.wikipedia.org/wiki/Sierpinski_triangle">sierpinski triangle</a> recursively with Javascript and HTML5 canvas. <a href="https://github.com/githop/sierpinski-canvas">Source code</a>.'
      },
      {
        title: 'Realtime Scrum Poker',
        href: 'https://github.com/githop/realtime-scrumpoker',
        date: 'October 2015',
        description: 'Fun side project for teams to play scrum poker together in person. Emphasis on using websockets to make game real time; e.g. players can ‘flip’ their cards over to reveal their estimate. Designed for players to use mobile device as input controller while game is viewed on projector or monitor. <a href="https://github.com/githop/realtime-scrumpoker">Source code</a>.'
      },
      {
        title: 'githop.com',
        href: 'http://githop.com',
        date: 'June 2015',
        description: `My personal website / blog CMS. AngularJS on the client and Rails for the API server. Angular 
        client uses ES6, Application Cache for offline access, and JWT token authentication. The Rails server is JSON only, 
        blog posts are modeled as SQL tables and blog post text is analyzed with my sentiment analysis algorithm (see post 7). 
        App is hosted via DigitalOcean where I setup and maintain an Ubuntu Linux instance with NGINX server to proxy Rails with
        Postgres DB. Blog posts are created via POST request from custom Google Doc plugin and edited via Angular client. 
        Source code: <a href="https://github.com/githop/es6-githop.com">client</a> / 
        <a href="https://github.com/githop/blg_api_digitalocean">server</a>.`
      },
      {
        title: 'Padded Pockets',
        href: 'https://floating-springs-6532.herokuapp.com/',
        date: 'November 2014',
        description: `Begun as personal project after 6 weeks of Dev Bootcamp. Originally a 
        <a href="https://hidden-shore-1353.herokuapp.com/">Sinatra app</a>, it has since gone through several iterations; a 
        <a>Rails app</a>, then 2 AngularJS / Rails hybrid apps. Angular <a href="https://pocketspadded.herokuapp.com/#/">v1</a>, 
        <a href="https://floating-springs-6532.herokuapp.com/#/">v2</a>. In all versions the app pulls data from a 3rd 
        party API, caches it, then returns the data to the user. The Angular/Rails versions use Rails to gather and 
        serialize the data as JSON, which is consumed by the Angular client. All politician images are hosted on Google 
        drive and fetched via API call from the Angular client.`
      },
      {
        title: 'SoundScript',
        href: 'https://github.com/dyoachim/soundscript',
        date: 'July 2014',
        description: `Final group project at Dev Bootcamp. SoundScript is a tool for learning new languages via YouTube.
        Users can watch crowd sourced translations or upload translations of their own. Tools used were primarily 
        JavaScript, the YouTube API, and a Rails server tying everything together.`
      },
    ];

    Res.skillsChart = attributes;

    Res.selectedModel = {};

    Res.openToolTip = function (model) {
      Res.selectedModel = model;
    };

    Res.closeToolTip = function () {
      Res.selectedModel = {};
    };

  }
}

export default ResumeCtrl;
