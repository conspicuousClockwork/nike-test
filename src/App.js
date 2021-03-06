import React, { Component } from 'react';
import bottom from '../assets/images/bottom-view.png';
import left from '../assets/images/left-view.png';
import right from '../assets/images/right-view.png';
import bigBottom from '../assets/images/big-bottom.png';
import bigLeft from '../assets/images/big-left.png';
import bigRight from '../assets/images/big-right.png';
import Conversion from './components/Conversion'
import NikeFooter from './components/NikeFooter'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import ThreeText from './components/ThreeText'
import '../css/nike.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      header: {},
      hero: {},
      info: [],
      gallery: {},
      conversion: {},
      footer: {}
    }
  }

  componentWillMount() {
    this.setState({
          header: {
            logo: "/assets/images/logo.svg",
            nav: [
              {
                label: "ABOUT",
                link: "#"
              },
              {
                label: "SERVICES",
                link: "#"
              },
              {
                label: "INVOLVEMENT",
                link: "#"
              }
            ]
          },
          hero: {
            logo: "/assets/images/logo.svg",
            title: "MERCURIAL SUPERFLY",
            text: "It's time to destroy defenses."
          },
          info: [
            {
              title: "BLANDIT TINCIDUNT",
              text: "In nisi ante, pharetra et neque ut, aliquam porta lorem. Morbi nec pretium nibh. Sed eu eros sit amet quam hendrerit posuere. Cras venenatis libero vestibulum sagittis aliquam. Cras blandit, lectus id varius imperdiet, elit sapien condimentum justo, nec lacinia purus urna nec lorem. Aenean risus eros, dignissim et feugiat quis, ultricies sed felis. Ut pulvinar erat eget dui vestibulum, ultrices convallis dolor sodales. Phasellus non enim tellus."
            },
            {
              title: "METUS PELLENTESQUE",
              text: "In nisi ante, pharetra et neque ut, aliquam porta lorem. Morbi nec pretium nibh. Sed eu eros sit amet quam hendrerit posuere. Cras venenatis libero vestibulum sagittis aliquam. Cras blandit, lectus id varius imperdiet, elit sapien condimentum justo, nec lacinia purus urna nec lorem. Aenean risus eros, dignissim et feugiat quis, ultricies sed felis. Ut pulvinar erat eget dui vestibulum, ultrices convallis dolor sodales. Phasellus non enim tellus."
            },
            {
              title: "BLANDIT TINCIDUNT",
              text: "In nisi ante, pharetra et neque ut, aliquam porta lorem. Morbi nec pretium nibh. Sed eu eros sit amet quam hendrerit posuere. Cras venenatis libero vestibulum sagittis aliquam. Cras blandit, lectus id varius imperdiet, elit sapien condimentum justo, nec lacinia purus urna nec lorem. Aenean risus eros, dignissim et feugiat quis, ultricies sed felis. Ut pulvinar erat eget dui vestibulum, ultrices convallis dolor sodales. Phasellus non enim tellus."
            }
          ],
          gallery: {
            subTitle: "NIKE",
            title: "SUPERFLY FG",
            selected: 0,
            images: [
              [left,bigLeft,0],
              [right,bigRight,1],
              [bottom,bigBottom,2]
            ],
            info: [
              {
                title: "BLANDIT TINCIDUNT",
                text: "In nisi ante, pharetra et neque ut, aliquam porta lorem. Morbi nec pretium nibh. Sed eu eros sit amet quam hendrerit posuere. Cras venenatis libero vestibulum sagittis aliquam. Cras blandit, lectus id varius imperdiet, elit sapien condimentum justo, nec lacinia purus urna nec lorem. Aenean risus eros, dignissim et feugiat quis, ultricies sed felis. Ut pulvinar erat eget dui vestibulum, ultrices convallis dolor sodales. Phasellus non enim tellus."
              },
              {
                title: "METUS PELLENTESQUE",
                text: "In nisi ante, pharetra et neque ut, aliquam porta lorem. Morbi nec pretium nibh. Sed eu eros sit amet quam hendrerit posuere. Cras venenatis libero vestibulum sagittis aliquam. Cras blandit, lectus id varius imperdiet, elit sapien condimentum justo, nec lacinia purus urna nec lorem. Aenean risus eros, dignissim et feugiat quis, ultricies sed felis. Ut pulvinar erat eget dui vestibulum, ultrices convallis dolor sodales. Phasellus non enim tellus."
              },
              {
                title: "BLANDIT TINCIDUNT",
                text: "In nisi ante, pharetra et neque ut, aliquam porta lorem. Morbi nec pretium nibh. Sed eu eros sit amet quam hendrerit posuere. Cras venenatis libero vestibulum sagittis aliquam. Cras blandit, lectus id varius imperdiet, elit sapien condimentum justo, nec lacinia purus urna nec lorem. Aenean risus eros, dignissim et feugiat quis, ultricies sed felis. Ut pulvinar erat eget dui vestibulum, ultrices convallis dolor sodales. Phasellus non enim tellus."
              }
            ]
          },
          conversion: {
            headers: ["DOWNLOAD & WATCH ALL TUTORIALS ON YOUR DEVICE",
              "DESKTOP COMPUTER, IPHONE, IPAD OR APPLE DEVICE"
            ],
            paragraphs: [
              "Donec quis nulla ac enim imperdiet dapibus sit amet auctor nisi. Maecenas placerat mi lacus, sit amet porta augue lobortis vitae. Nullam eget quam risus. Ut ut dolor mattis, ultricies dui quis, tincidunt nunc. Integer.",
              "Maecenas aliquet ex non nunc lacinia mattis. Duis sollicitudin laoreet ipsum, in aliquam odio egestas."
            ],
            button: {
                label: "JOIN",
                link: "#"
            }
          },
          footer: {
            copyright: {
              logo: "/assets/images/logo.svg",
              text: "Copyright NIKE 2017"
            },
            columns: [
              {
                title: "WEB DESIGN STUDIO TUTORIALS",
                links: [
                  {
                    text: "Design a creative Blog",
                    link: "#"
                  },
                  {
                    text: "Design a creative Blog",
                    link: "#"
                  },
                  {
                    text: "Design a creative Blog",
                    link: "#"
                  }
                ]
              },
              {
                title: "STEP BY STEP WEB DESIGN STUDIO TUTORIALS",
                links: [
                  {
                    text: "Design a creative Blog",
                    link: "#"
                  },
                  {
                    text: "Design a creative Blog",
                    link: "#"
                  },
                  {
                    text: "Design a creative Blog",
                    link: "#"
                  }
                ]
              },
              {
                title: "DESIGNERS",
                links: [
                  {
                    text: "Design a creative Blog",
                    link: "#"
                  },
                  {
                    text: "Design a creative Blog",
                    link: "#"
                  },
                  {
                    text: "Design a creative Blog",
                    link: "#"
                  }
                ]
              },
              {
                title: "BLAZROBAR",
                links: [
                  {
                    text: "Design a creative Blog",
                    link: "#"
                  },
                  {
                    text: "Design a creative Blog",
                    link: "#"
                  },
                  {
                    text: "Design a creative Blog",
                    link: "#"
                  }
                ]
              }
            ]
          }
    });
  }

  render() {
    return (
      <div className="App">
        <Header header={this.state.header}/>
          <Hero hero={this.state.hero} />
          <ThreeText info={this.state.info} />
          <Gallery gallery={this.state.gallery}/>
          <ThreeText info={this.state.gallery.info} />
          <Conversion conversion={this.state.conversion}/>
          <NikeFooter footer={this.state.footer}/>
      </div>
    );
  }
}

export default App;
