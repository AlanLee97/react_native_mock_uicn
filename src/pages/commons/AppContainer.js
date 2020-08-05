import * as React from 'react';
import HomePage from "../home/HomePage";
import MessagePage from "../message/MessagePage";
import MyPage from "../my/MyPage";
import Tabbar from "../../components/tabbar/Tabbar";
import PublishPage from "../publish/PublishPage";
import DiscoveryPage from "../discovery/DiscoveryPage";


const tabScreens = [
  {
    key: "HomePage",
    name: "首页",
    component: HomePage,
    options: {},
    icon0: require('../../assets/icon/tabbar/shouye0.png'),
    icon1: require('../../assets/icon/tabbar/shouye1.png'),
  },
  {
    key: "DiscoveryPage",
    name: "发现",
    component: DiscoveryPage,
    options: {},
    icon0: require('../../assets/icon/tabbar/sousuo0.png'),
    icon1: require('../../assets/icon/tabbar/sousuo1.png'),
  },
  {
    key: "PublishPage",
    name: "发布",
    component: PublishPage,
    options: {},
    icon0: require('../../assets/icon/tabbar/bianji0.png'),
    icon1: require('../../assets/icon/tabbar/bianji1.png'),
  },
  {
    key: "MessagePage",
    name: "消息",
    component: MessagePage,
    options: {},
    icon0: require('../../assets/icon/tabbar/xiaoxi0.png'),
    icon1: require('../../assets/icon/tabbar/xiaoxi1.png'),
  },
  {
    key: "MyPage",
    name: "我的",
    component: MyPage,
    options: {},
    icon0: require('../../assets/icon/tabbar/wode0.png'),
    icon1: require('../../assets/icon/tabbar/wode1.png'),
  }
];

export default function AppContainer() {

  return (
      <Tabbar tabScreens={tabScreens} />
  );
}

