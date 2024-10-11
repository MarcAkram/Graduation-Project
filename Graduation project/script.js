//menu funconality

// var menu = document.getElementById("menu-aside");

// function menu_open(){
//     if (menu.style.transform == "translateX(-100vw)" || menu.style.transform == ""){
//         menu.style.transform = "translateX(0px)";
//         menu.style.visibility = "visible";
//     }
//     else{
//         menu.style.transform = "translateX(-100vw)";
//         menu.style.visibility = "hidden";
//     };
// };

// function menu_close(){
//     if (menu.style.transform == "translateX(0px)"){
//         menu.style.transform = "translateX(-100vw)";
//         menu.style.visibility = "hidden";
//     };
// };


const menu = document.getElementById("Settings-Backgound");

function menu_open(){
    menu.style.opacity = "1";
    menu.style.visibility = "visible";
};

function menu_close(){
    menu.style.opacity = "0";
    menu.style.visibility = "hidden";
};

//Translate

const Main_Header = document.getElementById("main-header");
// const menu_text = document.getElementById("Menu-text");

// const translate_icon = document.getElementById("Translate-to-Ar");
// const translate_icon2 = document.getElementById("Translate-to-En");

const Header_Text = document.getElementById("Get-word");
const Header_Text1 = document.getElementById("Up-word");
const Header_Text2 = document.getElementById("Running-word");
const Header_Text3 = document.getElementById("Today-word");

// const Features_menu = document.getElementById("Features-aside");
// const Products_menu = document.getElementById("Products-aside");
// const About_menu = document.getElementById("About-aside");
// const Projects_menu = document.getElementById("Projects-aside");
// const aside = document.getElementById("menu-aside");


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
const TeamManager1_4 = document.getElementById("TM1-4"); 

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

const theme_text = document.getElementById("Theme-Text");
const dark_text = document.getElementById("dark-text");
const light_text = document.getElementById("light-text");
const dark_input = document.getElementById("dark");
const light_input = document.getElementById("light");

const showNavText = document.getElementById("Show-nav-text"); 

const BLurrNav = document.getElementById("Blur-N-Nav");

const BetaNavText_PC = document.getElementById("Nav-Pos-Text-PC");
const RightPC = document.getElementById("Nav-Right-PC");
const LeftPC = document.getElementById("Nav-Left-PC");

const Language_Text = document.getElementById("Language-text");
const English_text = document.getElementById("English-text");
const Arabic_text = document.getElementById("Arabic-text");

const copyright = document.getElementById("copyright");

const logout_button = document.getElementById("log-out");

const FAQ_TITLE = document.getElementById("FAQ-Title");
const FAQ1_Title = document.getElementById("FAQ1-Title");

const Product1_ul = document.getElementById("Product1-ul");
const Product2_ul = document.getElementById("Product2-ul");
const Product3_ul = document.getElementById("Product3-ul");

const TeamManager1_section = document.getElementById("Team-Manager1-Big");

function Translate(){

    document.body.style.zoom = "100%";

    logout_button.innerHTML = `تسجيل خروج <i class="fa-solid fa-right-from-bracket"></i>`;

    English_Input_settings.removeAttribute("checked");
    Arabic_Input_settings.setAttribute("checked","");
    window.localStorage.setItem("lang","arabic");
    // idk for now
    document.getElementById("Settings-Parent").style.direction = "rtl";
    Features_title.style.direction = "rtl";
    Products_Title.style.direction = "rtl";
    document.getElementsByClassName("style-txt")[0].style.direction = "rtl";
    //BREAK

    if (window.localStorage.getItem("curr") == null){
        EGP();
    } else if (window.localStorage.getItem("curr") == "usd"){
        USD();
    }else if (window.localStorage.getItem("curr") == "eur"){
        EUR();
    };


    document.title = "Marc&Sam لتطوير مواقع الويب";
    document.body.style.direction = "ltr";
    Main_Header.style.direction = "ltr";
    // menu_text.innerText = "القائمة";

    Header_Text.innerText = "أحصل علي موقعك";
    Header_Text1.innerText = "جاهز";
    Header_Text2.innerText = "";
    Header_Text3.innerText = "الان";

    // Features_menu.innerHTML = `<a href="#Features-area" onclick="menu_close()"><u class="underlines"><span>مميزاتنا</span></u></a></div>`;
    // Products_menu.innerHTML = `<a href="#Products-area" onclick="menu_close()"><u class="underlines"><span>منتجاتنا</span></u></a></div>`;
    // About_menu.innerHTML = `<a href="#about-us-area" onclick="menu_close()"><u class="underlines"><span>عنا</span></u></a></div>`;
    // Projects_menu.innerHTML = `<a href="#Projects-area" onclick="menu_close()"><u class="underlines"><span>مشاريعنا</span></u></a></div>`;

    theme_text.innerHTML = `<u>مظهر :</u>`;
    dark_text.innerHTML = `داكن <i class="fa-solid fa-moon"></i>` ;
    light_text.innerHTML = `فاتح <i class="fa-solid fa-sun"></i>` ;
    // dark_input.style.marginRight = "0px";
    // dark_input.style.marginLeft = "20px";
    // light_input.style.marginRight = "0px";
    // light_input.style.marginLeft = "20px";
    // theme_text.style.marginLeft = "10px";
    dark_input.style.marginLeft = "5px";
    light_input.style.marginLeft = "5px";
    dark_text.style.marginLeft = "15px";
    dark_text.style.marginRight = "0px";

    Language_Text.innerHTML = "<u>اللغة :</u>";
    English_text.innerText = "الانجليزية";
    Arabic_text.innerText = "العربية";
    Arabic_Input_settings.style.marginLeft = "5px";
    English_Input_settings.style.marginLeft = "5px";
    English_text.style.marginLeft = "15px";
    English_text.style.marginRight = "0px";

    showNavText.innerText = "إخفاء شريط التنقل";
    // showNavText.style.marginRight = "0px";
    // showNavText.style.marginLeft = "10px";
    

    BLurrNav.innerText = "شريط تنقل ذو خلفية شفافة ";
    // BLurrNav.style.marginRight = "0px";
    // BLurrNav.style.marginLeft = "10px";

    BetaNavText_PC.innerHTML =`<u> :مكان شريط التنقل</u>`;
    RightPC.innerText = "يمين";
    LeftPC.innerText = "يسار";
    RightPC.style.marginLeft = "15px";
    RightPC.style.marginRight = "0px";


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
    Product1_ul.style.direction = "rtl";
    Product1_title.innerText = "موقع سهل و بسيط"
    Products_Section.style.direction = "ltr";
    Product1_Code.innerText = "كود منظم";
    Product1_Res.innerText = "مثالي علي أي جعاز";
    Product1_UI.innerText = "وجهة مستخدم جيدة";
    Product1_Sections.innerText = "موقع منظم";
    // Product1_Price.innerText = "سعر إقتصادي(2500جنيه تقريبا)";
    Product1_Style.innerText = "أسلوب جيد";
    Product1_Hover.innerText = "انتقالات عند التمرير/النقر";
    Product1_Suitable.innerText = "مناسب لمواقع الأخبار والمقالات و المواقع الشخصية المتوسطة"
    Product1_Animations.innerText = "رسوم متحركة";

    Product2_Recommended.innerText = "أفضل اختيار لمعظم الناس";
    Product2_Recommended.style.transform = "translate(-25px,-30px)";
    function Responsive_Product2(){
        if ((window.innerWidth <= 400 && window.localStorage.getItem("lang") == "arabic") || ((window.innerWidth <= 655 && window.innerWidth > 550) && window.localStorage.getItem("lang") == "arabic")){
            Product2_Recommended.style.fontSize = "20px";
            Product2_Recommended.style.transform = "translate(13.8px,-30px)";
        }else if (window.localStorage.getItem("lang") == null){
            Product2_Recommended.style.fontSize = "30px";
            Product2_Recommended.style.transform = "translate(0px,-30px)";
        }else if (window.innerWidth > 345 && window.localStorage.getItem("lang") == "arabic"){
            Product2_Recommended.style.transform = "translate(-25px,-30px)";
            Product2_Recommended.style.fontSize = "30px";                        
        };
    };
    Responsive_Product2();
    window.addEventListener("resize",Responsive_Product2);
    Arabic_Input_settings.addEventListener("change", Responsive_Product2);
    English_Input_settings.addEventListener("change", Responsive_Product2);

    Product2_title.innerText = "موقع متوسط";
    Product2_ul.style.direction = "rtl";
    Product2_Res.innerText = "مثالي علي أي جعاز";
    Product2_Code.innerText = "كود منظم";
    Product2_UI.innerText = "وجهة مستخدم أفضل";
    Product2_Style.innerText = "أسلوب أفضل";
    Product2_Sections.innerText = "موقع منظم";
    Product2_Hover.innerText = "انتقالات عند التمرير/النقر";
    // Product2_Price.innerText = "سعر إقتصادي(5000جنيه تقريبا)";
    Product2_Suitable.innerText = "مناسب للمواقع الشخصية المتقدمة ومعظم المواقع الإلكترونية المتقدمة"
    Product2_Animations.innerText = "رسوم متحركة";

    Product3_title.innerText = "موقع معقد";
    Product3_ul.style.direction = "rtl";
    Product3_Res.innerText = "مثالي علي أي جعاز";
    Product3_Code.innerText = "كود منظم";
    Product3_UI.innerText = "أفضل واجهة مستخدم";
    Product3_Style.innerText = "أفضل أسلوب";
    Product3_Hover.innerText = "انتقالات عند التمرير/النقر";
    Product3_Sections.innerText = "موقع منظم";
    // Product3_Price.innerText = "سعر إقتصادي(10000جنيه تقريبا)";
    Product3_Suitable.innerText = "مناسب لأي نوع من أنواع المواقع";
    Product3_Animations.innerText = "رسوم متحركة معقدة";

    Buy_now.innerHTML = `<button><a href="https://forms.gle/Tcu6AbDnauN2vGXW9" target="_blank">أطلب الان</a></button></span>`

    AboutUs_Section.style.direction = "rtl";
    AboutUs_Section.style.paddingRight = "20px";
    
    function Responsive_About(){
         if (window.innerWidth <= 385 && window.localStorage.getItem("lang") == "arabic"){
            AboutUs_Section.style.paddingRight = "0px";
            OurVision_Title.style.marginRight = "30px";   
            TeamManagers_Title.style.marginRight = "30px";   
        }else if (window.innerWidth > 385 && window.localStorage.getItem("lang") == "arabic"){
            AboutUs_Section.style.paddingRight = "20px";            
         }else if (window.localStorage.getItem("lang") == null){
            AboutUs_Section.style.paddingRight = "0px";                        
         };
    };
    Responsive_About();
    window.addEventListener("resize", Responsive_About);
    Arabic_Input_settings.addEventListener("change", Responsive_About);
    English_Input_settings.addEventListener("change", Responsive_About);

    AboutUs_Title.innerText = "عنا";

    OurVision_Title.innerText = "رؤيتنا :";
    OurVision_text.innerText = "هدفنا الرئيسي هو تصميم وإنشاء موقع الويب الخاص بك سهل الاستخدام ومتجاوب على جميع الأجهزة في أسرع وقت ممكن بجودة عالية وسعر منخفض";

    TeamManagers_Title.innerText = "مديرين مشروعنا :";

    TeamManager1_Title.innerText = "مارك أكرم :";
    TeamManager1_1.innerText = "مطور واجهات المواقع الأمامية و مدير عام";
    TeamManager1_2.innerText = "سنة من الخبرة";
    TeamManager1_3.innerText = "(HTML ، CSS و JavaScript) أتقن جميع لغات برمجة واجات المواقع الأمامية";
    TeamManager1_4.innerText = "مطور و مصمم هذا الموقع";


    TeamManager2_Title.innerText = "صامويل مينا :";
    TeamManager2_1.innerText = "مطور واجهات المواقع الأمامية و مدير الدعايا";
    TeamManager2_2.innerText = "سنة من الخبرة";
    TeamManager2_3.innerText = "(HTML ، CSS و JavaScript) أتقن جميع لغات برمجة واجهات المواقع الأمامية";

    Contact_button.innerHTML = `<a href="https://api.whatsapp.com/send?phone=201229702684" target="_blank"><button>☎️ تواصل معنا</button></a>`;


    Projects_Title.innerText = "مشاريعنا";
    Project1_title.innerText = "قريباً";
    // Project1_Price.innerText = "التكلفة : 2000جنيه";

    Tech_Problem.innerHTML = `<a href="https://forms.gle/1cZ9QPxrRT1TmJ5v6" target="_blank">لديك مشكلة تقنية؟, اضغط <u class="underline-double">هنا</u></a>`;

    FAQ_TITLE.innerText = "الأسئلة الشائعة";
    FAQ1_Title.innerText = "لماذا من المهم أن يكون لديك موقع؟";

    footer_div.style.direction = "ltr";
    Crediting.innerHTML = `بعض الصور من <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2214393" target="_blank">Pixabay</a>`;
    Crediting.style.direction = "rtl";
    copyright.innerText = "© Marc&Sam للتطوير مواقع الويب - جميع الحقوق محفوظة";

}
const Theme_div = document.getElementById("Theme-div");

function Translate2(){

    document.body.style.zoom = "100%";


    logout_button.innerHTML = `Log Out <i class="fa-solid fa-right-from-bracket"></i>`;

    window.localStorage.removeItem("lang");
    //new
    document.getElementById("Settings-Parent").style.direction = "ltr";
    Features_title.style.direction = "ltr";
    Products_Title.style.direction = "ltr";
    document.getElementsByClassName("style-txt")[0].style.direction = "ltr";

    document.title = "Marc&Sam for web development";
    
    document.body.style.direction = "ltr";

    Header_Text.innerText = "Get Your Website";
    Header_Text1.innerText = "Up";
    Header_Text2.innerText = "and Running.";
    Header_Text3.innerText = "Today";

    if (window.localStorage.getItem("curr") == null){
        EGP();
    } else if (window.localStorage.getItem("curr") == "usd"){
        USD();
    }else if (window.localStorage.getItem("curr") == "eur"){
        EUR();
    };


    // Features_menu.innerHTML = `<a href="#Features-area" onclick="menu_close()"><u class="underlines"><span>Our Features</span></u></a></div>`;
    // Products_menu.innerHTML = `<a href="#Products-area" onclick="menu_close()"><u class="underlines"><span>Our Products</span></u></a></div>`;
    // About_menu.innerHTML = `<a href="#about-us-area" onclick="menu_close()"><u class="underlines"><span>About Us</span></u></a></div>`;
    // Projects_menu.innerHTML = `<a href="#Projects-area" onclick="menu_close()"><u class="underlines"><span>Our Projects</span></u></a></div>`;

    theme_text.innerHTML = `<u>Theme:</u>`;
    dark_text.innerHTML = `Dark <i class="fa-solid fa-moon"></i>` ;
    light_text.innerHTML = `Light <i class="fa-solid fa-sun"></i>` ;
    dark_input.style.marginRight = "5px";
    light_input.style.marginRight = "5px";
    dark_text.style.marginRight = "15px";
    dark_text.style.marginLeft = "0px";

    Language_Text.innerHTML = "<u>Language:</u>";
    English_text.innerText = "English";
    Arabic_text.innerText = "Arabic";
    Arabic_Input_settings.style.marginRight = "5px";
    English_Input_settings.style.marginRight = "5px";
    English_text.style.marginRight = "15px";
    English_text.style.marginLeft = "0px";


    showNavText.innerText = "Hide Navigation Bar";
    // showNavText.style.marginRight = "10px";
    // showNavText.style.marginLeft = "0px";

    BLurrNav.innerText = "Navigation Bar Blurry Background";
    // BLurrNav.style.marginRight = "10px";
    // BLurrNav.style.marginLeft = "0px";

    BetaNavText_PC.innerHTML =`<u>Navigation Bar Position:</u>`;
    RightPC.innerText = "Right";
    LeftPC.innerText = "Left";
    RightPC.style.marginRight = "15px";
    RightPC.style.marginLeft = "0px";

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
    Product1_ul.style.direction = "ltr";
    Product1_Code.innerText = "Organized Code";
    Product1_Res.innerText = "Responsive(Can Be opened on any device)";
    Product1_UI.innerText = "Good User Interface/User Experience";
    Product1_Sections.innerText = "Menu, Header and Footer";
    // Product1_Price.innerText = "Budget-Friendly Price(2500egp aprox.)";
    Product1_Style.innerText = "Good Style";
    Product1_Hover.innerText = "On-Hover/On-Click Transitions";
    Product1_Suitable.innerText = "Suitable For News,Articles and Simple Portfolio Websites."
    Product1_Animations.innerText = "Animations";
    
    Product2_Recommended.innerText = "Recommended";
    Product2_title.innerText = "Medium Website";
    Product2_ul.style.direction = "ltr";
    
    Product2_Res.innerText = "Responsive(Can Be opened on any device)";
    Product2_Code.innerText = "Organized Code";
    Product2_UI.innerText = "Better User Interface/User Experience";
    Product2_Style.innerText = "Good Style";
    Product2_Sections.innerText = "Menu, Header and Footer";
    Product2_Hover.innerText = "On-Hover/On-Click Transitions";
    Product2_Recommended.style.transform = "translate(0px,-30px)";
    // Product2_Price.innerText = "Budget-Friendly Price(5000egp aprox.)";
    Product2_Suitable.innerText = "Suitable For Advanced Portfolio And Most of Advanced Websites."
    Product2_Animations.innerText = "Animations";

    Product3_title.innerText = "Complex Website";
    Product3_ul.style.direction = "ltr";

    Product3_Res.innerText = "Responsive(Can Be opened on any device)";
    Product3_Code.innerText = "Organized Code";
    Product3_UI.innerText = "Best User Interface/User Experience";
    Product3_Style.innerText = "Best Style";
    Product3_Hover.innerText = "On-Hover/On-Click Transitions";
    Product3_Sections.innerText = "Menu, Header and Footer";
    // Product3_Price.innerText = "Budget-Friendly Price(10000egp aprox.)";
    Product3_Suitable.innerText = "Suitable For Any Kind of Advanced Website";
    Product3_Animations.innerText = "Complex Animations";

    Buy_now.innerHTML = `<button><a href="https://forms.gle/SknkiugWksCW61HZA" target="_blank">Order Now</a></button>`;


    AboutUs_Section.style.direction = "ltr";
    AboutUs_Section.style.paddingRight = "0px";

    AboutUs_Title.innerText = "About Us";

    OurVision_Title.innerText = "Our Vision:";
    OurVision_text.innerText = "Our Main Goal is to design and create your User-Friendly Website Responsive on all devices as fast as possible with high quality and low price!";

    TeamManagers_Title.innerText = "Our Team Managers:";

    TeamManager1_Title.innerText = "Marc Akram:";
    TeamManager1_1.innerText = "Front-end developer and Overall Manager.";
    TeamManager1_2.innerText = "1 year of Experience.";
    TeamManager1_3.innerText = "Mastered  all Front-end Programming Languages(HTML , CSS and JavaScript).";
    TeamManager1_4.innerText = "The designer and the developer of this website.";

    TeamManager2_Title.innerText = "Samuel Mina:";
    TeamManager2_1.innerText = "Front-end developer and Marketing Manager.";
    TeamManager2_2.innerText = "1 year of Experience.";
    TeamManager2_3.innerText = "Mastered  all Front-end Programming Languages(HTML , CSS and JavaScript).";

    Contact_button.innerHTML = `<a href="https://api.whatsapp.com/send?phone=201229702684" target="_blank"><button>☎️ Contact Us</button></a>`;


    Projects_Title.innerText = "Our Projects";
    Project1_title.innerText = "Coming Soon!";
    // Project1_Price.innerText = "Cost: 2000egp";

    FAQ_TITLE.innerText = "FAQs";
    FAQ1_Title.innerText = "Why is it important to have a website?";

    Tech_Problem.innerHTML = `<a href="https://forms.gle/oUSWyzmEgXoR3ND4A" target="_blank" >Have a technical Problem?, Press <u class="underline-double">Here</u></a>`;
    
    Crediting.innerHTML = `Some Images are by <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2214393" target="_blank">Pixabay</a>`;
    copyright.innerText = "© Marc&Sam For Web develepment - All Rights Reserved";
}

//Light-Dark Modes


const HTML = document.getElementById("MY-HTML");

const input = document.getElementById("dark");

const logo = document.getElementById("logo-container");

const Header_Text_2 = document.getElementById("header-text-bg");

const Features_Section = document.getElementById("Our-Features-Big");

const Products_SectionP = document.getElementById("Big_Shopping");

const Product1_BG = document.getElementById("Product1");
const Product2_BG = document.getElementById("Product2");
const Product3_BG = document.getElementById("Product3");

const Team_ManagersPhoto = document.getElementById("Team-Manager1-Photo");

const Projects_Section = document.getElementById("Our-Projects-Big");

const Project1_big = document.getElementById("Project1-Big");

const menu_bars = document.getElementById("menu-bars");

const FAQs_Section = document.getElementById("FAQ-Section");

const FAQ1_Div = document.getElementById("FAQ1-Div");

function ToDark(){
    document.body.style.zoom = "100%";

    window.localStorage.removeItem("mode");

    Header_Text_2.style.animation = "colors-moving alternate 1s 2s 1";


    HTML.style.backgroundColor = "black";
    HTML.style.colorScheme = "dark";
    logo.innerHTML = `<img src="11.gif" id="main-logo" alt="Sorry this animated logo isn't availble right now if you wish to see it without animation go to https://i.ibb.co/5k7f1S9/Marc-Sam-removebg-preview22.png">`;
    Header_Text_2.style.background = "linear-gradient( to right,#03fa6e 30%, #00ffc8 50% , #00eeff 70%)";
    Header_Text_2.style.backgroundClip = "text";
    Ez_nav.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    Features_title.style.color = "#03fa6e";
    Products_Title.style.color = "#03fa6e";
    Projects_Title.style.color = "white";
    Responsive_Section.style.backgroundColor = "rgb(32, 31, 31)";
    Features_Section.style.backgroundColor = "rgb(32 , 31, 31)";
    Products_SectionP.style.backgroundColor = "rgb(32 , 31, 31)";

    Products_SectionP.style.boxShadow = "none";
    Product1_title.style.color = "#03fa6e";
    Product1_BG.style.border = "black solid 5px";

    Product2_title.style.color = "#03fa6e";
    Product2_Recommended.style.color = "transparent";
    Product2_Recommended.style.background = "linear-gradient(to left bottom,#03fa6e , #00ffc8 , #00eeff)";
    Product2_Recommended.style.backgroundClip = "text";
    Product2_BG.style.border = "black solid 5px";


    Product3_title.style.color = "#03fa6e";
    Product3_BG.style.border = "black solid 5px";

    AboutUs_Section.style.backgroundColor = "rgb(32, 31, 31)";
    OurVision_Title.style.color = "#03fa6e";
    TeamManagers_Title.style.color  = "#03fa6e";
    TeamManager1_Title.style.color = "#00eeff";
    TeamManager2_Title.style.color = "#00eeff";

    Projects_Section.style.backgroundColor = "rgb(32, 31, 31)";
    Projects_Section.style.boxShadow = "none";
    Project1_big.style.backgroundColor = "black";
    Project1_title.style.color = "white";

    FAQs_Section.style.backgroundColor = "rgb(32, 31, 31)";
    FAQs_Section.style.boxShadow = "none";
    FAQ1_Div.style.backgroundColor = "black";

};

function ToLight(){
    document.body.style.zoom = "100%";

    dark_input.removeAttribute("checked");
    light_input.setAttribute("checked","");
    window.localStorage.setItem("mode","light");

    HTML.style.backgroundColor = "#F2F2F2";
    HTML.style.colorScheme = "light";
    
    logo.innerHTML = `<img src="Files/Light _mode_FR.gif" id="main-logo" alt="Sorry this animated logo isn't availble right now if you wish to see it without animation go to https://i.ibb.co/5k7f1S9/Marc-Sam-removebg-preview22.png">`;
    
    Header_Text_2.style.animation = "colors-moving1 alternate 1s 2s 1";
    Header_Text_2.style.background = "linear-gradient( to right,#000 30%, #009b8e 50%, #007a99 70%)";
    Header_Text_2.style.backgroundClip = "text";
    
    Ez_nav.style.backgroundColor = "rgba(20, 20, 20, 0.3)";
    
    Features_title.style.color = "teal";
    
    Products_Title.style.color = "teal";
    
    Projects_Title.style.color = "teal";
    
    
    Responsive_Section.style.backgroundColor = "#E6E6E6";
    Responsive_Section.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
    
    Features_Section.style.backgroundColor = "#E6E6E6";
    Features_Section.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
    
    Products_SectionP.style.backgroundColor = "#E6E6E6";
    Products_SectionP.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
    
    Product1_title.style.color = "teal";
    Product1_BG.style.border = "rgba(0, 0, 0, 0.1) solid 2px";
    
    Product2_title.style.color = "teal";
    Product2_Recommended.style.color = "teal";
    Product2_BG.style.border = "rgba(0, 0, 0, 0.1) solid 2px";

    Product3_title.style.color = "teal";
    Product3_BG.style.border = "rgba(0, 0, 0, 0.1) solid 2px";

    AboutUs_Section.style.backgroundColor = "#E6E6E6";
    AboutUs_Section.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
    OurVision_Title.style.color = "teal";
    TeamManagers_Title.style.color  = "#009b8e";
    TeamManager1_Title.style.color = "teal";
    TeamManager2_Title.style.color = "teal";

    Projects_Section.style.backgroundColor = "#E6E6E6";
    Projects_Section.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
    Project1_big.style.backgroundColor = "#F2F2F2";
    Project1_title.style.color = "teal";


    Crediting.style.color = "white";

    menu_bars.style.color = "white";

    FAQs_Section.style.backgroundColor = "#E6E6E6";
    FAQs_Section.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
    FAQ1_Div.style.backgroundColor = "#F2F2F2";
};

const Ez_nav = document.getElementById("Ez-N-Parent");

const Nav_Button_Toggler = document.getElementById("BlurNav");
const Nav_Button_Toggler_Label = document.getElementById("Blur-N-Nav");

const Nav_PosLeft_ButtonPC = document.getElementById("Left_PC");
const Nav_PosLeft_LabelPC = document.getElementById("Nav-Left-PC");

const Nav_PosRight_ButtonPC = document.getElementById("Right_PC");
const Nav_PosRight_LabelPC = document.getElementById("Nav-Right-PC");

const Nav_PosLeft_Button = document.getElementById("Left");
const Nav_PosLeft_Label = document.getElementById("Nav-Left");


const Nav_PosRight_Button = document.getElementById("Right");
const Nav_PosRight_Label = document.getElementById("Nav-Right");

function ToggleNav(){
    if (Ez_nav.style.display == "none"){
        Ez_nav.style.display = "flex";
        Nav_Button_Toggler.removeAttribute("disabled");
        Nav_Button_Toggler.style.cursor = "pointer";
        Nav_PosRight_ButtonPC.removeAttribute("disabled");
        Nav_PosLeft_ButtonPC.style.cursor = "pointer";
        Nav_PosLeft_ButtonPC.removeAttribute("disabled");
        Nav_PosRight_ButtonPC.style.cursor = "pointer";

        Nav_PosRight_Button.removeAttribute("disabled");
        Nav_PosLeft_Button.style.cursor = "pointer";
        Nav_PosLeft_Button.removeAttribute("disabled");
        Nav_PosRight_Button.style.cursor = "pointer";

        Nav_PosRight_LabelPC.style.color = "white";
        Nav_PosRight_LabelPC.style.cursor = "pointer";

        Nav_PosLeft_LabelPC.style.color = "white";
        Nav_PosLeft_LabelPC.style.cursor = "pointer";

        Nav_PosRight_Label.style.color = "white";
        Nav_PosRight_Label.style.cursor = "pointer";

        Nav_PosLeft_Label.style.color = "white";
        Nav_PosLeft_Label.style.cursor = "pointer";

        Nav_Button_Toggler_Label.style.color = "white";
        Nav_Button_Toggler_Label.style.cursor = "pointer";

    }else{
        Ez_nav.style.display = "none";
        Nav_Button_Toggler.setAttribute("disabled","");
        Nav_Button_Toggler.style.cursor = "not-allowed";
        Nav_PosLeft_ButtonPC.setAttribute("disabled","");
        Nav_PosLeft_ButtonPC.style.cursor = "not-allowed";
        Nav_PosRight_ButtonPC.setAttribute("disabled","");
        Nav_PosRight_ButtonPC.style.cursor = "not-allowed";

        Nav_PosLeft_Button.setAttribute("disabled","");
        Nav_PosLeft_Button.style.cursor = "not-allowed";
        Nav_PosRight_Button.setAttribute("disabled","");
        Nav_PosRight_Button.style.cursor = "not-allowed";

        Nav_PosRight_LabelPC.style.color = "#C0C0C0";
        Nav_PosRight_LabelPC.style.cursor = "not-allowed";

        Nav_PosLeft_LabelPC.style.color = "#C0C0C0";
        Nav_PosLeft_LabelPC.style.cursor = "not-allowed";

        
        Nav_PosRight_Label.style.color = "#C0C0C0";
        Nav_PosRight_Label.style.cursor = "not-allowed";

        Nav_PosLeft_Label.style.color = "#C0C0C0";
        Nav_PosLeft_Label.style.cursor = "not-allowed";

        Nav_Button_Toggler_Label.style.color = "#C0C0C0";
        Nav_Button_Toggler_Label.style.cursor = "not-allowed";

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

// function NavBarToggleLeftRight(){
//     if (Ez_nav.style.right == "5px" || Ez_nav.style.right == ""){
//         Ez_nav.style.right = "unset";
//         Ez_nav.style.left = "25px";
//     //     Ez_nav.style.rotate = "0deg";
//     //     Ez1.style.rotate = "0deg";
//     //     Ez2.style.rotate = "0deg";
//     //     Ez3.style.rotate = "0deg";
//     //     Ez4.style.rotate = "0deg";
//     //     Ez_nav.style.top = "45vh";
//     //     Ez_nav.style.padding = "20px";
//     }
//     else{
//         Ez_nav.style.right = "25px";
//         Ez_nav.style.left = "unset";
//         // Ez_nav.style.rotate = "0deg";
//         // Ez1.style.rotate = "0deg";
//         // Ez2.style.rotate = "0deg";
//         // Ez3.style.rotate = "0deg";
//         // Ez4.style.rotate = "0deg";
//         // Ez_nav.style.top = "45vh";
//         // Ez_nav.style.padding = "20px";
//     };
// };


function NavBarToggleLeftRight_PC(){
    if (Ez_nav.style.right == "25px"){
        Ez_nav.style.right = "unset";
        Ez_nav.style.left = "25px";
    //     Ez_nav.style.rotate = "0deg";
    //     Ez1.style.rotate = "0deg";
    //     Ez2.style.rotate = "0deg";
    //     Ez3.style.rotate = "0deg";
    //     Ez4.style.rotate = "0deg";
    //     Ez_nav.style.top = "45vh";
    //     Ez_nav.style.padding = "20px";
    }
    else{
        Ez_nav.style.right = "25px";
        Ez_nav.style.left = "unset";
        // Ez_nav.style.rotate = "0deg";
        // Ez1.style.rotate = "0deg";
        // Ez2.style.rotate = "0deg";
        // Ez3.style.rotate = "0deg";
        // Ez4.style.rotate = "0deg";
        // Ez_nav.style.top = "45vh";
        // Ez_nav.style.padding = "20px";
    };
};

const Social_Phones_div = document.getElementById("main-second-header");

function Social_Toggle(){
    if (Social_Phones_div.style.display == "none"){
        Social_Phones_div.style.display = "flex";
        Main_Header.style.background = "linear-gradient(to top left,#daaefc, #ca85ff, #b049ff 40%,#8F00FF 70%)";
        Main_Header.style.borderBottomLeftRadius = "0px";
        Main_Header.style.borderBottomRightRadius = "0px";
    } else {
        Social_Phones_div.style.display = "none";
        Main_Header.style.background = "linear-gradient(to left bottom,#daaefc, #ca85ff, #b049ff 40%,#8F00FF 70%)";
        Main_Header.style.borderBottomLeftRadius = "20px";
        Main_Header.style.borderBottomRightRadius = "20px";
    };
};

const Ez1 = document.getElementById("Ez-1");
const Ez2 = document.getElementById("Ez-2");
const Ez3 = document.getElementById("Ez-3");
const Ez4 = document.getElementById("Ez-4");
const Ez5 = document.getElementById("Ez-5");

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


//scroll animations

window.onscroll = () => {
    if (window.scrollY >= Features_Section.offsetTop - 300) {
        Features_Section.style.animation = "slidein 1s ease-in-out 1 alternate";
        Features_Section.style.animationFillMode = "forwards";
        document.body.style.zoom = "100%";
    };
    if (window.scrollY >= Products_SectionP.offsetTop - 300) {
        Products_SectionP.style.animation = "slidein1 1s ease-in-out 1 alternate";
        Products_SectionP.style.animationFillMode = "forwards";
        document.body.style.zoom = "100%";
    };
    if (window.scrollY >= AboutUs_Section.offsetTop - 300) {
        AboutUs_Section.style.animation = "slidein 1s ease-in-out 1 alternate";
        AboutUs_Section.style.animationFillMode = "forwards";
        document.body.style.zoom = "100%";
    };
    if (window.scrollY >= Projects_Section.offsetTop - 500) {
        Projects_Section.style.animation = "slidein1 1s ease-in-out 1 alternate";
        Projects_Section.style.animationFillMode = "forwards";
        document.body.style.zoom = "100%";
    };
    if (window.scrollY >= FAQs_Section.offsetTop - 500) {
        FAQs_Section.style.animation = "slidein1 1s ease-in-out 1 alternate";
        FAQs_Section.style.animationFillMode = "forwards";
        document.body.style.zoom = "100%";
    };
};

//nav bar classes

const test = document.getElementById("testSp");

const test2 = document.getElementById("testSp2");

const test3 = document.getElementById("testSp3");

const test4 = document.getElementById("testSp4");

const test5 = document.getElementById("testSp5");


window.addEventListener("scroll" , () => {
    if (window.scrollY >= Features_title.offsetTop - 200 && window.scrollY < test.offsetTop - 300){
        Ez1.firstElementChild.style.color = "#03fa6e";
        Ez2.firstElementChild.style.color = "white";
        Ez3.firstElementChild.style.color = "white";
        Ez4.firstElementChild.style.color = "white";
    }else{
        Ez1.firstElementChild.style.color = "white";        
    };
    if (window.scrollY >= Products_Title.offsetTop - 200 && window.scrollY < test2.offsetTop - 500){
        Ez1.firstElementChild.style.color = "white";
        Ez2.firstElementChild.style.color = "#03fa6e";
        Ez3.firstElementChild.style.color = "white";
        Ez4.firstElementChild.style.color = "white";
    }else{
        Ez2.firstElementChild.style.color = "white";        
    };
    if (window.scrollY >= test2.offsetTop  - 500 && window.scrollY < test3.offsetTop - 500){
        Ez1.firstElementChild.style.color = "white";
        Ez2.firstElementChild.style.color = "white";
        Ez3.firstElementChild.style.color = "#03fa6e";
        Ez4.firstElementChild.style.color = "white";
    }else{
        Ez3.firstElementChild.style.color = "white";
    };
    if (window.scrollY >= Projects_Title.offsetTop - 500 && window.scrollY < test4.offsetTop){
        Ez1.firstElementChild.style.color = "white";
        Ez2.firstElementChild.style.color = "white";
        Ez3.firstElementChild.style.color = "white";
        Ez4.firstElementChild.style.color = "#03fa6e";
    }else{
        Ez4.firstElementChild.style.color = "white";        
    };
    if (window.scrollY >= test4.offsetTop - 500 && window.scrollY < test5.offsetTop){
        Ez1.firstElementChild.style.color = "white";
        Ez2.firstElementChild.style.color = "white";
        Ez3.firstElementChild.style.color = "white";
        Ez4.firstElementChild.style.color = "white";
        Ez5.firstElementChild.style.color = "#03fa6e";
    }else{
        Ez5.firstElementChild.style.color = "white";        
    };
});


// checkes if this is the first time to login and do neseccary changes

const Login_div = document.getElementById("Login-div");
const main = document.getElementById("main");
const headerr = document.getElementById("header");
const footerr = document.getElementById("footerr");

const name_input = document.getElementById("username");

const English_login = document.getElementById("English1");
const Arabic_login = document.getElementById("Arabic1");

const Arabic_Input_settings = document.getElementById("Arabic");
const English_Input_settings = document.getElementById("English");

const Dark_Mode_Login = document.getElementById("darkz");
const Light_Mode_Login = document.getElementById("lightz");



function Loggedin(){
    Login_div.style.display = "none";
    Login_div.cssText = "display: none;"
    
    main.style.display = "block";
    headerr.style.display = "block";
    footerr.style.display = "flex";
    Ez_nav.style.display = "flex";
    
    window.localStorage.setItem("name", name_input.value);
}

if (window.localStorage.getItem("mode") == "light"){
    ToLight();
}else{
    ToDark()
};


if (window.localStorage.getItem("lang") == "arabic"){
    Translate();
} else {
    Translate2();
};


if (window.localStorage.getItem("name") != null){
    Login_div.style.display = "none";
    Login_div.cssText = "display: none;"
    
    main.style.display = "block";
    headerr.style.display = "block";
    footerr.style.display = "flex";
    Ez_nav.style.display = "flex";
};

function USD(){
    window.localStorage.setItem("curr","usd");
    if (window.localStorage.getItem("lang") == null){
        Product1_Price.innerText = "Budget-Friendly Price(50usd aprox.)";
        Product2_Price.innerText = "Budget-Friendly Price(100usd aprox.)";
        Product3_Price.innerText = "Budget-Friendly Price(200usd aprox.)";
    }else if (window.localStorage.getItem("lang") == "arabic"){
        Product1_Price.innerText = "سعر إقتصادي(50دولار تقريبا)";
        Product2_Price.innerText = "سعر إقتصادي(100دولار تقريبا)";
        Product3_Price.innerText = "سعر إقتصادي(200دولار تقريبا)";
    };
};

function EUR(){
    window.localStorage.setItem("curr","eur");
    if (window.localStorage.getItem("lang") == null){
        Product1_Price.innerText = "Budget-Friendly Price(45eur aprox.)";
        Product2_Price.innerText = "Budget-Friendly Price(90eur aprox.)";
        Product3_Price.innerText = "Budget-Friendly Price(180eur aprox.)";
    }else if (window.localStorage.getItem("lang") == "arabic"){
        Product1_Price.innerText = "سعر إقتصادي(45يورو تقريبا)";
        Product2_Price.innerText = "سعر إقتصادي(90يورو تقريبا)";
        Product3_Price.innerText = "سعر إقتصادي(180يورو تقريبا)";
    };
};


function EGP(){
    window.localStorage.removeItem("curr");
    if (window.localStorage.getItem("lang") == null && window.localStorage.getItem("curr") == null){
        Product1_Price.innerText = "Budget-Friendly Price(2500egp aprox.)";
        Product2_Price.innerText = "Budget-Friendly Price(5000egp aprox.)";
        Product3_Price.innerText = "Budget-Friendly Price(10000egp aprox.)";
    }else if (window.localStorage.getItem("lang") == "arabic" && window.localStorage.getItem("curr") == null){
        Product1_Price.innerText = "سعر إقتصادي(2500جنيه تقريبا)";
        Product2_Price.innerText = "سعر إقتصادي(5000جنيه تقريبا)";
        Product3_Price.innerText = "سعر إقتصادي(10000جنيه تقريبا)";
    };
};

document.getElementById("Coin").addEventListener("change", () => {
    var selectedValue = Coin.value;

    if (selectedValue === "EGP") {
        EGP();
    }else if (selectedValue === "USD"){
        USD();
    }else if (selectedValue === "EUR"){
        EUR();
    };
});

logout_button.addEventListener("click",() => {
    window.localStorage.clear();
    window.location.reload();
});


function CheckLang(){
    if (window.navigator.language.includes("ar") == true || localStorage.getItem("lang") == "arabic"){
        Translate();
        Arabic_login.setAttribute("checked","");
        English_login.removeAttribute("checked");
    }else if (window.navigator.language.includes("en") == true && localStorage.getItem("lang") == null){
        Translate2();
        Arabic_login.removeAttribute("checked");
        English_login.setAttribute("checked","");
    };
};

CheckLang();

const youtubeIframe = document.getElementById("iframe-youtube");
const IframeLoading = document.getElementById("loading-iframe");


document.addEventListener("DOMContentLoaded", () => {
    youtubeIframe.addEventListener("load", () => {
        IframeLoading.style.display = "none";
        youtubeIframe.style.display = "block";
    })
});