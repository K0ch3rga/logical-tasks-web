import React from 'react';
import {sharedStyles} from "@/styles/sharedStyles";

export const AuthPage: React.FC = () => {
    return (
        <div style={{textAlign: 'center', padding: '20px'}}>
            <h1 style={sharedStyles.title}>Авторизация</h1>
            <form style={{display: 'inline-block', textAlign: 'left'}}>
                <div style={{marginBottom: '16px'}}>
                    <label style={sharedStyles.label}>
                        Email
                        <input
                            type="email"
                            style={{...sharedStyles.inputField, display: 'block', marginTop: '8px'}}
                            placeholder="ivanov.ivan@email.ru"
                        />
                    </label>
                </div>
                <div style={{marginBottom: '16px'}}>
                    <label style={sharedStyles.label}>
                        Пароль
                        <input
                            type="password"
                            style={{...sharedStyles.inputField, display: 'block', marginTop: '8px'}}
                            placeholder="********"
                        />
                    </label>
                </div>
                <button type="submit" style={sharedStyles.buttonSave}>
                    Войти
                </button>
            </form>
        </div>
    );
};
