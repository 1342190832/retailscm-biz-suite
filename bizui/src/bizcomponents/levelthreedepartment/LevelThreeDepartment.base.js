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


const menuData = {menuName:"三级部门", menuFor: "levelThreeDepartment",
  		subItems: [
  {name: 'employeeList', displayName:'员工', icon:'500px',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '__no_group'},
  
  		],
}

const fieldLabels = {
  id: '序号',
  belongsTo: '属于',
  name: '名称',
  description: '描述',
  founded: '成立',

}

const displayColumns = [
  { title: fieldLabels.id, debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderTextCell(text,record,'levelThreeDepartment') , sorter: true },
  { title: fieldLabels.belongsTo, dataIndex: 'belongsTo', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.name, debugtype: 'string', dataIndex: 'name', width: '17',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.description, debugtype: 'string', dataIndex: 'description', width: '22',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.founded, dataIndex: 'founded', render: (text, record) =>renderDateCell(text,record), sorter: true },

]
// refernce to https://ant.design/components/list-cn/
const renderItemOfList=({levelThreeDepartment,targetComponent})=>{

	
	
	const {LevelThreeDepartmentService} = GlobalComponents
	// const userContext = null
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{levelThreeDepartment.id}</Description> 
<Description term="属于">{levelThreeDepartment.belongsTo==null?appLocaleName(userContext,"NotAssigned"):`${levelThreeDepartment.belongsTo.displayName}(${levelThreeDepartment.belongsTo.id})`}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"属于","levelTwoDepartment",LevelThreeDepartmentService.requestCandidateBelongsTo,
	      LevelThreeDepartmentService.transferToAnotherBelongsTo,"anotherBelongsToId",levelThreeDepartment.belongsTo?levelThreeDepartment.belongsTo.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="名称">{levelThreeDepartment.name}</Description> 
<Description term="描述">{levelThreeDepartment.description}</Description> 
<Description term="成立">{ moment(levelThreeDepartment.founded).format('YYYY-MM-DD')}</Description> 
	
        {buildTransferModal(levelThreeDepartment,targetComponent)}
      </DescriptionList>
	)

}
	



const LevelThreeDepartmentBase={menuData,displayColumns,fieldLabels,renderItemOfList}
export default LevelThreeDepartmentBase



