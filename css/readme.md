# css

drupal css documentation
smaccs.com
how to add css

## KSS organization

### base:
  base.css
  list.css
  nav.css
  table.css
  form.css
  button.css
  image.css
  video.css
  ckeditor.css
  utility.css
  links.css

### component
content.css (node n stuff)
list-items

#### component navigation
  menu-dropdown
  menu-vertical
  menu-horizontal
  
### Component drupal
  tabs.css
  actions.css
  messages.css
  pager.css
  search.css
  login.css
  breadcrump.css
  branding.css
  progress.css
  user.css
  forum.css

### Layout
page-layout.css
grid.css


### theme
typography.css
colors.css


/*
#css file example

Description of the buttons and that you can push em.

.button—blue - the blue botton
.button—green - the blue botton
:hover - Highlight the button when hovered.

Markup:
<a href=“#” class=“button $modifierClass”>Link Button</a>
<button class=“button $modifierClass”>Button Element</button>

Styleguide 20.0
*/
.button {
  border: 1px solid gray;
  display: inline-block;
  background: gray;
}
.button:hover {
  background: red;
}
.button—blue {
  background: lightblue;
}
.button—green {
  background: green;
}
