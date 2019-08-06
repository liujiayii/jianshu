import React, {Component} from 'react'
import Topic from "./components/Topic";
import List from "./components/List";
import Writer from "./components/Writer";
import Recommend from "./components/Recommend";
import {HomeWrapper, HomeLeft, HomeRight} from "./style";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img'
               src="https://upload.jianshu.io/admin_banners/web_images/4688/d3b4622796060f4f4ca58fcc03ddb4d19bd422ed.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
               alt=""/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home
