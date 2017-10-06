import React, { Component } from 'react';
import Frame from './Frame'
import { Image, Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  render() {
    const frames = [
      {
        "title": "Lynn",
        "body": "Fugiat dolor minim excepteur voluptate enim nulla duis Lorem magna esse incididunt cupidatat ex. Culpa enim esse magna duis eiusmod Lorem ex ea sint veniam. Cillum aute deserunt pariatur occaecat deserunt in aliquip veniam cillum ad ea.",
        image: <Image src='https://placehold.it/500x500'></Image>
      },
      {
        "title": "Benson",
        "body": "Est ipsum adipisicing mollit deserunt occaecat do ipsum consectetur aliqua voluptate adipisicing. Ex anim ex ex nostrud cupidatat sunt anim fugiat et. Exercitation qui magna tempor eiusmod quis pariatur cupidatat sint qui velit nostrud commodo excepteur sint.",
        image: <Image src='https://placehold.it/500x500'></Image>
      },
      {
        "title": "Goff",
        "body": "Aliquip id nulla quis velit occaecat ad. Amet do eu dolore voluptate adipisicing adipisicing adipisicing. Magna ad ut dolore quis tempor do.",
        image: <Image src='https://placehold.it/500x500'></Image>
      },
      {
        "title": "Levy",
        "body": "Occaecat nostrud aliqua occaecat incididunt deserunt nostrud excepteur dolor reprehenderit esse adipisicing. Sint exercitation culpa ut culpa ut. Deserunt magna commodo duis sit.",
        image: <Image src='https://placehold.it/500x500'></Image>
      },
      {
        "title": "Serrano",
        "body": "Do esse quis consequat proident. Culpa esse proident excepteur sit et tempor id id labore deserunt laborum officia do. Excepteur qui labore minim laborum Lorem cillum dolore deserunt ad proident.",
        image: <Image src='https://placehold.it/500x500'></Image>
      },
      {
        "title": "Charlene",
        "body": "Do id commodo deserunt excepteur consectetur enim do anim veniam cillum reprehenderit cillum adipisicing. Officia reprehenderit ex ad aliquip enim excepteur sint deserunt velit nisi laboris amet. Aliquip laboris sit ipsum incididunt nulla non est labore ea irure.",
        image: <Image src='https://placehold.it/500x500'></Image>
      },
      {
        "title": "Klein",
        "body": "Voluptate mollit magna laborum voluptate ullamco minim est commodo ea minim enim nulla. In nisi aliquip ex sint cupidatat ea consequat cillum laborum quis sit magna in minim. Est mollit consectetur tempor consectetur proident anim ea tempor reprehenderit sit adipisicing fugiat id sint.",
        image: <Image src='https://placehold.it/500x500'></Image>
      },
      {
        "title": "Hunt",
        "body": "Adipisicing minim fugiat ullamco commodo sint duis cupidatat irure consequat veniam aute excepteur ex laborum. Adipisicing officia cillum in ullamco consectetur enim incididunt reprehenderit dolor nostrud nostrud pariatur. Minim cupidatat quis aliqua voluptate nulla cillum occaecat nostrud ullamco dolor.",
        image: <Image src='https://placehold.it/500x500'></Image>
      },
      {
        "title": "Hopper",
        "body": "Nulla cillum ut elit enim elit nisi velit. Mollit magna in adipisicing aliquip nisi ea est do cupidatat qui. Sunt sit eiusmod aliqua occaecat aliqua ullamco ea ea eu voluptate velit aliqua reprehenderit minim.",
        image: <Image src='https://placehold.it/500x500'></Image>
      },
      {
        "title": "Tanisha",
        "body": "Exercitation ad commodo nostrud mollit labore non sit. Ut occaecat consequat fugiat ea. Labore enim deserunt nulla tempor tempor tempor commodo nostrud.",
        image: <Image src='https://placehold.it/500x500'></Image>
      }
    ]

    return (
      <div className="ui container">
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
