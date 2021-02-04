import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, MonthView } from '@devexpress/dx-react-scheduler-material-ui';

interface IProps {
  current_date: string;
}

export const CustomScheduler: React.FC<IProps> = (props: IProps) => {
  return (
    <Paper>
      <Scheduler>
        <ViewState currentDate={props.current_date} />
        <MonthView />
      </Scheduler>
    </Paper>
  );
}

