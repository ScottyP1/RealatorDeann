import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';

export default function StyleCard({ title, description, bgColor, bgImg, logo }) {
    return (
        <Card className="w-[400px] md:w-[450px] h-[450px] overflow-hidden mx-4 mb-8">
            <CardContent
                className={`h-full flex flex-col items-center justify-center ${!bgImg && bgColor} text-white`}
                style={
                    bgImg
                        ? {
                            backgroundImage: `url(${bgImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }
                        : {}
                }
            >
                {bgImg ? (
                    <>
                        {/* Logo */}
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-[80%] max-w-[300px] h-auto mb-4"
                        />
                    </>
                ) : (
                    <>
                        {/* Title */}
                        <Box
                            variant="h4"
                            component="div"
                            className="font-bold text-center mb-2"
                        >
                            {title}
                        </Box>
                        {/* Description */}
                        <Box
                            variant="body1"
                            className="text-gray-600 px-4 text-center"
                        >
                            {description}
                        </Box>
                    </>
                )}
            </CardContent>
        </Card>
    );
}
