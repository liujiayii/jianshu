import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Topic from "./components/Topic";
import List from "./components/List";
import Writer from "./components/Writer";
import Recommend from "./components/Recommend";
import {HomeWrapper, HomeLeft, HomeRight, BackTop} from "./style";
import {actionCreators} from './store'

class Home extends PureComponent {
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  static handleScrollTop() {
    window.scrollTo(0, 0)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img'
               src="https://upload.jianshu.io/admin_banners/web_images/4688/d3b4622796060f4f4ca58fcc03ddb4d19bd422ed.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
               alt=""/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={Home.handleScrollTop}>顶部</BackTop> : ''}
      </HomeWrapper>
    )
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
});
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
});

export default connect(mapState, mapDispatch)(Home)
