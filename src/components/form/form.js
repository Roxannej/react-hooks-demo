import React, {createElement, useEffect, useImperativeHandle} from 'react'
import ProTypes from 'prop-types'
import {Form, Input, Select, DatePicker, Button} from 'antd'
import {timestampToTime} from './timestampToTotime.js'

const FormItem = Form.Item, { Password } = Input, { Option } = Select, h = createElement;
const FormComponent = ({columns, data, cRef}) => {
  const [form] = Form.useForm()

  useImperativeHandle(cRef,() => ({
    getForm:() => form 
  }))

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  },
  tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
  };
  // console.log('tailLayout',tailLayout)

  //若有正则验证，则在所有的正则校验都通过后用来获取输入的数据，若没有正则校验，则直接获取输入的数据
  const onFinish = values => {
    values.date = timestampToTime(values.date)
  };

  //重置要配合着const [form] = Form.useForm()以及form={form}
  const onReset = () => {
    form.resetFields();
  };

  //form表单的回显
  useEffect(() => {
    form.setFieldsValue(data)
  }, [])

  const components = {
    select:({label, list = [], callback = () => {}}) =>h(Select, {placeholder:label, onChange: v => callback(v)}, list.map(c => h(Option, {key: c.value, value: c.value}, c.label))),
    input: ({label}) => <Input placeholder={label}/>,
    password: ({label}) => h(Password, {placeholder: label}),
    datePicker:({label}) => <DatePicker placeholder={label} format="YYYY-MM-DD"></DatePicker>
  }

  return (
    <Form {...layout} form={form} onFinish={onFinish}>
      {
        columns.map((n,i) => {
          const {type = 'input'} =n, C = components[type]
          // console.log(C(n))
          return <FormItem label={n.label} name={n.name} key={i}>{C(n)}</FormItem>
        })
      }
      {/* 内容是什么？？ */}
      <FormItem {...tailLayout}>
        <Button type="primary" htmlType="submit" style={{marginRight: '20px'}}>提交</Button>
        <Button htmlType="button" onClick={onReset}>重置</Button>
      </FormItem>
    </Form>
  )
}

FormComponent.propTypes = {
  columns: ProTypes.array.isRequired,
  data: ProTypes.object,
  cRef:ProTypes.object
}
export default FormComponent