import React, { useState } from 'react';
import StyleData from './Data.module.css';
import DatePicker from '@n3/react-date-picker';
import '@n3/react-date-picker/dist/n3-date-picker.css';

function Data() {
    const [selectData1, setSelectData1] = useState(null);
    const [selectData2, setSelectData2] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const [adulits, setAdulits] = useState(0)
    const [children, setChildren] = useState(0)
    const [babies, setBabies] = useState(0)
    const [pet, setPet] = useState(0)
    const [rooms, setRooms] = useState(0)



    return (
        <form
            action="#"
            className={StyleData.md}
            onSubmit={handleSubmit}
        >
            <div className={StyleData.availabilityColumn}>
                <section>
                    <select className={StyleData.customSelect}>
                        <option value="" disabled defaultValue>Select Hotel</option>
                        <option value="Comfort">Comfort</option>
                        <option value="Standard">Standard</option>
                        <option value="Luxury">Luxury</option>
                    </select>
                </section>
            </div>
            <div className={StyleData.availabilityColumn}>
                <div className={StyleData.inputField}>
                    <label htmlFor="date-start">Check In</label>
                    <DatePicker
                        value={selectData1}
                        onChange={date => setSelectData1(date)}
                        format='dd/MM/yyyy'
                        minDate={new Date()}
                    />
                </div>
            </div>
            <div className={StyleData.availabilityColumn}>
                <div className={StyleData.inputField}>
                    <label htmlFor="date-end">Check Out</label>
                    <DatePicker
                        value={selectData2}
                        onChange={date => setSelectData2(date)}
                        format='dd/MM/yyyy'
                        minDate={new Date()}
                    />
                </div>
            </div>
            <div className={StyleData.seld}>
                <div className={StyleData.dropdown}>
                    <div className={StyleData.select} onClick={toggleDropdown}>
                        <span className={StyleData.selected}>Selected</span>
                        <div className={StyleData.caret}></div>
                    </div>
                    {isDropdownOpen && (
                        <ul className={StyleData.dropdownMenu}>
                            <li className={StyleData.action}>Adults
                                <button className={StyleData.bottone5} onClick={() => { setAdulits(adulits + 1) }}>+</button>
                                <button className={StyleData.bottone5} onClick={() => { setAdulits(adulits - 1) }}>-</button>
                                <h1>{adulits}</h1></li>
                            <li>Children (2-11)
                                <button className={StyleData.bottone5} onClick={() => { setChildren(children + 1) }}>+</button>
                                <button className={StyleData.bottone5} onClick={() => { setChildren(children - 1) }}>-</button>
                                <h1>{children}</h1></li>
                            <li>Babies(0-1)
                                <button className={StyleData.bottone5} onClick={() => { setBabies(babies + 1) }}>+</button>
                                <button className={StyleData.bottone5} onClick={() => { setBabies(babies - 1) }}>-</button>
                                <h1>{babies}</h1></li>
                            <li>Pet
                                <button className={StyleData.bottone5} onClick={() => { setPet(pet + 1) }}>+</button>
                                <button className={StyleData.bottone5} onClick={() => { setPet(pet - 1) }}>-</button>
                                <h1>{pet}</h1></li>
                            <li>Rooms
                                <button className={StyleData.bottone5} onClick={() => { setRooms(rooms + 1) }}>+</button>
                                <button className={StyleData.bottone5} onClick={() => { setRooms(rooms - 1) }}>-</button>
                                <h1>{rooms}</h1></li>
                        </ul>
                    )}
                </div>
            </div>
            <div className={StyleData.availabilityColumn}>
                <button type="submit" className={StyleData.availabilityButton}>
                    <span>Check</span> Availability
                </button>
            </div>
        </form>
    );
}

export default Data;
