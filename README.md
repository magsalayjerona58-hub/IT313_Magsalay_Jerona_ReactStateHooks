# IT313 React State and Hooks

## Laboratory 5 - Lab Timer & Practice Tracker

This project is a React Native application created for IT 313 - Mobile Programming.

The application allows students to:

- Track the number of practice problems solved
- Start and stop a laboratory stopwatch
- Display "Great job!" after solving five or more problems
- Demonstrate React state and hooks

## React Concepts Used

### useState

useState is used to manage the solved counter and the running state of the stopwatch.

### useEffect

useEffect is used inside the custom useStopwatch hook to create and manage the timer interval.

### Cleanup Function

clearInterval is used to clean up the timer when the stopwatch stops or the component is unmounted.

### Conditional Rendering

Conditional rendering displays:

- "Great job!" when solved reaches 5
- "Running..." when the stopwatch is running
- "Paused" when the stopwatch is stopped

### Event Handling

Buttons use onPress event handlers to update the application state.

### Lifting State Up

LabScreen owns the shared state and passes the required data and callbacks to PracticeTracker and Stopwatch.

### Custom Hook

useStopwatch is a custom hook that manages the stopwatch seconds and timer effect.

## How to Run

Install dependencies:

```bash
npm install
npx expo start
```
