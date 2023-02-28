import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'
import * as React from 'react'
import 'antd/es/input/style/index.css'
import './index.less'
import classNames from 'classnames'
import { prefixCls } from '../index'

export type TKInputProps = InputProps & {
  componenttype?: 'text' | 'password' | 'search'
}

const InternalInput: React.ForwardRefRenderFunction<unknown, TKInputProps> = (props) => {
  const { className, type = 'default', componenttype = 'text' } = props
  const customizePrefixCls = `${prefixCls}-input`
  const classes = classNames(
    customizePrefixCls,
    {
      [`${customizePrefixCls}-customize-${type}`]: type
    },
    className
  )
  if (componenttype === 'password') {
    return <Input.Password className={classes} {...props} />
  } else if (componenttype === 'search') {
    return <Input.Search className={classes} {...props} />
  }
  return <Input className={classes} {...props}></Input>
}

const TKInput = React.forwardRef<unknown, TKInputProps>(InternalInput)

export default TKInput
