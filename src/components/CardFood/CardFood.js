import React from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {ImgContent,ImgCard, CardContainer, CardText, ColorTitle, ButtonCnt} from './styled'


const CardFood = (props) => {
return(

   <CardContainer>
     <ImgContent>
      <ImgCard src={props.image} alt={props.title} />
      </ImgContent>
        <CardText>
          <ColorTitle>
          <Typography  variant="h5">
            {props.title}
          </Typography>
          </ColorTitle>
          <Typography variant="subtitle1" color="text.secondary" >
          {props.description}
          </Typography>
          <Typography variant="h6">
            {props.price}
          </Typography>
        <ButtonCnt>
          <Button color='secondary' variant='contained'>Adicionar</Button>
          </ButtonCnt>
          </CardText>
        </CardContainer>
)

}

export default CardFood