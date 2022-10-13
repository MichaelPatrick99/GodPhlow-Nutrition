function WhyYouNeedaNutritionist(){
    //CREATING A NEW HEADING
    var NewHead1=document.createElement("h1");
    var main= document.getElementById("main");
    main.appendChild(NewHead1);

    var NewHead1Text=document.createTextNode("WHY YOU NEED A NUTRITIONIST");
    NewHead1.appendChild(NewHead1Text);

    //CREATING A NEW PARAGRAPH
    var NewPara1=document.createElement("p");
    main.appendChild(NewPara1);

    var NewText1=document.createTextNode("<b>Advice and meal plans<b>. When you’re a busy working adult, planning your meals to meet your nutritional requirements can be too much work. A nutritionist can handle this easily and probably plan a more nutritious meal than you can. You can also get advice on food and nutrition, instead of searching through possibly unreliable sources on the internet and endlessly questioning their integrity. <b>Adaptation</b> No battle plan survives the first contact, and the same goes for nutrition plans. However, a well-trained nutritionist will know exactly how and where to make adjustments to your eating plan in order to get you back on track. From recently-discovered food allergies to accidental bingeing, it's all par for the course to a nutritionist. <b>Help you stick to your goal</b> It can be hard to work through diet-related problems alone. Having a nutritionist means you have someone to work through your problems and relapses with as well as someone to push you towards achieving your nutrition goals. Apart from diet-related advice, nutritionists can also offer emotional support when you are struggling to maintain the diet.");
    NewPara1.appendChild(NewText1);
}