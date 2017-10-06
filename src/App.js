import React, { Component } from 'react';
import Frame from './Frame'
import { Image, Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  render() {
    const frames = [
      {
        "body": "In the Civil War firefighters started by putting out fires. At this time houses were not fire-proofed. Books started to build up due to the explosion of ideas.",
        image: <Image src='https://i.pinimg.com/originals/1f/c3/be/1fc3be8f523e1b3455e387e61463f60b.jpg'></Image>
      },
      {
        body: "Technology advances and becomes a part of everyday life. Houses are fire-proofed so firefighters are not needed for the original purpose.",
        image: <Image src='http://2.bp.blogspot.com/-ZVlHn-sVMh0/U65FwcqNlyI/AAAAAAAAFPg/PJsCwGsFw-Q/s1600/evolution-phone.jpg'></Image>
      },
      {
        "body": "Books begin to be dimmed down so the different minorites wouldn't be upset. The people who did not agree with the changes waited too long before speaking out.",
        image: <Image src='http://i2.wp.com/www.rightattitudes.com/blogincludes/images/How_to_Read_a_Pile_of_Books.jpg'></Image>
      },
      {
        body: "As society began to move into a utopian society, films are sped up and school days are shortened. Books are condensed to paragraphs or sentences.",
        image: <Image src='http://utopiafailure.weebly.com/uploads/1/5/3/6/15360626/899147806.jpg'></Image>
      },
      {
        body: "Technology takes over every day life. People get lazy and become antisocial due to technology. They did whatever they wanted in order to be happy.",
        image: <Image src='http://media02.hongkiat.com/cities-of-the-futures/futurecitytoorobertdbrown.jpg'></Image>
      },
      {
        body: "Because critics justify getting rid of books, firemen are repurposed to burn books because they are now illegal to be read.",
        image: <Image src='http://www.teemingbrain.com/wp-content/uploads/2012/09/fahrenheit-451-burning-books.jpg'></Image>
      },
      {
        body: "People comply with the law and don't read books because they fear the firemen. The government fears people reading because they don't want to lose power.",
        image: <Image src='https://i.ytimg.com/vi/p97kSsORsDE/maxresdefault.jpg'></Image>
      }
    ]

    return (
      <div className="ui container" style={{marginTop: '1em'}}>
        <Grid columns='equal'>
          {frames.map((frame, index) => {
            return (
              <Grid.Column key={index} width={4}>
                <Frame frame={frame} style={{ margin: '1em' }}></Frame>
              </Grid.Column>
            )
          })}
        </Grid>

      </div>
    )
  }
}

export default App;
