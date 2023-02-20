import { NativeScriptGlobalState } from "@nativescript/core/globals";
import {Dialogs, getViewId} from "@Nativescript/core"
import { getViewById } from "@nativescript/core/ui/core/view-base";

export function onSubmit (args)
{
  var button = args.object;
  var parent = button.parent;
  if (parent)
  {
    //accessing the TextView via the StackLayout
    var txtView = getViewById (parent,"msg");

    if (txtView)
    {
      let alertProperties =
      {

        title: "Sent",
        message: "Your message ' " + txtView.txt  + "' was sent",
        okbuttonText: "Good"

      };

      //alertProperties.message = "Your message ' " + txtView.txt  + "' was sent";
      Dialogs.alert("Your message" + txtView.text +"has been sent");
      //Dialogs.alert("Your message ' " + txtView.txt  + "' was sent")

      let confirmOptions =
      {
        title: "Double Checking",
        message: "Are you sure you want to submit?",
        okbuttonText: "yes",
        cancelbuttonText: "no",
        neutralButtonText: "Cancel"
      }
      Dialogs.confirm(confirmOptions).then(result=>{
        console.log(result);
      })
    }
  }
}