import React from 'react'
import { Icon } from 'antd'
import { Link } from 'dva/router'
import moment from 'moment'
import ImagePreview from '../../components/ImagePreview'
import appLocaleName from '../../common/Locale.tool'
import BaseTool from '../../common/Base.tool'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList'

const {
	defaultRenderReferenceCell,
	defaultRenderBooleanCell,
	defaultRenderMoneyCell,
	defaultRenderDateTimeCell,
	defaultRenderImageCell,
	defaultRenderDateCell,
	defaultRenderIdentifier,
	defaultRenderTextCell,
} = BaseTool

const renderTextCell=defaultRenderTextCell
const renderIdentifier=defaultRenderIdentifier
const renderDateCell=defaultRenderDateCell
const renderDateTimeCell=defaultRenderDateTimeCell
const renderImageCell=defaultRenderImageCell
const renderMoneyCell=defaultRenderMoneyCell
const renderBooleanCell=defaultRenderBooleanCell
const renderReferenceCell=defaultRenderReferenceCell


const menuData = {menuName:"双链小超订单行项目", menuFor: "retailStoreOrderLineItem",
  		subItems: [
  
  		],
}

const fieldLabels = {
  id: '序号',
  bizOrder: '订单',
  skuId: '产品ID',
  skuName: '产品名称',
  amount: '金额',
  quantity: '数量',
  unitOfMeasurement: '测量单位',

}

const displayColumns = [
  { title: fieldLabels.id, debugtype: 'string', dataIndex: 'id', width: '20',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.bizOrder, dataIndex: 'bizOrder', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.skuId, debugtype: 'string', dataIndex: 'skuId', width: '7',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.skuName, debugtype: 'string', dataIndex: 'skuName', width: '8',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.amount, dataIndex: 'amount', className:'money', render: (text, record) => renderMoneyCell(text, record), sorter: true  },
  { title: fieldLabels.quantity, debugtype: 'int', dataIndex: 'quantity', width: '9',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.unitOfMeasurement, debugtype: 'string', dataIndex: 'unitOfMeasurement', width: '6',render: (text, record)=>renderTextCell(text,record)},

]
// refernce to https://ant.design/components/list-cn/
const renderItemOfList=({retailStoreOrderLineItem,targetComponent})=>{

	
	
	const {RetailStoreOrderLineItemService} = GlobalComponents
	// const userContext = null
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{retailStoreOrderLineItem.id}</Description> 
<Description term="订单">{retailStoreOrderLineItem.bizOrder==null?appLocaleName(userContext,"NotAssigned"):`${retailStoreOrderLineItem.bizOrder.displayName}(${retailStoreOrderLineItem.bizOrder.id})`}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"订单","retailStoreOrder",RetailStoreOrderLineItemService.requestCandidateBizOrder,
	      RetailStoreOrderLineItemService.transferToAnotherBizOrder,"anotherBizOrderId",retailStoreOrderLineItem.bizOrder?retailStoreOrderLineItem.bizOrder.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="产品ID">{retailStoreOrderLineItem.skuId}</Description> 
<Description term="产品名称">{retailStoreOrderLineItem.skuName}</Description> 
<Description term="金额">{retailStoreOrderLineItem.amount}</Description> 
<Description term="数量">{retailStoreOrderLineItem.quantity}</Description> 
<Description term="测量单位">{retailStoreOrderLineItem.unitOfMeasurement}</Description> 
	
        {buildTransferModal(retailStoreOrderLineItem,targetComponent)}
      </DescriptionList>
	)

}
	



const RetailStoreOrderLineItemBase={menuData,displayColumns,fieldLabels,renderItemOfList}
export default RetailStoreOrderLineItemBase



