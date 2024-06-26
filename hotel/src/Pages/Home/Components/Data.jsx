import React, { useState } from 'react';
import StyleData from './Data.module.css'
import Datepicker from '@n3/react-date-picker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcApplePay } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'

function Data() {

    function CustomInput({ value, onClick }) {
        return (
            <div className='input-group'>
                <input type="text" className='form-control' value={value} onClick={onClick} readOnly />
                <div className='input-group-append'>
                    <span className='input-group-text'>
                        <faCcApplePay/>
                    </span>

                </div>
            </div>
        );
    }

    const [selectData, setSelectData] = useState(null)

    return (
        <form action="#" className={StyleData.md}>
            <div>
                <h1>aaaa</h1>
                <Datepicker selected={selectData} onChange={date => setSelectData(date)} CustomInput={<CustomInput/>}/>
            </div>

            <div className={StyleData.availabilityColumn}>
                <section>
                    <select className={StyleData.customSelect}>
                        <option value="" disabled defaultValue>Select Hotel</option>
                        <option value="luxe">Luxe Hotel</option>
                        <option value="deluxe">Deluxe Hotel</option>
                        <option value="five-star">Five Star Hotel</option>
                    </select>
                </section>
            </div>
            <div className={`${StyleData.availabilityColumn}`}>
                <div className={StyleData.inputField}>
                    <label htmlFor="date-start">Check In</label>
                    <input type="text" className={StyleData.formInput} id="date-start" />
                </div>
            </div>
            <div className={`${StyleData.availabilityColumn}`}>
                <div className={StyleData.inputField}>
                    <label htmlFor="date-end">Check Out</label>
                    <input type="text" className={StyleData.formInput} id="date-end" />
                </div>
            </div>
            <div className={StyleData.availabilityColumn}>
                <a href="#" className={StyleData.availabilityButton}>
                    <span>Check</span>
                    Availability
                </a>
            </div>
        </form>
    );
}

export default Data;
