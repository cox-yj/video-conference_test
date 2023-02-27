import { ConfigProvider } from 'antd'
import { ConfigProviderProps } from 'antd/lib/config-provider'
import React from 'react'

export type TKConfigProviderProps = ConfigProviderProps

const InternalButton: React.ForwardRefRenderFunction<unknown, TKConfigProviderProps> = (props, refs) => {
  return <ConfigProvider {...props}></ConfigProvider>
}
const TKConfigProvider = React.forwardRef<unknown, TKConfigProviderProps>(InternalButton)

TKConfigProvider['config'] = ConfigProvider.config
export default TKConfigProvider
