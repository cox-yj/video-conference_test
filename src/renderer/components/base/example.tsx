import React from 'react'
import { TKButton, TKInput, TKSelect } from './index'
import './style/index.less'
import { SearchOutlined } from '@ant-design/icons'

const BaseComponentExample: React.FC = () => {
  return (
    <div className="box">
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
      <div className="input-box">
        <TKInput prefix={<SearchOutlined />} />
        <TKInput placeholder="Name" />
        <TKInput componenttype="password" />
        <TKInput prefix={<SearchOutlined />} placeholder="Search" />
      </div>
      <div className="select-box">
        <TKSelect
          type="button"
          sizetype="large"
          defaultValue="Button"
          options={[
            {
              value: 'Button',
              label: 'Button'
            }
          ]}
        />{' '}
        <br />
        <TKSelect
          type="button"
          sizetype="small"
          defaultValue="Button"
          options={[
            {
              value: 'Button',
              label: 'Button'
            }
          ]}
        />
        <TKSelect
          showSearch
          sizetype="fill"
          defaultValue="Text"
          options={[
            {
              value: 'Text',
              label: 'Text'
            }
          ]}
        />
      </div>

      <div className="toast-box"></div>
    </div>
  )
}

export default BaseComponentExample
