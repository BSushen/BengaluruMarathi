import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
  header:{
    backgroundColor: '#0088cc'
  },
  headerText:{
    color: '#ffffff',
  },
  icon:{
    marginLeft: 10
  },
  footer:{
    backgroundColor: '#0088cc',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerText:{
    color: '#ffffff',
  },
  menuicons:{
    flex:1
  },
  container:{
    backgroundColor: '#ffffff'
  },
  menuContainer:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 4,
    marginRight: 4
  },
  cardItems:{
    flex:1,
    flexDirection: 'row'
  },
  highlightText: {
    color:'#ffad33',
  },
  cardHeader:{
      fontWeight: 'bold',
      color: '#ff6600'
  },
  leftViewSide:{
      width: 100
  },
  name:{
    color: '#ff6600'
  },
  galleryHeadingText:{
    alignSelf: 'center',
    color: 'red',
    fontWeight: 'bold'
  },
  pdfcontainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  pdf: {
    flex:1,
    width:Dimensions.get('window').width,
  }
})