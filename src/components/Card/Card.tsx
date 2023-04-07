import { Card, CardContent, Typography } from '@mui/material'
import Image from 'next/image'
import qrCode from '/public/assets/images/image-qr-code.png'
import styles from './Card.module.css'

function CardComponet() {
  return (
    <>
      <Card className={styles.container}>
        <CardContent>
          <Image
            className='rounded-xl'
            src={qrCode}
            alt="qr-code"
            width={300}
            height={300}
            priority
          />
          <Typography className={`${styles.typography}`}>
            Improve your front-end skills by building projects
          </Typography>

          <Typography className={styles.typography2} color='text.secondary'>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default CardComponet;
