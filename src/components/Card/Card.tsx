import { Card, CardContent, Typography } from '@mui/material'
import Image from 'next/image'
import qrCode from '/public/assets/images/image-qr-code.png'

function CardComponet() {
  return (
    <>
      <Card className='container mx-auto mt-40 w-60 rounded-xl'>
        <CardContent>
          <Image
            className='rounded-xl'
            src={qrCode}
            alt="qr-code"
            width={300}
            height={300}
            priority
          />
          <Typography className='text-center text-sm font-bold mt-4'>
            Improve your front-end skills by building projects
          </Typography>

          <Typography className='text-center my-3 text-xs w-48 justify-center' color='text.secondary'>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default CardComponet;
