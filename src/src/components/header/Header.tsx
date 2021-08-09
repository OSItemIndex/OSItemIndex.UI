import React from 'react';
import { Toolbar, Typography, AppBar, Stack, IconButton } from '@material-ui/core';
import CodeSharpIcon from '@material-ui/icons/CodeSharp';
import GitHubIcon from '@material-ui/icons/GitHub';
import Routes from 'src/constants/Routes';

export function Header(): JSX.Element {
  return (
    <AppBar>
      <Toolbar variant="dense">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          OSItemIndex
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton size="large" color="inherit" target="_blank" href={Routes.swagger}>
            <CodeSharpIcon />
          </IconButton>
          <IconButton size="large" color="inherit" target="_blank" href={Routes.gitHub}>
            <GitHubIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
