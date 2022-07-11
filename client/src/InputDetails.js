import {React, useState} from 'react'
import axios from 'axios'

export default function InputDetails() {
    const [spouseName, setSpouseName] = useState('');
    const [spouseAge, setSpouseAge] = useState('');
    const [Rank, setRank] = useState('');
    const [relationship, setRealtionship] = useState('');
    const [clName, setClname] = useState('');
    const [email, setEmail] = useState('');
    const [clAge, setClage] = useState('');
    const [occupation, setOccoupation] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [frontLicense, setFrontLicense] = useState('');
    const [backLicense, setBackLicense] = useState('');
    const [nationalId, setNationalId] = useState('');
    const [ssn, setSsn] = useState('');

const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/routes', {spouseName, spouseAge, Rank, relationship, clName, email, clAge, occupation, phoneNo, ssn}).then(
            (res) => {
                console.log(res)
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Spouse full name</label>
            <input type="text"  placeholder="Enter Spouse Name" value={spouseName} required onChange={(e) => setSpouseName(e.target.value)}/>
            </div>
            <div>
            <label>Spouse Age</label>
            <input type="number"  placeholder=" Enter Spouse Age" value={spouseAge} onChange={(e) => setSpouseAge(e.target.value)} />
            </div>
            <div>
            <label>Rank</label>
            <input type="text"  placeholder="Rank in the army" value={Rank} onChange={(e) => setRank(e.target.value)} />
            </div>
            <div>
            <label>Realtionship Status</label>
            <select value={relationship} onChange={(e) => setRealtionship(e.target.value)}>
                <option value="married">Married</option>
                <option value="engaged">Engaged</option>
                <option value="divorced">Divorced</option>
            </select>
            </div>
                <br/>
            {/* cl personal details */}
            <div>
            <label>Enter your full name</label>
            <input type="text"  placeholder="enter cl name" value={clName}  onChange={(e) => setClname(e.target.value)}/>
            </div>
            <div>
            <label>Enter your email</label>
            <input type="text"  placeholder="enter email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
            <label>your age </label>
            <input type="number"  placeholder="enter cl age" value={clAge} onChange={(e) => setClage(e.target.value)} />
            </div>
            <div>
            <label>Occupation</label>
            <input type="text"  placeholder="enter cl occupation" value={occupation} onChange={(e) => setOccoupation(e.target.value) }/>
            </div>
            <div>
            <label>Enter your Social Security Number</label>
            <input type="number"  placeholder="enter SSN" value={ssn} onChange={(e) => setSsn(e.target.value) }/>
            </div>
            <div>
            <label>Attach the front of your driving license </label>
            <input type="file" value={frontLicense} placeholder="driving license front" onChange={(e) => setFrontLicense(e.target.value)} />
            </div>
            <div>
            <label>Attach the back of your driving license</label>
            <input type="file" value={backLicense}  placeholder="driving license back" onChange={(e) => setBackLicense(e.target.value)}/>
            </div>
            <div>
                <label>Attach the front of your national Id </label>
            <input type="file" value={nationalId} placeholder="National Id" onChange={(e) => setNationalId(e.target.value)}/>
            </div>
            <div>
                <label>Enter your phone number</label>
            <input type="number"  placeholder="enter your phone number" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)}/>
            </div>
            <input type='submit' onSubmit={handleSubmit} />
        </form>
    </div>
  )
}
