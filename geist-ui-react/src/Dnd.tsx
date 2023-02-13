import { Card } from '@geist-ui/react';
import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import './App.css';

type IWidget = {
  id: number;
  type: string;
  title: string;
  description: string
}

type WidgetProps = {
  widget: IWidget;
}

const Widget = ({ widget }: WidgetProps) => {
  const [, drag] = useDrag({
    type: widget.type,
    item: widget,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  
  return (
    <div className="widget" id={widget.id.toString()} ref={drag}>
      <h1>{widget.title}</h1>
      <p>{widget.description}</p>
    </div>
  );
};

export const Dnd = () => {
  const [widgets] = useState([
    { id: 1, type: 'header', title: 'Widget 1', description: 'This is widget 1' },
    { id: 2, type: 'section', title: 'Widget 2', description: 'This is widget 2' },
    { id: 3, type: 'footer', title: 'Widget 3', description: 'This is widget 3' },
  ]);
  const [droppedWidgets, setDroppedWidgets] = useState<number[]>([]);

  const onWidgetDrop = (widgetId: number) => {
    const newWidgetIds = droppedWidgets.slice();
    newWidgetIds.push(widgetId)
    console.log(newWidgetIds)
    setDroppedWidgets(newWidgetIds);
  };
  
  const [, drop] = useDrop(() => ({
    accept: ['header', 'section', 'footer'],
    drop: (item: IWidget) => onWidgetDrop(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }), [])

  return (
    <div className="App">
      <h1>Drag and Drop Widgets</h1>
      <div className="widgets-container">
        {widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
          />
        ))}
      </div>
      <Card
        className="drop-zone-container"
      >
        <Card.Content className="drop-zone-content">
          <div className="drop-zone" ref={drop}>
            Drop widgets here
          </div>
        </Card.Content>
      </Card>
      
      {droppedWidgets.map((widgetId, index) => {
        const widget = widgets.find(item => item.id === widgetId)
        
        if (widget) return (
          <Widget key={`widget-${widgetId}-${index}`} widget={widget} />
        );
        return <></>
      })}
    </div>
  );
};
