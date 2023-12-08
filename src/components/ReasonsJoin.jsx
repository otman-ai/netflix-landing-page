import React from 'react'
import { Title } from './Title';
import { Card } from './Card';
import {Story, Deal, Devices, Heart} from './Icons'
export const ReasonsJoin = () => {

  return (
    <div>
        <Title title="More Reasons to Join"/>
        <div className='lg:flex lg:space-x-4 pt-4 space-y-3 lg:space-y-0'>
        <Card title='Stories tailored to your taste' Icon={<Story/>}/>
        <Card title='Cancel or switch plans anytime' Icon={<Deal/>}/>
        <Card title='A place just for kids' Icon={<Heart/>}/>
        <Card title='For your phone, tablet, laptop, and TV' Icon={<Devices/>}/>


        </div>
    </div>
  )
}
