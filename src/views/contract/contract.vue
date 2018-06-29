<template>
  <div>
    <Collapse v-model="value1">
        <Panel name="1">
            检索
            <p slot="content">
             <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
              <Row>
                <Col span="12">
                  <FormItem label="状态" prop="status">
                     <Select v-model="formValidate.status" placeholder="">
                         <Option value="all">全部</Option>
                         <Option value="ing">进行中</Option>
                         <Option value="right">已归档</Option>
                      </Select>
                   </FormItem>
                </Col>
                <Col span="12">
                  <FormItem label="业主姓名" prop="name">
                    <Input v-model="formValidate.name" placeholder="Enter your name" id="name"></Input>
                  </FormItem>
                </Col>
                <Col span="12">
                  <FormItem label="楼栋" prop="building">
                    <Input v-model="formValidate.building" placeholder="Enter your Building"></Input>
                  </FormItem>
                </Col>
                <Col span="12">
                  <FormItem label="房间号" prop="hourse">
                    <Input v-model="formValidate.hourse" placeholder="Enter your HourseNumber"></Input>
                  </FormItem>
                </Col>
                <Col span="12">
                   <FormItem label="时间" prop="date">
                       <DatePicker type="date" placeholder="Select date" v-model="formValidate.date" style="width: 100%"></DatePicker>
                   </FormItem>
                </Col>
                <Col span="2"></Col>
                <Col span="12">
                   <FormItem prop="date" label="--">
                       <DatePicker type="date" placeholder="Select date" v-model="formValidate.date" style="width: 100%"></DatePicker>
                  </FormItem>
                </Col>
              </Row>
            </Form>
          </p>
        </Panel>
    </Collapse>
    <Row>
        <Col span="1"><Button type="success" style="margin: 10px">新增</Button></Col>
        <Col span="3" offset="20">
           <Button type="primary" @click="handleSubmit" style="margin: 10px">检索</Button>
           <Button >重置</Button>
        </Col>
    </Row>
    <Table border :columns="columns1" :data="data1"></Table>
    <Page :total="100"></Page>
  </div>
</template>
<script>
export default {
 data () {
            return {
                flag:true,
                value1: '1',
                formValidate: {
                    name: '',
                    building: '',
                    hourse:'',
                    status: '',
                    date: '',
                },
                ruleValidate: {
                  name: [
                  { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                  ],
                  building: [
                  { required: true, message: 'The building cannot be empty', trigger: 'blur' }
                  ],
                  hourse: [
                  { required: true, message: 'The hourse-number cannot be empty', trigger: 'blur' }
                  ],
                  status: [
                  { required: true, message: 'Please select the status', trigger: 'change' }
                  ],
                  date: [
                        { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ]
                },
                columns1: [
                    {
                        title: '操作',
                        key: 'name',
                        width:250,
                        align:"center",
                        render:function(h,params){
                          return h("div",[
                              h("Button","状态详情"),
                              h("Button",{
                                style:{
                                   margin:'0 5px'
                                }
                              },"编辑"),
                              h("Button","终止")
                            ])
                        }
                    },
                    {
                        title: '选项',
                        key: 'name',
                        align:"center",
                        render : function ( h , param ){
                           return h("div",[
                             h("Checkbox","")
                           ])
                        }
                        // width:100
                    },
                    {
                        title: '状态',
                        key: 'age',
                        align:"center"
                        // render:function(h,params){
                        //   switch(params.row.age){
                        //      case 18:
                        //        return h('Button',{
                        //         props:{
                        //           type:'success'
                        //         },
                        //         style:{
                        //           width:'100px'
                        //         }
                        //        },"123")
                        //      case 24:
                        //        return h('Button',{
                        //         props:{
                        //           type:'success'
                        //         },
                        //         style:{
                        //           width:'100px'
                        //         }
                        //        },"24")
                        //      case 30:
                        //        return h('Button',{
                        //         props:{
                        //           type:'success'
                        //         },
                        //         style:{
                        //           width:'120px'
                        //         }
                        //        },"30")
                        //   }
                        // }
                        // render : function ( h , param ){
                        //    return h("div",[
                        //      h("Button","123"),
                        //      h("Button","456")
                        //    ])
                        // }
                    },
                    {
                        title: '业主姓名',
                        key: 'address',
                        align:"center"
                        // ellipsis:true
                    },
                    {
                        title: '楼栋',
                        key: 'name',
                        align:"center"
                    },
                    {
                        title: '房间号',
                        key: 'name',
                        align:"center"
                        // width:100
                    },
                    {
                        title: '更新时间',
                        key: 'name',
                        align:"center"
                        // width:100
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        methods:{
          handleSubmit(){
             console.log(this.formValidate)
          }
        }
}
</script>

<style>

</style>
