
   // A function to take us to the donate page
   function helpOutPage()
   {
     // Code to take us to the donate page
     location.href = "https://d4q2.github.io/helpout";
   }

   // A function to take us to the host drive page
   function hostDrivePage()
   {
     // Code to take us to the donate page
     location.href = "https://d4q2.github.io/hostdrive";
   }

   // A function to take us to the donate animals page
   function donationLocationsPage()
   {
     // Code to take us to the donate page
     location.href = "https://d4q2.github.io/donationlocations";
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
       var helpOutButton = document.createElement("BUTTON");

        // Change the innerHTML to a sensible set of text (in this case donate)
        helpOutButton.innerHTML = "Help Out";

        // Change the class to the class for menu buttons and the id to helpOutButton so we can access it 
        // easier and it can assume previously defined css values
        helpOutButton.setAttribute("class", "menuButton");
        helpOutButton.setAttribute("id", "helpOutButton");

        // Change the onclick value to what we want (in this case a function to take us  to the help out page)
        helpOutButton.onclick = helpOutPage;

        // Append helpOutButton to the menu <div>
        menu.appendChild(helpOutButton);

        // Move it into the perfect position
        helpOutButton.style.transform = "translateX(-10px)";
        
        // And also the same process for the host drive button
        var hostDriveButton = document.createElement("BUTTON");
        hostDriveButton.innerHTML = "Host Drive";
        hostDriveButton.setAttribute("class", "menuButton");
        hostDriveButton.setAttribute("id", "hostDriveButton");
        menu.appendChild(hostDriveButton);
        hostDriveButton.style.transform = "translateX(-20px)";
        hostDriveButton.onclick = hostDrivePage;
        
        // And also the same process for the donation locations button
        var donationLocationsButton = document.createElement("BUTTON");
        donationLocationsButton.innerHTML = "Donation Locations";
        donationLocationsButton.setAttribute("class", "menuButton");
        donationLocationsButton.setAttribute("id", "donationLocationsButton");
        menu.appendChild(donationLocationsButton);
        donationLocationsButton.style.transform = "translateX(-30px)";
        donationLocationsButton.onclick = donationLocationsPage;
        
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
