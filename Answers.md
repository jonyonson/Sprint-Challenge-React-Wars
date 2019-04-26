# Answers

1.  What is React JS and what problems does it try and solve?

- React is a component library for building user interfaces. It is sometimes compared to the "View" in a "MVC" (Model-View-Controller) structure. React was built to try and solve the problem of performance issues that result from too many DOM operations in a dynamically updated site.

2.  What does it mean to _think_ in react?

- Thinking in react refers to approaching a site as a set of components in a hierarchy where data flows from the parent down.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

- Aside from the obvious syntax difference between class components and functional components, where functional components are just JS functions and class components use the newer class syntax, a functional component cannot have its own state since it cannot use `setState()`.

4.  Describe state.

- State is an object on a react component that determines how that component, or a child component, should render.

5.  Describe props.

- Props are the way components pass data throughout an application. They are immutable parameters that are passed from a parent component to a child component. In React, data flows uni-direcitonally (downward).
