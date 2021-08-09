import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { IconButton } from '@material-ui/core';
import { IconButtonProps } from '@material-ui/core/IconButton';

interface TooltipIconButtonProps extends IconButtonProps {
  title: string;
  icon: React.ReactNode;
  label?: string;
  href?: string;
}

export function TooltipIconButton(props: TooltipIconButtonProps): JSX.Element {
  return (
    <Tooltip title={props.title}>
      <IconButton>{props.icon}</IconButton>
    </Tooltip>
  );
}
