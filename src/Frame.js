import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

export default class Frame extends Component {

  render() {

    const title = () => {
        if(this.props.frame.title) {
          return (
            <Card.Header>{this.props.frame.title}</Card.Header>
          )
        }
        return null
      }

    return (
      <Card>
        {this.props.frame.image}
        <Card.Content style={{fontSize: '1.5em', lineHeight: '1.2em'}}>
          {title()}
          <Card.Description>
            {this.props.frame.body}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }

}
