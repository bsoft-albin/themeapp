import React from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

const PortfolioCards = ({skey,imgSrc,imgSubTitle,imgTitle}) => {


  return (
        
    <Card sx={{ width: 250 }} key={skey}>
    <div>
      <Typography level="title-lg">{imgTitle}</Typography>
      <Typography level="body-sm">{imgSubTitle}</Typography>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
      >
        <BookmarkAdd />
      </IconButton>
    </div>
    <AspectRatio minHeight="120px" maxHeight="200px">
      <img src={imgSrc}
        loading="lazy"
        alt=""
      />
    </AspectRatio>
    <CardContent orientation="horizontal">
    </CardContent>
  </Card>
  )

}


export default PortfolioCards