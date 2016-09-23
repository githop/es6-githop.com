/**
 *
 * Created by githop on 7/31/15.
 */

export default class ResumeCtrl {
  static $inject = ['$document'];
  public toc;
  public contactInfo;
  public skills;
  public itt;
  public wins;
  public skillsChart;
  public selectedModel;
  public openToolTip;
  public closeToolTip;
  public options;
  constructor($document) {
    $document.scrollTop(0);

    this.toc = [
      {id: '#intro', icon: 'mdi mdi-information', text: 'About'},
      {id: '#exp', icon: 'mdi mdi-briefcase', text: 'Experience'},
      {id: '#projects', icon: 'mdi mdi-xml', text: 'Projects'},
      {id: '#talks', icon: 'mdi mdi-presentation', text: 'Talks'},
      {id: '#competition', icon: 'mdi mdi-poll', text: 'Competition'},
      {id: '#other', icon: 'mdi mdi-layers', text: 'Other'},
      {id: '#edu', icon: 'mdi mdi-school', text: 'Education'}
    ];

    this.contactInfo = [
      {link: 'mailto:tom@githop.com', icon: 'mdi mdi-email', text: 'tom@githop.com'},
      {link: '#', icon: 'mdi mdi-web', text: 'githop.com'},
      {link: 'tel:+1-513-675-4467', icon: 'mdi mdi-phone', text: '(513) 675 - 4467'},
      {link: 'https://github.com/githop', icon: 'mdi mdi-github-circle', text: 'github'}
    ];

    this.skills = {
      langs: ['JAVASCRIPT', 'TYPESCRIPT', 'RUBY', 'PHP', 'ANGULARjs', 'NODE', 'GULP/GRUNT', 'HTML', 'CSS'],
      other: ['GIT', 'LINUX', 'SQL', 'TDD', 'PROTRACTOR', 'VIM', 'AUTOMATION'],
      learning: ['DART', 'FP', 'ANGULAR2']
    };

    this.itt = [
      {text: 'Maintain and develop new features for primary product.'},
      {text: 'Develop internal tools for testing and release control.'},
      {text: 'Mock up and design new features.'}
    ];

    this.wins = [
      {text: 'Contribute to day to day development on agile team.'},
      {text: 'Designed, developed, implemented  gulp based build and optimization process for angular app.'},
      {text: 'Established use of AngularJS best practices in client apps (Controller As syntax, Module pattern, nested views with ui-router..etc).'},
      {text: 'Implemented automated build process in TeamCity'},
      {text: 'Developed protractor testing plan for angular client apps.'},
      {text: 'Led team discussion and adoption of internal style guide.'}
    ];

    this.options = {
      chart: {
        type: 'pieChart',
        height: 450,
        donut: true,
        x: function(d){return d.name;},
        y: function(d){return d.value;},
        showLabels: true,

        pie: {
          startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
          endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
        },
        duration: 500,
        legend: {
          margin: {
            top: 5,
            right: 140,
            bottom: 5,
            left: 0
          }
        }
      }
    };

    this.skillsChart = [
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

    this.selectedModel = {};

    this.openToolTip = (model) => {
      this.selectedModel = model;
    };

    this.closeToolTip = () => {
      this.selectedModel = {};
    };

  }
}

