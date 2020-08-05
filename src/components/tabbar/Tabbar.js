import React from "react";
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

class Tabbar extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      // 需要渲染的tab：数组
      tabScreens: props.tabScreens,
      // 激活时文字的颜色
      color: props.color,
      // 未激活时文字的颜色
      inactiveColor: props.inactiveColor,
      // icon大小
      iconSize: props.iconSize
    };
  }

  // 渲染函数
  render() {
    const state = this.state;
    const Tab = createBottomTabNavigator();

    let screenOptions = ({route}) => ({
      tabBarIcon: ({focused}) => {
        let r = route;
        return this.createTabBarIcon(r, focused);
      }
    });

    let tabBarOptions = {
      activeTintColor: state.color === undefined ? '#000' : state.color,
      inactiveTintColor: state.inactiveColor === undefined ? 'gray' : state.inactiveColor
    };

    return (
        <Tab.Navigator backBehavior={true} screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
          {
            state.tabScreens.map((item, index) => {
              return <Tab.Screen key={item.key}
                                 name={item.name}
                                 component={item.component}
                                 options={item.options}/>
            })
          }
        </Tab.Navigator>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {

  }

  //组件将要卸载时
  componentWillUnmount() {

  }

  createTabBarIcon = (route, focused) => {
    const state = this.state;
    for (let i = 0; i < state.tabScreens.length; i++){
      let item = state.tabScreens[i];
      if (item.name === route.name){
        let size = (this.state.iconSize === undefined ? 30 : state.iconSize);
        return <Image style={{width: size,
          height: size}} source={focused ? item.icon1 : item.icon0} />;
      }
    }
  }


}

export default Tabbar;
