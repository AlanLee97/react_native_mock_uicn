import React from "react";
import {StyleSheet} from 'react-native';

const color = {
  primary: "#409EFF",
  success: "#67C23A",
  error: "#FF2A35",
  danger: "#F56C6C",
  warning: "#E6A23C",
  info: "#909399",
  text1: "#303133",
  text2: "#606266",
  text3: "#909399",
  text4: "#C0C4CC",
  border1: "#DCDFE6",
  border2: "#E4E7ED",
  border3: "#EBEEF5",
  border4: "#F2F6FC",
}

const styles = StyleSheet.create({
  alFlexCenter:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  alFlexCenterV:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  alFlexCenterH:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  alTextCenter: {
    textAlign: 'center'
  },
  alFlex:{
    display: 'flex'
  },
  alFlexRow:{
    flexDirection: 'row'
  },
  alFlexColumn:{
    flexDirection: 'column'
  },
  alFlexSpaceBetween:{
    justifyContent: "space-between"
  },
  alFlexWrap:{
    flexWrap: 'wrap'
  },


  alTextH1: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  alTextH2: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  alTextH3: {
    fontSize: 18.72,
    fontWeight: 'bold',
  },
  alTextH4: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  alTextH5: {
    fontSize: 13.28,
    fontWeight: 'bold',
  },
  alTextH6: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  alTextDesc: {
    fontSize: 14,
    color: color.text3
  },

  alMargin10: {
    margin: 10
  },
  alMargin20: {
    margin: 20
  },
  alMargin30: {
    margin: 30
  },

  alMarginLeft10: {
    marginLeft: 10
  },
  alMarginLeft20: {
    marginLeft: 20
  },
  alMarginLeft30: {
    marginLeft: 30
  },

  alMarginTop10: {
    marginTop: 10
  },
  alMarginTop20: {
    marginTop: 20
  },
  alMarginTop30: {
    marginTop: 30
  },

  alMarginTop_10: {
    marginTop: -10
  },
  alMarginTop_20: {
    marginTop: -20
  },
  alMarginTop_30: {
    marginTop: -30
  },

  alMarginRight10: {
    marginRight: 10
  },
  alMarginRight20: {
    marginRight: 20
  },
  alMarginRight30: {
    marginRight: 30
  },

  alMarginBottom10: {
    marginBottom: 10
  },
  alMarginBottom20: {
    marginBottom: 20
  },
  alMarginBottom25: {
    marginBottom: 25
  },
  alMarginBottom30: {
    marginBottom: 30
  },

  alMarginTB10:{
    marginTop: 10,
    marginBottom: 10
  },
  alMarginTB20:{
    marginTop: 20,
    marginBottom: 20
  },
  alMarginTB30:{
    marginTop: 30,
    marginBottom: 30
  },
  alMarginTB40:{
    marginTop: 40,
    marginBottom: 40
  },

  alMarginLR10:{
    marginLeft: 10,
    marginRight: 10
  },
  alMarginLR20:{
    marginLeft: 20,
    marginRight: 20
  },
  alMarginLR30:{
    marginLeft: 30,
    marginRight: 30
  },
  alMarginLR40:{
    marginLeft: 40,
    marginRight: 40
  },


  alPadding10: {
    padding: 10
  },
  alPadding20: {
    padding: 20
  },
  alPadding30: {
    padding: 30
  },

  alPaddingLeft10: {
    paddingLeft: 10
  },
  alPaddingLeft20: {
    paddingLeft: 20
  },
  alPaddingLeft30: {
    paddingLeft: 30
  },

  alPaddingTop10: {
    paddingTop: 10
  },
  alPaddingTop20: {
    paddingTop: 20
  },
  alPaddingTop30: {
    paddingTop: 30
  },

  alPaddingRight10: {
    paddingRight: 10
  },
  alPaddingRight20: {
    paddingRight: 20
  },
  alPaddingRight30: {
    paddingRight: 30
  },

  alPaddingBottom10: {
    paddingBottom: 10
  },
  alPaddingBottom20: {
    paddingBottom: 20
  },
  alPaddingBottom25: {
    paddingBottom: 25
  },
  alPaddingBottom30: {
    paddingBottom: 30
  },

  alPaddingTB10:{
    paddingTop: 10,
    paddingBottom: 10
  },
  alPaddingTB20:{
    paddingTop: 20,
    paddingBottom: 20
  },
  alPaddingTB30:{
    paddingTop: 30,
    paddingBottom: 30
  },
  alPaddingTB40:{
    paddingTop: 40,
    paddingBottom: 40
  },

  alPaddingLR10:{
    paddingLeft: 10,
    paddingRight: 10
  },
  alPaddingLR20:{
    paddingLeft: 20,
    paddingRight: 20
  },
  alPaddingLR30:{
    paddingLeft: 30,
    paddingRight: 30
  },
  alPaddingLR40:{
    paddingLeft: 40,
    paddingRight: 40
  },

  alShowBorderRed:{
    borderWidth: 1,
    borderColor: color.error,
    borderStyle: 'solid'
  },
  alShowBorderBlue:{
    borderWidth: 1,
    borderColor: color.primary,
    borderStyle: 'solid'
  },
  alShowBorderBlack:{
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid'
  },
  alShowBorderGreen:{
    borderWidth: 1,
    borderColor: color.success,
    borderStyle: 'solid'
  },

  alFontSize6: {
    fontSize: 6
  },
  alFontSize8: {
    fontSize: 8
  },
  alFontSize10: {
    fontSize: 10
  },
  alFontSize12: {
    fontSize: 12
  },
  alFontSize14: {
    fontSize: 14
  },
  alFontSize16: {
    fontSize: 16
  },
  alFontSize18: {
    fontSize: 18
  },
  alFontSize20: {
    fontSize: 20
  },
  alFontSize22: {
    fontSize: 22
  },
  alFontSize24: {
    fontSize: 24
  },
  alFontSize26: {
    fontSize: 26
  },
  alFontSize28: {
    fontSize: 28
  },
  alFontSize30: {
    fontSize: 30
  },

  alColorGray: {
    color: "#cecece"
  },

  alColorBlue: {
    color: color.primary
  },
  alColorGreen: {
    color: color.success
  },
  alColorRed: {
    color: color.error
  },
  alColorRedLight: {
    color: color.danger
  },
  alColorYellow: {
    color: color.warning
  },

  alWrapWidth: {
    alignSelf: 'flex-start'
  }

})

export default styles;
