
import MockupProjectsCarousel from "../../components/FourthSectionComponents/MockupProjectsCarousel"
import Television from "../../components/FourthSectionComponents/Television"


import styled from "@mui/material/styles/styled"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

const StyledBox = styled(Box)`
    border: 2px solid #2e2e2e;
    border-radius: 20px;

	background: rgb(36,35,35);
	background: linear-gradient(-45deg, rgba(36,35,35,0.7175245098039216) 0%, rgba(78,75,76,0.8071603641456583) 100%);

	height: 100%;
`


function FourthPhotoshopSection() {
	return (
		<Grid container spacing={2} py={7}>
			<Grid item md={6} px={2}>
				<Box px={5} >
					<Typography variant="h4" component='h4' textAlign='center' color='text.secondary'>PSD to HTML</Typography>

					<Typography mt={2} variant="body1" component='p' textAlign='justify' color='text.secondary'>This section focuses on my ability to work with Adobe Photoshop and accurately recreate websites from a PSD file into HTML format.</Typography>
				</Box>

				<Television />
			</Grid>

			<Grid item md={6}>
				<StyledBox>
					<MockupProjectsCarousel />
				</StyledBox>
			</Grid>
			
		</Grid>
		
	)
}

export default FourthPhotoshopSection