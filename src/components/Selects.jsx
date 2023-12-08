import React, {useState} from 'react'

export const Selects = ({ id, values, selectedValue, setSelectedValue}) => {
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <select id={id} value={selectedValue} onChange={handleChange} className="w-full lg:w-fit text-lg font-semibold border-1 lg:px-5 rounded-md border border-white bg-black text-white  p-2" >
            {values.map((value) => (
                <option value={value} className='text-lg font-semibold'>{value}</option>

            ))}
        </select>
    );
}
