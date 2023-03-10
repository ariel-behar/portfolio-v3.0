import { useEffect, useState } from 'react'

import styled from '@mui/material/styles/styled'

import ContactForm from '../../components/SectionsComponents/SeventhSectionComponents/ContactForm'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'

const StyledSectionBox = styled(Box)`
    background-image: url('https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/backgrounds/phone-blurred.jpg');
    background-attachment: fixed; 
    background-size: cover;
    background-position: right center;
`

const StyledDarkStack = styled(Stack)`
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
`

const StyledLogoImg = styled('img')`
    position: absolute;
    top: 20px;
    left: -5px;
    height: 75px;
    width: 75px;

    @media (max-width: 499px){
        top: -20px;
        left: -37px;
        height: 66px;
        width: 66px;
    }
`

const StyledSocialIconStack = styled(Stack)`
    a{
        height: auto;
        text-align: center;
    }
    img {
        width: auto;
        height: 128px;
    }

    @media (max-width: 499px){
        img {
            height: 100px;
        }
    }
    
`
interface Props {
    loadSectionHandler: (sectionNum: number) => void
}

function SeventhContactSection({ loadSectionHandler }: Props) {
    const [formSubmitSuccess, setFormSubmitSuccess] = useState<boolean>(false)

    useEffect(() => {
        loadSectionHandler(8)
    },[loadSectionHandler])

    const formSubmitSuccessHandler = (bool: boolean) => {
        setFormSubmitSuccess(bool)
    }


    return (
        <StyledSectionBox component='section' id='seventh-section' py={4} >
            <Container>
                <Grid container spacing={{ xs: 2, md: 0 }}>
                    <Grid item xs={12} md={7} lg={6}>
                        <StyledDarkStack px={3} pb={2} minHeight='392px' direction='column'>
                            <Stack direction='row' position='relative' justifyContent='center' alignItems='center' minHeight='120px'>
                                <StyledLogoImg src="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/logo/logo.png" alt="logo" />
                                <Typography variant='h4' component='h5' color='text.secondary'>CONTACT ME</Typography>
                            </Stack>

                            {
                                !formSubmitSuccess
                                    ? <>
                                        <Typography variant='body1' component='p' color='text.secondary' textAlign='justify'>Remarks? Comments? Suggestions? Need a website done or just saying "hi"? Leave your input below and you'll get a response from me within the next 24 hours</Typography>
                                        <ContactForm formSubmitSuccessHandler={formSubmitSuccessHandler} />
                                    </>
                                    : <Stack direction='column' justifyContent='center' alignItems='center' pt={4} spacing={2}>
                                        <Typography variant='h3' component='p' textAlign='center' color='white'>Thank you!</Typography>
                                        <Typography variant='h5' component='p' textAlign='center' color='success.light'>Your form has successfully been submitted!</Typography>
                                    </Stack>
                            }
                        </StyledDarkStack>
                    </Grid>

                    <Grid item xs={12} md={1} lg={2}></Grid>

                    <Grid item xs={12} md={4}>
                        <StyledDarkStack p={4} >
                            <Typography variant='h4' component='h5' color='text.secondary' textAlign='center' mb={3}>FIND ME ON</Typography>

                            <StyledSocialIconStack direction='row' justifyContent='space-evenly' mb={3}>
                                <Link href="https://www.linkedin.com/in/ariel-behar/" target="_blank" mr={1}>
                                    <img src="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/icons/linkedin.svg" alt="LinkedIn Logo" />
                                </Link>
                                <Link href="https://github.com/ariel-behar" target="_blank" ml={1}>
                                    <img src="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/icons/github.svg" alt="Github Logo" />
                                </Link>
                            </StyledSocialIconStack>

                            <Typography variant='h6' component='p' color='text.secondary' textAlign='center' mb={3}>OR EMAIL ME DIRECTLY AT</Typography>

                            <Typography variant='body1' component='p' color='text.secondary' textAlign='center' mb={3}>ariel.behar@hotmail.com</Typography>

                        </StyledDarkStack>
                    </Grid>
                </Grid>
            </Container>
        </StyledSectionBox>
    )
}

export default SeventhContactSection