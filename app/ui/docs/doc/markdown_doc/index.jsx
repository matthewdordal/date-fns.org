import React from 'react'
import Markdown from 'app/ui/_lib/markdown'

export default class MarkdownDoc extends React.Component {
  static propTypes = {
    doc: React.PropTypes.object.isRequired
  }

  render () {
    const {doc} = this.props
    return <Markdown value={doc.get('content')} />
  }
}
