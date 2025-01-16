'use client';

import {Box, TextField, Button, Typography, Container, IconButton, InputAdornment} from '@mui/material';
import React, {useState} from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {sharedStyles} from "@/styles/sharedStyles";

interface ProfilePageProps {
    initialData: {
        fullName: string;
        email: string;
    };
}

export const ProfilePage: React.FC<ProfilePageProps> = ({initialData}: ProfilePageProps) => {
    const [formData, setFormData] = useState({
        fullName: initialData.fullName || '',
        email: initialData.email || '',
        newPassword: '',
        confirmPassword: '',
    });

    const [showPassword, setShowPassword] = useState({newPassword: false, confirmPassword: false});
    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        newPassword: '',
        confirmPassword: '',
    });

    const handleChange = (field) => (event) => {
        setFormData({
            ...formData,
            [field]: event.target.value,
        });
    };

    const validateForm = () => {
        const newErrors = {
            fullName: '',
            email: '',
            newPassword: '',
            confirmPassword: '',
        };

        if (formData.fullName.trim() === '') {
            newErrors.fullName = 'Поле не должно быть пустым';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Введите корректный email';
        }

        if (formData.newPassword.length < 6) {
            newErrors.newPassword = 'Пароль должен быть не менее 6 символов';
        }

        if (formData.newPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Пароли не совпадают';
        }

        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === '');
    };

    const handleCancel = () => {
        setFormData({
            fullName: initialData.fullName,
            email: initialData.email,
            newPassword: '',
            confirmPassword: '',
        });
        setErrors({
            fullName: '',
            email: '',
            newPassword: '',
            confirmPassword: '',
        });
    };

    const handleSave = async () => {
        if (!validateForm()) {
            return;
        }

        try {
            console.log('Saving data:', formData);
            alert('Профиль успешно сохранён');
        } catch (error) {
            console.error('Error saving profile:', error);
            alert('Ошибка при сохранении профиля');
        }
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h5" sx={sharedStyles.title}>
                Редактирование личного кабинета
            </Typography>

            <Box component="form" noValidate autoComplete="off" sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                <Box>
                    <Typography sx={sharedStyles.label}>Фамилия имя</Typography>
                    <TextField
                        value={formData.fullName}
                        onChange={handleChange('fullName')}
                        variant="outlined"
                        fullWidth
                        error={!!errors.fullName}
                        helperText={errors.fullName}
                        sx={sharedStyles.inputField}
                    />
                </Box>
                <Box>
                    <Typography sx={sharedStyles.label}>Email</Typography>
                    <TextField
                        value={formData.email}
                        onChange={handleChange('email')}
                        variant="outlined"
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email}
                        sx={sharedStyles.inputField}
                    />
                </Box>
                <Box>
                    <Typography sx={sharedStyles.label}>Новый пароль</Typography>
                    <TextField
                        type={showPassword.newPassword ? 'text' : 'password'}
                        value={formData.newPassword}
                        onChange={handleChange('newPassword')}
                        variant="outlined"
                        fullWidth
                        error={!!errors.newPassword}
                        helperText={errors.newPassword}
                        sx={sharedStyles.inputField}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() =>
                                            setShowPassword((prev) => ({...prev, newPassword: !prev.newPassword}))
                                        }
                                        edge="end"
                                    >
                                        {showPassword.newPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
                <Box>
                    <Typography sx={sharedStyles.label}>Повторить новый пароль</Typography>
                    <TextField
                        type={showPassword.confirmPassword ? 'text' : 'password'}
                        value={formData.confirmPassword}
                        onChange={handleChange('confirmPassword')}
                        variant="outlined"
                        fullWidth
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword}
                        sx={sharedStyles.inputField}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() =>
                                            setShowPassword((prev) => ({
                                                ...prev,
                                                confirmPassword: !prev.confirmPassword
                                            }))
                                        }
                                        edge="end"
                                    >
                                        {showPassword.confirmPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                <Box sx={{display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2}}>
                    <Button variant="outlined" sx={sharedStyles.buttonCancel} onClick={handleCancel}>
                        Отмена
                    </Button>
                    <Button
                        variant="contained"
                        sx={sharedStyles.buttonSave}
                        onClick={handleSave}
                    >
                        Сохранить
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

