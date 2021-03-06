import React from "react"
import PropTypes from "prop-types"

import CssBaseline from "@material-ui/core/CssBaseline"
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import { Helmet } from 'react-helmet'

import CustomAppBar from "../components/CustomAppBar"

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { 500: "#FF3C00" },
  },
})

const useStyles = makeStyles(theme => ({
  base: {
    display: "flex",
    minHeight: "100vh",
    '& a': {
      color: "#FFFFFF",
    },
  },
  contentGrid: {
    flexGrow: "1",
  }
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <Grid className={classes.base} direction="column" container>
      <Helmet>
        <title>Chrome OS Updates</title>
      </Helmet>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Grid item>
          <CustomAppBar />
        </Grid>
        <Grid
          container
          className={classes.contentGrid}
        >
          {children}
        </Grid>
      </MuiThemeProvider>
    </Grid>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
