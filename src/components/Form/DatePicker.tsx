import React, { useState, useEffect, useMemo } from 'react';

import dayjs, { Dayjs } from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker, DateValidationError } from '@mui/x-date-pickers';

import * as s from './StyledDateRangePicker';

interface ParamProps {
    startDate: string;
    onChange: (value: any) => void;
}

const theme = createTheme({
    components: {
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontSize: '1.6rem'
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    fontSize: '1.6rem'
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    '&.MuiDayCalendar-weekDayLabel': {
                        fontSize: '1.4rem'
                    }
                }
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    '&.MuiPickersDay-root': {
                        fontSize: '1.4rem'
                    }
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    fontSize: '1.2rem'
                }
            }
        }
    }
});

export default function DateRangePicker(props: ParamProps) {
    dayjs.extend(weekday);

    const [isDate, setDate] = React.useState<Dayjs | null>(dayjs());

    const [error, setError] = useState<DateValidationError | null>(null);

    const errorMessage = useMemo(() => {
        switch (error) {
            case 'minDate':
            case 'maxDate': {
                return '모집 마감일은 강좌 시작일로부터 최소 하루 전으로 설정해주세요.';
            }

            case 'invalidDate': {
                return '유효하지 않은 날짜 형식입니다.';
            }

            default: {
                return '';
            }
        }
    }, [error]);

    useEffect(() => {}, [isDate]);

    return (
        <s.DatePickerSection>
            <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label='마감일'
                        value={isDate}
                        onError={(newError) => setError(newError)}
                        slotProps={{
                            textField: {
                                helperText: errorMessage
                            }
                        }}
                        minDate={dayjs()}
                        maxDate={dayjs(props.startDate).add(-1, 'day')}
                        onChange={(newValue: any) => {
                            setDate(newValue.$d);
                            props.onChange(newValue.$d);
                        }}
                    />
                </LocalizationProvider>
            </ThemeProvider>
        </s.DatePickerSection>
    );
}
