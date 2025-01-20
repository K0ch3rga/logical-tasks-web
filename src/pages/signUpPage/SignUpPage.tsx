'use client';
import React, {useState} from 'react';
import {Box, TextField, Button, Typography, Snackbar, Alert} from '@mui/material';
import Link from 'next/link';
import {sharedStyles} from '@/styles/sharedStyles';

export const SignUpPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        password: '',
    });
    const [snackbar, setSnackbar] = useState<{
        open: boolean;
        message: string;
        severity: 'success' | 'error' | 'warning' | 'info';
    }>({
        open: false,
        message: '',
        severity: 'success',
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
        setErrors({...errors, [name]: ''});
    };

    const validate = () => {
        const newErrors = {fullName: '', email: '', password: ''};
        let isValid = true;

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Введите ваше имя.';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Введите email.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Некорректный email.';
            isValid = false;
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Введите пароль.';
            isValid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = 'Пароль должен содержать не менее 6 символов.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            try {
                console.log('Отправка данных:', formData);
                setSnackbar({
                    open: true,
                    message: 'Регистрация прошла успешно!',
                    severity: 'success',
                });
                setFormData({fullName: '', email: '', password: ''});
            } catch (error) {
                setSnackbar({
                    open: true,
                    message: 'Ошибка регистрации. Попробуйте снова.',
                    severity: 'error',
                });
            }
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar({...snackbar, open: false});
    };

    return (
        <Box
            sx={{
                textAlign: 'center',
                padding: '70px',
                backgroundColor: 'white',
                borderRadius: 1,
                boxShadow: 3,
                mx: 'auto',
            }}
        >
            <Typography sx={{mb: '37px', ...sharedStyles.title, fontWeight: 700}}>Регистрация</Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}
            >
                <Box sx={{marginBottom: '16px'}}>
                    <Typography sx={{...sharedStyles.label, fontWeight: 500}}>Фамилия и имя</Typography>
                    <TextField
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        fullWidth
                        error={!!errors.fullName}
                        helperText={errors.fullName}
                        placeholder="Фамилия Имя"
                        sx={{
                            '& .MuiInputBase-root': {
                                ...sharedStyles.inputField,
                                borderColor: errors.fullName ? 'red' : 'transparent',
                                '&:hover': {
                                    borderColor: errors.fullName ? 'red' : 'inherit',
                                },
                            },
                        }}
                    />
                </Box>
                <Box sx={{marginBottom: '16px'}}>
                    <Typography sx={{...sharedStyles.label, fontWeight: 500}}>Email</Typography>
                    <TextField
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email}
                        placeholder="Email"
                        sx={{
                            '& .MuiInputBase-root': {
                                ...sharedStyles.inputField,
                                borderColor: errors.email ? 'red' : 'transparent',
                                '&:hover': {
                                    borderColor: errors.email ? 'red' : 'inherit',
                                },
                            },
                        }}
                    />
                </Box>
                <Box sx={{marginBottom: '56px'}}>
                    <Typography sx={{...sharedStyles.label, fontWeight: 500}}>Пароль</Typography>
                    <TextField
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        fullWidth
                        error={!!errors.password}
                        helperText={errors.password}
                        placeholder="********"
                        sx={{
                            '& .MuiInputBase-root': {
                                ...sharedStyles.inputField,
                                borderColor: errors.password ? 'red' : 'transparent',
                                '&:hover': {
                                    borderColor: errors.password ? 'red' : 'inherit',
                                },
                            },
                        }}
                    />
                </Box>
                <Button
                    type="submit"
                    sx={{
                        ...sharedStyles.buttonSave,
                        margin: '0 auto 32px auto',
                        width: '204px',
                        height: '48px',
                    }}
                >
                    Зарегистрироваться
                </Button>
            </Box>
            <Typography sx={{...sharedStyles.label}}>
                У тебя уже есть аккаунт?{' '}
                <Link href="/auth" style={{color: '#FD7118'}}>
                    Вход
                </Link>
            </Typography>
            <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{width: '100%'}}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};
