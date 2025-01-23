'use client';

import React, {useState} from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    IconButton,
    InputAdornment,
    Snackbar,
    Alert,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {sharedStyles} from '@/styles/sharedStyles';

interface ProfilePageProps {
    initialData: {
        fullName: string;
        email: string;
    };
}

export const ProfilePage: React.FC<ProfilePageProps> = ({initialData}) => {
    const [formData, setFormData] = useState({
        fullName: initialData.fullName || '',
        email: initialData.email || '',
        newPassword: '',
        confirmPassword: '',
    });

    const [showPassword, setShowPassword] = useState({
        newPassword: false,
        confirmPassword: false,
    });

    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        newPassword: '',
        confirmPassword: '',
    });

    const [snackbar, setSnackbar] = useState<{
        open: boolean;
        message: string;
        severity: 'success' | 'error';
    }>({
        open: false,
        message: '',
        severity: 'success',
    });

    const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [field]: event.target.value,
        });
        setErrors({...errors, [field]: ''});
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
            setSnackbar({
                open: true,
                message: 'Профиль успешно сохранён',
                severity: 'success',
            });
        } catch (error) {
            console.error('Error saving profile:', error);
            setSnackbar({
                open: true,
                message: 'Ошибка при сохранении профиля',
                severity: 'error',
            });
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar({...snackbar, open: false});
    };

    return (
        <Box
        >
            <Typography
                sx={{
                    ...sharedStyles.title,
                    mb: 3,
                    fontWeight: 700,
                }}
            >
                Редактирование личного кабинета
            </Typography>

            <Box component="form" noValidate autoComplete="off">
                <Box sx={{mb: 3}}>
                    <Typography sx={sharedStyles.label}>Фамилия и имя</Typography>
                    <TextField
                        value={formData.fullName}
                        onChange={handleChange('fullName')}
                        variant="outlined"
                        fullWidth
                        error={!!errors.fullName}
                        helperText={errors.fullName}
                        sx={{
                            height: '40px',
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

                <Box sx={{mb: 3}}>
                    <Typography sx={sharedStyles.label}>Email</Typography>
                    <TextField
                        value={formData.email}
                        onChange={handleChange('email')}
                        variant="outlined"
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email}
                        sx={{
                            height: '40px',
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

                <Box sx={{mb: 3}}>
                    <Typography sx={sharedStyles.label}>Новый пароль</Typography>
                    <TextField
                        type={showPassword.newPassword ? 'text' : 'password'}
                        value={formData.newPassword}
                        onChange={handleChange('newPassword')}
                        variant="outlined"
                        fullWidth
                        error={!!errors.newPassword}
                        helperText={errors.newPassword}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() =>
                                            setShowPassword((prev) => ({
                                                ...prev,
                                                newPassword: !prev.newPassword,
                                            }))
                                        }
                                    >
                                        {showPassword.newPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            height: '40px',
                            '& .MuiInputBase-root': {
                                ...sharedStyles.inputField,
                                borderColor: errors.newPassword ? 'red' : 'transparent',
                                '&:hover': {
                                    borderColor: errors.newPassword ? 'red' : 'inherit',
                                },
                            },
                        }}
                    />
                </Box>

                <Box sx={{mb: '24px'}}>
                    <Typography sx={sharedStyles.label}>Повторить новый пароль</Typography>
                    <TextField
                        type={showPassword.confirmPassword ? 'text' : 'password'}
                        value={formData.confirmPassword}
                        onChange={handleChange('confirmPassword')}
                        variant="outlined"
                        fullWidth
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() =>
                                            setShowPassword((prev) => ({
                                                ...prev,
                                                confirmPassword: !prev.confirmPassword,
                                            }))
                                        }
                                    >
                                        {showPassword.confirmPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            height: '40px',
                            '& .MuiInputBase-root': {
                                ...sharedStyles.inputField,
                                borderColor: errors.confirmPassword ? 'red' : 'transparent',
                                '&:hover': {
                                    borderColor: errors.confirmPassword ? 'red' : 'inherit',
                                },
                            },
                        }}
                    />
                </Box>

                <Box sx={{display: 'flex', justifyContent: 'flex', gap: 2}}>
                    <Button
                        onClick={handleCancel}
                        variant="outlined"
                        sx={{...sharedStyles.buttonCancel, width: '160px', height: '40px'}}
                    >
                        Отмена
                    </Button>
                    <Button
                        onClick={handleSave}
                        variant="contained"
                        sx={{...sharedStyles.buttonSave, width: '160px', height: '40px'}}
                    >
                        Сохранить
                    </Button>
                </Box>
            </Box>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{width: '100%'}}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};
