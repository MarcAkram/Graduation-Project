//menu funconality
var menu = document.getElementById("menu-aside");

function menu_open(){
    if (menu.style.transform == "translateX(-100vw)" || menu.style.transform == ""){
        menu.style.transform = "translateX(0px)";
        menu.style.visibility = "visible";
    }
    else{
        menu.style.transform = "translateX(-100vw)";
        menu.style.visibility = "hidden";
    };
};

function menu_close(){
    if (menu.style.transform == "translateX(0px)"){
        menu.style.transform = "translateX(-100vw)";
        menu.style.visibility = "hidden";
    };
};


//Translate

const Main_Header = document.getElementById("main-header");
const menu_text = document.getElementById("Menu-text");

const translate_icon = document.getElementById("Translate-to-Ar");
const translate_icon2 = document.getElementById("Translate-to-En");

const Header_Text = document.getElementById("Get-word");
const Header_Text1 = document.getElementById("Up-word");
const Header_Text2 = document.getElementById("Running-word");
const Header_Text3 = document.getElementById("Today-word");

// const Features_menu = document.getElementById("Features-aside");
// const Products_menu = document.getElementById("Products-aside");
// const About_menu = document.getElementById("About-aside");
// const Projects_menu = document.getElementById("Projects-aside");
const aside = document.getElementById("menu-aside");


const Responsive_Section = document.getElementById("Big-Res-Div");
const Responsive_title = document.getElementById("Res-Title");

const Features_title = document.getElementById("Features-Title");
const fix = document.getElementById("fix-text");
const res = document.getElementById("res-text");
const time = document.getElementById("time-text");
const domain = document.getElementById("domain-text");
const edit = document.getElementById("edit-text");
const browser = document.getElementById("browser-text");
const languages = document.getElementById("languages-text");

const Products_Title = document.getElementById("Shopping-Card-Title");
const Products_Section = document.getElementById("Shopping-Card-Kebeir");

const Product1_title = document.getElementById("Product1-Title");
const Product1_Code = document.getElementById("Product1-Code");
const Product1_Res = document.getElementById("Product1-Res");
const Product1_UI = document.getElementById("Product1-UI");
const Product1_Sections = document.getElementById("Product1-Sections");
const Product1_Price = document.getElementById("Product1-Price");
const Product1_Style = document.getElementById("Product1-Style");
const Product1_Hover = document.getElementById("Product1-Hover");
const Product1_Suitable = document.getElementById("Product1-Suitable");
const Product1_Animations = document.getElementById("Product1-Animations");

const Product2_Recommended = document.getElementById("recommended-background");
const Product2_title = document.getElementById("Product2-Title");
const Product2_Code = document.getElementById("Product2-Code");
const Product2_Res = document.getElementById("Product2-Res");
const Product2_UI = document.getElementById("Product2-UI");
const Product2_Sections = document.getElementById("Product2-Sections");
const Product2_Price = document.getElementById("Product2-Price");
const Product2_Style = document.getElementById("Product2-Style");
const Product2_Hover = document.getElementById("Product2-Hover");
const Product2_Suitable = document.getElementById("Product2-Suitable");
const Product2_Animations = document.getElementById("Product2-Animations");

const Product3_title = document.getElementById("Product3-Title");
const Product3_Code = document.getElementById("Product3-Code");
const Product3_Res = document.getElementById("Product3-Res");
const Product3_UI = document.getElementById("Product3-UI");
const Product3_Sections = document.getElementById("Product3-Sections");
const Product3_Price = document.getElementById("Product3-Price");
const Product3_Style = document.getElementById("Product3-Style");
const Product3_Hover = document.getElementById("Product3-Hover");
const Product3_Suitable = document.getElementById("Product3-Suitable");
const Product3_Animations = document.getElementById("Product3-Animations");

const Buy_now = document.getElementById("Order-Now");


const AboutUs_Section = document.getElementById("About-Us-Big");
const AboutUs_Title = document.getElementById("About-Us-Title");

const OurVision_Title = document.getElementById("Our-Vision-Title");
const OurVision_text = document.getElementById("Our-Vision");

const TeamManagers_Title = document.getElementById("Team-Managers-Title");

const TeamManager1_Title = document.getElementById("Team-Manager1-Title");
const TeamManager1_1 = document.getElementById("TM1-1");
const TeamManager1_2 = document.getElementById("TM1-2"); 
const TeamManager1_3 = document.getElementById("TM1-3"); 

const TeamManager2_Title = document.getElementById("Team-Manager2-Title");
const TeamManager2_1 = document.getElementById("TM2-1");
const TeamManager2_2 = document.getElementById("TM2-2"); 
const TeamManager2_3 = document.getElementById("TM2-3"); 

const Contact_button = document.getElementById("Contact-Bottom");

const Projects_Title = document.getElementById("Our-Projects-Title");
const Project1_title = document.getElementById("Project1-Title");
// const Project1_Price = document.getElementById("Project1-Price");

const Tech_Problem = document.getElementById("Tech-Problem");

const footer_div = document.getElementById("d1");
const Crediting = document.getElementById("copy");

//new elements

// menu items

// const theme_text = document.getElementById("Theme-Text");
// const dark_text = document.getElementById("dark-text");
// const light_text = document.getElementById("light-text");
// const dark_input = document.getElementById("dark");
// const light_input = document.getElementById("light");

const showNavText = document.getElementById("Show-nav-text"); 

const BLurrNav = document.getElementById("Blur-N-Nav");

const BetaNavText_PC = document.getElementById("Nav-Pos-Text-PC");
const BetaNavText = document.getElementById("Nav-Pos-Text");
const RightPC = document.getElementById("Nav-Right-PC");
const LeftPC = document.getElementById("Nav-Left-PC");
const Right = document.getElementById("Nav-Right");
const Left = document.getElementById("Nav-Left");


function Translate(){
    document.body.style.direction = "rtl";
    Main_Header.style.direction = "ltr";
    translate_icon.style.display = "none";
    translate_icon2.style.display = "block";

    menu_text.innerText = "القائمة";

    Header_Text.innerText = "أحصل علي موقعك";
    Header_Text1.innerText = "جاهز";
    Header_Text2.innerText = "";
    Header_Text3.innerText = "الان";

    // Features_menu.innerHTML = `<a href="#Features-area" onclick="menu_close()"><u class="underlines"><span>مميزاتنا</span></u></a></div>`;
    // Products_menu.innerHTML = `<a href="#Products-area" onclick="menu_close()"><u class="underlines"><span>منتجاتنا</span></u></a></div>`;
    // About_menu.innerHTML = `<a href="#about-us-area" onclick="menu_close()"><u class="underlines"><span>عنا</span></u></a></div>`;
    // Projects_menu.innerHTML = `<a href="#Projects-area" onclick="menu_close()"><u class="underlines"><span>مشاريعنا</span></u></a></div>`;

    // theme_text.innerHTML = `<u>مظهر :</u>`;
    // dark_text.innerHTML = `داكن <i class="fa-solid fa-moon"></i>` ;
    // light_text.innerHTML = `فاتح <i class="fa-solid fa-sun"></i>` ;
    // dark_input.style.marginRight = "0px";
    // dark_input.style.marginLeft = "20px";
    // light_input.style.marginRight = "0px";
    // light_input.style.marginLeft = "20px";
    // theme_text.style.marginLeft = "10px";

    showNavText.innerText = "إخفاء شريط التنقل";
    showNavText.style.marginRight = "0px";
    showNavText.style.marginLeft = "10px";

    BLurrNav.innerText = "شريط تنقل ذو خلفية شفافة ";
    BLurrNav.style.marginRight = "0px";
    BLurrNav.style.marginLeft = "10px";

    BetaNavText_PC.innerHTML =`<u>مكان شريط التنقل(تحت التجربة)</u>`;
    BetaNavText.innerHTML = `<u>مكان شريط التنقل(تحت التجربة)</u>`;
    RightPC.innerText = "يمين";
    Right.innerText = "يمين";
    LeftPC.innerText = "يسار";
    Left.innerText = "يسار";

    Responsive_Section.style.direction = "ltr";
    Responsive_title.innerText = "احصل علي موقعك مثالي علي اي جهاز"

    Features_title.innerText = "مميزاتنا :";
    fix.innerText = "تجديد/تصليح المواقع القديمة";
    res.innerText = "جعل موقعك مثالي علي اي جهاز";
    time.innerText = "احصل علي موقعك في اسرع وقت ممكن";
    domain.innerText = "احصل علي Domain مجانا";
    edit.innerText = "عدل ادق تفاصيل موقعك";
    browser.innerText = "أحصل علي موقعك مثالي علي اي متصفح";
    languages.innerText = "أحصل علي موقعك بأكتر من لغة";

    Products_Title.innerText = "منتاجاتنا :";
    Product1_title.innerText = "موقع سهل و بسيط"
    Products_Section.style.direction = "ltr";
    Product1_Code.innerText = "كود منظم";
    Product1_Res.innerText = "مثالي علي أي جعاز";
    Product1_UI.innerText = "وجهة مستخدم جيدة";
    Product1_Sections.innerText = "موقع منظم";
    Product1_Price.innerText = "سعر إقتصادي(2500جنيه تقريبا)";
    Product1_Style.innerText = "أسلوب جيد";
    Product1_Hover.innerText = "انتقالات عند التمرير/النقر";
    Product1_Suitable.innerText = "مناسب لمواقع الأخبار والمقالات و المواقع الشخصية المتوسطة"
    Product1_Animations.innerText = "رسوم متحركة";

    Product2_Recommended.innerText = "أفضل اختيار لمعظم الناس"
    Product2_title.innerText = "موقع متوسط";
    
    Product2_Res.innerText = "مثالي علي أي جعاز";
    Product2_Code.innerText = "كود منظم";
    Product2_UI.innerText = "وجهة مستخدم أفضل";
    Product2_Style.innerText = "أسلوب أفضل";
    Product2_Sections.innerText = "موقع منظم";
    Product2_Hover.innerText = "انتقالات عند التمرير/النقر";
    Product2_Price.innerText = "سعر إقتصادي(5000جنيه تقريبا)";
    Product2_Suitable.innerText = "مناسب للمواقع الشخصية المتقدمة ومعظم المواقع الإلكترونية المتقدمة"
    Product2_Animations.innerText = "رسوم متحركة";

    Product3_title.innerText = "موقع معقد";

    Product3_Res.innerText = "مثالي علي أي جعاز";
    Product3_Code.innerText = "كود منظم";
    Product3_UI.innerText = "أفضل واجهة مستخدم";
    Product3_Style.innerText = "أفضل أسلوب";
    Product3_Hover.innerText = "انتقالات عند التمرير/النقر";
    Product3_Sections.innerText = "موقع منظم";
    Product3_Price.innerText = "سعر إقتصادي(10000جنيه تقريبا)";
    Product3_Suitable.innerText = "مناسب لأي نوع من أنواع المواقع";
    Product3_Animations.innerText = "رسوم متحركة معقدة";

    Buy_now.innerHTML = `<button><a href="https://forms.gle/Tcu6AbDnauN2vGXW9" target="_blank">أطلب الان</a></button></span>`

    AboutUs_Section.style.direction = "ltr";
    AboutUs_Title.innerText = "عنا";

    OurVision_Title.innerText = "رؤيتنا :";
    OurVision_text.innerText = "هدفنا الرئيسي هو تصميم وإنشاء موقع الويب الخاص بك سهل الاستخدام ومتجاوب على جميع الأجهزة في أسرع وقت ممكن بجودة عالية وسعر منخفض";

    TeamManagers_Title.innerText = "مديرين مشروعنا :";

    TeamManager1_Title.innerText = "مارك أكرم :";
    TeamManager1_1.innerText = "مطور واجهات المواقع الأمامية";
    TeamManager1_2.innerText = "سنة من الخبرة";
    TeamManager1_3.innerText = "(HTML ، CSS و JavaScript) أتقن جميع لغات برمجة واجات المواقع الأمامية";

    TeamManager2_Title.innerText = "صامويل مينا :";
    TeamManager2_1.innerText = "مطور واجهات المواقع الأمامية";
    TeamManager2_2.innerText = "سنة من الخبرة";
    TeamManager2_3.innerText = "(HTML ، CSS و JavaScript) أتقن جميع لغات برمجة واجهات المواقع الأمامية";

    Contact_button.innerHTML = `<a href="https://api.whatsapp.com/send?phone=201229702684" target="_blank"><button>☎️ تواصل معنا</button></a>`;


    Projects_Title.innerText = "مشاريعنا";
    Project1_title.innerText = "قريباً";
    // Project1_Price.innerText = "التكلفة : 2000جنيه";

    Tech_Problem.innerHTML = `<a href="https://forms.gle/1cZ9QPxrRT1TmJ5v6" target="_blank">لديك مشكلة تيقنية؟, اضغط هنا</a>`;


    footer_div.style.direction = "ltr";
    Crediting.innerHTML = `بعض الصور من <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2214393" target="_blank">Pixabay</a>`;
    Crediting.style.direction = "rtl";

}

function Translate2(){
    document.body.style.direction = "ltr";
    translate_icon.style.display = "block";
    translate_icon2.style.display = "none";

    menu_text.innerText = "Menu";

    Header_Text.innerText = "Get Your Website";
    Header_Text1.innerText = "Up";
    Header_Text2.innerText = "and Running";
    Header_Text3.innerText = "Today";

    // Features_menu.innerHTML = `<a href="#Features-area" onclick="menu_close()"><u class="underlines"><span>Our Features</span></u></a></div>`;
    // Products_menu.innerHTML = `<a href="#Products-area" onclick="menu_close()"><u class="underlines"><span>Our Products</span></u></a></div>`;
    // About_menu.innerHTML = `<a href="#about-us-area" onclick="menu_close()"><u class="underlines"><span>About Us</span></u></a></div>`;
    // Projects_menu.innerHTML = `<a href="#Projects-area" onclick="menu_close()"><u class="underlines"><span>Our Projects</span></u></a></div>`;


    showNavText.innerText = "Hide Navigation Bar";
    showNavText.style.marginRight = "10px";
    showNavText.style.marginLeft = "0px";

    BLurrNav.innerText = "Navigation Bar Blurry Background";
    BLurrNav.style.marginRight = "10px";
    BLurrNav.style.marginLeft = "0px";

    BetaNavText_PC.innerHTML =`<u>Navigation Bar Position (Beta):</u>`;
    BetaNavText.innerHTML = `<u>Navigation Bar Position (Beta):</u>`;
    RightPC.innerText = "Right";
    Right.innerText = "Right";
    LeftPC.innerText = "Left";
    Left.innerText = "Left";

    Responsive_title.innerText = "Get Your Website Responsive on any device."

    Features_title.innerText = "Our Features:";
    fix.innerText = "Fix & Repair Your Old Website";
    res.innerText = "Responsive Templates";
    time.innerText = "Get Your Website Without Waiting much time";
    domain.innerText = "Get Your Domain For Free";
    edit.innerText = "Customizable Design";
    browser.innerText = "Get Your Website On Any Browser";
    languages.innerText = "Multiple Languages Website";

    Products_Title.innerText = "Our Products:";
    Product1_title.innerText = "Simple, Basic Website"
    Product1_Code.innerText = "Organized Code";
    Product1_Res.innerText = "Responsive(Can Be opened on any device)";
    Product1_UI.innerText = "Good User Interface/User Experience";
    Product1_Sections.innerText = "Menu, Header and Footer";
    Product1_Price.innerText = "Budget-Friendly Price(2500egp aprox.)";
    Product1_Style.innerText = "Good Style";
    Product1_Hover.innerText = "On-Hover/On-Click Transitions";
    Product1_Suitable.innerText = "Suitable For News,Articles and Simple Portfolio Websites."
    Product1_Animations.innerText = "Animations";
    
    Product2_Recommended.innerText = "Recommended";
    Product2_title.innerText = "Medium Website";
    
    Product2_Res.innerText = "Responsive(Can Be opened on any device)";
    Product2_Code.innerText = "Organized Code";
    Product2_UI.innerText = "Better User Interface/User Experience";
    Product2_Style.innerText = "Good Style";
    Product2_Sections.innerText = "Menu, Header and Footer";
    Product2_Hover.innerText = "On-Hover/On-Click Transitions";
    Product2_Price.innerText = "Budget-Friendly Price(5000egp aprox.)";
    Product2_Suitable.innerText = "Suitable For Advanced Portfolio And Most of Advanced Websites."
    Product2_Animations.innerText = "Animations";

    Product3_title.innerText = "Complex Website";

    Product3_Res.innerText = "Responsive(Can Be opened on any device)";
    Product3_Code.innerText = "Organized Code";
    Product3_UI.innerText = "Best User Interface/User Experience";
    Product3_Style.innerText = "Best Style";
    Product3_Hover.innerText = "On-Hover/On-Click Transitions";
    Product3_Sections.innerText = "Menu, Header and Footer";
    Product3_Price.innerText = "Budget-Friendly Price(10000egp aprox.)";
    Product3_Suitable.innerText = "Suitable For Any Kind of Advanced Website";
    Product3_Animations.innerText = "Complex Animations";

    Buy_now.innerHTML = `<button><a href="https://forms.gle/SknkiugWksCW61HZA" target="_blank">Order Now</a></button>`;


    AboutUs_Title.innerText = "About Us";

    OurVision_Title.innerText = "Our Vision:";
    OurVision_text.innerText = "Our Main Goal is to design and create your User-Friendly Website Responsive on all devices as fast as possible with high quality and low price!";

    TeamManagers_Title.innerText = "Our Team Managers:";

    TeamManager1_Title.innerText = "Marc Akram:";
    TeamManager1_1.innerText = "Front-end developer.";
    TeamManager1_2.innerText = "1 year of Experience.";
    TeamManager1_3.innerText = "Mastered  all Front-end Programming Languages(HTML , CSS and JavaScript).";

    TeamManager2_Title.innerText = "Samuel Mina:";
    TeamManager2_1.innerText = "Front-end developer.";
    TeamManager2_2.innerText = "1 year of Experience.";
    TeamManager2_3.innerText = "Mastered  all Front-end Programming Languages(HTML , CSS and JavaScript).";

    Contact_button.innerHTML = `<a href="https://api.whatsapp.com/send?phone=201229702684" target="_blank"><button>☎️ Contact Us</button></a>`;


    Projects_Title.innerText = "Our Projects";
    Project1_title.innerText = "Coming Soon!";
    // Project1_Price.innerText = "Cost: 2000egp";

    Tech_Problem.innerHTML = `<a href="https://forms.gle/oUSWyzmEgXoR3ND4A" target="_blank" >Have a technical Problem?, Press Here</a>`;
    
    Crediting.innerHTML = `Some Images are by <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2214393" target="_blank">Pixabay</a>`;
}

//Light-Dark Modes


const HTML = document.getElementById("MY-HTML");

const input = document.getElementById("dark");


function ToggleTheme(){
    if (HTML.style.backgroundColor == "white"){
        HTML.style.backgroundColor = "black";
    } else {
        HTML.style.backgroundColor = "white";
    }
};

const Ez_nav = document.getElementById("Ez-N-Parent");

function ToggleNav(){
    if (Ez_nav.style.display == "none"){
        Ez_nav.style.display = "flex";
    }else{
        Ez_nav.style.display = "none";
    };
};

function ToggleNavBG(){
    if (Ez_nav.style.backdropFilter == "blur(0px)"){
        Ez_nav.style.backdropFilter = "blur(10px)";
        Ez_nav.style.webkitbackdropFilter = "blur(10px)";
    } else {
        Ez_nav.style.backdropFilter = "blur(0px)";        
        Ez_nav.style.webkitbackdropFilter = "blur(0px)";
    };
};

function NavBarToggleLeftRight(){
    if (Ez_nav.style.right == "5px" || Ez_nav.style.right == ""){
        Ez_nav.style.right = "80vw";
        Ez_nav.style.left = "5px";
    //     Ez_nav.style.rotate = "0deg";
    //     Ez1.style.rotate = "0deg";
    //     Ez2.style.rotate = "0deg";
    //     Ez3.style.rotate = "0deg";
    //     Ez4.style.rotate = "0deg";
    //     Ez_nav.style.top = "45vh";
    //     Ez_nav.style.padding = "20px";
    }
    else{
        Ez_nav.style.right = "5px";
        Ez_nav.style.left = "";
        // Ez_nav.style.rotate = "0deg";
        // Ez1.style.rotate = "0deg";
        // Ez2.style.rotate = "0deg";
        // Ez3.style.rotate = "0deg";
        // Ez4.style.rotate = "0deg";
        // Ez_nav.style.top = "45vh";
        // Ez_nav.style.padding = "20px";
    };
};


function NavBarToggleLeftRight_PC(){
    if (Ez_nav.style.right == "5px" || Ez_nav.style.right == ""){
        Ez_nav.style.right = "93.5vw";
        Ez_nav.style.left = "5px";
    //     Ez_nav.style.rotate = "0deg";
    //     Ez1.style.rotate = "0deg";
    //     Ez2.style.rotate = "0deg";
    //     Ez3.style.rotate = "0deg";
    //     Ez4.style.rotate = "0deg";
    //     Ez_nav.style.top = "45vh";
    //     Ez_nav.style.padding = "20px";
    }
    else{
        Ez_nav.style.right = "5px";
        Ez_nav.style.left = "";
        // Ez_nav.style.rotate = "0deg";
        // Ez1.style.rotate = "0deg";
        // Ez2.style.rotate = "0deg";
        // Ez3.style.rotate = "0deg";
        // Ez4.style.rotate = "0deg";
        // Ez_nav.style.top = "45vh";
        // Ez_nav.style.padding = "20px";
    };
};

// const Ez1 = document.getElementById("Ez-1");
// const Ez2 = document.getElementById("Ez-2");
// const Ez3 = document.getElementById("Ez-3");
// const Ez4 = document.getElementById("Ez-4");

// var window_width = window.innerWidth;

// function NavBarToggleBottom(){
//     Ez_nav.style.top = "80vh";
//     Ez_nav.style.bottom = "5px";
//     Ez_nav.style.height = "130px";
//     Ez_nav.style.width = "50px";
//     Ez_nav.style.right = "37vw";
//     Ez_nav.style.left = "37vw";
//     Ez_nav.style.paddingBottom = "30px";
//     Ez_nav.style.rotate = "90deg";

//     Ez1.style.rotate = "-90deg";
//     Ez2.style.rotate = "-90deg";
//     Ez3.style.rotate = "-90deg";
//     Ez4.style.rotate = "-90deg";
// }

// function scroll_buttons(){
//     switch (scrollbar_Location){
//         case 0:
//             GoToSECTION2
//             break;
    
//         case section2_location:
//             GoToSECTION3
//             break;
        
        
//         case section3_location:
//             GoToSECTION4
//             break;
        
//         case section4_location:
//             GoToSECTION5
//             break;
        
//         //w keda le7ad el a5er
//         }
// }

//if switch isnt working use if conditions:

// function scroll_buttons_alt(){
//     if (scrollbar_Location == AtTheTop){
//         GoToSection2;
//     }
//     else if (scrollbar_Location == Section2){
//         GoToSection3;
//     }
//     else if (scrollbar_Location == Section3){
//         GoToSection4;
//     }
//     else if (scrollbar_Location == Section4){
//         GoToSection5;
//     }
//     //w keda le7ad el a5er
// }


// if (AllThisDidntWork) {
//     GoCryInTheCorner
//}else{
//      GoDoAFestival_LOL
//}