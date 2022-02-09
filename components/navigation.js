import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import {useRouter} from "next/router"
import Stack from "@mui/material/Stack";

const pages = [
    {display: 'music', path: 'music'},
    {display: 'bio', path: 'bio'},
    {display: 'home', path: '/'},
    {display: 'code', path: 'code'}
];

const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const router = useRouter()
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    };

    const handleNavigation = (page) => {
        console.log('routing to ' + page)
        const routePath = page === 'home' ? '/' : page
        router.push(page)
    }

    const handleCloseNavMenu = (page) => {
        setAnchorElNav(null)
        handleNavigation(page)
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="p"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                    >
                        ROB MAGEE
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <Stack direction="row" justifyContent="center" alignItems="center">
                            <IconButton
                                size="large"
                                aria-label="main menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography
                                variant="p"
                                noWrap
                                component="div"
                                sx={{mr: 2, display: {md: 'flex'}}}
                            >
                                ROB MAGEE
                            </Typography>
                        </Stack>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.display} onClick={() => handleCloseNavMenu(page.path)}>
                                    <Typography textAlign="center">{page.display}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page.display}
                                onClick={() => handleCloseNavMenu(page.path)}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {page.display}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navigation