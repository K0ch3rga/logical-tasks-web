import {GetServerSideProps} from "next";
import {ProfilePage} from "@/pages/profilePage/ProfilePage";

interface InitialData {
    fullName: string;
    email: string;
}

export const Profile = async ({initialData}: { initialData: InitialData }) => {
    const mockData: InitialData = {
        fullName: "Иванов Иван",
        email: "ivanov.ivan@email.ru",
    };
    console.log(initialData);
    return <ProfilePage initialData={mockData}/>;
};

export const getServerSideProps: GetServerSideProps = async () => {
    const mockData: InitialData = {
        fullName: "Иванов Иван",
        email: "ivanov.ivan@email.ru",
    };

    return {
        props: {
            initialData: mockData,
        },
    };
};
