import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import styled from '@mui/material/styles/styled'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const StyledFlyInTextUl = styled('ul')`
    list-style: none;
    z-index: 3;
    padding-left: 0;

    &.hidden li {
        opacity: 0;
        &:nth-of-type(1) {
            transform: translate(-200px, -200px);
        }
        &:nth-of-type(2) {
            transform: translate(20px, 100px);
        }
        &:nth-of-type(3) {
            transform: translate(-150px, -80px);
        }
        &:nth-of-type(4) {
            transform: translate(10px, -200px);
        }
        &:nth-of-type(5) {
            transform: translate(-300px, 200px);
        }
        &:nth-of-type(6) {
            transform: translate(20px, -20px);
        }
        &:nth-of-type(7) {
            transform: translate(30px, 200px);
            margin-right: 0;
        }
        &:nth-of-type(8) {
            transform: translate(200px, 0);
        }
    }

    li {
        display: inline-block;
        color: ${({ theme }) => theme.palette.custom.black.main};
        transition: all 3.5s ease;

        &:nth-of-type(7) {
            margin-right: 7px;
        }
        &:last-child {
            margin-right: 0;
            font-size: 0.8rem;
        }
    }
`

function FlyInText() {
    const [isTextHidden, setIsTextHidden] = useState<boolean>(true)

    useEffect(() => {
        setIsTextHidden(false)
    }, [])

    return (
        <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'

            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1}}
            
        >
            <StyledFlyInTextUl className={`${isTextHidden ? 'hidden' : ''}`}>
                <li>
                    <Typography variant="h1" component='p'>W</Typography>
                </li>
                <li>
                    <Typography variant="h1" component='p'>E</Typography>
                </li>
                <li>
                    <Typography variant="h1" component='p'>L</Typography>
                </li>
                <li>
                    <Typography variant="h1" component='p'>C</Typography>
                </li>
                <li>
                    <Typography variant="h1" component='p'>O</Typography>
                </li>
                <li>
                    <Typography variant="h1" component='p'>M</Typography>
                </li>
                <li>
                    <Typography variant="h1" component='p'>E</Typography>
                </li>
                <li>
                    <i>TO</i>
                </li>
            </StyledFlyInTextUl>
        </Stack>
    )
}

export default FlyInText