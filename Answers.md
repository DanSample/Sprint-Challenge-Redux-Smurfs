1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
2.  
3.  map()
4.  reduce()
5.  filter()

    We can use Object.create()

6.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  Actions are objects that describe how the reducers should change the store. Reducers are functions that create the new state tree based on the action. Store is the object that contains both actions and reducers, connecting the two, and holding the state tree.

7.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is like a global state accessible to everything in an application if connected to it. Component state is specific to a component and its children via props.

    Application state would be useful if multiple places in your app need to access the same state data.
    
8.  What is middleware?

    Middleware are nested functions that alter actions in some way.

9.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    redux-thunk is Redux middleware that allows us to handle actions asynchronously.

10. Which `react-redux` method links up our `components` with our `redux store`?

    connect()
