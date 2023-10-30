import React, { useState, useEffect, useMemo } from 'react';

import dayjs, { Dayjs } from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker, DateValidationError } from '@mui/x-date-pickers';

import validationLectureDate from '@utils/validation/lectureDate';
import * as s from './StyledDateRangePicker';

interface ParamProps {
    onChangeStartDate: (value: any) => void;
    onChangeEndDate: (value: any) => void;
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

    const [isStartDate, setStartDate] = React.useState<Dayjs | null>(dayjs().add(1, 'day'));
    const [isEndDate, setEndDate] = React.useState<Dayjs | null>(dayjs().add(8, 'day'));

    const [error, setError] = useState<DateValidationError | null>(null);

    const errorMessage = useMemo(() => {
        switch (error) {
            case 'maxDate':
            case 'minDate': {
                return '종료일은 시작일로부터 최소 7일 뒤로 설정해주세요.';
            }

            case 'invalidDate': {
                return '유효하지 않은 날짜 형식입니다.';
            }

            default: {
                return '';
            }
        }
    }, [error]);

    useEffect(() => {
        validationLectureDate(isStartDate, isEndDate);
    }, [isStartDate, isEndDate]);

    return (
        <s.DatePickerSection>
            <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label='시작일'
                        value={isStartDate}
                        minDate={dayjs().add(1, 'day')}
                        onChange={(newValue: any) => {
                            setStartDate(newValue.$d);
                            props.onChangeStartDate(newValue.$d);
                        }}
                    />
                    {' ~ '}
                    <DatePicker
                        label='종료일'
                        value={isEndDate}
                        onError={(newError) => setError(newError)}
                        slotProps={{
                            textField: {
                                helperText: errorMessage
                            }
                        }}
                        minDate={dayjs(isStartDate).add(7, 'day')}
                        onChange={(newValue: any) => {
                            setEndDate(newValue.$d);
                            props.onChangeEndDate(newValue.$d);
                        }}
                    />
                </LocalizationProvider>
            </ThemeProvider>
        </s.DatePickerSection>
    );
}
