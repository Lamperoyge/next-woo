import React from 'react';
export default function formFactory(component, props, children) {
  return React.createElement(
    component,
    props,
    children
      ? children.map((child) => formFactory(child, child.props, child.children))
      : null
  );
}
