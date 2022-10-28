//Creating navBar & It's Elements from Array
//New Dynamic Navigation bar Links Code
const numberOfSectionTags= document.getElementsByTagName("SECTION").length;
let NavigationBarLinks=[];
for (let SectionLoop = 0; SectionLoop < numberOfSectionTags; SectionLoop++) {
	NavigationBarLinks.push(document.getElementsByTagName("SECTION")[SectionLoop].getAttribute("id"));
}
const NumberOfNavigationLinks= NavigationBarLinks.length;
for (let NavLoop = 0; NavLoop < NumberOfNavigationLinks; NavLoop++) {
	let Link = document.createElement("LI");
	Link.innerHTML = NavigationBarLinks[NavLoop];
	document.querySelector('.NavLinks ').appendChild(Link);

	if(NavLoop==0){document.getElementsByTagName("LI")[NavLoop].setAttribute("class","active");}
	document.getElementsByTagName("LI")[NavLoop].setAttribute("destination",NavigationBarLinks[NavLoop]);
	document.getElementsByTagName("LI")[NavLoop].setAttribute("onclick","ScrollToId(this);");
}
////////////////////////// Dynamic Slider Start ///////////////////////////////
//Getting the Number of Slides
const SlidesNumber = document.getElementsByClassName('Slide').length;
let navigationCounter=1;
//Creating navigation Slider circles after counting the number of Sliders
let NavigationElementCode = '<div onclick="SliderNavigate(this)" arrangement="0" class="SliderNavigationDots SliderNavigationDotsActive"></div>';
while(navigationCounter<SlidesNumber){
	NavigationElementCode = NavigationElementCode+ '<div onclick="SliderNavigate(this)" arrangement="'+navigationCounter+'" class="SliderNavigationDots"></div>';
	navigationCounter++;
}
document.getElementById("SliderNavigation").innerHTML = NavigationElementCode;
//Navigation Circles Function---> Get arrangement number to start navigating with it
function SliderNavigate(element){
	let Location= element.getAttribute("arrangement");
	CounterForLoop=0;

	while(CounterForLoop<SlidesNumber){
		document.getElementsByClassName('Slide')[CounterForLoop].classList.remove('ActiveSlide');
		document.getElementsByClassName('SliderNavigationDots')[CounterForLoop].classList.remove('SliderNavigationDotsActive');
		CounterForLoop++;
	}
	CurrentSlide= SlidesNumber *50 + Location;

	//Reseting Value after Reaching 0
	if(CurrentSlide ==0){SlidesNumber *50 + Location}
	let SlidePositioningNumber = CurrentSlide % SlidesNumber;

	document.getElementsByClassName('Slide')[Math.abs(SlidePositioningNumber)].classList.add('ActiveSlide');
	document.getElementsByClassName('SliderNavigationDots ')[Math.abs(SlidePositioningNumber)].classList.add('SliderNavigationDotsActive');
}
//Getting a very high Positive number to prevent getting any negative values in slider counter
let CurrentSlide = SlidesNumber*100;
let CounterForLoop;
function SlideBack(){
	CounterForLoop=0;
	//Removing all active status' from Slide Classes
	while(CounterForLoop<SlidesNumber){
		document.getElementsByClassName('Slide')[CounterForLoop].classList.remove('ActiveSlide');
		document.getElementsByClassName('SliderNavigationDots')[CounterForLoop].classList.remove('SliderNavigationDotsActive');
		CounterForLoop++;
	}
	CurrentSlide--;
	let SlidePositioningNumber = CurrentSlide % SlidesNumber;
	//Adding active status for the previous Slide and mark the circle
	document.getElementsByClassName('Slide')[Math.abs(SlidePositioningNumber)].classList.add('ActiveSlide');
	document.getElementsByClassName('SliderNavigationDots ')[Math.abs(SlidePositioningNumber)].classList.add('SliderNavigationDotsActive');
}
function SlideNext(){
	CounterForLoop=0;
	while(CounterForLoop<SlidesNumber){
		document.getElementsByClassName('Slide')[CounterForLoop].classList.remove('ActiveSlide');
		document.getElementsByClassName('SliderNavigationDots')[CounterForLoop].classList.remove('SliderNavigationDotsActive');
		CounterForLoop++;
	}
	CurrentSlide++;
	let SlidePositioningNumber = CurrentSlide % SlidesNumber;
	document.getElementsByClassName('Slide')[SlidePositioningNumber].classList.add('ActiveSlide');
	document.getElementsByClassName('SliderNavigationDots ')[SlidePositioningNumber].classList.add('SliderNavigationDotsActive');
}
////////////////////////// Dynamic Slider End ///////////////////////////////
function BurgerBtn(){
	document.getElementsByClassName('NavLinks')[0].classList.toggle('hiddenMobile');
	document.getElementsByClassName('NavLinks')[0].classList.toggle('showAnimated');
}
const numberOfSections= document.getElementsByTagName("LI").length;
//Scroll Location and changing Navigation Links color when viewing any section
function ScrollLocation(){
	//Getting All Sections Height to use for ScrollTop
	let HomeHeight =  document.getElementById('Home').getBoundingClientRect().top;
	let PortfolioHeight = document.getElementById('Portfolio').getBoundingClientRect().top;
	let AboutUsHeight = document.getElementById('AboutUs').getBoundingClientRect().top;
	let ContactUsHeight = document.getElementById('ContactUs').getBoundingClientRect().top;
	let BlogHeight = document.getElementById('Blog').getBoundingClientRect().top;
	//Change NavLinks Color when viewing home
	if(HomeHeight<=0){
		//Show Scroll to top button (300 px away from top)
		if(HomeHeight > -300){document.getElementsByClassName('ScrollToTopBtn')[0].classList.add('hidden');}
		else{document.getElementsByClassName('ScrollToTopBtn')[0].classList.remove('hidden');}
		RemoveAllActiveStatus();
		document.getElementsByTagName("LI")[0].classList.add('active');
		document.getElementsByTagName("SECTION")[0].classList.add('Active');
	} 
	//Change NavLinks Color when viewing Portfolio
	if (PortfolioHeight<=5){
		RemoveAllActiveStatus();
		document.getElementsByTagName("LI")[1].classList.add('active');
		document.getElementsByClassName('ScrollToTopBtn')[0].classList.remove('hidden');
		document.getElementsByTagName("SECTION")[1].classList.add('Active');
	}
	//Change NavLinks Color when viewing About Us
	if (AboutUsHeight<=5){
		RemoveAllActiveStatus();
		document.getElementsByTagName("LI")[2].classList.add('active');
		document.getElementsByClassName('ScrollToTopBtn')[0].classList.remove('hidden');
		document.getElementsByTagName("SECTION")[2].classList.add('Active');
	}
	//Change NavLinks Color when viewing Contact Us
	if (ContactUsHeight<=5){
		//console.log('ContactUs');
		RemoveAllActiveStatus();
		document.getElementsByTagName("LI")[3].classList.add('active');
		document.getElementsByClassName('ScrollToTopBtn')[0].classList.remove('hidden');
		document.getElementsByTagName("SECTION")[3].classList.add('Active');
	}
	//Change NavLinks Color when viewing Blog
	if (BlogHeight<=5){
		RemoveAllActiveStatus();
		document.getElementsByTagName("LI")[4].classList.add('active');
		document.getElementsByClassName('ScrollToTopBtn')[0].classList.remove('hidden');
		document.getElementsByTagName("SECTION")[4].classList.add('Active');
	}

	
}
function RemoveAllActiveStatus(){
	let SectionsLoopvariable=0;
	while(SectionsLoopvariable<numberOfSections){
		document.getElementsByTagName("LI")[SectionsLoopvariable].classList.remove('active');
		document.getElementsByTagName("SECTION")[SectionsLoopvariable].classList.remove('Active');
		SectionsLoopvariable++;
	}
}
//Scroll to top
function ScrollToTop(){
	window.scrollTo({ top: 0, behavior: 'smooth'});
}
//Get the destination ID from LI item and scroll to it
function ScrollToId(element){
	let DestinationId = element.getAttribute("destination");
	document.getElementById(DestinationId).scrollIntoView({behavior: "smooth"});
}