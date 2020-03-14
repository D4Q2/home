
   // A function to take us to the donate page
   function donatePage()
   {
     // Code to take us to the donate page
     location.href = "https://d4q2.github.io/donate";
   }

   // A function to take us to the host drive page
   function hostDrivePage()
   {
     // Code to take us to the donate page
     location.href = "https://d4q2.github.io/hostdrive";
   }

   // A function to take us to the donate animals page
   function donateAnimalsPage()
   {
     // Code to take us to the donate page
     location.href = "https://d4q2.github.io/donateanimals";
   }

   // A function to take us to the donate page
   function donateMoneyPage()
   {
     // Code to take us to the donate page
     location.href = "https://d4q2.github.io/donatemoney";
   }

   let menuBool = false;

   function openMenu()
   {
     menuBool = menuBool ? false : true;


     if (menuBool == true)
     {
       var menu = document.getElementById("menu");

       // Create a button (in this case it will be the donate button)
       var donateButton = document.createElement("BUTTON");

        // Change the innerHTML to a sensible set of text (in this case donate)
        donateButton.innerHTML = "Help Out";

        // Change the class to the class for menu buttons and the id to donateButton so we can access it 
        // easier and it can assume previously defined css values
        donateButton.setAttribute("class", "menuButton");
        donateButton.setAttribute("id", "donateButton");

        // Change the onclick value to what we want (in this case a function to take us  to the donate page)
        donateButton.onclick = donatePage;

        // Append donateButton to the menu <div>
        menu.appendChild(donateButton);

        // Move it into the perfect position
        donateButton.style.transform = "translateX(-10px)";
        
        // And also the same process for the host drive button
        var hostDriveButton = document.createElement("BUTTON");
        hostDriveButton.innerHTML = "Host Drive";
        hostDriveButton.setAttribute("class", "menuButton");
        hostDriveButton.setAttribute("id", "hostDriveButton");
        menu.appendChild(hostDriveButton);
        hostDriveButton.style.transform = "translateX(-20px)";
        hostDriveButton.onclick = hostDrivePage;
        
        // And also the same process for the donate animals button
        var donateAnimalsButton = document.createElement("BUTTON");
        donateAnimalsButton.innerHTML = "Donation Locations";
        donateAnimalsButton.setAttribute("class", "menuButton");
        donateAnimalsButton.setAttribute("id", "donateAnimalsButton");
        menu.appendChild(donateAnimalsButton);
        donateAnimalsButton.style.transform = "translateX(-30px)";
        donateAnimalsButton.onclick = donateAnimalsPage;
        
        // And also the same process for the donate money button
        var donateMoneyButton = document.createElement("BUTTON");
        donateMoneyButton.innerHTML = "Donate Money";
        donateMoneyButton.setAttribute("class", "menuButton");
        donateMoneyButton.setAttribute("id", "moneyButton");
        menu.appendChild(donateMoneyButton);
        donateMoneyButton.style.transform = "translateX(-40px)";
        donateMoneyButton.onclick = donateMoneyPage;
     }

     else
     {
       // Clear our menu div
       document.getElementById("menu").innerHTML = "";

       // Get variable for menu div and make variable for our new openMenu button
       var menu = document.getElementById("menu");
       var menuOpener = document.createElement("BUTTON");
 
       // Specify qualities for our openMenu button
       menuOpener.innerHTML = "Menu";
       menuOpener.setAttribute("class", "openMenu");
       menuOpener.setAttribute("id", "menuOpener");
       menuOpener.onclick = openMenu;

       // Append it to the menu div
       menu.appendChild(menuOpener);
     }
   }
