import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  blankPanel: boolean = true;
  initialForm: boolean = false;
  suggestions: any[] = [
    {
      image: 'https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.jpg?s=612x612&w=0&k=20&c=MewnsAhbeGRcMBN9_ZKhThmqPK6c8nCT8XYk5ZM_hdg=',
      alt: 'Image',
      title: 'Outdoor Activities',
      description: 'Enjoy the sunny weather by going for a hike, picnic, or bike ride.'
    },
    {
      image: 'https://media.istockphoto.com/id/1166417394/photo/women-in-meditation-while-practicing-yoga-in-a-training-room-happy-calm-and-relaxing.jpg?s=612x612&w=0&k=20&c=MrasitXQORAXMCaoF3F_mfWW_bCvOGeam78Pg1kxIFg=',
      alt: 'Image',
      title: 'Indoor Relaxation',
      description: "If it's rainy or cold, stay cozy indoors with a good book or movie."
    },
    {
      image: 'https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=612x612&w=0&k=20&c=2GLUy6eqCSr0NFRO8CHm8_PUMy9Qc8ryqcsRoe0DEYM=',
      alt: 'Image',
      title: 'Stay Hydrated',
      description: 'Hot weather? Don\'t forget to drink plenty of water to stay hydrated.'
    }
  ];
  randomWeatherQuote: string;

  constructor() {
    this.greeting = 'Hello';
    this.currentTime = new Date();
    this.blankPanel = true;
    this.randomWeatherQuote = this.getRandomWeatherQuote();
  }


  openForm() {
    this.blankPanel = false;
    this.initialForm = true;
  }

  getRandomWeatherQuote(): string {
    const weatherQuotes: string[] = [
      'Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather. - John Ruskin',
      'To appreciate the beauty of a snowflake, it is necessary to stand out in the cold. - Aristotle',
      'Bad weather always looks worse through a window. - Tom Lehrer',
      'There\'s no such thing as bad weather, only unsuitable clothing. - Alfred Wainwright',
      'The best kind of rain, of course, is a cozy rain. - Marjory Stoneman Douglas'
    ];

    return weatherQuotes[Math.floor(Math.random() * weatherQuotes.length)];
  }


  currentTime!: Date;
  greeting: string='';
  
  
  ngOnInit() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }
  
  updateTime() {
    this.currentTime = new Date();
    const currentHour = this.currentTime.getHours();
  
    if (currentHour >= 0 && currentHour < 12) {
      this.greeting = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      this.greeting = 'Good afternoon';
    } else {
      this.greeting = 'Good evening';
    }
  }
}