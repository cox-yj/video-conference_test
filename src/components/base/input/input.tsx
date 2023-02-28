import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'
import * as React from 'react'
import 'antd/es/input/style/index.css'
import './index.less'
import classNames from 'classnames'
import { prefixCls } from '../index'
export type TKInputProps = InputProps & {
  sizetype?: 'fill' | 'large' | 'middle' | 'small'
}

const InternalInput: React.ForwardRefRenderFunction<unknown, TKInputProps> = (props, refs) => {
  const { sizetype, className, type = 'default' } = props
  const customizePrefixCls = `${prefixCls}-input`
  const classes = classNames(
    customizePrefixCls,
    {
      [`${customizePrefixCls}-${sizetype}`]: sizetype,
      [`${customizePrefixCls}-customize-${type}`]: type
    },
    className
  )

  return <Input className={classes} {...props}></Input>
}

const TKInput = React.forwardRef<unknown, TKInputProps>(InternalInput)
export default TKInput
