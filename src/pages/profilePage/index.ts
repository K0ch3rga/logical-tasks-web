import {GetServerSideProps} from "next";
import {ProfilePage} from "@/pages/profilePage/ProfilePage";

interface InitialData {
    fullName: string;
    email: string;
}

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

const Profile = ({initialData}: { initialData: InitialData }) => {
    return <ProfilePage initialData = {initialData}    />;
};

export default Profile;
