import * as React from 'react'

const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) return customizePrefixCls

  return suffixCls ? `ant-${suffixCls}` : 'ant'
}

// export const ConfigContext = React.createContext<ConfigConsumerProps>({
//   // We provide a default function for Context without provider
//   getPrefixCls: defaultGetPrefixCls
// });
