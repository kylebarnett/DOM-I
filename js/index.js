const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//NAV ITEMS

let services = document.querySelectorAll('a')
services[0].textContent = siteContent.nav["nav-item-1"]
services[0].style.color = 'green'

let product = document.querySelectorAll('a')
product[1].textContent = siteContent.nav["nav-item-2"]
product[1].style.color = 'green'

let vision = document.querySelectorAll('a')
vision[2].textContent = siteContent.nav["nav-item-3"]
vision[2].style.color = 'green'

let features = document.querySelectorAll('a')
features[3].textContent = siteContent.nav["nav-item-4"]
features[3].style.color = 'green'

let about = document.querySelectorAll('a')
about[4].textContent = siteContent.nav["nav-item-5"]
about[4].style.color = 'green'

let contact = document.querySelectorAll('a')
contact[5].textContent = siteContent.nav["nav-item-6"]
contact[5].style.color = 'green'

//Append
let newNav = document.createElement('nav')
let newA = document.createElement('a')
let menu = document.getElementsByTagName('nav')[0]
menu.appendChild(newA)
newA.innerText = "Append"
newA.style.color = 'green'
menu.prepend(newA)
newA.innerText = "Prepend"
//IMG

let img1 = document.getElementById('cta-img')
img1.setAttribute('src', siteContent['cta']['img-src'])
console.log(img1)

//H1

let h1 = document.getElementsByTagName('h1');
h1[0].textContent = siteContent.cta.h1;

//Button
let button = document.getElementsByTagName('button')
button[0].textContent = siteContent.cta.button

//Main Content

//Features
let featuresH4 = document.querySelectorAll('h4')
featuresH4[0].textContent = siteContent["main-content"]["features-h4"]
let featuresP = document.querySelectorAll('p')
featuresP[0].textContent = siteContent["main-content"]["features-content"]
//About
let aboutH4 = document.querySelectorAll('h4')
aboutH4[1].textContent = siteContent["main-content"]["about-h4"]
let aboutP = document.querySelectorAll('p')
aboutP[1].textContent = siteContent["main-content"]["about-content"]
//IMG 2
let imgMC = document.getElementById('middle-img')
imgMC.setAttribute('src', siteContent["main-content"]["middle-img-src"])
//Services
let servicesH4 = document.querySelectorAll('h4')
servicesH4[2].textContent = siteContent["main-content"]["services-h4"]
let servicesP = document.querySelectorAll('p')
servicesP[2].textContent = siteContent["main-content"]["services-content"]
//Product
let productH4 = document.querySelectorAll('h4')
productH4[3].textContent = siteContent["main-content"]["product-h4"]
let productP = document.querySelectorAll('p')
productP[3].textContent = siteContent["main-content"]["product-content"]
//Vision
let visionH4 = document.querySelectorAll('h4')
visionH4[4].textContent = siteContent["main-content"]["vision-h4"]
let visionP = document.querySelectorAll('p')
visionP[4].textContent = siteContent["main-content"]["vision-content"]

//Contact
let contactH4 = document.querySelectorAll('h4')
contactH4[5].textContent = siteContent.contact["contact-h4"]
let contactP = document.querySelectorAll('p')
contactP[5].innerText = siteContent.contact.address
let contactPhone = document.querySelectorAll('p')
contactPhone[6].textContent = siteContent.contact.phone
let contactEmail = document.querySelectorAll('p')
contactEmail[7].textContent = siteContent.contact.email
let contactFooter = document.querySelectorAll('p')

//Footer
let footerP = document.querySelectorAll('p')
footerP[8].textContent = siteContent.footer.copyright
