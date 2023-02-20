import {Frame} from "@nativescript/core" // importing Frame module
import { getViewById } from "@nativescript/core/ui/core/view-base";

export function onTap()
{

  /* Page transition: an animation that occurs when you navigate
  from one page to another
  */

//decfining an object name navigationEntry

/* Navigation Entry objects may have the following properties
1. moduleName: the name of the module (page module) to be loaded
2. transition: specifies the navigation transition for both android and IOS

- transitionAndriod: navi transition for Android
- transitioniOS: navi transition for iOS

3. Animated: when true, navigate to the new page using animated transitions

4.clearHistory: when true, the navigate history is cleared

5.Context: typically used to pass data among pages

*/
var navigationEntry = {
  moduleName: ".info/info-page",
  transition: {
    name: "slideBottom"
  }

};

Frame.topmost().navigate("./info/info-page");
}

/* Built-In trans
curli

*/



}