import React, { Component } from 'react'
import NewsDetail from './NewsDetail'

export class NewsItem extends Component {
  render() {
    return (
      <div>
        This is news item component
        <NewsDetail/>
      </div>
    )
  }
}

export default NewsItem
