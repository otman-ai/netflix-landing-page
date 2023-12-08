import React, { useState } from 'react'
import {country} from '../constants'
export const Footer = () => {
    const [selectedValue, setSelectedValue] = useState('english'); // Set the initial selected value

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <div className='w-fit h-fit space-y-5 pl-6'>
            <a href='https://help.netflix.com/contactus' className=' text-gray-400 underline decoration-gray-400 font-semibold'>Questions? Contact us.</a>
            <div className='lg:flex justify-between lg:space-x-44 pb-9'>
                <div className='lg:flex lg:justify-between w-fit h-fit'>
                    <ul className='space-y-2 text-gray-400 underline decoration-gray-400 font-semibold pt-5 text-sm '>
                        <li><a href="https://help.netflix.com/support/412">FAQ</a></li>
                        <li><a href="http://ir.netflix.com/">Investor Relations</a></li>
                        <li><a href="https://help.netflix.com/legal/privacy">Privacy</a></li>
                        <li><a href="https://fast.com/">Speed Test</a></li>
                    </ul>
                </div>
                <div className='flex justify-between w-fit h-fit'>
                    <ul className='space-y-2 text-gray-400 underline decoration-gray-400 font-semibold pt-5 text-sm '>
                        <li><a href="https://help.netflix.com/">Help Center</a></li>
                        <li><a href="https://jobs.netflix.com/jobs">Jobs</a></li>
                        <li><a href="https://www.netflix.com/ma-en/#">Cookie Preferences</a></li>
                        <li><a href="https://help.netflix.com/legal/notices">Legal Notices</a></li>
                    </ul>
                </div>
                <div className='flex justify-between w-fit h-fit'>
                    <ul className='space-y-2 text-gray-400 underline decoration-gray-400 font-semibold pt-5 text-sm '>
                        <li><a href="https://www.netflix.com/youraccount">Account</a></li>
                        <li><a href="https://www.netflix.com/watch">Ways to watch</a></li>
                        <li><a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a></li>
                        <li><a href="https://www.netflix.com/ma-en/browse/genre/839338">Only on Netflix</a></li>
                    </ul>
                </div>
                <div className='flex justify-between w-fit h-fit'>
                    <ul className='space-y-2 text-gray-400 underline decoration-gray-400 font-semibold pt-5 text-sm '>
                        <li><a href="https://media.netflix.com/">Media Center</a></li>
                        <li><a href="https://help.netflix.com/legal/termsofuse">Term  of Use</a></li>
                        <li><a href="https://help.netflix.com/contactus">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <select id="selectOption" value={selectedValue} onChange={handleChange} className="text-sm border-1 lg:px-5 rounded-md border border-white bg-black text-white  outline-none p-2" >
                <option value="arabic">Arabic</option>
                <option value="frensh">Frensh</option>
                <option value="english">English</option>
            </select>
            <p className='text-gray-400 font-semibold text-sm pt-10'>Netflix {country}</p>
        </div>
    )
}
