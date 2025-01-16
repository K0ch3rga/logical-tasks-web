import React from 'react';
import { sharedStyles} from "@/styles/sharedStyles";

export const SignUpPage: React.FC = () => {
    return (
        <div>
            <h1 style={sharedStyles.title}>Регистрация</h1>
            <form>
                <label style={sharedStyles.label}>
                    Фамилия и имя
                    <input type="text" style={sharedStyles.inputField} placeholder="Иванов Иван" />
                </label>
                <label style={sharedStyles.label}>
                    Email
                    <input type="email" style={sharedStyles.inputField} placeholder="ivanov.ivan@email.ru" />
                </label>
                <label style={sharedStyles.label}>
                    Пароль
                    <input type="password" style={sharedStyles.inputField} placeholder="********" />
                </label>
                <div>
                    <button type="button" style={sharedStyles.buttonCancel}>Отмена</button>
                    <button type="submit" style={sharedStyles.buttonSave}>Сохранить</button>
                </div>
            </form>
        </div>
    );
};

