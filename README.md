# covid19

This Project has 2 pages 
1. Home Page which only contains Company's Logo
2. Dashboard Page which allows the user to search for a country to get the Covid19 status and details in this country.
According to number of deaths, a Message will be shown to the user to tell him if he should travel or not (The user should not travel if number of deathes > 1000 ) 
Try Inputs:
- Mali --> the user can travel to Mali as number of deaths is 512
- Austria --> the user should not travel to Austria as number of deaths is 10527

Technical Information:
- The used Technology is Angular 

- to run the Project Locally 
   1. install NodeJS and Angular 
   2. run npm Install in Project Terminal to install required packages 
   3. after installation - run ng serve - to run development server 
   4. open http://localhost:4200 in browser 

- Deployment Steps 
1. run the command 
ng build --prod --aot --base-href /covid19/

the deployment result files will be generated in dist folder which will be copied to your server 
the base href after server link is covid19
example:
https://your-server-link/covid19

for more information about Angular Environment and Deployment in read me file inside project folder 

   

