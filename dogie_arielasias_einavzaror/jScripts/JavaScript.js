 //משתנה גלובלי  
var slideIndex = 1;
//קריאה לפונקציה להצגת התמונה הנוכחית
showSlides(slideIndex);

 // פוקציה למעבר תמונות בגלריה - ימינה ושמאלה בלחיצה על החצים 
function plusSlides(n) {    
    showSlides(slideIndex += n); 
  }
  
  function showSlides(n) { //פונקציה המבצעת לבדיקת מספר התמונה שאותה המשתמש מבקש לראות   
    slideIndex=n; //לאחר לחיצה על תמונה יש להתאים את האינדקס לתמונה הגדולה שמוצגת
    var slides = document.getElementsByClassName("mySlides");//משתנה למספר התמונות הגדולות הופך להיות מערך מכיוון שהשתמשנו 
    //getElementsByClassName -ב
    var dots = document.getElementsByClassName("demo");//מערך לתמונות הקטנות בגלריה  
    var captionText = document.getElementById("caption");//משתנה לטקסט המתחלף
    if (n > slides.length) { //בודקים אם הפרמטר גדול מאורך המערך של התמונות הגדולות בגלרייה
        slideIndex = 1 // אם הפרמטר גדול אז תחזור לתמונה מספר 1
    }
    if (n < 1) {//מאם הפרמטר קטן ממספר תמונה מספר 1
        slideIndex = slides.length; //אז המשתנה סלייד אאינדקס יהיה שווה לאורך המערך
        
         
    }
    for (i = 0; i < slides.length; i++)//לולאה למעבר על כול התמונות במערך  
 {
      slides[i].style.display = "none";
      //הלולאה בדוקת אם לתמונה במיקום של הסיבוב יש סטייל דיספליי נון כל סיבוב
    }
    // ניצור עוד לולאה שעוברת על התמונות הקטנות והיא תעבוד במקביל ללולאה מעליה
    for (i = 0; i < dots.length; i++)
     {//הלולאה תעבור על המערך של התמונות הקטנות 
      dots[i].className = dots[i].className.replace(" active", "");
//מחליף את כל התמונות הפעילות ללא פעילות מהCSS  
    
    }
    //נגדיר את השקופית הנוכחית כבלוק 
    slides[slideIndex-1].style.display = "block";
    //נגידר את התמונה המופיעה כפעילה 
    dots[slideIndex-1].className += " active";
    //נגדיר את הכיתוב שיופיע אם אותה תמונה 
    captionText.innerHTML = dots[slideIndex-1].alt;
  }