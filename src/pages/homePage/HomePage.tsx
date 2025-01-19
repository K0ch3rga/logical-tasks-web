'use client';
import React from "react";
import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import {sharedStyles} from "@/styles/sharedStyles";

const Home: React.FC = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                position: "relative",
                backgroundColor: "#E6E6E6",
                minHeight: "100vh",
                padding: "13px 100px",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 10,
                    right: '-50px',
                    height: '100vh',
                    width: '100vw',
                    backgroundImage: 'url(/images/main_image.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right center',
                    zIndex: 0,
                }}
            />

            <Box sx={{ position: "relative", zIndex: 1 }}>
                <AppBar
                    position="static"
                    sx={{
                        mb: '126px',
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        padding: isSmallScreen ? "0 16px" : "0 40px",
                    }}
                >
                    <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Box>
                            <Image
                                src="/images/logo.png"
                                alt="Логотип"
                                width={120}
                                height={40}
                            />
                        </Box>
                        <Box>
                            <Link href="/auth" passHref>
                                <Button
                                    variant="outlined"
                                    style={{
                                        marginRight: '16px'
                                    }}
                                    sx={{
                                        ...sharedStyles.buttonSave,
                                        width: "160px",
                                        height: "40px",
                                        marginRight: "10px",
                                        background: "#FFFFFF",
                                        color: "#FD7118",
                                        border: "1px solid #FD7118",
                                    }}
                                >
                                    Войти
                                </Button>
                            </Link>
                            <Link href="/signup" passHref>
                                <Button
                                    variant="contained"
                                    sx={{
                                        ...sharedStyles.buttonSave,
                                        width: "160px",
                                        height: "40px",
                                        background: "#FD7118",
                                    }}
                                >
                                    Регистрация
                                </Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </AppBar>

                <Container sx={{ textAlign: "start" }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontFamily: "Roboto",
                            fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: isSmallScreen ? "28px" : "56px",
                            lineHeight: "56px",
                            color: "#0A1047",
                            marginBottom: 2,
                        }}
                    >
                        Логика и тема <br/> в каждой задаче — <br/> развитие через решение
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: "Roboto",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "28px",
                            color: "#0A1047",
                            maxWidth: "600px",
                            margin: "0 0 27px 0",
                        }}
                    >
                        Сервис для создания логических задач в игровой форме, адаптированных под различные темы и уровни
                        сложности, способствует развитию аналитического мышления и внимания.
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "start", marginBottom: '35px', flexWrap: "wrap" }}>
                        <Button
                            variant="contained"
                            sx={{
                                ...sharedStyles.buttonSave,
                                mr: '40px',
                                background: "#FECF44",
                                color: "#FFFFFF",
                                width: "160px",
                                height: "48px",
                                border: "1px solid #FFFFFF",
                                borderRadius: 4,
                            }}
                        >
                            Кроссворд
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                ...sharedStyles.buttonSave,
                                mr: '40px',
                                background: "#FECF44",
                                color: "#FFFFFF",
                                width: "160px",
                                height: "48px",
                                border: "1px solid #FFFFFF",
                                borderRadius: 4,
                            }}
                        >
                            Тест
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                ...sharedStyles.buttonSave,
                                background: "#FECF44",
                                color: "#FFFFFF",
                                width: "160px",
                                height: "48px",
                                border: "1px solid #FFFFFF",
                                borderRadius: 4,
                            }}
                        >
                            и другое
                        </Button>
                    </Box>
                    <Link href="/" passHref>
                        <Button
                            variant="contained"
                            sx={{
                                ...sharedStyles.buttonSave,
                                width: "204px",
                                height: "48px",
                                fontSize: "16px",
                                background: "#FD7118",
                            }}
                        >
                            Попробовать
                        </Button>
                    </Link>
                </Container>
            </Box>
        </Box>
    );
};

export default Home;
