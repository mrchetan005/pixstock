/* eslint-disable react/prop-types */

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function SelectSmall({ label, value, setValue, filterItems }) {
    return (
        <FormControl sx={{ m: 1, minWidth: 130, maxWidth: 280, color: 'var(--on-secondary) !important', backgroundColor: 'var(--surface-variant)', border: 'none' }} className='form-control' size="small">
            <InputLabel sx={{ textTransform: 'capitalize' }}>{label}</InputLabel>
            <Select
                value={value}
                label={label}
                name={label}
                sx={{ textTransform: 'capitalize' }}
                onChange={setValue}
            >
                <MenuItem sx={{ font: 'inherit' }} value="">
                    <em>None</em>
                </MenuItem>
                {
                    filterItems?.map((val) => (
                        <MenuItem value={val} key={val} sx={{ font: 'inherit' }}>{val}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
}