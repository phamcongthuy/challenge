---
title: Vote in the 2018 My LA2050 Activation Challenge
body_class: blueberry
---

{% if site.phase != 6 %}

# Oops!

<div class="introduction" markdown="1">
This page couldn’t be found.

You may want to visit our [home page](/) instead.
</div>

{% else %}

<style>
header, footer {
  display: none;
}
</style>

<style>
section,
.introduction {
  display: flex;
  min-height: 100vh;
  align-items: center;
  align-content: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  padding: 1.5em;
  margin: 0 -1.5em;
}
.introduction {
  background-color: rgb(125, 212, 222);
  background-image: url(/assets/images/vote-background.jpg);
  background-size: cover;
  background-position: center;
  color: white;
  font-weight: bold;
}
/*.introduction::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}*/
@media (min-width: 40em) {
  .introduction {
    margin: 0 -4.5em;
    padding: 4.5em;
  }
  .introduction p:not(.action) {
    font-size: 3em;
    font-size: 3.5vmax;
    max-width: 18em;
  }
}
.introduction .logo {
  margin-top: -3em;
  color: white;
}
.introduction .logo svg {
  width: 12em;
  height: 7.25em;
  padding: 1em;
  box-sizing: border-box;
}
.introduction .logo svg path {
  fill: currentColor;
}
@media (min-width: 60em) and (min-height: 50em) {
  .introduction .logo {
    position: absolute;
    top: 5em;
    left: 2em;
  }
}
.introduction a {
  color: inherit;
  font-weight: inherit;
}
.introduction img {
  margin-top: -3em;
  width: 20em;
  height: auto;
  margin-left: 0;
}
.introduction p {
  max-width: none;
}
.introduction .action {
  margin-top: 3em;
}

/*.introduction {
  margin-top: -4.5em;
  margin-left: -4.5em;
  margin-right: -4.5em;
  background-color: rgb(6, 179, 188);
  color: rgb(254, 254, 254);
  padding: 0 4.5em 3em;
}
.introduction a {
  color: inherit;
}
.introduction svg {
  width: 1.5em;
  height: 1.5em;
  fill: currentColor;
}*/
</style>

<style>

  
  form > ul > li:nth-child(1) {
    order: var(--order-1);
  }
  
  form > ul > li:nth-child(2) {
    order: var(--order-2);
  }
  
  form > ul > li:nth-child(3) {
    order: var(--order-3);
  }
  
  form > ul > li:nth-child(4) {
    order: var(--order-4);
  }
  
  form > ul > li:nth-child(5) {
    order: var(--order-5);
  }
  
</style>

<style>
.promotion {
  display: none;
}
hr {
  visibility: hidden;
}
form {
  text-align: center;
}
form > ul {
  margin-left: -1.5em !important;
  margin-right: -1.5em !important;
}
form > ul,
form > ul > li {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
}
form,
form h2,
form h3,
form h4,
form p,
form > ul,
form > ul > li {
  max-width: none;
}
form h2,
form h3,
form h4,
form p:last-child {
  margin-top: 3em;
}
form h2,
form h3,
form h4 {
  color: var(--primary-color) !important;
  font-weight: bold;
}
form strong {
  /*color: rgb(41, 41, 41) !important;*/ /* @midnight */
  /*font-weight: 500;*/
  color: var(--primary-color) !important;
}
form > ul > li label {
  cursor: pointer;
}
form > ul > li input {
  font-size: inherit;
  margin-bottom: 0.75em;
  position: absolute;
  opacity: 0;
}
form > ul > li .mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s;
  font-size: 1.5em;
}
form > ul > li .call-to-action,
form > ul > li .pseudo-checkbox {
  position: absolute;
  bottom: 0em;
  left: 0;
  width: 100%;
  text-align: center;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s;
  font-size: 1em;
  z-index: 1;
  box-sizing: border-box;
  background: white;
  color: var(--primary-color);
  border: 0.1875em solid var(--primary-color);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s;

  /* OPTIONAL: Align with the outer border */
  margin: calc(0px -1px);
  width: calc(100% + 2px);
}
form > ul > li .call-to-action strong,
form > ul > li .pseudo-checkbox strong {
 color: inherit !important;
 font-weight: bold;
 text-transform: uppercase;
}
form > ul > li label input:checked ~ .call-to-action,
form > ul > li label input:checked ~ .pseudo-checkbox,
form > ul > li label input:focus ~ .call-to-action,
form > ul > li label input:focus ~ .pseudo-checkbox,
form > ul > li label:hover .call-to-action,
form > ul > li label:hover .pseudo-checkbox {
  background: var(--primary-color);
  color: white;
}
form > ul > li .pseudo-checkbox {
  display: none;
}
form > ul > li label .call-to-action {
  /*background: rgba(0, 0, 0, 0.5);*/
  opacity: 1;
}
/*form > ul > li .call-to-action strong {
  display: none;
}*/
form > ul > li input:checked ~ .call-to-action {
  display: none;
}
form > ul > li input:checked ~ .pseudo-checkbox {
  /*background: rgba(0, 0, 0, 0.5);*/
  opacity: 1;
  display: flex;
}
/*form > ul > li:hover .mask {
  opacity: 0.25;
}*/
form > ul > li input:checked ~ .mask {
  opacity: 1;
}
form .blueberry .mask {
  background: rgba(6, 179, 188, 0.5); /* @blueberry */
}
form .banana .mask {
  background: rgba(255, 194, 51, 0.5); /* @banana */
}
form .strawberry .mask {
  background: rgba(237, 59, 136, 0.5); /* @strawberry */
}
form .tangerine .mask {
  background: rgba(249, 160, 51, 0.5); /* @tangerine */
}
form .lime .mask {
  background: rgba(141, 208, 59, 0.5); /* @lime */
}
form > ul > li .call-to-action svg,
form > ul > li .pseudo-checkbox svg {
  fill: currentColor;
  width: 0.75em;
  height: 0.75em;
  margin-right: 0.5em;
  border: 0.1875em solid currentColor;
  padding: 0.25em;
}
form input[type="tel"],
form input[type="email"] {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: 600;
  padding: 0.75em;
  border-radius: 0;
  width: 100%;
  max-width: none;
  box-sizing: border-box;
  text-align: center;
  border: 0.1875em solid rgb(237, 59, 136); /* @strawberry */
  border-color: rgba(0, 0, 0, 0.25);

  /* Remove Safari’s default styles for search fields */
  -webkit-appearance: none;
}

form .field-button {
  margin-top: 1.5em;
}
form .field-button button {
  margin-top: 0.375em;
  display: block;
  width: 100%;
}

@media (min-width: 40em) {
  form .field-button {
    display: flex;  
  }
  form .field-button button {
    margin-top: 0;
    display: inline-block;
    width: auto;
  }
}

form > ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
form > ul > li {
  position: relative;
  box-shadow: 0 0 1px rgba(0, 0, 0, 1);
  width: 19.5em;
  padding: 0;
  box-sizing: border-box;
  margin: 3em 1.5em;
}
form > ul > li a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 3em);
  text-decoration: none;
  background-color: var(--primary-color);
  transition: opacity 0.2s;
  opacity: 0;
}
form > ul > li a svg {
  background: var(--primary-color);
  color: white;
  width: 0.75em;
  height: 0.75em;
  padding: 0.5em;
  border-radius: 50%;
  border: 2px solid transparent;
  opacity: 0;
}
form > ul > li a:hover  svg,
form > ul > li a:active svg,
form > ul > li a:focus  svg {
  background: white;
  color: var(--primary-color);
  border-color: var(--primary-color); 
}
form > ul > li a:hover,
form > ul > li a:active,
form > ul > li a:focus {
  opacity: 0.5;
}
form > ul > li br {
  display: none;
}
form > ul > li .text {
  display: block;
  padding: 1.5em;
}
form > ul > li img {
  display: block;
}
form > ul > li .text strong {
  display: block;
}
form .banana li {
  box-shadow: 0 0 1px rgba(255, 194, 51, 1); /* @banana */
}
form .blueberry li {
  box-shadow: 0 0 1px rgba(6, 179, 188, 1); /* @blueberry */
}
form .lime li {
  box-shadow: 0 0 1px rgba(141, 208, 59, 1); /* @lime */
}
form .strawberry li {
  box-shadow: 0 0 1px rgba(237, 59, 136, 1); /* @strawberry */
}
form .tangerine li {
  box-shadow: 0 0 1px rgba(249, 160, 51, 1); /* @tangerine */
}
form > ul > li {
  display: block;
  position: relative;
  padding-bottom: 3em;
}
/*
form > ul > li label::after {
  content: "";
  background: var(--primary-color);
  color: white;
  display: block;
  padding: 0.75em 1.5em;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  height: 3em;
}
*/
form > ul > li img {
  width: 100%;
  max-width: none;
  height: 15em;
  object-fit: cover;
}
form section {
  border-width: 0.125em;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.15);
  border-color: transparent;
  padding: 3em;
  /*max-width: 40em;*/
  /*margin: 3em auto;*/
}
form section h2,
form section h3 {
  margin-top: 1.5em;
}
</style>

<style>
@media (false) {
  #sign-in-phone,
  #sign-in-email,
  #finish {
    background: rgb(254, 254, 254); /* @snow */
    color: rgb(41, 41, 41); /* @midnight */
    margin-left: -1.5em;
    margin-right: -1.5em;
    box-sizing: border-box;
    min-height: 100vh;
    position: relative;
    z-index: 2;
  }
}
#sign-in-phone,
#sign-in-email,
#finish {
  background: black;
  background: var(--primary-color, black);
  color: white;
  font-weight: 500;
  margin-left: -1.5em;
  margin-right: -1.5em;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  z-index: 2;
}
#sign-in-phone h2,
#sign-in-phone h3,
#sign-in-email h2,
#sign-in-email h3,
#finish h2,
#finish h3 {
  color: inherit !important;
}
#sign-in-phone input,
#sign-in-email input {
  margin-top: 0;
  margin-bottom: 0;
  border-color: white;
}


#sign-in-phone .action a,
#sign-in-phone button,
#sign-in-email .action a,
#sign-in-email button,
#finish .action a,
#finish button {
  background-color: black;
  background-color: var(--secondary-color, black);
  border-color: var(--secondary-color, black);
  color: white;
}

#sign-in-phone .action a:hover,
#sign-in-phone .action a:active,
#sign-in-phone .action a:focus,
#sign-in-phone button:hover,
#sign-in-phone button:active,
#sign-in-phone button:focus,
#sign-in-email .action a:hover,
#sign-in-email .action a:active,
#sign-in-email .action a:focus,
#sign-in-email button:hover,
#sign-in-email button:active,
#sign-in-email button:focus,
#finish .action a:hover,
#finish .action a:active,
#finish .action a:focus,
#finish button:hover,
#finish button:active,
#finish button:focus {
  background-color: rgb(254, 254, 254); /* @snow */
  color: var(--secondary-color, black);
}


@media (min-width: 40em) {
  #sign-in-phone,
  #sign-in-email,
  #finish {
    margin-left: -4.5em;
    margin-right: -4.5em;
  }
}
</style>


<style>

.progress {
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgb(245, 245, 245);
  color: black;
  padding: 0.75em;
  box-sizing: border-box;
  text-align: center;
}
.progress.hidden {
  display: none;
}
.progress.hidden-button .action {
  display: none;
}
.progress p {
  margin: 0;
}
.progress .action {
  margin-bottom: 0.75em;
}

@media (min-width: 40em) {
  .progress {
    padding: 1.5em 3em;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    min-height: 6.25em;
  }
  .progress .action {
    margin-bottom: 0;
    margin-left: 1.5em;
    order: 1;
  }
}

</style>


<style>

  /* =Icon Button
  ----------------------------------------------- */
  a.has-icon {
    display: block;
    position: relative;
    text-decoration: none
  }

  .has-icon .icon {
    position: absolute;
    top: 0.725em;
    right: 0.725em;
    background: white;
    background: rgba(255, 255, 255, 0.75);
    color: black;
    background: rgba(254, 254, 254, 0.75); /* @snow */
    background: var(--secondary-color, black);
    border: 0.1875em solid var(--secondary-color, black);
    background: var(--primary-color, black);
    border: 0.1875em solid var(--primary-color, black);
    color: rgb(41, 41, 41); /* @midnight */
    color: rgb(254, 254, 254); /* @snow */
    padding: 0;
    width: 5em;
    line-height: 5em;
    border-radius: 50%;
    transition: background-color 0.2s;
    /*font-size: 1.5em;*/
    text-align: center;
    display: flex;
    width: 3em;
    height: 3em;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    top: 50%;
    left: 50%;
    right: auto;
    padding: 0;
    transform: translate(-50%, -50%);
    opacity: 0.75;
    background: rgb(254, 254, 254); /* @snow */
    border-color: var(--secondary-color, black);
    color: var(--secondary-color, black);
    border-color: var(--primary-color, black);
    border-color: white;
    color: var(--primary-color, black);
    color: black;
    background: black;
    color: white;
    border-color: transparent;
    transition: all 0.2s;
  }

  .has-icon:hover .icon,
  .has-icon:active .icon,
  .has-icon:focus .icon {
    background-color: var(--primary-color);
    opacity: 1;
  }

  .has-icon .icon {
    vertical-align: middle
  }

  .has-icon svg {
    width: 1em;
    height: 1em;
    margin-left: 0.25em;
  }

  .has-icon svg polygon {
    fill: currentColor
  }


  .has-icon .credit {
    position: absolute;
    bottom: 0;
    left: 0;
    background: white;
    background: rgba(255, 255, 255, 0.75);
    color: black;
    background: var(--secondary-color, black);
    color: rgb(254, 254, 254); /* @snow */
    background: white;
    background: rgba(255, 255, 255, 0.9);
    color: var(--secondary-color, black);
    border-color: var(--secondary-color, black);
    color: black;
    font-size: 0.75em;
    padding: 0.25em 0.5em;
    font-weight: 500;
  }

</style>



<div class="introduction" markdown="1">

<div>
<a href="/finalists/" class="logo">
  <!--
  <img src="/assets/images/vote-logo-white.png" alt="My LA2050 Activation Challenge" style="margin-top: -3em;
    width: 12em;
    height: auto;" />
  -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185.1 79.2" width="200" height="200">
    <switch>
      <g>
        <path d="M18.7,15.7L18.7,15.7l5.9-15.2H29v19.8h-2.8V3.8h-0.1l-6.6,16.6h-1.8L11.2,3.8h-0.1v16.6H8.5V0.5h4.3
          L18.7,15.7z"/>
        <path d="M44.6,20.3h-2.8v-8.6L34.4,0.5h3.4l5.5,9l5.5-9H52l-7.4,11.3V20.3z"/>
        <path d="M69.6,17.9h8.8v2.5H66.8V0.5h2.8V17.9z"/>
        <path d="M85,20.3h-3.1l8.6-19.8H93l8.5,19.8h-3.1l-2-4.9H87L85,20.3z M88,13h7.4l-3.7-9.3L88,13z"/>
        <path d="M119.4,20.3h-12.9v-2.6l7.9-7.8c0.6-0.6,1.1-1.3,1.5-1.9c0.4-0.7,0.6-1.4,0.6-2.3c0-0.5-0.1-1-0.3-1.4
          c-0.2-0.4-0.4-0.8-0.8-1.1s-0.7-0.5-1.1-0.7c-0.4-0.2-0.9-0.2-1.4-0.2c-1,0-1.8,0.3-2.5,1c-0.7,0.6-1.1,1.5-1.2,2.5l-2.7-0.4
          c0.1-0.7,0.4-1.4,0.7-2.1c0.4-0.6,0.8-1.2,1.4-1.7c0.6-0.5,1.2-0.8,1.9-1.1c0.7-0.3,1.5-0.4,2.4-0.4c0.8,0,1.6,0.1,2.4,0.4
          c0.8,0.2,1.4,0.6,2,1.1c0.6,0.5,1,1.1,1.4,1.8s0.5,1.5,0.5,2.4c0,0.6-0.1,1.2-0.3,1.8c-0.2,0.5-0.4,1.1-0.7,1.5
          c-0.3,0.5-0.6,0.9-1,1.4c-0.4,0.4-0.8,0.9-1.2,1.3l-6.4,6.3h9.7V20.3z"/>
        <path d="M132.9,0c1.2,0,2.2,0.3,3,0.8c0.8,0.5,1.5,1.3,2.1,2.2c0.5,0.9,1,2,1.2,3.3c0.3,1.3,0.4,2.6,0.4,4.1
          c0,1.5-0.1,2.8-0.4,4.1c-0.3,1.3-0.7,2.4-1.2,3.3c-0.6,0.9-1.3,1.7-2.1,2.2c-0.8,0.5-1.9,0.8-3,0.8s-2.2-0.3-3.1-0.8
          c-0.9-0.5-1.6-1.3-2.1-2.2c-0.6-0.9-1-2-1.2-3.3c-0.3-1.3-0.4-2.6-0.4-4.1c0-1.4,0.1-2.8,0.4-4.1c0.3-1.3,0.7-2.4,1.2-3.3
          s1.3-1.7,2.1-2.2C130.7,0.3,131.7,0,132.9,0z M132.9,2.3c-0.8,0-1.5,0.3-2,0.8c-0.5,0.5-0.9,1.2-1.2,2c-0.3,0.8-0.5,1.7-0.6,2.6
          c-0.1,1-0.2,1.8-0.2,2.7s0.1,1.7,0.2,2.7c0.1,1,0.3,1.8,0.6,2.6c0.3,0.8,0.7,1.5,1.2,2s1.2,0.8,2,0.8c0.8,0,1.5-0.3,2-0.8
          c0.5-0.5,0.9-1.2,1.2-2c0.3-0.8,0.5-1.7,0.6-2.6c0.1-1,0.2-1.8,0.2-2.7s-0.1-1.7-0.2-2.7c-0.1-1-0.3-1.8-0.6-2.6
          c-0.3-0.8-0.7-1.5-1.2-2C134.3,2.5,133.7,2.3,132.9,2.3z"/>
        <path d="M158,2.9h-8.2l-0.2,5.2c0.4-0.1,0.8-0.2,1.2-0.3c0.5-0.1,0.9-0.1,1.3-0.1c1,0,1.8,0.1,2.6,0.4
          c0.8,0.3,1.5,0.7,2.1,1.2c0.6,0.5,1,1.2,1.4,2c0.3,0.8,0.5,1.6,0.5,2.6c0,1-0.2,2-0.5,2.8c-0.4,0.8-0.8,1.6-1.5,2.1
          c-0.6,0.6-1.3,1-2.2,1.4s-1.8,0.5-2.7,0.5c-1.5,0-2.9-0.4-3.9-1.1c-1.1-0.7-1.9-1.7-2.4-2.9l2.5-1c0.3,0.8,0.8,1.4,1.5,1.9
          c0.7,0.5,1.5,0.7,2.4,0.7c0.6,0,1.1-0.1,1.6-0.3c0.5-0.2,0.9-0.5,1.3-0.9c0.4-0.4,0.7-0.8,0.9-1.3s0.3-1.1,0.3-1.7
          c0-0.7-0.1-1.4-0.4-1.9c-0.3-0.5-0.6-1-1-1.4s-0.9-0.6-1.5-0.8c-0.6-0.2-1.1-0.3-1.8-0.3c-0.7,0-1.5,0.1-2.3,0.3
          c-0.8,0.2-1.5,0.5-2.1,0.8l0.3-10.5H158V2.9z"/>
        <path d="M172.3,0c1.2,0,2.2,0.3,3,0.8c0.8,0.5,1.5,1.3,2.1,2.2c0.5,0.9,1,2,1.2,3.3c0.3,1.3,0.4,2.6,0.4,4.1
          c0,1.5-0.1,2.8-0.4,4.1c-0.3,1.3-0.7,2.4-1.2,3.3c-0.6,0.9-1.3,1.7-2.1,2.2c-0.8,0.5-1.9,0.8-3,0.8s-2.2-0.3-3.1-0.8
          c-0.9-0.5-1.6-1.3-2.1-2.2c-0.6-0.9-1-2-1.2-3.3c-0.3-1.3-0.4-2.6-0.4-4.1c0-1.4,0.1-2.8,0.4-4.1c0.3-1.3,0.7-2.4,1.2-3.3
          s1.3-1.7,2.1-2.2C170.1,0.3,171.2,0,172.3,0z M172.3,2.3c-0.8,0-1.5,0.3-2,0.8c-0.5,0.5-0.9,1.2-1.2,2c-0.3,0.8-0.5,1.7-0.6,2.6
          c-0.1,1-0.2,1.8-0.2,2.7s0.1,1.7,0.2,2.7c0.1,1,0.3,1.8,0.6,2.6c0.3,0.8,0.7,1.5,1.2,2s1.2,0.8,2,0.8c0.8,0,1.5-0.3,2-0.8
          c0.5-0.5,0.9-1.2,1.2-2c0.3-0.8,0.5-1.7,0.6-2.6c0.1-1,0.2-1.8,0.2-2.7s-0.1-1.7-0.2-2.7c-0.1-1-0.3-1.8-0.6-2.6
          c-0.3-0.8-0.7-1.5-1.2-2C173.8,2.5,173.1,2.3,172.3,2.3z"/>
        <path d="M14.9,49.5l-0.6-3.7H7.2l-2.2,3.7H0l11.7-18.4h4.2l3.5,18.4H14.9z M12.8,35.9L9,42.4h4.8L12.8,35.9z"/>
        <path d="M39.9,47c-0.4,0.4-0.8,0.8-1.3,1.2c-0.5,0.4-1,0.7-1.6,1s-1.3,0.5-2,0.7c-0.7,0.2-1.5,0.2-2.4,0.2
          c-1.3,0-2.5-0.2-3.5-0.6s-1.9-0.9-2.7-1.6c-0.7-0.7-1.3-1.5-1.7-2.5c-0.4-1-0.6-2.1-0.6-3.3c0-1.6,0.3-3.1,0.8-4.4
          c0.6-1.4,1.3-2.6,2.3-3.6c1-1,2.1-1.8,3.5-2.4c1.3-0.6,2.8-0.9,4.3-0.9c1.5,0,2.8,0.3,3.9,0.8c1.2,0.5,2,1.2,2.6,2l-3.2,2.9
          c-0.3-0.5-0.7-0.8-1.3-1.2s-1.3-0.5-2.2-0.5c-0.9,0-1.8,0.2-2.5,0.6c-0.8,0.4-1.4,0.9-2,1.6c-0.5,0.6-1,1.4-1.3,2.2
          c-0.3,0.8-0.5,1.7-0.5,2.6c0,0.6,0.1,1.2,0.3,1.8s0.5,1.1,0.9,1.5c0.4,0.4,0.9,0.7,1.4,1c0.6,0.2,1.2,0.4,1.9,0.4
          c0.8,0,1.6-0.2,2.3-0.5c0.7-0.3,1.4-0.8,1.9-1.5L39.9,47z"/>
        <path d="M54,34.8l-2.6,14.7h-4.3l2.6-14.7h-5.1l0.7-3.7h14.5L59,34.8H54z"/>
        <path d="M61.2,49.5l3.2-18.4h4.3l-3.2,18.4H61.2z"/>
        <path d="M80.8,49.5h-4.5l-2.8-18.4H78l1.4,13.2h0.1l7.2-13.2h5L80.8,49.5z"/>
        <path d="M104.3,49.5l-0.6-3.7h-7.1l-2.2,3.7h-4.9l11.7-18.4h4.2l3.5,18.4H104.3z M102.2,35.9l-3.8,6.5h4.8L102.2,35.9z
          "/>
        <path d="M121.8,34.8l-2.6,14.7h-4.3l2.6-14.7h-5.1l0.7-3.7h14.5l-0.7,3.7H121.8z"/>
        <path d="M129,49.5l3.2-18.4h4.3l-3.2,18.4H129z"/>
        <path d="M151.6,30.7c1.4,0,2.6,0.2,3.7,0.6c1.1,0.4,2,0.9,2.8,1.6c0.8,0.7,1.3,1.6,1.8,2.6s0.6,2.1,0.6,3.4
          c0,1.6-0.3,3-0.8,4.4c-0.5,1.4-1.3,2.5-2.2,3.6s-2.1,1.8-3.4,2.4c-1.3,0.6-2.8,0.9-4.4,0.9c-1.4,0-2.7-0.2-3.8-0.6
          c-1.1-0.4-2-0.9-2.8-1.6c-0.8-0.7-1.4-1.6-1.8-2.6c-0.4-1-0.6-2.1-0.6-3.4c0-1.6,0.3-3,0.8-4.4s1.3-2.5,2.3-3.6
          c1-1,2.1-1.8,3.4-2.4S150,30.7,151.6,30.7z M149.9,46.1c1,0,1.8-0.2,2.6-0.6c0.8-0.4,1.4-0.9,1.9-1.6c0.5-0.6,0.9-1.4,1.2-2.2
          c0.3-0.8,0.4-1.7,0.4-2.6c0-0.6-0.1-1.2-0.3-1.8s-0.5-1.1-0.9-1.5c-0.4-0.4-0.9-0.7-1.5-1c-0.6-0.2-1.3-0.4-2-0.4
          c-0.9,0-1.8,0.2-2.5,0.6s-1.4,0.9-1.9,1.6c-0.5,0.7-0.9,1.4-1.2,2.2s-0.4,1.7-0.4,2.6c0,0.6,0.1,1.2,0.3,1.8s0.5,1.1,0.9,1.5
          c0.4,0.4,0.9,0.7,1.5,1C148.4,46,149.1,46.1,149.9,46.1z"/>
        <path d="M176,49.5l-5.1-12.2h-0.1l-2.1,12.2h-4.3l3.2-18.4h4.9l5,12.1h0.1l2.1-12.1h4.3l-3.2,18.4H176z"/>
        <path d="M19.8,75.6c-0.8,1.1-1.8,1.9-3.1,2.6c-1.2,0.7-2.8,1-4.5,1c-1.5,0-2.9-0.3-4.2-0.8c-1.3-0.5-2.4-1.2-3.3-2.2
          c-0.9-0.9-1.6-2-2.2-3.3s-0.8-2.7-0.8-4.2c0-1.5,0.3-3,0.8-4.2s1.3-2.4,2.2-3.3c0.9-0.9,2.1-1.6,3.3-2.1s2.7-0.8,4.2-0.8
          c0.7,0,1.4,0.1,2,0.2s1.4,0.3,2,0.6c0.6,0.3,1.2,0.6,1.7,1c0.5,0.4,1,0.8,1.3,1.3l-2.2,1.7c-0.5-0.7-1.2-1.2-2.1-1.7
          c-0.9-0.4-1.8-0.7-2.9-0.7c-1.2,0-2.2,0.2-3.1,0.6s-1.7,1-2.4,1.7c-0.7,0.7-1.2,1.6-1.5,2.5c-0.4,1-0.5,2-0.5,3.1
          c0,1.1,0.2,2.2,0.5,3.1c0.3,1,0.8,1.8,1.5,2.5c0.6,0.7,1.4,1.3,2.4,1.7c0.9,0.4,2,0.6,3.1,0.6c1.1,0,2.1-0.2,3.1-0.7
          c0.9-0.4,1.7-1.1,2.3-2L19.8,75.6z"/>
        <path d="M25.1,58.9h2.8v8.3h10v-8.3h2.8v19.8h-2.8v-9.1h-10v9.1h-2.8V58.9z"/>
        <path d="M48.9,78.7h-3.1l8.6-19.8h2.5l8.5,19.8h-3.1l-2-4.9h-9.4L48.9,78.7z M51.8,71.4h7.4l-3.7-9.3L51.8,71.4z"/>
        <path d="M73.3,76.3h8.8v2.5H70.5V58.9h2.8V76.3z"/>
        <path d="M90.1,76.3h8.8v2.5H87.3V58.9h2.8V76.3z"/>
        <path d="M106.9,76.3h10.4v2.5h-13.1V58.9h12.7v2.4h-9.9v5.9h9.4v2.4h-9.4V76.3z"/>
        <path d="M137.5,74.8L137.5,74.8l0.1-15.8h2.8v19.8h-3.5l-10.5-16.2h-0.1v16.2h-2.8V58.9h3.6L137.5,74.8z"/>
        <path d="M162.6,63c-0.6-0.7-1.4-1.2-2.3-1.6c-0.9-0.4-2-0.6-3.1-0.6c-1.2,0-2.2,0.2-3.1,0.6s-1.7,1-2.4,1.7
          c-0.7,0.7-1.2,1.6-1.5,2.5c-0.4,1-0.5,2-0.5,3.1c0,1.1,0.2,2.1,0.5,3.1s0.9,1.8,1.5,2.5s1.5,1.3,2.4,1.7c1,0.4,2,0.6,3.2,0.6
          c0.9,0,1.8-0.1,2.6-0.3c0.8-0.2,1.5-0.4,2-0.7v-5.5h-4.4v-2.4h7.1v9.6c-1,0.6-2.2,1-3.4,1.3c-1.2,0.3-2.6,0.4-4,0.4
          c-1.5,0-3-0.3-4.3-0.8c-1.3-0.5-2.4-1.2-3.3-2.2c-0.9-0.9-1.7-2-2.2-3.3s-0.8-2.7-0.8-4.2c0-1.5,0.3-3,0.8-4.2s1.3-2.4,2.2-3.3
          c0.9-0.9,2.1-1.6,3.3-2.1s2.7-0.8,4.2-0.8c1.6,0,3,0.2,4.2,0.7c1.2,0.5,2.3,1.1,3.1,1.9L162.6,63z"/>
        <path d="M174.7,76.3h10.4v2.5h-13.1V58.9h12.7v2.4h-9.9v5.9h9.4v2.4h-9.4V76.3z"/>
      </g>
      <foreignObject>My LA2050<br /><em>Activation</em><br />Challenge</foreignObject>
    </switch>
  </svg>
</a>

<p>It’s time to vote! Choose one <a href="/finalists/" target="_blank">finalist</a> in each goal category.</p>

<p class="action"><a href="#learn" onClick="document.getElementById('learn').scrollIntoView({ behavior: 'smooth', block: 'start' }); event.preventDefault();">Start voting</a></p>

<!--
<p style="font-size: 1rem"><a href="/finalists/" target="_blank">I want to learn more about the finalists</a>.</p>
-->

  <!--
<ul class="action">
  <li><a href="#learn" onClick="document.getElementById('learn').scrollIntoView({ behavior: 'smooth', block: 'start' }); event.preventDefault();">Start voting</a></li>
  <li style="margin-top: 1.5em"><a href="#learn" onClick="document.getElementById('learn').scrollIntoView({ behavior: 'smooth', block: 'start' }); event.preventDefault();">Learn more about the finalists</a></li>
  
</ul>-->
</div>

<!--
<p style="margin-top: 1.5em">
  <a href="#learn">
    <svg viewBox="0 0 448 512" width="24" height="24">
      <switch>
        <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z" class=""></path>
        <foreignObject>Okay, let’s go</foreignObject>
      </switch>
    </svg>
  </a>
</p>
-->

</div>




<script>
(function() {
  function getRandomOrder() {
    return (Math.floor(Math.random() * 10) + 1) - 5;
  }
  for (var index = 0; index < 5; index++) {
    document.documentElement.style.setProperty('--order-' + index, getRandomOrder());
  }
})();
</script>


<form name="vote" action="/vote/submit/" method="post" markdown="1" data-netlify="true">

<h2 class="blueberry" id="learn">Who would you like to vote for in the <span style="text-transform: uppercase;">Learn</span> category?</h2>

<ul class="blueberry">
{% assign first_item = true %}
{% assign data_collection = site.collections | where: "label", "learn" | first %}
{% assign data_list = data_collection.docs %}
{% for project in data_list %}

{% assign is_finalist = false %}
{% for finalist in site.finalists %}
  {% if finalist == project.uri %}
    {% assign is_finalist = true %}
  {% endif %}
{% endfor %}

{% if is_finalist == true %}
<li>
<label>
  <input type="radio" name="learn" value="{{ project.organization_name }}" />
  <span class="mask"></span><span class="pseudo-checkbox">
    <svg width="24" height="24" viewBox="0 0 512 512">
      <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
      <strong>Selected</strong>
    </svg>
  </span>
  <span class="call-to-action">
    <!--<svg></svg>-->
    <strong>Select</strong>
  </span>
  <img src="/assets/images/{{ project.category }}/2048-wide/{{ project.project_image }}" width="250" /><br />
  <span class="text"><strong>{{ project.organization_name }}</strong><br />{{ project.title }}</span>
</label>
<a href="{{ project.uri }}" target="_blank">
<svg viewBox="0 0 192 512" width="24" height="24" aria-label="{{ project.organization_name }}">
  <switch>
    <path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z" class=""></path>
    <foreignObject>{{ project.organization_name }}</foreignObject>
  </switch>
</svg>
</a>
</li>
{% assign first_item = false %}
{% endif %}
{% endfor %}
</ul>

<hr />

<h2 class="banana" id="create">Who would you like to vote for in the <span style="text-transform: uppercase;">Create</span> category?</h2>

<ul class="banana">
{% assign first_item = true %}
{% assign data_collection = site.collections | where: "label", "create" | first %}
{% assign data_list = data_collection.docs %}
{% for project in data_list %}

{% assign is_finalist = false %}
{% for finalist in site.finalists %}
  {% if finalist == project.uri %}
    {% assign is_finalist = true %}
  {% endif %}
{% endfor %}

{% if is_finalist == true %}
<li>
<label>
  <input type="radio" name="create" value="{{ project.organization_name }}" />
  <span class="mask"></span><span class="pseudo-checkbox">
    <svg width="24" height="24" viewBox="0 0 512 512">
      <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
    </svg>
    <strong>Selected</strong>
  </span>
  <span class="call-to-action">
    <!--<svg></svg>-->
    <strong>Select</strong>
  </span>
  <img src="/assets/images/{{ project.category }}/2048-wide/{{ project.project_image }}" width="250" /><br />
  <span class="text"><strong>{{ project.organization_name }}</strong><br />{{ project.title }}</span>
</label>
<a href="{{ project.uri }}" title="{{ project.organization_name }}" target="_blank">
<svg viewBox="0 0 192 512" width="24" height="24">
  <switch>
    <path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z" class=""></path>
    <foreignObject>{{ project.organization_name }}</foreignObject>
  </switch>
</svg>
</a>
</li>
{% assign first_item = false %}
{% endif %}
{% endfor %}
</ul>

<hr />

<h2 class="strawberry" id="play">Who would you like to vote for in the <span style="text-transform: uppercase;">Play</span> category?</h2>

<ul class="strawberry">
{% assign first_item = true %}
{% assign data_collection = site.collections | where: "label", "play" | first %}
{% assign data_list = data_collection.docs %}
{% for project in data_list %}

{% assign is_finalist = false %}
{% for finalist in site.finalists %}
  {% if finalist == project.uri %}
    {% assign is_finalist = true %}
  {% endif %}
{% endfor %}

{% if is_finalist == true %}
<li>
<label>
  <input type="radio" name="play" value="{{ project.organization_name }}" />
  <span class="mask"></span><span class="pseudo-checkbox">
    <svg width="24" height="24" viewBox="0 0 512 512">
      <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
    </svg>
    <strong>Selected</strong>
  </span>
  <span class="call-to-action">
    <!--<svg></svg>-->
    <strong>Select</strong>
  </span>
  <img src="/assets/images/{{ project.category }}/2048-wide/{{ project.project_image }}" width="250" /><br />
  <span class="text"><strong>{{ project.organization_name }}</strong><br />{{ project.title }}</span>
</label>
<a href="{{ project.uri }}" title="{{ project.organization_name }}" target="_blank">
<svg viewBox="0 0 192 512" width="24" height="24">
  <switch>
    <path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z" class=""></path>
    <foreignObject>{{ project.organization_name }}</foreignObject>
  </switch>
</svg>
</a>
</li>
{% assign first_item = false %}
{% endif %}
{% endfor %}
</ul>

<hr />

<h2 class="tangerine" id="connect">Who would you like to vote for in the <span style="text-transform: uppercase;">Connect</span> category?</h2>

<ul class="tangerine">
{% assign first_item = true %}
{% assign data_collection = site.collections | where: "label", "connect" | first %}
{% assign data_list = data_collection.docs %}
{% for project in data_list %}

{% assign is_finalist = false %}
{% for finalist in site.finalists %}
  {% if finalist == project.uri %}
    {% assign is_finalist = true %}
  {% endif %}
{% endfor %}

{% if is_finalist == true %}
<li>
<label>
  <input type="radio" name="connect" value="{{ project.organization_name }}" />
  <span class="mask"></span><span class="pseudo-checkbox">
    <svg width="24" height="24" viewBox="0 0 512 512">
      <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
    </svg>
    <strong>Selected</strong>
  </span>
  <span class="call-to-action">
    <!--<svg></svg>-->
    <strong>Select</strong>
  </span>
  <img src="/assets/images/{{ project.category }}/2048-wide/{{ project.project_image }}" width="250" /><br />
  <span class="text"><strong>{{ project.organization_name }}</strong><br />{{ project.title }}</span>
</label>
<a href="{{ project.uri }}" title="{{ project.organization_name }}" target="_blank">
<svg viewBox="0 0 192 512" width="24" height="24">
  <switch>
    <path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z" class=""></path>
    <foreignObject>{{ project.organization_name }}</foreignObject>
  </switch>
</svg>
</a>
</li>
{% assign first_item = false %}
{% endif %}
{% endfor %}
</ul>

<hr />

<h2 class="lime" id="live">Who would you like to vote for in the <span style="text-transform: uppercase;">Live</span> category?</h2>

<ul class="lime">
{% assign first_item = true %}
{% assign data_collection = site.collections | where: "label", "live" | first %}
{% assign data_list = data_collection.docs %}
{% for project in data_list %}

{% assign is_finalist = false %}
{% for finalist in site.finalists %}
  {% if finalist == project.uri %}
    {% assign is_finalist = true %}
  {% endif %}
{% endfor %}

{% if is_finalist == true %}
<li>
<label>
  <input type="radio" name="live" value="{{ project.organization_name }}" />
  <span class="mask"></span><span class="pseudo-checkbox">
    <svg width="24" height="24" viewBox="0 0 512 512">
      <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
    </svg>
    <strong>Selected</strong>
  </span>
  <span class="call-to-action">
    <!--<svg></svg>-->
    <strong>Select</strong>
  </span>
  <img src="/assets/images/{{ project.category }}/2048-wide/{{ project.project_image }}" width="250" /><br />
  <span class="text"><strong>{{ project.organization_name }}</strong><br />{{ project.title }}</span>
</label>
<a href="{{ project.uri }}" title="{{ project.organization_name }}" target="_blank">
<svg viewBox="0 0 192 512" width="24" height="24">
  <switch>
    <path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z" class=""></path>
    <foreignObject>{{ project.organization_name }}</foreignObject>
  </switch>
</svg>
</a>
</li>
{% assign first_item = false %}
{% endif %}
{% endfor %}
</ul>

<hr />

<section id="finish" class="blueberry" style="display: none;">

<div markdown="1">
## You’re <span style="text-decoration: underline;">almost</span> done!

Now it’s time to confirm your votes by signing in with one of your accounts.

### Sign in with…

<ul class="action" style="max-width: 20em; margin: 1.5em auto 0; padding: 0">
  <li style="order: 1" style="margin: 0.75em 0 !important; padding: 0"><a href="#sign-in-phone" onClick="document.getElementById('sign-in-phone').style.display = 'flex'; document.getElementById('sign-in-phone').scrollIntoView({ behavior: 'smooth', block: 'start' }); event.preventDefault();">Phone</a></li>
  <li style="order: 3" style="margin: 0.75em 0 !important; padding: 0"><a href="#sign-in-email" onClick="document.getElementById('sign-in-email').style.display = 'flex'; document.getElementById('sign-in-email').scrollIntoView({ behavior: 'smooth', block: 'start' }); event.preventDefault();">Email</a></li>
  <li style="order: 2" style="margin: 0.75em 0 !important; padding: 0"><a href="#sign-in-facebook" onClick="signInSocial('facebook'); event.preventDefault();">Facebook</a></li>
 <!--  <li style="order: 1" style="margin: 0.75em 0 !important; padding: 0"><a href="/vote/confirmation/">Twitter</a></li> -->
</ul>

<!--
<ul class="action" style="display: block">
  <li style="margin: 0 !important; padding-right: 0;"><a href="#sign-in-email" onClick="document.getElementById('sign-in-email').style.display = 'flex'; document.getElementById('sign-in-email').scrollIntoView({ behavior: 'smooth', block: 'start' }); event.preventDefault();">Sign in with email</a></li>
  <li style="margin: 0 !important; padding: 0;">or</li>
  <li style="margin: 0 !important; padding-right: 0;"><a href="/vote/confirmation/">Sign in with Facebook</a></li>
  <li style="margin: 0 !important; padding: 0">or</li>
  <li style="margin: 0 !important; padding-right: 0;"><a href="/vote/confirmation/">Sign in with Twitter</a></li>
</ul>
-->

</div>

</section>

</form>

<form name="vote_email" action="/vote/email-sent/" method="post" data-netlify="true">
<input type="hidden" name="learn" />
<input type="hidden" name="create" />
<input type="hidden" name="play" />
<input type="hidden" name="connect" />
<input type="hidden" name="live" />

<section id="sign-in-email" class="lime" style="display: none">

<div markdown="1">
### Sign in with email

Next, we’ll send instructions to your email address.

<p class="field-button banana">
<label style="flex-grow: 1; margin-right: 0.25em;">
  <input type="email" name="email" placeholder="example@mail.com" required="required" style="text-align: left;" />
</label>
<button type="submit">Send email</button>
</p>

<p style="margin-top: 1.7142857143em"><small>We will only use this address to complete the voting process. (No spam, we promise!)</small></p>
</div>

</section>

</form>

<form name="vote_sms" action="/vote/sms-sent/" method="post" data-netlify="true">
<input type="hidden" name="learn" />
<input type="hidden" name="create" />
<input type="hidden" name="play" />
<input type="hidden" name="connect" />
<input type="hidden" name="live" />

<section id="sign-in-phone" class="strawberry" style="display: none">

<div markdown="1">
### Sign in with your phone

Next, we’ll send a text message to your phone, with instructions.

<p class="field-button">
<label style="flex-grow: 1; margin-right: 0.25em;">
  <input type="tel" name="telephone" placeholder="+1 222 333 4444" required="required" style="text-align: left;" />
</label>
<button type="submit">Send text message</button>
</p>

<p style="margin-top: 1.7142857143em"><small>We will only use this phone number to complete the voting process. (No spam, we promise!)</small></p>
</div>

</section>

</form>



<!--
<div style="margin-top: 9em"></div>
-->

<script src="https://cdn.auth0.com/js/auth0/9.3.1/auth0.min.js"></script>
<script type="text/javascript">
</script>

<script>
  function sendEmail(form){
    console.log('sendEmail');

    var email = (form.querySelector('input[name="email"]')) ? form.querySelector('input[name="email"]').value : null;
    var telephone = (form.querySelector('input[name="telephone"]')) ? form.querySelector('input[name="telephone"]').value : null;

    var fieldNames = ['learn', 'create', 'play', 'connect', 'live'];
    var votesData = [];
    var nextField;
    for (var index = 0; index < fieldNames.length; index++) {
      nextField = document.querySelector('input[type="radio"][name="' + fieldNames[index] + '"]:checked');
      if (nextField) {
        votesData.push(fieldNames[index] + '=' + encodeURIComponent(nextField.value));
        form.querySelector('input[type="hidden"][name="' + fieldNames[index] + '"]').value = nextField.value;
      } else {
        console.log('skipped: ' + fieldNames[index]);
      }
    }

    if ((votesData).length < 1) {
      console.error('No items were voted for');
      return;
    }

    if (telephone && telephone.indexOf('+') !== 0) telephone = '+1 ' + telephone

    if (telephone) {
      votesData.push('telephone=' + encodeURIComponent(telephone));
    } else if (email) {
      votesData.push('email=' + encodeURIComponent(email));
    } else {
      console.error('Couldn’t find an email or phone to add to the data');
    }

    console.dir(votesData);

    var redirectUri = window.location.origin + '/vote/authenticated/?' + votesData.join('&');
    console.log('redirectUri: ' + redirectUri);

    var options = {
      redirectUri: redirectUri,
    }

    // TODO: Validate phone number

    if (telephone) {
      options.connection = 'sms'
      options.send = 'code'
      options.phoneNumber = telephone.replace(/\-/g, '').replace(/\s/g, '')
    } else if (email) {
      options.connection = 'email'
      options.send = 'link'
      options.email = email
    } else {
      console.error('Couldn’t find an email or phone to authenticate');
    }

    var webAuth = new auth0.WebAuth({
      domain:      'activation-la2050.auth0.com',
      clientID:    'INfJpr4dnNk2EN143utsZYz4Zeq9c7cd',
      // responseMode: 'form_post',
      responseType: 'token',
      redirectUri: redirectUri
    });

    webAuth.passwordlessStart(options, function (err,res) {
      if (err) {
        // Handle error
      } else {
        form.action = form.action + '?' + votesData.join('&');
        form.submit();
        // document.querySelector('.introduction').style.display = 'block';
        // document.querySelector('form').style.display = 'none';
      }

      console.log('err');
      console.log(err)
      console.dir(err)

      console.log('res');
      console.log(res)
      console.dir(res)

      // Hide the input and show a "Check your email for your login link!" screen
      //$('.enter-email').hide();
      //$('.check-email').show();


    });
  }

  function signInSocial(socialNetwork) {

    var fieldNames = ['learn', 'create', 'play', 'connect', 'live'];
    var votesData = [];
    var nextField;
    for (var index = 0; index < fieldNames.length; index++) {
      nextField = document.querySelector('input[type="radio"][name="' + fieldNames[index] + '"]:checked');
      if (nextField) {
        votesData.push(fieldNames[index] + '=' + encodeURIComponent(nextField.value));
      } else {
        console.log('skipped: ' + fieldNames[index]);
      }
    }

    if ((votesData).length < 1) {
      console.error('No items were voted for');
      return;
    }

    votesData.push('social_network=' + encodeURIComponent(socialNetwork))

    console.dir(votesData);

    var redirectUri = window.location.origin + '/vote/authenticated/?' + votesData.join('&');
    console.log('redirectUri: ' + redirectUri);

    var options = {
      redirectUri: redirectUri,
    }

    options.connection = socialNetwork

    var webAuth = new auth0.WebAuth({
      domain:      'activation-la2050.auth0.com',
      clientID:    'INfJpr4dnNk2EN143utsZYz4Zeq9c7cd',
      responseType: 'token',
      redirectUri: redirectUri
    });

    webAuth.authorize(options, function (err,res) {
      if (err) {
        // Handle error
        console.dir(err)
      } else {
        console.dir(res)
      }
    });
  }

  var forms = document.querySelectorAll('form');
  for (var index = 0; index < forms.length; index++) {
    forms[index].addEventListener('submit', function(e) {
      console.log('form submit'); 
      e.preventDefault();
      sendEmail(e.target);
    })
  }
</script>



<script>
(function() {
  function closest(element, tagName) {

    // If the element is the target
    if (element.nodeName.toLowerCase() === tagName) return element;

    var ancestor = element;
    while ((ancestor = ancestor.parentElement) && ancestor.nodeName && ancestor.nodeName.toLowerCase() !== tagName);
    if (ancestor && ancestor.nodeName && ancestor.nodeName.toLowerCase() === tagName) {
      return ancestor;
    }
  }

  //document.addEventListener("DOMContentLoaded", function(event) {
    var form = document.querySelector('form');

    //console.dir(form);

    var delay = 500;
    var delayTimeout;
    function scrollTo(elementID) {
      console.log('scrollTo: ' + elementID)
      if (delayTimeout) clearTimeout(delayTimeout)
      delayTimeout = setTimeout(function() {
        __scrollTo(elementID)
      }, delay);
    }

    function __scrollTo(elementID) {
      console.log('_scrollTo: ' + elementID)
      // if (counter >= 5) {
      //   document.getElementById('finish').scrollIntoView({ behavior: 'smooth', block: 'start' });
      // } else {
        document.getElementById(elementID).scrollIntoView({ behavior: 'smooth', block: 'start' });
      //}
    }

    form.addEventListener('click', function(e) {
        if (e.target.nodeName.toLowerCase() === 'input' && e.target.type === 'radio' && e.target.checked) {
          console.log('e.target.name: ' + e.target.name)
          switch(e.target.name) {
            case 'learn':
              updateProgress()
              scrollTo('create')
              break;
            case 'create':
              updateProgress()
              scrollTo('play')
              break;
            case 'play':
              updateProgress()
              scrollTo('connect')
              break;
            case 'connect':
              updateProgress()
              scrollTo('live')
              break;
            case 'live':
              updateProgress()
              scrollTo('finish')
              break;
            default:

          }
        }
    });
  //});

  // window.addEventListener('scroll', function(e) {
  //   if (delayTimeout) clearTimeout(delayTimeout)
  // })


  var counter = 0;
  var count;
  var progress;
  var finish;
  function updateProgress() {
    if (!progress) progress = document.getElementById("progress");
    if (!count) count = document.getElementById("vote-count");

    progress.classList.remove('hidden');

    counter = document.querySelectorAll('input[type="radio"]:checked').length;

    count.innerText = counter;

    var exclamations = ['Nice!', 'Hooray!', 'Sweet!', 'Way to go!', 'Excellent!'];
    document.getElementById('exclamation').innerText = exclamations[counter - 1];

    // if (counter >= 5) {
    //   progress.querySelector('p').innerHTML = 'You’ve voted in all five categories!';
    //   document.getElementById('finish').scrollIntoView({ behavior: 'smooth', block: 'start' });
    // }

    if (counter >= 1 && !finish) {
      finish = document.getElementById('finish');
      finish.style.display = 'flex';

      window.addEventListener('scroll', function() {
        //if (isVisible(finish, getOffset(finish).top, window.scrollY)) {
        if ((window.scrollY + (window.innerHeight / 2)) >= getOffset(finish).top) {
          progress.classList.add('hidden-button');
        } else {
          progress.classList.remove('hidden-button');
        }
      })

    }
  }

  // KUDOS: http://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element#answer-442474
  function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft;
        _y += el.offsetTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
  }

  function isVisible(element, elementTop, windowTop) {
    var elementBottom = elementTop + element.offsetHeight;
    var windowBottom  = windowTop  + window.innerHeight;

    // If the top edge of the window is greater than the top edge of the target
    if ((elementTop >= windowTop && elementTop <= windowBottom) || (elementBottom >= windowTop && elementBottom <= windowBottom)) {
      return true;
    } else {
      return false;
    }
  }

})();
</script>



<div class="progress hidden" role="status" id="progress">
  <p class="action"><a href="#finish" onClick="document.getElementById('finish').scrollIntoView({ behavior: 'smooth', block: 'start' }); event.preventDefault();">Confirm my votes</a></p>
  <p><span id="exclamation" style="display: none">Nice!</span> You voted in <strong id="vote-count">1</strong> out of <strong>5</strong> categories.</p>
</div>

{% endif %}
