import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Post({author,avatar,image,content}) {
  return (
    <Card sx={{marginBottom:"10px"}}>
      <CardHeader
        avatar={
          <Avatar src={avatar} aria-label="recipe">
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={author}
        subheader="May 19, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image={image}
        alt="Paella dish"
        sx={{objectFit:"cover"}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Post