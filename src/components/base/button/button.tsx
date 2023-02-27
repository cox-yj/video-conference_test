import { Button } from 'antd'
import { ButtonProps } from 'antd/lib/button'
import * as React from 'react'
import './index.less'
import 'antd/es/button/style/index.css'
import classNames from 'classnames'
import { prefixCls } from '../index'
export type TKButtonProps = ButtonProps & {
  sizetype?: 'fill' | 'large' | 'middle' | 'small'
}

const InternalButton: React.ForwardRefRenderFunction<unknown, TKButtonProps> = (props, refs) => {
  const { sizetype = 'large', className } = props
  const customizePrefixCls = `${prefixCls}-btn`
  const classes = classNames(
    customizePrefixCls,
    {
      [`${customizePrefixCls}-${sizetype}`]: sizetype
    },
    className
  )

  return <Button className={classes} {...props}></Button>
}

const TKButton = React.forwardRef<unknown, TKButtonProps>(InternalButton)
export default TKButton
