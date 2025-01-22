'use client';
import React, {useState} from 'react';
import {Box, TextField, Button, Typography, Snackbar, Alert} from '@mui/material';
import {sharedStyles} from '@/styles/sharedStyles';
import {useAuthStore} from "@/entities/store/useAuthStore";

export const AuthPage = () => {
    const [formData, setFormData] = useState({email: '', password: ''});
    const [errors, setErrors] = useState<{ email: string; password: string }>({
        email: '',
        password: '',
    });
    const [snackbar, setSnackbar] = useState<{
        open: boolean;
        message: string;
        severity: "success" | "error" | "warning" | "info";
    }>({
        open: false,
        message: '',
        severity: 'success',
    });

    const setToken = useAuthStore((state) => state.setToken);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
        setErrors({...errors, [name]: ''});
    };

    const validate = () => {
        const newErrors: { email: string; password: string } = {email: '', password: ''};

        if (!formData.email) {
            newErrors.email = 'Введите email';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Введите корректный Email.';
        }

        if (!formData.password) {
            newErrors.password = 'Введите пароль';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Пароль должен содержать минимум 6 символов.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).every((key) => newErrors[key as keyof typeof newErrors] === '');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        try {
            const response = await fetch(`${process.env.BACKEND_CONNECTION}auth/sign-in`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Ошибка авторизации');
            }

            const data = await response.json();
            setToken(data.token);

            setSnackbar({
                open: true,
                message: 'Авторизация прошла успешно!',
                severity: 'success',
            });
        } catch (error) {
            setSnackbar({
                open: true,
                message: 'Ошибка авторизации. Попробуйте еще раз.',
                severity: 'error',
            });
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
            <Typography sx={{mb: '37px', ...sharedStyles.title, fontWeight: 700}}>Авторизация</Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}
            >
                <Typography sx={{...sharedStyles.label, fontWeight: 500}}>Email</Typography>
                <Box sx={{marginBottom: '37px'}}>
                    <TextField
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email}
                        placeholder={'Email'}
                        sx={{
                            height: '40px',
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
                <Box sx={{marginBottom: '70px'}}>
                    <Typography sx={{...sharedStyles.label, fontWeight: 500}}>Пароль</Typography>
                    <TextField
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        fullWidth
                        error={!!errors.password}
                        helperText={errors.password}
                        placeholder={'Пароль'}
                        sx={{
                            height: '40px',
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
                        margin: '0 auto',
                        width: '204px',
                        height: '48px',
                    }}
                >
                    Войти
                </Button>
            </Box>
            <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{width: '100%'}}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};
