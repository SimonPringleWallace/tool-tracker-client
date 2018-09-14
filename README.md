# The Hammer!
  The Hammer is a tool inventory managment system inspired by the need for easy
  to use accessible, and cost effective IMSs in the non-profit sector.
  Built primarily utilizing Javascript, the focus of this iteration of
  'The Hammer' remained on firm API integration with a [custom server](https://my-tool-tracker.herokuapp.com/) hosted on Heroku, documention for which can be found [here](https://github.com/SimonPringleWallace/tool-tracker-server).

  While 'The Hammer' provides a promising UI from the start, styling the many
  components and forms in an effecient and user friendly way proved challenging
  and the UI of the landing page post sign-in, while feasible, remains the focus
  of future work.

  Overall the greatest challenges came from the integration of new techniques
  and technolgies with which I was not familiar before begining this project.
  Handlebars was utilized for displaying information to the user regarding
  their collction of tools and, while this framework has many advantages,
  manuvering it into working in conjunction with various button elements proved
  laborious and when trying to tie in bootstrap modals for editing, impossible.

  Another challenge which was met with more success was the opening animation
  which triggers on the loading of the page. This animation was executed in CSS
  making use of transform, translate and keyframes, with the addition of a
  jQuery event listener utilizing toggleClass to trigger the start of the
  animation. Code for the animation itself can be found in
  [index.scss](./assets/styles/index.scss)

# Future Work
  With the most basic struction of 'The Hammer' completed, much work remains building
  it from its current proof-of-concept to a fully working (and pleasing to use)
  single page application.
   - The styling for the landing page will need to be spruced up with two
     menus, one for tool CRUD options and the other for user actions
     (sign out/ change password)

  - The option for the user to have multiple projects and to be able to add
    tools to those projects will be an addition. This is work that straddles
    both the server and client sides of the application and so it is listed
    in both locations.

 - Future iterations should also allow a user to print out a packing list
   comprised of all of the tools in a project. This list would be generated
   from the current project of their choosing


# Wireframes and User Stories

 - [Wireframes 1](https://imgur.com/iJyYuPB)
 - [Wireframes 2](https://imgur.com/X3sFKz4)

 - User Stories:
  - A user can sign up to create a new account
  - A user can sign in to their account using their credentials
  - A user can create a new tool
  - A user can see all of their tools or one specifically
  - A user can edit the name or quantity of a tool
  - A user can delete a tool
  - A user can change their password
  - A user can sign out


# Technologies Used

-Javascript
-AJAX
-JQuery
-Grunt
-Twitter Bootstrap
-Handlebars
-Git, GitHub and Git Hub Pages
-HTML
-SCSS
