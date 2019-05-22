

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from 'components/BooleanOption';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge, Switch,Select,Form,AutoComplete,Modal } from 'antd'
import { Link, Route, Redirect} from 'dva/router'
import numeral from 'numeral'

import DashboardTool from '../../common/Dashboard.tool'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './RetailStoreMemberAddress.preference.less'
import DescriptionList from '../../components/DescriptionList';

import GlobalComponents from '../../custcomponents';
import PermissionSetting from '../../permission/PermissionSetting'
import appLocaleName from '../../common/Locale.tool'
const { Description } = DescriptionList;
const {defaultRenderExtraHeader}= DashboardTool


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const internalSummaryOf = (retailStoreMemberAddress,targetComponent) =>{
    const userContext = null
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{retailStoreMemberAddress.id}</Description> 
<Description term="名称">{retailStoreMemberAddress.name}</Description> 
<Description term="移动电话">{retailStoreMemberAddress.mobilePhone}</Description> 
<Description term="地址">{retailStoreMemberAddress.address}</Description> 
	
      </DescriptionList>
	)
}


const renderPermissionSetting = retailStoreMemberAddress => {
  const {RetailStoreMemberAddressBase} = GlobalComponents
  return <PermissionSetting targetObject={retailStoreMemberAddress}  targetObjectMeta={RetailStoreMemberAddressBase}/>
}

const internalRenderExtraHeader = defaultRenderExtraHeader

class RetailStoreMemberAddressPermission extends Component {


  componentDidMount() {

  }
  

  render() {
    // eslint-disable-next-line max-len
    const  retailStoreMemberAddress = this.props.retailStoreMemberAddress;
    const { id,displayName,  } = retailStoreMemberAddress
    const cardsData = {cardsName:"零售店会员地址",cardsFor: "retailStoreMemberAddress",cardsSource: retailStoreMemberAddress,
  		subItems: [
    
      	],
  	};
    const renderExtraHeader = this.props.renderExtraHeader || internalRenderExtraHeader
    const summaryOf = this.props.summaryOf || internalSummaryOf
   
    return (

      <PageHeaderLayout
        title={`${cardsData.cardsName}: ${displayName}`}
        content={summaryOf(cardsData.cardsSource,this)}
        wrapperClassName={styles.advancedForm}
      >
      {renderExtraHeader(cardsData.cardsSource)}
      {renderPermissionSetting(cardsData.cardsSource)}
      
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  retailStoreMemberAddress: state._retailStoreMemberAddress,
}))(Form.create()(RetailStoreMemberAddressPermission))

