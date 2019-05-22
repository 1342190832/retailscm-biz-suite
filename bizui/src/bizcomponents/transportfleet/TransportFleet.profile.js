

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'

import {Form } from 'antd'
import { Link } from 'dva/router'

import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './TransportFleet.preference.less'
import DescriptionList from '../../components/DescriptionList';

import DashboardTool from '../../common/Dashboard.tool'
import appLocaleName from '../../common/Locale.tool'

const {
  defaultRenderExtraHeader,
  defaultSubListsOf,

}= DashboardTool

const { Description } = DescriptionList;

const internalRenderExtraHeader = defaultRenderExtraHeader

const internalSubListsOf = defaultSubListsOf


const internalRenderTitle = (cardsData,targetComponent) =>{
  const linkComp=cardsData.returnURL?<Link to={cardsData.returnURL}> <FontAwesome name="arrow-left"  /> </Link>:null
  return (<div>{linkComp}{cardsData.cardsName}: {cardsData.displayName}</div>)

}


const internalSummaryOf = (transportFleet,targetComponent) =>{
    const userContext = null
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{transportFleet.id}</Description> 
<Description term="名称">{transportFleet.name}</Description> 
<Description term="联系电话">{transportFleet.contactNumber}</Description> 
<Description term="最后更新时间">{ moment(transportFleet.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
	
      </DescriptionList>
	)
}



class TransportFleetProfile extends Component {

  
  componentDidMount() {

  }
  

  render() {
    // eslint-disable-next-line max-len
    const  transportFleet = this.props.transportFleet;
    const { id,displayName, transportTruckCount, truckDriverCount, transportTaskCount } = transportFleet

    const cardsData = {cardsName:"运输车队",cardsFor: "transportFleet",cardsSource: transportFleet,
  		subItems: [
    
      	],
  	};
    
    const renderExtraHeader = this.props.renderExtraHeader || internalRenderExtraHeader
    const subListsOf = this.props.subListsOf || internalSubListsOf
    const summaryOf = this.props.summaryOf || internalSummaryOf
    
    return (

      <PageHeaderLayout
        title={`${cardsData.cardsName}: ${displayName}`}
        content={summaryOf(cardsData.cardsSource,this)}
        wrapperClassName={styles.advancedForm}
      >
      {renderExtraHeader(cardsData.cardsSource)}
       {subListsOf(cardsData)} 
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  transportFleet: state._transportFleet,
}))(Form.create()(TransportFleetProfile))

