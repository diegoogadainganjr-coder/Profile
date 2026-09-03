// Loading screen
const loadingScreen=document.getElementById("loading"),progressBar=document.getElementById("progress-bar"),loadingText=document.getElementById("loading-text"),progressNumber=document.getElementById("progress-number");const loadWords=["INITIALIZING","SHAPING IDEAS","BUILDING EXPERIENCE","READY"];let progress=0,siteReady=false;const finishLoading=()=>{if(!loadingScreen||loadingScreen.classList.contains("fade-out"))return;progress=100;progressBar.style.width="100%";progressNumber.textContent="100";loadingText.textContent="READY";setTimeout(()=>{loadingScreen.classList.add("fade-out");document.body.classList.remove("is-loading");setTimeout(()=>loadingScreen.remove(),900)},240)};document.body.classList.add("is-loading");const loadingInterval=setInterval(()=>{const target=siteReady?100:92;progress=Math.min(progress+Math.max(1,Math.ceil((target-progress)/9)),target);progressBar.style.width=`${progress}%`;progressNumber.textContent=String(progress).padStart(2,"0");loadingText.textContent=loadWords[Math.min(Math.floor(progress/27),3)];if(progress>=100){clearInterval(loadingInterval);finishLoading()}},38);window.addEventListener("load",()=>{siteReady=true});setTimeout(()=>{siteReady=true},1200);

// Rotating role line
const roles=["Aspiring full-stack developer","UI/UX design student","Learning Luau for Roblox","Web developer in training"];const typing=document.getElementById("typing");let roleIndex=0,charIndex=0;function typeEffect(){if(!typing)return;if(charIndex<roles[roleIndex].length){typing.textContent+=roles[roleIndex][charIndex++];setTimeout(typeEffect,65)}else{setTimeout(()=>{typing.textContent="";charIndex=0;roleIndex=(roleIndex+1)%roles.length;typeEffect()},1700)}}typeEffect();

// Subtle ambient particles
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){setInterval(()=>{const particle=document.createElement("i");particle.className="particle";particle.style.left=`${Math.random()*100}vw`;particle.style.bottom="0";particle.style.animationDuration=`${6+Math.random()*4}s`;document.body.appendChild(particle);setTimeout(()=>particle.remove(),10000)},1100)}

// Polished one-page resume generator
const resumeButton=document.getElementById("download-resume");
resumeButton?.addEventListener("click",()=>{
  if(!window.jspdf){alert("The resume generator is still loading. Please try again.");return}
  const{jsPDF}=window.jspdf,doc=new jsPDF({unit:"mm",format:"a4"});
  const navy=[12,17,29],coral=[240,82,67],ink=[24,29,40],muted=[88,95,108],paper=[248,247,243],white=[255,255,255],line=[219,220,222];
  const left=18,mainX=76,mainW=116;
  doc.setFillColor(...paper);doc.rect(0,0,210,297,"F");
  doc.setFillColor(...navy);doc.rect(0,0,64,297,"F");
  doc.setFillColor(...coral);doc.rect(0,0,64,8,"F");

  // Sidebar identity
  doc.setTextColor(...white);doc.setFont("helvetica","bold");doc.setFontSize(24);doc.text("DG.",left,29);
  doc.setFontSize(8);doc.setFont("helvetica","normal");doc.setTextColor(180,186,198);doc.text("DEVELOPER + DESIGNER",left,37);
  doc.setDrawColor(57,64,79);doc.line(left,46,52,46);
  const sideTitle=(label,y)=>{doc.setTextColor(...coral);doc.setFont("helvetica","bold");doc.setFontSize(8);doc.text(label.toUpperCase(),left,y);return y+8};
  const sideLines=(items,y)=>{doc.setTextColor(218,221,228);doc.setFont("helvetica","normal");doc.setFontSize(8.5);items.forEach(item=>{doc.text(item,left,y);y+=6});return y};
  let sy=58;sy=sideTitle("Contact",sy);sy=sideLines(["Philippines","github.com/","diegoogadainganjr-coder"],sy);sy+=9;
  sy=sideTitle("Core skills",sy);sy=sideLines(["HTML + CSS","JavaScript","React","Node.js + Express","MongoDB + REST APIs","Responsive design"],sy);sy+=9;
  sy=sideTitle("Design",sy);sy=sideLines(["UI/UX fundamentals","Wireframing","Visual hierarchy","Usability","User-centered layouts"],sy);sy+=9;
  sy=sideTitle("Tools",sy);sy=sideLines(["Git + GitHub","VS Code","Browser DevTools"],sy);
  doc.setTextColor(139,146,160);doc.setFontSize(7);doc.text("PORTFOLIO  /  2026",left,280);

  // Main header
  doc.setTextColor(...ink);doc.setFont("helvetica","bold");doc.setFontSize(25);doc.text("DIEGO O.",mainX,27);doc.text("GADAINGAN JR.",mainX,37);
  doc.setTextColor(...coral);doc.setFontSize(9);doc.text("ASPIRING FULL-STACK DEVELOPER  /  UI/UX DESIGNER",mainX,47);
  doc.setDrawColor(...coral);doc.setLineWidth(.8);doc.line(mainX,53,mainX+22,53);

  const heading=(label,y)=>{doc.setTextColor(...ink);doc.setFont("helvetica","bold");doc.setFontSize(10);doc.text(label.toUpperCase(),mainX,y);doc.setDrawColor(...line);doc.setLineWidth(.25);doc.line(mainX+35,y-1,mainX+mainW,y-1);return y+7};
  const paragraph=(text,y,width=mainW)=>{doc.setTextColor(...muted);doc.setFont("helvetica","normal");doc.setFontSize(8.7);const lines=doc.splitTextToSize(text,width);doc.text(lines,mainX,y);return y+lines.length*4.5};
  let y=66;y=heading("Profile",y);y=paragraph("Aspiring full-stack developer and UI/UX designer building responsive, user-focused web experiences. Developing practical skills across frontend interfaces, backend systems, APIs, authentication, and databases through hands-on projects and continuous learning.",y);y+=8;

  y=heading("Selected projects",y);
  const project=(title,tag,description,url,y)=>{doc.setTextColor(...ink);doc.setFont("helvetica","bold");doc.setFontSize(10);doc.text(title,mainX,y);doc.setTextColor(...coral);doc.setFontSize(7);doc.text(tag.toUpperCase(),mainX+mainW,y,{align:"right"});y+=5;doc.setTextColor(...muted);doc.setFont("helvetica","normal");doc.setFontSize(8.3);const lines=doc.splitTextToSize(description,mainW);doc.text(lines,mainX,y);y+=lines.length*4.2+2;doc.setTextColor(...coral);doc.setFontSize(7.5);doc.textWithLink("View project  ->",mainX,y,{url});return y+9};
  y=project("Student Portal","Full-stack web app","Designed and built a responsive portal that brings essential student services into one clear interface. Practiced authentication flows, organized navigation, and end-to-end application thinking.","https://dgoocode.pythonanywhere.com",y);
  y=project("Haven Tutor","Booking experience","Created a simple tutor-discovery and appointment concept focused on reducing friction and keeping the booking journey easy to understand.","https://dgoocode.pythonanywhere.com",y);
  y=project("Personal Portfolio","UI/UX + frontend","Built a responsive personal site to present projects and growth through a distinctive visual system, accessible structure, and polished interactions.","https://diegoprofile.netlify.app",y);

  y+=2;y=heading("Current learning focus",y);
  const bullets=["Strengthening JavaScript and React fundamentals","Building REST APIs with Node.js and Express","Practicing database integration and authentication","Improving responsive UI/UX and accessibility"];
  doc.setTextColor(...muted);doc.setFont("helvetica","normal");doc.setFontSize(8.3);bullets.forEach(item=>{doc.setFillColor(...coral);doc.circle(mainX+1.2,y-1,1,"F");doc.text(item,mainX+5,y);y+=5.5});y+=5;
  y=heading("Education",y);doc.setTextColor(...ink);doc.setFont("helvetica","bold");doc.setFontSize(9);doc.text("Independent study in Full-Stack Development and UI/UX Design",mainX,y);y+=5;doc.setTextColor(...muted);doc.setFont("helvetica","normal");doc.setFontSize(8.2);doc.text("Project-based learning  /  Ongoing",mainX,y);

  doc.setDrawColor(...line);doc.line(mainX,279,mainX+mainW,279);doc.setTextColor(130,134,143);doc.setFontSize(7);doc.text("PORTFOLIO",mainX,286);doc.textWithLink("diegoprofile.netlify.app",mainX+19,286,{url:"https://diegoprofile.netlify.app"});doc.text("GITHUB",mainX+79,286);doc.textWithLink("github.com/diegoogadainganjr-coder",mainX+94,286,{url:"https://github.com/diegoogadainganjr-coder"});
  doc.save("Diego-Gadaingan-Resume.pdf");
});

// Music control
document.addEventListener("DOMContentLoaded",()=>{const music=document.getElementById("bg-music"),button=document.getElementById("mute-btn"),label=button?.querySelector("b");button?.addEventListener("click",async()=>{try{if(music.paused){await music.play();music.muted=false;button.classList.add("playing");button.setAttribute("aria-label","Pause background music");label.textContent="Pause music"}else{music.muted=!music.muted;button.classList.toggle("playing",!music.muted);button.setAttribute("aria-label",music.muted?"Play background music":"Pause background music");label.textContent=music.muted?"Play music":"Pause music"}}catch(error){console.error("Music error:",error)}})});
