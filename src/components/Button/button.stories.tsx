import React from 'react'
import { Button } from './Button'

export const ComButton = () => (
  <div>
    默认
    <div className='m-margin-bottom-20'>
      <Button>默认</Button>
      <Button type='primary'>主色</Button>
      <Button type='success'>成功</Button>
      <Button type='danger'>危险</Button>
      <Button type='link'>Link</Button>
      <Button type='link' href='#/supply_chain/purchase/analysis?tab=3' target='_blank'>
        链接
      </Button>
    </div>
    <br />
    plain
    <div className='m-margin-bottom-20'>
      <Button plain>默认</Button>
      <Button plain type='primary'>
        主色
      </Button>
      <Button plain type='success'>
        成功
      </Button>
      <Button plain type='danger'>
        危险
      </Button>
      <Button plain type='link'>
        Link
      </Button>
    </div>
    <br />
    disabled
    <div className='m-margin-bottom-20'>
      <Button disabled>默认</Button>
      <Button disabled type='primary'>
        主色
      </Button>
      <Button disabled type='success'>
        成功
      </Button>
      <Button disabled type='danger'>
        危险
      </Button>
      <Button disabled type='link'>
        Link
      </Button>
      <Button disabled plain>
        默认
      </Button>
      <Button disabled plain type='primary'>
        主色
      </Button>
      <Button disabled plain type='success'>
        成功
      </Button>
      <Button disabled plain type='danger'>
        危险
      </Button>
      <Button disabled plain type='link'>
        Link
      </Button>
    </div>
    <br />
    size
    <div className='m-margin-bottom-20'>
      <Button size='small'>小的</Button>
      <Button>默认</Button>
      <Button size='large' loading>
        大的
      </Button>
    </div>
    <br />
    block
    <div className='m-margin-bottom-20'>
      <Button block plain>
        block
      </Button>
    </div>
  </div>
)

export default {
  title: '表单/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
