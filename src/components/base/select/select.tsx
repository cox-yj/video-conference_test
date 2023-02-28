// import { Select } from 'antd'
import { SelectProps } from 'antd/lib/select'
import { Select } from 'antd'
import * as React from 'react'
import 'antd/es/select/style/index.css'
import './index.less'
import classNames from 'classnames'
import { prefixCls } from '../index'

export type TKSelectProps = SelectProps & {
  componenttype?: 'text' | 'password' | 'search'
  type?: 'select' | 'button'
  sizetype?: 'fill' | 'large' | 'small'
}

const InternalSelect: React.ForwardRefRenderFunction<unknown, TKSelectProps> = (props) => {
  const { className, type = 'select', sizetype } = props
  const customizePrefixCls = `${prefixCls}-select`
  const classes = classNames(
    customizePrefixCls,
    {
      [`${customizePrefixCls}-customize-${type}`]: type,
      [`${customizePrefixCls}-${sizetype}`]: sizetype
    },
    className
  )
  return <Select className={classes} {...props}></Select>
}

const TKSelect = React.forwardRef<unknown, TKSelectProps>(InternalSelect)

export default TKSelect
