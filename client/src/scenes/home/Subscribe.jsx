import { Box, InputBase, Divider, Typography, IconButton } from '@mui/material'
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined'
import { useState } from 'react'

const Subscribe = () => {
    const [email, setEmail] = useState("");

    return (
        <Box width="80% auto" textAlign="center" paddingTop="50px">
            <IconButton>
                <MarkEmailReadOutlinedIcon fontSize='large'/>
            </IconButton>
                <Typography variant="h3">Subscribe To Our Newsletter !</Typography>
                <Typography>and recieve ₹100 coupon for your first order when you checkout</Typography>
                <Box
                    p="2px 4px"
                    m="15px auto"
                    display="flex"
                    alignItems="center"
                    width="60%"
                    backgroundColor="#F2F2F2"
                >
                    <InputBase 
                        sx={{ml: 1, flex: 1}}
                        placeholder='Enter email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <Divider sx={{height: 28, m: 0.5}} orientation="vertical" />
                    <Typography sx={{p: "10px", "&:hover": {cursor: "pointer"}}}>
                        Subscribe
                    </Typography>
                </Box>
        </Box>
    )
}

export default Subscribe