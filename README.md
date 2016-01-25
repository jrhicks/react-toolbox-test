react-toolbox-test
============

This is a small proof of concept app that tests react-toolbox's ability
to offer an Admin style interface.  

Previously I had been exploring MDL Lite such as react-mdl.  I ran into
problems with react-mdl because the material design lite library its built
on is not react friendly and manipulates the DOM and results in invarient
errors.

Admin Interface requirements achieved in this test

[x] An app bar with a left "App Selector" drop down.

[x] A tab bar

[x] A drawer (nestled under the tab bar).

[x] A drawer with nested list items.

Installing
=======

git clone https://github.com/jrhicks/react-toolbox-test.git

cd react-toolbox-test

npm install

npm run start

Customization
======

Since React Toolbox styles are written in CSS it's pretty easy to customize your components. We have several ways:

#### Via React Toolbox Loader

Thanks to the power of SASS, all components in React Toolbox are configured from a variables file. The best way to customize your build is to create a custom configuration SASS file overriding configuration variables like colors or sizes.

This setup utilizes "toolbox-loader"[https://github.com/react-toolbox/toolbox-loader] which
allows us to prepend a config (/theme.scss) to each SASS build which allows us to override
styles specified in react-toolbox's configuration files.

#### Via className property

Generally each component will have a className prop so you can tell the class name you want to keep in the root node of the resulting markup. All markup is style with the lowest specificity level so you can just nest one level in your CSS and the result will be applied. Consider this example:

const CustomButton = () => (
  <Button className='customized' label='Custom button' />
);
If you browse the resulting markup you will see data attributes like data-role="label" so you can avoid styling directly tag names. You can now write your CSS:

.customized > [data-role="label"] {
  color: green;
  font-weight: bold;
}

#### Combination and Dramatic Customizations

Inside of /app/views/MainLayout I combine and rewrite react-toolbox components to meet the specific needs of the project.

Additional Documentation
=========

* http://react-toolbox.com/
