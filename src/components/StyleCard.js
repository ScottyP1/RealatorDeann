import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function StyleCard({ title, description, bgColor, bgImg, align, logo }) {
    return (
        <Card className="w-[450px] h-[450px] overflow-hidden mx-4 mb-8">
            {/* Width adjusts based on screen size */}
            <CardContent
                className={`w-full h-full flex flex-col items-center justify-center ${!bgImg && bgColor} text-white`}
                style={
                    bgImg
                        ? {
                            backgroundImage: `url(${bgImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundAttachment: 'fixed',
                        }
                        : {}
                }
            >
                {bgImg ? (
                    <>
                        {/* Logo */}
                        <img src={logo} alt="Logo" className="w-[300px] h-[200px]" />
                    </>
                ) : (
                    <>
                        {/* Title */}
                        <Typography
                            gutterBottom
                            variant="h4"
                            component="div"
                            className="font-bold text-center"
                        >
                            {title}
                        </Typography>
                        {/* Description */}
                        <Typography
                            variant="body1"
                            className="text-gray-600 px-4 text-center"
                        >
                            {description}
                        </Typography>
                    </>
                )}
            </CardContent>
        </Card>
    );
}
