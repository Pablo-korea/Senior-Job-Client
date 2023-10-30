// import styled from 'styled-components';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DropDown = styled(FormControl)({
    width: '200px',
    height: '50px',
    size: 'small'
});

const DropDownLabel = styled(InputLabel)({
    fontWeight: 500,
    fontSize: '14px',
    backgroundColor: '#fff'
});

const DropDownGroup = styled(Select)({
    fontWeight: 500,
    fontSize: '14px'
});

const DropDownItem = styled(MenuItem)({
    fontWeight: 500,
    fontSize: '14px'
});

export { DropDown, DropDownLabel, DropDownGroup, DropDownItem };
