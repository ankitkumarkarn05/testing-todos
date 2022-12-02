setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
  
    hour.style.transform = `rotate(${hr_rotation}deg)`; //changing the degrees in the style as per the time
    minute.style.transform = `rotate(${min_rotation}deg)`;   //The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);



// or 


// const deg = 6;
//     // getting all hands of clock from html through id
//     const hr = document.querySelector('#hr')
//     const mn = document.querySelector('#mn');
//     const sc = document.querySelector('#sc');

//     setInterval(() => {
//       let day = new Date();

//       //setting the actual seconds minutes and hour in clock

//       let ms = day.getMilliseconds() * deg;
//       let hh = day.getHours() * 30;
//       let mm = day.getMinutes() * deg;
//       let ss = day.getSeconds() * deg + ms / 1000;

//       //changing the degrees in the style as per the time

//       hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
//       mn.style.transform = `rotateZ(${mm}deg)`;
//       sc.style.transform = `rotateZ(${ss}deg)`;

//     }, 1);
//   </script>
