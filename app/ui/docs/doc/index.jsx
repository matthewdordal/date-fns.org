import React from 'react'
import JSDoc from './jsdoc'
import MarkdownDoc from './markdown_doc'
import docs from 'app/_lib/docs'

export default class Doc extends React.Component {
  static propTypes = {
    docId: React.PropTypes.string
  }

  shouldComponentUpdate (nextProps) {
    return nextProps.docId !== undefined
  }

  render () {
    if (!this.props.docId) return null

    return <div className='doc'>
      {this._renderDoc()}
    </div>
  }

  _renderDoc () {
    const {pages, docId} = this.props

    if (pages.size === 0) {
      return 'Loading...'
    }

    const doc = pages.find((page) => page.get('urlId') === docId)

    if (!doc) {
      return 'This page is not available for this version'
    }

    switch (doc.get('type')) {
      case 'jsdoc':
        return <JSDoc doc={doc} />
      case 'markdown':
        return <MarkdownDoc doc={doc} />
    }
  }

  _getDoc (currentDocId) {
    for (let categoryName in docs) {
      let categoryDocs = docs[categoryName]
      for (let docId in categoryDocs) {
        let doc = categoryDocs[docId]
        if (doc.urlId === currentDocId) {
          return doc
        }
      }
    }
  }
}
