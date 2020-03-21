import contactusTemplate from './contactus.hbs';

var contactusContainer = document.getElementById('contactus-hbs');

if (contactusContainer) {
  contactusContainer.innerHTML = contactusTemplate({});
}
