import React from 'react'
import TKButton from './button/button'
import TKConfigProvider from './config-provider'
import TKInput from './input/input'
import './style/index.less'

const BaseComponentExample: React.FC = () => (
  <div>
    <div className="button-box">
      <TKButton type="primary" sizetype="fill">
        Button
      </TKButton>
      <TKButton sizetype="fill">Button</TKButton>
      <TKButton type="primary" sizetype="large">
        Button
      </TKButton>
      <br />
      <TKButton sizetype="large">Button</TKButton>
      <br />
      <TKButton type="primary" sizetype="middle">
        Button
      </TKButton>
      <br />
      <TKButton sizetype="middle">Button</TKButton>
      <br />
      <TKButton type="primary" sizetype="small">
        Button
      </TKButton>
      <br />
      <TKButton sizetype="small">Button</TKButton>
      <br />
      <TKButton type="link" sizetype="small">
        Button
      </TKButton>
      <br />
    </div>
  </div>
)

export default BaseComponentExample
