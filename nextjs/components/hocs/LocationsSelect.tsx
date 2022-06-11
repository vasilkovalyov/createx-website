import React, { useEffect, useState } from 'react'
import { ISelectOption } from '../../interfaces/form'
import { ILocationsSelect } from '../../interfaces/hocs'

import axios from 'axios'

async function loadCountries() {
    return await axios.get('https://restcountries.com/v3.1/all')
}

function compare(a, b) {
    const bandA = a.name.toLowerCase();
    const bandB = b.name.toLowerCase();
  
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
}

export default function LocationsSelect<ISelect>({ Component, onChange, rest }: ILocationsSelect<ISelect>) {
    const [locations, setLocations] = useState<ISelectOption[] | []>([])

    const onHandleChange = (value: string) => {
        onChange && onChange(value)
    }

    useEffect(() => {
        loadCountries()
        .then(res => {
            if (!res.data) return
            const formaData = res.data.map((item) => {
                return {
                    name: item.name.common,
                    value: item.fifa
                }
            })
            setLocations(formaData.sort(compare))
        })
    }, [])

    return (
        <Component options={locations} name='location' label="Location" placeholder="Choose your location" onHandleChange={(e) => onHandleChange(e)} {...rest} />
    )
}
