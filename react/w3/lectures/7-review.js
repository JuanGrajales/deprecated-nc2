// If you have a component created and you want the user to be able to click on a link to view the component (i.e. webpage) how can you do this?
// step 1: decide where (normally this will go in the navbar) you want to place Link component to give the user somewhere to click, this will only change the url it will not display the component without the route component. Link syntax <Link to="/create-a-url-describing-the-page">Link name user will see</Link>
// step 2: within your Switch component add another Route component with a path attribute that matches the to attribute of the Link component you created in step 1. Route component syntax <Route exact path="/url-path-matching-to-path" render={() => <ComponentName />} />

// How to pass data from one component to another using props

// How to map through an array to display to user
