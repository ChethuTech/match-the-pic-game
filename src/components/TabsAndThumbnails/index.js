import {Component} from 'react'
import TabItems from '../TabItems'
import Thumbnail from '../Thumbnails'
import './index.css'

class TabsAndThumbnails extends Component {
  state = {activeTab: 'FRUIT'}

  onClickActiveTab = tabId => {
    this.setState({activeTab: tabId})
  }

  onClickThumbnail = id => {
    const {onClickThumbnailz} = this.props
    onClickThumbnailz(id)
  }

  render() {
    const {activeTab} = this.state
    const {tabsList, imagesList} = this.props
    return (
      <>
        <ul className="tabs-container-list">
          {tabsList.map(eachTab => (
            <TabItems
              onTabActiveTab={this.onClickActiveTab}
              key={eachTab.tabId}
              tabDetails={eachTab}
              activeTab={activeTab}
            />
          ))}
        </ul>

        <ul className="thumbnails-list">
          {imagesList.map(eachImageDetails =>
            activeTab === eachImageDetails.category ? (
              <Thumbnail
                onClickThumbnail={this.onClickThumbnail}
                key={eachImageDetails.id}
                activeTab={activeTab}
                imageDetails={eachImageDetails}
              />
            ) : null,
          )}
        </ul>
      </>
    )
  }
}

export default TabsAndThumbnails
