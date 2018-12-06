##Fal Sabzi

--------Folder Structure--------

1. android - Contains all the android files needed to run the app on a android device.
2. ios- Contains all the iOS files needed to run the app on a iOS device.
3. node_modules - Contains all the files needed to run the app.
4. src - Contains all the code writtten by me.
5. index.js - Starting Point of the App.

-------How to Run-----

1. Clone this Repo.
2. Navigate to the Cloned Folder using Terminal.
3. run the command "npm install" or "yarn add .".
4. then run the command "react-native run-android" to deploy the app on a android device.

-----Dependencies----

1. react-native-splash-screen: For Splash Screen.
2. react-native-swiper: For Swipeable Views.
3. react-native-vector-icons": For Icons.
4. react-navigation": For Navigation.


-----src_folder_structure-----

1. components - Contains React Components that are reused.
    * HorizontalListHomePage.js - The Component that renders the horizontal list in the Home Page
    * SideBar.js - The Component that renders the Drawer SideBar.
2. constants - Contains all the constants used in the App.
    * colors.js - Contains the primaryColor and statusBarColor.
    * sideBarItemsClosed.js - All the items that should be there in the sidebar when the Categories is closed i.e. When Categories isn't Pressed.
    * sideBarItemsOpened.js - All the items that should be there in the sidebar when the Categories Section is Open.
3. navigation - All the Different routers the App Uses.
    * DrawerRouter.js - The Drawer Navigation that is the Main Router.
4. screens - All the Screens the app renders.
    * AddAddress.js - The Screen to Add Address
    * AllProducts.js - The Screen that renders all the products of a particular category.
    * Ask.js - Screen that renders screen to ask to experts.
    * Cart.js - Screen that renders the Cart Page.
    * Contact.js - The Contact Us Page
    * Home.js - The Home Page with a Carousel and Various Product Categories.
    * OrderConfirmed.js - Screen that renders when Order is Placed.
    * OrderDetails.js - The Order Details Screen.
    * Orders.js - Contains all the orders of a user.
    * PaymentOptions.js - Screen through which user selects Payment Options.
    * PrivacyPolicy.js - The Privacy Policy Page.
    * ProductDetails.js - The Product Details Page.
    * Recipes.js - A Screen Accessed through SideBar.
    * SelectAddress.js - Screen to select Address when user proceeds to order something from cart.
    * Terms.js - The Terms and Conditons Page.
5. App.js - The Starting Point which calls the MainRouter.

----file_structure----

1. First part of the code contains all the imports required and constants declarations.
    - Lines Starting with "import"
2. Second part is the Making of React Component and exporting it.
    - export default class .... extends React.Component
3. The Constructor Part 
    - the various states are initialized here.
4. Various Custom Function that are used on the screen
5. the render function
    Contains what is to be rendered
6. the styles part
    - Contains All the styling of the various components in the screen.