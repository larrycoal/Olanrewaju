import React, { useEffect, useRef} from 'react'
import { TweenMax,Power3 } from 'gsap/dist/gsap'
import CSSPlugin from 'gsap/CSSPlugin'
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

const C = CSSPlugin;
const Cards = (props) => {
    let card = useRef(null)

    useEffect(() => {
        TweenMax.from(card,1, { opacity: "0", delay: 1,ease:Power3.easeIn })
    })
    return (
        <div ref={el => card = el}>
            <Card shadow={5} style={{ width: '300px', margin: 'auto' }}>
                <CardTitle style={{ color: '#000', height: '100px', background: `url(${props.image}) center / cover` }}>{props.name}</CardTitle>
                <CardText>
                    {props.text}
                </CardText>
                <CardActions border>
                    <Button href={props.github} colored> <i style={{ "color": "black" }} class="fa fa-github" aria-hidden="true"></i> GITHUB</Button>
                    <Button href="/" colored>Live Link</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
        </div>
    )
}
export default Cards