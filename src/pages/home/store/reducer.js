//import * as constants from './constrans'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1, title: '社会热点',
    imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4688/d3b4622796060f4f4ca58fcc03ddb4d19bd422ed.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  }, {
    id: 2, title: '手绘',
    imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4688/d3b4622796060f4f4ca58fcc03ddb4d19bd422ed.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  }],
  articleList: [{
    id: 1, title: '致：不被善待的投稿者',
    desc: '今天聊一个比较现实的话题——拒稿。但凡尝试过写作变现的作者都避免不了要投稿，一旦投稿了就有大概率被拒稿。 以我多年的经验，我可以很负责任的讲，无...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/14621973-3984ccd75b31a870.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 2, title: '致：不被善待的投稿者',
    desc: '今天聊一个比较现实的话题——拒稿。但凡尝试过写作变现的作者都避免不了要投稿，一旦投稿了就有大概率被拒稿。 以我多年的经验，我可以很负责任的讲，无...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/14621973-3984ccd75b31a870.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 3, title: '致：不被善待的投稿者',
    desc: '今天聊一个比较现实的话题——拒稿。但凡尝试过写作变现的作者都避免不了要投稿，一旦投稿了就有大概率被拒稿。 以我多年的经验，我可以很负责任的讲，无...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/14621973-3984ccd75b31a870.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 4, title: '致：不被善待的投稿者',
    desc: '今天聊一个比较现实的话题——拒稿。但凡尝试过写作变现的作者都避免不了要投稿，一旦投稿了就有大概率被拒稿。 以我多年的经验，我可以很负责任的讲，无...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/14621973-3984ccd75b31a870.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
