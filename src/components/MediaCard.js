import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { IoBedOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";
import { Box } from '@mui/material';

export default function MediaCard({ imageSrc, price, address, bed, bath }) {
    return (
        <div className="transition-transform transform hover:scale-105">
            <Card className="duration-300">
                <CardMedia
                    className="w-full h-[400px] object-cover"
                    image={imageSrc}
                />
                <CardContent className="">
                    <Typography gutterBottom variant="h5" component="div" className="font-bold">
                        {price}
                    </Typography>
                    <Typography variant="body2" className="text-gray-400">
                        {address}
                    </Typography>
                    <Box variant="body2" className="text-black flex items-center">
                        <span className="flex items-center mr-6">
                            {bed} <IoBedOutline size={24} className='ml-2' />
                        </span>
                        <span className="flex items-center">
                            {bath} <PiBathtubLight size={24} className="ml-2" />
                        </span>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
}
