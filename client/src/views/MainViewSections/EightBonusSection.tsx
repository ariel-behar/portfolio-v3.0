import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import styled from '@mui/material/styles/styled'
import Typography from '@mui/material/Typography'

const StyledSectionBox = styled(Box)`
    background: rgb(180,180,180);
    background: linear-gradient(45deg, rgba(180,180,180,1) 0%, rgba(46,46,46,1) 100%);

    border-top: 3px solid ${(({ theme }) => theme.palette.custom.black.main)};
`

function EightBonusSection() {
    return (
        <StyledSectionBox component='section' id='eight-section' py={4}>
            <Container>
                <Grid container>
                    <Grid item md={4}>
                        <Stack direction='row' alignItems='center' height='100%'>
                            <img src="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/bonus.png" alt="Bonus" />
                        </Stack>
                    </Grid>
                    <Grid item md={8}>
                        <Box>
                            <Typography variant="h2" component='h4' color='text.secondary' mb={2} textAlign='center'>Humble Beginnings</Typography>

                            <Typography
                                variant="body1"
                                component='p'
                                color='text.secondary'
                                textAlign='justify'
                                mb={1}
                                sx={{ textIndent: "40px" }}
                            >
                                When you click on the button below, the first site I ever did will be revealed to you. Not much to brag about technically, but it does hold a sentimental value to me since these were the days I was making my first baby steps into the HTML/CSS skills world and I wanted to put them in action. My nephew had just been born, and this seemed like a no-brainer to who or what my first project would be devoted to.
                            </Typography>

                            <Typography
                                variant="body1"
                                component='p'
                                color='text.secondary'
                                textAlign='justify'
                                mb={1}
                                sx={{ textIndent: "40px" }}
                            >
                                I want to use this opportunity to thank you for having looked at my portfolio, and I hope you liked what you saw. Feel free to contact me through the methods listed above about anything that may come to mind.
                            </Typography>

                            <Typography
                                variant="body1"
                                component='p'
                                color='text.secondary'
                                sx={{ textIndent: "40px" }}
                                mb={1}
                            >
                                Best regards,
                            </Typography>

                            <Stack direction='row' alignItems='center'>
                                <img src="https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/signature.png" alt="Ariel Behar Signature" style={{left: "30px", position: "relative"}}/>

                                <Stack sx={{ width: '50%', marginLeft: 'auto' }}>
                                    <Button
                                        sx={{ 
                                            backgroundColor: 'custom.blue.main', 
                                            margin: '0 auto', 
                                            padding: "1rem 2.4rem",
                                            boxShadow: 7
                                        }}
                                        variant='contained'
                                        size='large'

                                    >
                                        Reveal
                                    </Button>
                                </Stack>
                            </Stack>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </StyledSectionBox>

    )
}

export default EightBonusSection