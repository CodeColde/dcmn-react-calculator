# DCMN Calculator
To run locally, use
`npm install && npm start`

The product is visible (here)[https://codecolde.github.io/dcmn-react-calculator/].

Conscious Dev Choices:
- I made this with an effort to spend no more than 8 hours on the project aside from deployment. This meant that I did not have time for enzyme component testing. This is something I will still need to learn.
- The calculation function looks more complicated than just `a + b`. Floating point is taken into consideration, and to ensure decimals are well calculated, I turn them into whole numbers first, then revert them back to their decimal counterparts.
- Typescript is something that would have in hindsight been more effective, simply due to the interaction between keyboard event values, display value, and calculated value, turning them into strings and numbers every so often.